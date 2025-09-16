<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Password;
use Inertia\Testing\AssertableInertia as Assert;

uses(RefreshDatabase::class);

test('reset password link screen can be rendered', function (): void {
    $response = $this->get('/forgot-password');

    $response->assertStatus(200);
});

test('reset password link can be requested', function (): void {
    Notification::fake();

    $user = User::factory()->create();

    $this->post('/forgot-password', ['email' => $user->email]);

    Notification::assertSentTo($user, ResetPassword::class);
});

test('reset password screen can be rendered', function (): void {
    Notification::fake();

    $user = User::factory()->create();

    $this->post('/forgot-password', ['email' => $user->email]);

    Notification::assertSentTo($user, ResetPassword::class, function ($notification): true {
        $response = $this->get('/reset-password/' . $notification->token);

        $response->assertStatus(200);

        return true;
    });
});

test('password can be reset with valid token', function (): void {
    Notification::fake();

    $user = User::factory()->create();

    $this->post('/forgot-password', ['email' => $user->email]);

    Notification::assertSentTo($user, ResetPassword::class, function ($notification) use ($user): true {
        $response = $this->post('/reset-password', [
            'token' => $notification->token,
            'email' => $user->email,
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $response
            ->assertSessionHasNoErrors()
            ->assertRedirect(route('login'));

        return true;
    });
});

test('reset password page can be rendered', function (): void {
    $response = $this->get(route('password.reset', ['token' => 'fake-token']));

    $response->assertStatus(200);
    $response->assertInertia(
        fn(Assert $assert): Assert => $assert->component('auth/reset-password')
            ->has('token')
    );
});

test('reset password page includes email from request', function (): void {
    $email = 'test@example.com';

    $response = $this->get(route('password.reset', [
        'token' => 'fake-token',
        'email' => $email,
    ]));

    $response->assertInertia(
        fn(Assert $assert): Assert => $assert->component('auth/reset-password')
            ->where('email', $email)
            ->where('token', 'fake-token')
    );
});

test('password can be reset with valid token again', function (): void {
    Event::fake();

    $user = User::factory()->create();

    $token = Password::createToken($user);

    $response = $this->post(route('password.store'), [
        'token' => $token,
        'email' => $user->email,
        'password' => 'new-password',
        'password_confirmation' => 'new-password',
    ]);

    // The user should be redirected to login with a status message
    $response->assertRedirect(route('login'));
    $response->assertSessionHas('status');

    // The password should be updated
    $user->refresh();
    expect(Hash::check('new-password', $user->password))->toBeTrue();

    // The PasswordReset event should be dispatched
    Event::assertDispatched(PasswordReset::class, function ($event) use ($user): bool {
        return $event->user->id === $user->id;
    });
});

test('password reset fails with invalid token', function (): void {
    $user = User::factory()->create();

    $this->withoutExceptionHandling()
        ->expectException(Illuminate\Validation\ValidationException::class);

    $this->post(route('password.store'), [
        'token' => 'invalid-token',
        'email' => $user->email,
        'password' => 'new-password',
        'password_confirmation' => 'new-password',
    ]);
});

test('password reset requires valid email', function (): void {
    $response = $this->post(route('password.store'), [
        'token' => 'token',
        'email' => 'not-an-email',
        'password' => 'new-password',
        'password_confirmation' => 'new-password',
    ]);

    $response->assertSessionHasErrors('email');
});

test('password reset requires password confirmation', function (): void {
    $response = $this->post(route('password.store'), [
        'token' => 'token',
        'email' => 'test@example.com',
        'password' => 'new-password',
        'password_confirmation' => 'different-password',
    ]);

    $response->assertSessionHasErrors('password');
});

test('password reset fails with non-existent user', function (): void {
    $this->withoutExceptionHandling()
        ->expectException(Illuminate\Validation\ValidationException::class);

    $this->post(route('password.store'), [
        'token' => 'token',
        'email' => 'nonexistent@example.com',
        'password' => 'new-password',
        'password_confirmation' => 'new-password',
    ]);
});

test('password reset requires strong password', function (): void {
    $user = User::factory()->create();
    $token = Password::createToken($user);

    $response = $this->post(route('password.store'), [
        'token' => $token,
        'email' => $user->email,
        'password' => '123', // Too short
        'password_confirmation' => '123',
    ]);

    $response->assertSessionHasErrors('password');
});

test('throttled password reset attempts fail correctly', function (): void {
    // This test simulates the throttling behavior
    // First, create a lot of failed attempts to trigger throttling
    $user = User::factory()->create();

    // Mock the Password facade to return RESET_THROTTLED
    Password::shouldReceive('reset')
        ->once()
        ->andReturn(Password::RESET_THROTTLED);

    $this->withoutExceptionHandling()
        ->expectException(Illuminate\Validation\ValidationException::class);

    $this->post(route('password.store'), [
        'token' => 'token',
        'email' => $user->email,
        'password' => 'new-password',
        'password_confirmation' => 'new-password',
    ]);
});

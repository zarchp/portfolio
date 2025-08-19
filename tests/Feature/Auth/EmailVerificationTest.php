<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\URL;
use Inertia\Testing\AssertableInertia as Assert;

uses(RefreshDatabase::class);

test('email verification screen can be rendered', function (): void {
    $user = User::factory()->unverified()->create();

    $response = $this->actingAs($user)->get('/verify-email');

    $response->assertStatus(200);
});

test('email can be verified', function (): void {
    $user = User::factory()->unverified()->create();

    Event::fake();

    $verificationUrl = URL::temporarySignedRoute(
        'verification.verify',
        now()->addMinutes(60),
        ['id' => $user->id, 'hash' => sha1((string) $user->email)]
    );

    $response = $this->actingAs($user)->get($verificationUrl);

    Event::assertDispatched(Verified::class);
    expect($user->fresh()->hasVerifiedEmail())->toBeTrue();
    $response->assertRedirect(route('dashboard') . '?verified=1');
});

test('email is not verified with invalid hash', function (): void {
    $user = User::factory()->unverified()->create();

    $verificationUrl = URL::temporarySignedRoute(
        'verification.verify',
        now()->addMinutes(60),
        ['id' => $user->id, 'hash' => sha1('wrong-email')]
    );

    $this->actingAs($user)->get($verificationUrl);

    expect($user->fresh()->hasVerifiedEmail())->toBeFalse();
});

test('verified users are redirected to dashboard', function (): void {
    // Create a user with a verified email
    $user = User::factory()->create([
        'email_verified_at' => now(),
    ]);

    // Act as the user and visit the verification prompt page
    $response = $this->actingAs($user)
        ->get(route('verification.notice'));

    // Assert redirection to dashboard
    $response->assertRedirect(route('dashboard'));
});

test('unverified users see the verification notice', function (): void {
    // Create a user with an unverified email
    $user = User::factory()->create([
        'email_verified_at' => null,
    ]);

    // Act as the user and visit the verification prompt page
    $response = $this->actingAs($user)
        ->get(route('verification.notice'));

    // Assert the verification page is rendered with Inertia
    $response->assertInertia(
        fn(Assert $assert): Assert => $assert->component('auth/verify-email')
            ->has('status')
    );
});

test('verification notice includes status from session', function (): void {
    // Create a user with an unverified email
    $user = User::factory()->create([
        'email_verified_at' => null,
    ]);

    // Act as the user, flash a status message, and visit the verification prompt page
    $response = $this->actingAs($user)
        ->withSession(['status' => 'verification-link-sent'])
        ->get(route('verification.notice'));

    // Assert the verification page is rendered with the status
    $response->assertInertia(
        fn(Assert $assert): Assert => $assert->component('auth/verify-email')
            ->where('status', 'verification-link-sent')
    );
});

test('guests cannot access verification notice', function (): void {
    // Visit the verification prompt page without authentication
    $response = $this->get(route('verification.notice'));

    // Assert redirection to login
    $response->assertRedirect(route('login'));
});

test('unverified email can be verified', function (): void {
    // Create an unverified user
    $user = User::factory()->create([
        'email_verified_at' => null,
    ]);

    // We need to listen for the Verified event
    Event::fake();

    // Generate a valid verification URL
    $verificationUrl = URL::temporarySignedRoute(
        'verification.verify',
        now()->addMinutes(60),
        ['id' => $user->id, 'hash' => sha1((string) $user->email)]
    );

    // Act as the user and visit the verification URL
    $response = $this->actingAs($user)
        ->get($verificationUrl);

    // Check that the user was redirected to the dashboard with the verified parameter
    $response->assertRedirect(route('dashboard') . '?verified=1');

    // Reload the user from the database
    $user->refresh();

    // Assert that the email is now verified
    expect($user->hasVerifiedEmail())->toBeTrue();

    // Assert that the Verified event was dispatched
    Event::assertDispatched(Verified::class, function ($event) use ($user): bool {
        return $event->user->id === $user->id;
    });
});

test('email verification fulfillment updates the email_verified_at timestamp', function (): void {
    // Create an unverified user
    $user = User::factory()->create([
        'email_verified_at' => null,
    ]);

    // Make sure the user is unverified initially
    expect($user->email_verified_at)->toBeNull();

    // Generate a valid verification URL
    $verificationUrl = URL::temporarySignedRoute(
        'verification.verify',
        now()->addMinutes(60),
        ['id' => $user->id, 'hash' => sha1((string) $user->email)]
    );

    // Act as the user and visit the verification URL
    $this->actingAs($user)
        ->get($verificationUrl);

    // Reload the user from the database
    $user->refresh();

    // Assert that the email_verified_at timestamp was updated

    expect($user->email_verified_at)->not->toBeNull();
    expect($user->email_verified_at->timestamp)->toBeCloseToTimestamp(now()->timestamp); // within 10 seconds
});

test('already verified emails still redirect to dashboard with verified flag', function (): void {
    // Create a verified user
    $user = User::factory()->create([
        'email_verified_at' => now()->subDay(), // Already verified a day ago
    ]);

    // Generate a valid verification URL
    $verificationUrl = URL::temporarySignedRoute(
        'verification.verify',
        now()->addMinutes(60),
        ['id' => $user->id, 'hash' => sha1((string) $user->email)]
    );

    // Act as the user and visit the verification URL
    $response = $this->actingAs($user)
        ->get($verificationUrl);

    // Check that the user was redirected to the dashboard with the verified parameter
    $response->assertRedirect(route('dashboard') . '?verified=1');

    // Assert that the email verified timestamp didn't change
    $user->refresh();

    // should still be from a day ago
    expect($user->email_verified_at->timestamp)->toBeCloseToTimestamp(now()->subDay()->timestamp);
});

<?php

declare(strict_types=1);

use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\ValidationException;

uses(RefreshDatabase::class);

beforeEach(function (): void {
    // Clear any rate limiting before each test
    RateLimiter::clear('test@example.com|127.0.0.1');
});

test('login screen can be rendered', function (): void {
    $response = $this->get('/login');

    $response->assertStatus(200);
});

test('users can authenticate using the login screen', function (): void {
    $user = User::factory()->create();

    $response = $this->post('/login', [
        'email' => $user->email,
        'password' => 'password',
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect(route('dashboard', absolute: false));
});

test('users can not authenticate with invalid password', function (): void {
    $user = User::factory()->create();

    $this->post('/login', [
        'email' => $user->email,
        'password' => 'wrong-password',
    ]);

    $this->assertGuest();
});

test('users can logout', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post('/logout');

    $this->assertGuest();
    $response->assertRedirect('/');
});

test('ensureIsNotRateLimited allows request when under rate limit', function (): void {
    // Create the request
    $request = new LoginRequest;
    $request->merge([
        'email' => 'test@example.com',
    ]);

    // Set the IP for throttle key
    $request->server->set('REMOTE_ADDR', '127.0.0.1');

    $throttleKey = $request->throttleKey();

    // Make sure we're under the limit (5 attempts)
    RateLimiter::clear($throttleKey);
    RateLimiter::hit($throttleKey, 3); // 3 attempts (below threshold of 5)

    // This should not throw an exception
    $request->ensureIsNotRateLimited();

    // If we reach here without exception, the test passes
    expect(true)->toBeTrue();
});

test('ensureIsNotRateLimited throws exception when rate limit exceeded', function (): void {
    Event::fake();

    // Create the request
    $request = new LoginRequest;
    $request->merge([
        'email' => 'test@example.com',
    ]);

    // Set the IP for throttle key
    $request->server->set('REMOTE_ADDR', '127.0.0.1');

    $throttleKey = $request->throttleKey();

    // Set attempts to exactly the limit (5 attempts)
    RateLimiter::clear($throttleKey);
    for ($i = 0; $i < 5; $i++) {
        RateLimiter::hit($throttleKey);
    }

    // This should throw a ValidationException
    try {
        $request->ensureIsNotRateLimited();
        $this->fail('Expected ValidationException was not thrown');
    } catch (ValidationException $validationException) {
        // Assert the error message contains the expected text
        expect($validationException->errors())->toHaveKey('email');
        expect($validationException->errors()['email'][0])->toContain('Too many login attempts');

        // Ensure the message includes the number of seconds to wait
        expect($validationException->errors()['email'][0])
            ->toMatch('/Too many login attempts\. Please try again in \d+ seconds\./');
    }
});

test('ensureIsNotRateLimited dispatches Lockout event when rate limited', function (): void {
    Event::fake();

    // Create the request
    $request = new LoginRequest;
    $request->merge([
        'email' => 'test@example.com',
    ]);

    // Set the IP for throttle key
    $request->server->set('REMOTE_ADDR', '127.0.0.1');

    $throttleKey = $request->throttleKey();

    // Set attempts over the limit
    RateLimiter::clear($throttleKey);
    RateLimiter::clear($throttleKey);
    for ($i = 0; $i <= 5; $i++) {
        RateLimiter::hit($throttleKey);
    }

    // This will throw an exception, which we'll catch
    try {
        $request->ensureIsNotRateLimited();
    } catch (ValidationException) {
        // Expected exception, we can ignore it
    }

    // Verify the Lockout event was dispatched
    Event::assertDispatched(Lockout::class, function ($event) use ($request): bool {
        return $event->request === $request;
    });
});

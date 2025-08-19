<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Inertia\Testing\AssertableInertia as Assert;

uses(RefreshDatabase::class);

test('password can be updated', function (): void {
    $user = User::factory()->create();

    $response = $this
        ->actingAs($user)
        ->from('/settings/password')
        ->put('/settings/password', [
            'current_password' => 'password',
            'password' => 'new-password',
            'password_confirmation' => 'new-password',
        ]);

    $response
        ->assertSessionHasNoErrors()
        ->assertRedirect('/settings/password');

    expect(Hash::check('new-password', $user->refresh()->password))->toBeTrue();
});

test('correct password must be provided to update password', function (): void {
    $user = User::factory()->create();

    $response = $this
        ->actingAs($user)
        ->from('/settings/password')
        ->put('/settings/password', [
            'current_password' => 'wrong-password',
            'password' => 'new-password',
            'password_confirmation' => 'new-password',
        ]);

    $response
        ->assertSessionHasErrors('current_password')
        ->assertRedirect('/settings/password');
});

test('password settings page can be rendered', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)
        ->get('/settings/password');

    $response->assertStatus(200);
    $response->assertInertia(
        fn(Assert $assert): Assert => $assert->component('settings/password')
    );
});

test('user can update their password with valid current password', function (): void {
    $user = User::factory()->create([
        'password' => Hash::make('current-password'),
    ]);

    $response = $this->actingAs($user)
        ->from('/settings/password')
        ->put('/settings/password', [
            'current_password' => 'current-password',
            'password' => 'new-password123',
            'password_confirmation' => 'new-password123',
        ]);

    $response->assertSessionHasNoErrors();
    $response->assertRedirect('/settings/password');

    // Verify the password was actually updated
    $user->refresh();
    expect(Hash::check('new-password123', $user->password))->toBeTrue();
});

test('password update fails with incorrect current password', function (): void {
    $user = User::factory()->create([
        'password' => Hash::make('current-password'),
    ]);

    $response = $this->actingAs($user)
        ->from('/settings/password')
        ->put('/settings/password', [
            'current_password' => 'wrong-password',
            'password' => 'new-password123',
            'password_confirmation' => 'new-password123',
        ]);

    $response->assertSessionHasErrors('current_password');
    $response->assertRedirect('/settings/password');

    // Verify the password was NOT updated
    $user->refresh();
    expect(Hash::check('current-password', $user->password))->toBeTrue();
});

test('password update fails when password confirmation does not match', function (): void {
    $user = User::factory()->create([
        'password' => Hash::make('current-password'),
    ]);

    $response = $this->actingAs($user)
        ->from('/settings/password')
        ->put('/settings/password', [
            'current_password' => 'current-password',
            'password' => 'new-password123',
            'password_confirmation' => 'different-password',
        ]);

    $response->assertSessionHasErrors('password');
    $response->assertRedirect('/settings/password');

    // Verify the password was NOT updated
    $user->refresh();
    expect(Hash::check('current-password', $user->password))->toBeTrue();
});

test('password update requires password to meet strength requirements', function (): void {
    $user = User::factory()->create([
        'password' => Hash::make('current-password'),
    ]);

    $response = $this->actingAs($user)
        ->from('/settings/password')
        ->put('/settings/password', [
            'current_password' => 'current-password',
            'password' => '123', // Too short
            'password_confirmation' => '123',
        ]);

    $response->assertSessionHasErrors('password');
    $response->assertRedirect('/settings/password');

    // Verify the password was NOT updated
    $user->refresh();
    expect(Hash::check('current-password', $user->password))->toBeTrue();
});

test('password update requires all fields', function (): void {
    $user = User::factory()->create();

    // Test missing current password
    $response1 = $this->actingAs($user)
        ->from('/settings/password')
        ->put('/settings/password', [
            'password' => 'new-password123',
            'password_confirmation' => 'new-password123',
        ]);

    $response1->assertSessionHasErrors('current_password');

    // Test missing new password
    $response2 = $this->actingAs($user)
        ->from('/settings/password')
        ->put('/settings/password', [
            'current_password' => 'password',
            'password_confirmation' => 'new-password123',
        ]);

    $response2->assertSessionHasErrors('password');
});

test('guests cannot access password settings', function (): void {
    $response = $this->get('/settings/password');

    $response->assertRedirect('/login');

    $response2 = $this->put('/settings/password', [
        'current_password' => 'password',
        'password' => 'new-password',
        'password_confirmation' => 'new-password',
    ]);

    $response2->assertRedirect('/login');
});

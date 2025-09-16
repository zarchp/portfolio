<?php

declare(strict_types=1);

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('guest cannot access email verification notification', function (): void {
    $response = $this->post(route('verification.send'));

    $response->assertRedirect('/login');
});

test('user can send email verification notification', function (): void {
    $user = User::factory()->create(['email_verified_at' => null]);

    $response = $this->actingAs($user)->post(route('verification.send'));

    $response->assertRedirect();
    $response->assertSessionHas('status', 'verification-link-sent');
});

test('user is redirected to dashboard if email is already verified', function (): void {
    $user = User::factory()->create(['email_verified_at' => now()]);

    $response = $this->actingAs($user)->post(route('verification.send'));

    $response->assertRedirect(route('dashboard'));
});

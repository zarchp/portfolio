<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as BaseAuthenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification as NotificationFacade;

it('is a final authenticatable model and uses expected traits', function (): void {
    $ref = new ReflectionClass(User::class);

    expect($ref->isFinal())->toBeTrue()
        ->and(is_subclass_of(User::class, BaseAuthenticatable::class))->toBeTrue();

    $traits = class_uses(User::class);

    expect($traits)->toHaveKey(HasFactory::class)
        ->and($traits)->toHaveKey(Notifiable::class);
});

it('exposes expected fillable and hidden attributes', function (): void {
    $u = new User;

    expect($u->getFillable())->toEqual(['name', 'email', 'password'])
        ->and($u->getHidden())->toEqual(['password', 'remember_token']);
});

it('defines the expected casts', function (): void {
    $u = new User;
    $casts = $u->getCasts();

    // email_verified_at -> datetime, password -> hashed
    expect($casts)->toHaveKey('email_verified_at')
        ->and($casts['email_verified_at'])->toBe('datetime')
        ->and($casts)->toHaveKey('password')
        ->and($casts['password'])->toBe('hashed');
});

it('hashes the password when setting the attribute', function (): void {
    $u = new User;
    $u->password = 'plain-secret-123';

    expect(Hash::check('plain-secret-123', $u->password))->toBeTrue()
        ->and(mb_strlen($u->password))->toBeGreaterThan(30); // looks hashed
});

it('factory creates a persisted user with hashed password', function (): void {
    $user = User::factory()->create([
        'password' => 'FactoryPass!42',
    ]);

    expect($user->exists)->toBeTrue()
        ->and(Hash::check('FactoryPass!42', $user->password))->toBeTrue();

    $arr = $user->toArray();
    expect($arr)->not->toHaveKey('password')
        ->and($arr)->not->toHaveKey('remember_token');
});

it('can receive notifications via Notifiable', function (): void {
    NotificationFacade::fake();

    $user = new User;
    $notification = new class extends Notification
    {
        public function via(mixed $notifiable): array
        {
            return ['discord'];
        }
    };

    $user->notify($notification);

    NotificationFacade::assertSentTo($user, $notification::class);
});

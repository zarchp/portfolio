<?php

declare(strict_types=1);

use App\Models\Contact;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Notification as NotificationFacade;

/**
 * Minimal notification used to assert dispatching works.
 * We return a fake channel name so Notification::fake() records it
 * without hitting real transports.
 */
// phpcs:ignore
final class TestDiscordNotification extends Notification
{
    public function via(mixed $notifiable): array
    {
        return ['discord'];
    }
}

it('is a final eloquent model', function (): void {
    $ref = new ReflectionClass(Contact::class);

    expect($ref->isFinal())->toBeTrue()
        ->and(is_subclass_of(Contact::class, Model::class))->toBeTrue();
});

it('routes discord notifications to configured webhook', function (): void {
    Config::set('services.discord.contact_webhook', 'https://example.test/webhook');

    $contact = new Contact;

    expect($contact->routeNotificationForDiscord())->toBe('https://example.test/webhook');
});

it('returns null for discord route when webhook not configured', function (): void {
    Config::set('services.discord.contact_webhook', null);

    $contact = new Contact;

    expect($contact->routeNotificationForDiscord())->toBeNull();
});

it('can receive notifications via Notifiable', function (): void {
    NotificationFacade::fake();

    $contact = new Contact;

    $notification = new TestDiscordNotification;
    $contact->notify($notification);

    NotificationFacade::assertSentTo($contact, TestDiscordNotification::class);
});

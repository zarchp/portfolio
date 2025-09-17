<?php

declare(strict_types=1);

namespace App\Channels;

use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Http;

final class DiscordChannel
{
    public function send(object $notifiable, Notification $notification): void
    {
        $webhook = (string) method_exists($notifiable, 'routeNotificationForDiscord') !== ''
            ? $notifiable->routeNotificationForDiscord()
            : config('services.discord.contact_webhook');

        if (! $webhook) {
            return;
        }

        // @phpstan-ignore-next-line
        $payload = $notification->toDiscord($notifiable);

        Http::asJson()->post($webhook, $payload)->throw();
    }
}

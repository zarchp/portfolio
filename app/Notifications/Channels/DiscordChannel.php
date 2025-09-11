<?php

namespace App\Notifications\Channels;

use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Http;

class DiscordChannel
{
    public function send($notifiable, Notification $notification): void
    {
        $webhook = method_exists($notifiable, 'routeNotificationForDiscord')
            ? $notifiable->routeNotificationForDiscord()
            : config('services.discord.contact_webhook');

        if (! $webhook) return;

        $payload = $notification->toDiscord($notifiable);

        Http::asJson()->post($webhook, $payload)->throw();
    }
}

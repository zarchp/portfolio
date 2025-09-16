<?php

declare(strict_types=1);

use App\Channels\DiscordChannel;
use Illuminate\Http\Client\RequestException;
use Illuminate\Notifications\Notifiable;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Http;

// If your Pest bootstrap doesn't already bind TestCase to Unit tests, ensure:
// uses(Tests\TestCase::class)->in('Unit');

beforeEach(function (): void {
    // Reset HTTP fakes each test
    Http::preventStrayRequests();
});

/**
 * Helper notification that provides a Discord payload.
 */
/* final class FakeDiscordNotification extends Notification
{
    // ALWAYS WRITE IN ENGLISH COMMENT LINE AND IN ENGLISH CODE
    public function toDiscord(mixed $notifiable): array
    {
        return [
            'content' => 'Hello from test: ' . (method_exists($notifiable, 'getName') ? $notifiable->getName() : 'guest'),
        ];
    }
}

describe('DiscordChannel', function (): void {
    it('posts payload to the notifiable webhook', function (): void {
        $webhook = 'https://example.test/webhook/notifiable';
        $payload = ['content' => 'Hello from test: Anzar'];

        // Fake HTTP and assert the request body + URL
        Http::fake([
            $webhook => Http::response([], 204),
        ]);

        // Notifiable with custom route + helper getter
        $notifiable = new class {
            use Notifiable;

            public function routeNotificationForDiscord(): string
            {
                return 'https://example.test/webhook/notifiable';
            }

            public function getName(): string
            {
                return 'Anzar';
            }
        };

        (new DiscordChannel())->send($notifiable, new FakeDiscordNotification());

        Http::assertSent(function ($request) use ($webhook, $payload) {
            return (string) $request->url() === $webhook
                && $request->method() === 'POST'
                && $request->data() === $payload;
        });

        Http::assertSentCount(1);
    });

    it('falls back to config webhook when notifiable route is missing', function (): void {
        $webhook = 'https://example.test/webhook/config';
        Config::set('services.discord.contact_webhook', $webhook);

        Http::fake([
            $webhook => Http::response([], 200),
        ]);

        // Notifiable WITHOUT routeNotificationForDiscord
        $notifiable = new class {
            use Notifiable;

            public function getName(): string
            {
                return 'Anzar';
            }
        };

        (new DiscordChannel())->send($notifiable, new FakeDiscordNotification());

        Http::assertSent(fn($request) => (string) $request->url() === $webhook);
        Http::assertSentCount(1);
    });

    it('does nothing when neither notifiable route nor config webhook is set', function (): void {
        Config::set('services.discord.contact_webhook', null);

        Http::fake(); // no matching routes provided — will count all requests

        $notifiable = new class {
            use Notifiable;
        };

        (new DiscordChannel())->send($notifiable, new FakeDiscordNotification());

        Http::assertNothingSent();
    });

    it('throws on non-2xx responses (Http::throw)', function (): void {
        $webhook = 'https://example.test/webhook/error';
        Config::set('services.discord.contact_webhook', $webhook);

        Http::fake([
            $webhook => Http::response(['error' => 'bad'], 500),
        ]);

        $notifiable = new class {
            use Notifiable;
        };

        expect(fn() => (new DiscordChannel())->send($notifiable, new FakeDiscordNotification()))
            ->toThrow(RequestException::class);

        Http::assertSentCount(1);
    });
}); */

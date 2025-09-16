<?php

declare(strict_types=1);

use App\Channels\DiscordChannel;
use App\Models\Contact;
use App\Notifications\ContactReceivedNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Config;

it('is queueable and uses the Discord channel', function (): void {
    $contact = new Contact;
    $notification = new ContactReceivedNotification($contact);

    expect($notification)->toBeInstanceOf(ShouldQueue::class)
        ->and($notification->via(new stdClass))->toEqual([DiscordChannel::class]);
});

it('builds a discord payload with config and contact fields', function (): void {
    // Arrange config
    Config::set('services.discord.contact_username', 'AnzarBot');
    Config::set('services.discord.contact_avatar', 'https://example.test/avatar.png');

    // Arrange contact (no DB needed)
    $contact = new Contact;
    $contact->name = 'Anzar Syahid';
    $contact->email = 'anzar@example.com';
    $contact->message = 'Hello from Pest!';
    $contact->created_at = Carbon::parse('2025-01-02 12:34:56', 'UTC');

    $payload = (new ContactReceivedNotification($contact))->toDiscord($contact);

    // Assert top-level keys
    expect($payload)->toHaveKeys(['username', 'avatar_url', 'embeds'])
        ->and($payload['username'])->toBe('AnzarBot')
        ->and($payload['avatar_url'])->toBe('https://example.test/avatar.png');

    // Assert embed structure and values
    expect($payload['embeds'])->toBeArray()
        ->and($payload['embeds'][0])->toHaveKeys(['title', 'color', 'fields', 'timestamp'])
        ->and($payload['embeds'][0]['title'])->toBe('📩 New Contact Message')
        ->and($payload['embeds'][0]['color'])->toBe(0xF472B6)
        ->and($payload['embeds'][0]['timestamp'])->toBe('2025-01-02T12:34:56+00:00');

    $fields = $payload['embeds'][0]['fields'];
    expect($fields)->toBeArray()
        ->and($fields[0])->toEqual(['name' => 'Name', 'value' => 'Anzar Syahid', 'inline' => true])
        ->and($fields[1])->toEqual(['name' => 'Email', 'value' => 'anzar@example.com', 'inline' => true]);

    // Message is wrapped in code fences
    expect($fields[2]['name'])->toBe('Message');
    expect($fields[2]['value'])->toStartWith("```\n")
        ->and($fields[2]['value'])->toEndWith("\n```")
        ->and(str_contains((string) $fields[2]['value'], 'Hello from Pest!'))->toBeTrue();
});

it('truncates long messages to 1800 characters inside code fences', function (): void {
    // Build a very long message (2000 chars)
    $long = str_repeat('A', 2000);

    $contact = new Contact;
    $contact->name = 'Tester';
    $contact->email = 't@example.com';
    $contact->message = $long;
    $contact->created_at = Carbon::parse('2025-01-01 00:00:00', 'UTC');

    $payload = (new ContactReceivedNotification($contact))->toDiscord($contact);
    $value = $payload['embeds'][0]['fields'][2]['value'];

    // Must be wrapped in code fences
    expect($value)->toStartWith("```\n")
        ->and($value)->toEndWith("\n```");

    // Extract inner content between the fences
    $inner = mb_substr((string) $value, 4, -4); // remove "```\n" prefix and "\n```" suffix

    // Inner should be at most 1800 chars and should end with ellipsis if truncated
    expect(mb_strlen($inner))->toBeLessThanOrEqual(1800)
        ->and(mb_substr($inner, -1))->toBe('…');
});

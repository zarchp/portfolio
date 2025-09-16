<?php

declare(strict_types=1);

use App\Models\Contact;
use App\Notifications\ContactReceivedNotification;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Notification;

uses(RefreshDatabase::class);

it('stores a contact and dispatches notification', function (): void {
    Notification::fake();

    $server = [
        'REMOTE_ADDR' => '198.51.100.42',
        'HTTP_USER_AGENT' => 'PestTest/1.0',
    ];

    $payload = [
        'name' => 'Anzar Syahid',
        'email' => 'anzar@example.com',
        'message' => 'Hello from the test suite.',
    ];

    $response = $this->post(route('contact.store'), $payload, $server);

    $response->assertRedirect();
    $response->assertSessionHas('success', 'Thanks! Your message has been sent. I’ll get back to you soon.');

    $this->assertDatabaseHas('contacts', [
        'name' => 'Anzar Syahid',
        'email' => 'anzar@example.com',
        'message' => 'Hello from the test suite.',
        'ip' => '198.51.100.42',
        'user_agent' => 'PestTest/1.0',
    ]);

    $contact = Contact::query()->where('email', 'anzar@example.com')->firstOrFail();
    expect($contact->website)->toBeNull();

    Notification::assertSentTo($contact, ContactReceivedNotification::class);
})->group('http', 'contact');

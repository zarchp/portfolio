<?php

// ALWAYS WRITE IN ENGLISH COMMENT LINE AND IN ENGLISH CODE

declare(strict_types=1);

use App\Data\ContactData;
use Illuminate\Http\Request;
use Spatie\LaravelData\Attributes\Validation\Email;
use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Attributes\Validation\Nullable;
use Spatie\LaravelData\Attributes\Validation\Size;

it('constructs via from and exposes values', function (): void {
    $contactData = ContactData::from([
        'name' => 'Anzar Syahid',
        'email' => 'anzar@example.com',
        'message' => 'Hello',
        'ip' => '203.0.113.10',
        'user_agent' => 'Pest/1.0',
        'website' => null,
    ]);

    expect($contactData)
        ->toBeInstanceOf(ContactData::class)
        ->and($contactData->name)->toBe('Anzar Syahid')
        ->and($contactData->email)->toBe('anzar@example.com')
        ->and($contactData->message)->toBe('Hello')
        ->and($contactData->ip)->toBe('203.0.113.10')
        ->and($contactData->user_agent)->toBe('Pest/1.0')
        ->and($contactData->website)->toBeNull();
});

it('creates from request and maps ip and user agent', function (): void {
    $request = Request::create(
        uri: '/contact',
        method: 'POST',
        parameters: [
            'name' => 'A',
            'email' => 'a@b.c',
            'message' => 'M',
            'website' => null,
        ],
        cookies: [],
        files: [],
        server: [
            'REMOTE_ADDR' => '198.51.100.24',
            'HTTP_USER_AGENT' => 'Agent/2.0',
        ],
    );

    $contactData = ContactData::fromRequest($request);

    expect($contactData->name)->toBe('A')
        ->and($contactData->email)->toBe('a@b.c')
        ->and($contactData->message)->toBe('M')
        ->and($contactData->ip)->toBe('198.51.100.24')
        ->and($contactData->user_agent)->toBe('Agent/2.0')
        ->and($contactData->website)->toBeNull();
});

it('has the intended validation attributes on properties', function (): void {
    // ALWAYS WRITE IN ENGLISH COMMENT LINE
    // We verify attribute classes and their constructor arguments using reflection (no Spatie internals).
    $rc = new ReflectionClass(ContactData::class);

    $expectations = [
        'name' => [Max::class => [255]],
        'email' => [Email::class => null, Max::class => [255]],
        'message' => [Max::class => [5000]],
        'ip' => [Nullable::class => null],
        'user_agent' => [Nullable::class => null],
        'website' => [Nullable::class => null, Size::class => [0]],
    ];

    foreach ($expectations as $prop => $attrExpectations) {
        $propRef = $rc->getProperty($prop);

        // Map: FQCN => list of argument arrays (one per attribute occurrence)
        $found = [];
        foreach ($propRef->getAttributes() as $attr) {
            $found[$attr->getName()][] = $attr->getArguments();
        }

        foreach ($attrExpectations as $fqcn => $args) {
            expect($found)->toHaveKey($fqcn);

            if ($args === null) {
                // Attribute with no constructor args
                continue;
            }

            // Ensure at least one occurrence matches the expected arguments
            $argLists = $found[$fqcn];
            $matches = array_filter($argLists, fn(array $list): bool => $list === $args);
            expect($matches !== [])->toBeTrue();
        }
    }

    // Sanity: default website is null when omitted
    $data = new ContactData(
        name: 'X',
        email: 'x@y.z',
        message: 'm',
        ip: null,
        user_agent: null,
    );

    expect($data->website)->toBeNull();
});

it('class is final', function (): void {
    $rc = new ReflectionClass(ContactData::class);
    expect($rc->isFinal())->toBeTrue();
});

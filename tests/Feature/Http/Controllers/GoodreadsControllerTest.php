<?php

declare(strict_types=1);

use Illuminate\Http\Client\ConnectionException;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Http;
use Symfony\Component\HttpFoundation\Response;

beforeEach(function (): void {
    Config::set('services.goodreads.user_id', '12345');
});

/**
 * Helper: build a minimal Goodreads-like RSS document with N items.
 */
function makeGoodreadsRss(array $items): string
{
    // ALWAYS WRITE IN ENGLISH COMMENT LINE
    $xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel/></rss>');

    foreach ($items as $i) {
        $item = $xml->channel->addChild('item');
        $item->addChild('title', htmlspecialchars($i['title'] ?? 'Untitled'));
        $item->addChild('link', htmlspecialchars($i['link'] ?? 'https://example.test/book'));
        $item->addChild('author_name', htmlspecialchars($i['author_name'] ?? 'Unknown'));
        $item->addChild('book_description', htmlspecialchars($i['book_description'] ?? ''));
        $item->addChild('book_medium_image_url', htmlspecialchars($i['book_medium_image_url'] ?? 'https://example.test/img.jpg'));
        $item->addChild('user_rating', (string) ($i['user_rating'] ?? 0));
        $item->addChild('user_read_at', (string) ($i['user_read_at'] ?? ''));
        $item->addChild('user_date_added', (string) ($i['user_date_added'] ?? ''));
    }

    return (string) $xml->asXML();
}

it('returns the parsed feed (limited to 5 items) with ISO dates', function (): void {
    $url = 'https://www.goodreads.com/review/list_rss/12345?shelf=read&sort=date_read';

    // Fake 6 items; controller should return only 5
    $rss = makeGoodreadsRss([
        [
            'title' => 'Book A',
            'link' => 'https://gr.example/book-a',
            'author_name' => 'Author A',
            'book_description' => 'Desc A',
            'book_medium_image_url' => 'https://img.example/a.jpg',
            'user_rating' => 5,
            'user_read_at' => '2025-01-03',
            'user_date_added' => '2025-01-04',
        ],
        [
            'title' => 'Book B',
            'link' => 'https://gr.example/book-b',
            'author_name' => 'Author B',
            'book_description' => 'Desc B',
            'book_medium_image_url' => 'https://img.example/b.jpg',
            'user_rating' => 3,
            'user_read_at' => 'Jan 2, 2025',
            'user_date_added' => '2025-01-02',
        ],
        ['title' => 'C', 'user_read_at' => '2025-01-01', 'user_date_added' => '2025-01-01'],
        ['title' => 'D', 'user_read_at' => '2024-12-31', 'user_date_added' => '2024-12-31'],
        ['title' => 'E', 'user_read_at' => '2024-12-30', 'user_date_added' => '2024-12-30'],
        ['title' => 'F', 'user_read_at' => '2024-12-29', 'user_date_added' => '2024-12-29'],
    ]);

    Http::fake([
        $url => Http::response($rss, 200),
    ]);

    $res = $this->getJson(route('__goodreads.test'));

    $res->assertOk()
        ->assertJsonPath('profile_url', 'https://www.goodreads.com/user/show/12345')
        ->assertJsonCount(5, 'items')
        ->assertJsonPath('items.0.title', 'Book A')
        ->assertJsonPath('items.0.authorName', 'Author A')
        ->assertJsonPath('items.0.userRating', 5)
        ->assertJsonPath('items.0.userReadAt', '2025-01-03')
        ->assertJsonPath('items.0.userDateAdded', '2025-01-04')
        ->assertJsonPath('items.1.title', 'Book B')
        ->assertJsonPath('items.1.userReadAt', '2025-01-02');

    Http::assertSentCount(1);
})->group('http', 'goodreads');

it('caches the feed and avoids a second HTTP request', function (): void {
    $url = 'https://www.goodreads.com/review/list_rss/12345?shelf=read&sort=date_read';
    $rss = makeGoodreadsRss([
        ['title' => 'Cached Book A', 'user_read_at' => '2025-01-01', 'user_date_added' => '2025-01-01'],
        ['title' => 'Cached Book B', 'user_read_at' => '2025-01-05', 'user_date_added' => '2025-01-04'],
    ]);

    Http::fake([$url => Http::response($rss, 200)]);

    // First call hits Goodreads and caches
    $first = $this->getJson(route('__goodreads.test'))
        ->assertOk()
        ->assertJsonPath('items.0.title', 'Cached Book A');

    // Second call should be served from cache; still only one outbound HTTP call
    $second = $this->getJson(route('__goodreads.test'))->assertOk();
    Http::assertSentCount(1);
})->group('http', 'goodreads');

it('returns 400 when user id is not configured', function (): void {
    Config::set('services.goodreads.user_id', '');

    $this->getJson(route('__goodreads.test'))
        ->assertStatus(Response::HTTP_BAD_REQUEST)
        ->assertJsonPath('error', 'GOODREADS_USER_ID not configured');
})->group('http', 'goodreads');

it('returns 502 when Goodreads responds with non-2xx', function (): void {
    $url = 'https://www.goodreads.com/review/list_rss/12345?shelf=read&sort=date_read';

    Http::fake([$url => Http::response('nope', 503)]);

    $this->getJson(route('__goodreads.test'))
        ->assertStatus(Response::HTTP_BAD_GATEWAY)
        ->assertJsonPath('error', 'Goodreads responded with 503');
})->group('http', 'goodreads');

it('returns 502 on connection exception', function (): void {
    Http::fake(function (): void {
        throw new ConnectionException('Connection timed out during external API call.');
    });

    $this->getJson(route('__goodreads.test'))
        ->assertStatus(Response::HTTP_BAD_GATEWAY)
        ->assertJsonPath('error', 'Failed to reach Goodreads');
})->group('http', 'goodreads');

it('returns 502 when RSS is invalid XML', function (): void {
    $url = 'https://www.goodreads.com/review/list_rss/12345?shelf=read&sort=date_read';
    Http::fake([$url => Http::response('this is not xml', 200)]);

    $this->getJson(route('__goodreads.test'))
        ->assertStatus(Response::HTTP_BAD_GATEWAY)
        ->assertJsonPath('error', 'Invalid RSS received');
})->group('http', 'goodreads');

it(
    'normalizes rss date strings into ISO format in the JSON payload',
    function (string $inputReadAt, string $inputAdded, ?string $expectedReadAt, ?string $expectedAdded): void {
        $url = 'https://www.goodreads.com/review/list_rss/12345?shelf=read&sort=date_read';

        $rss = makeGoodreadsRss([
            [
                'title' => 'Any Title',
                'user_read_at' => $inputReadAt,
                'user_date_added' => $inputAdded,
            ],
            [
                'title' => 'Any Title',
                'user_read_at' => $inputReadAt,
                'user_date_added' => $inputAdded,
            ],
        ]);

        Http::fake([$url => Http::response($rss, 200)]);

        $this->getJson(route('__goodreads.test'))
            ->assertOk()
            ->assertJsonPath('items.0.userReadAt', $expectedReadAt)
            ->assertJsonPath('items.0.userDateAdded', $expectedAdded);
    }
)->with([
    // input read_at            input added             expected read_at  expected added
    'iso with time -> date' => ['2025-01-02 15:30',  '2025-01-03',     '2025-01-02',   '2025-01-03'],
    'short month name' => ['Jan 2, 2025',       'Jan 5, 2025',    '2025-01-02',   '2025-01-05'],
    'trimmed iso' => ['  2025-01-07  ',    ' 2025-01-08 ',   '2025-01-07',   '2025-01-08'],
    'blank -> null' => ['',                   '',               null,           null],
    'literal null -> null' => ['null',               'null',           null,           null],
    'invalid -> null' => ['not a date',         'nope',           null,           null],
]);

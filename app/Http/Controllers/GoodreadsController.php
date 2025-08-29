<?php

namespace App\Http\Controllers;

use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Symfony\Component\HttpFoundation\Response;

class GoodreadsController
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $userId = (string) config('services.goodreads.user_id');
        if ($userId === '') {
            return response()->json(['error' => 'GOODREADS_USER_ID not configured'], Response::HTTP_BAD_REQUEST);
        }

        $key = "goodreads:read:$userId:v1";
        $data = Cache::flexible($key, [3300, 3600], function () use ($userId) {
            $rssUrl = "https://www.goodreads.com/review/list_rss/{$userId}?shelf=read&sort=date_read";
            try {
                $resp = Http::timeout(10)->get($rssUrl);
            } catch (ConnectionException $e) {
                return ['error' => 'Failed to reach Goodreads'];
            }

            if (!$resp->ok()) {
                return ['error' => 'Goodreads responded with ' . $resp->status()];
            }

            $xml = @simplexml_load_string($resp->body());
            if ($xml === false) {
                return ['error' => 'Invalid RSS received'];
            }
            $xml = $this->simplexmlToArray($xml);

            // Goodreads RSS uses channel->item nodes
            $items = [];
            foreach ($xml['channel']['item'] as $index => $item) {
                if ($index === 5) {
                    break;
                }

                $title = (string) $item['title'];
                $link = (string) $item['link'];
                $authorName = (string) $item['author_name'];
                $description = (string) $item['book_description'];
                $image = (string) $item['book_large_image_url'];
                $userRating = (int) ($item['user_rating'] ?? 0);
                $userReadAt = (string) $item['user_read_at'];
                $userDatedded = (string) $item['user_date_added'];

                $items[] = [
                    'title' => $title,
                    'link' => $link,
                    'authorName' => $authorName,
                    'description' => $description,
                    'image' => $image,
                    'userRating' => $userRating,
                    'userReadAt' => $this->toIsoDate($userReadAt),
                    'userDatedded' => $this->toIsoDate($userDatedded),
                ];
            }

            return [
                'profile_url' => "https://www.goodreads.com/user/show/{$userId}",
                'items' => $items,
            ];
        });

        $status = isset($data['error']) ? Response::HTTP_BAD_GATEWAY : Response::HTTP_OK;

        return response()->json($data, $status);
    }

    private function toIsoDate(string $raw): ?string
    {
        $raw = trim($raw);
        if ($raw === '' || $raw === 'null') return null;
        // Handle common Goodreads formats (e.g., "Mon, 01 Jan 2024 00:00:00 -0700", "2024/01/01", etc.)
        try {
            $dt = new \DateTime($raw);
            return $dt->format('Y-m-d');
        } catch (\Throwable $e) {
            return null;
        }
    }

    function simplexmlToArray(\SimpleXMLElement $xml): array
    {
        $arr = [];

        foreach ($xml->children() as $key => $child) {
            $value = $child->count() ? $this->simplexmlToArray($child) : (string) $child;

            if (isset($arr[$key])) {
                // Already set: convert to array of values
                if (!is_array($arr[$key]) || !array_is_list($arr[$key])) {
                    $arr[$key] = [$arr[$key]];
                }
                $arr[$key][] = $value;
            } else {
                $arr[$key] = $value;
            }
        }

        foreach ($xml->attributes() as $attrName => $attrValue) {
            $arr['@attributes'][$attrName] = (string) $attrValue;
        }

        return $arr;
    }
}

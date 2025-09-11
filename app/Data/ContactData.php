<?php

declare(strict_types=1);

namespace App\Data;

use Illuminate\Http\Request;
use Spatie\LaravelData\Attributes\Validation\Email;
use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Attributes\Validation\Nullable;
use Spatie\LaravelData\Attributes\Validation\Size;
use Spatie\LaravelData\Data;

final class ContactData extends Data
{
    public function __construct(
        #[Max(255)]
        public string $name,

        #[Email, Max(255)]
        public string $email,

        #[Max(5000)]
        public string $message,

        #[Nullable]
        public ?string $ip,

        #[Nullable]
        public ?string $user_agent,

        #[Nullable, Size(0)]
        public ?string $website = null,
    ) {}

    public static function fromRequest(Request $request): self
    {
        return self::from([
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message,
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'website' => $request->website,
        ]);
    }
}

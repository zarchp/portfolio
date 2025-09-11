<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

final class Contact extends Model
{
    use Notifiable;

    public function routeNotificationForDiscord(): ?string
    {
        return config('services.discord.contact_webhook');
    }
}

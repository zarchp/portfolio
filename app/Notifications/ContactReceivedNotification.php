<?php

namespace App\Notifications;

use App\Models\Contact;
use App\Notifications\Channels\DiscordChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ContactReceivedNotification extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(public Contact $contact) {}

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return [DiscordChannel::class];
    }

    public function toDiscord(object $notifiable): array
    {
        return [
            'username'   => config('services.discord.contact_username'),
            'avatar_url' => config('services.discord.contact_avatar'),
            'embeds'     => [[
                'title'       => '📩 New Contact Message',
                'color'       => 0xF472B6,
                'fields'      => [
                    ['name' => 'Name', 'value' => $this->contact->name, 'inline' => true],
                    ['name' => 'Email', 'value' => $this->contact->email, 'inline' => true],
                    ['name' => 'Message', 'value' => "```\n" . mb_strimwidth($this->contact->message, 0, 1800, '…') . "\n```"],
                ],
                'timestamp'   => $this->contact->created_at->toIso8601String(),
            ]],
        ];
    }
}

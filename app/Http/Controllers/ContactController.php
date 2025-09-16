<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Data\ContactData;
use App\Models\Contact;
use App\Notifications\ContactReceivedNotification;
use Illuminate\Http\RedirectResponse;

final class ContactController
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(ContactData $contactData): RedirectResponse
    {
        $contact = Contact::query()->create($contactData->toArray());

        $contact->notify(new ContactReceivedNotification($contact));

        return back()->with('success', 'Thanks! Your message has been sent. I’ll get back to you soon.');
    }
}

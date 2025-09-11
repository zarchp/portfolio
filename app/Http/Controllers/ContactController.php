<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Data\ContactData;
use App\Models\Contact;
use App\Notifications\ContactReceivedNotification;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

final class ContactController
{
    /**
     * Display a listing of the resource.
     */
    public function index(): void
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): void
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ContactData $contactData): RedirectResponse
    {
        $contact = Contact::query()->create($contactData->toArray());

        $contact->notify(new ContactReceivedNotification($contact));

        return back()->with('success', 'Thanks! Your message has been sent. I’ll get back to you soon.');
    }

    /**
     * Display the specified resource.
     */
    public function show(): void
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(): void
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(): void
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(): void
    {
        //
    }
}

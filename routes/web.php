<?php

declare(strict_types=1);

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('me');
})->name('me');

Route::resource('contact', ContactController::class)
    ->only(['store'])
    ->middlewareFor('store', 'throttle:contact');

if (app()->environment('testing')) {
    require __DIR__ . '/testing.php';
}

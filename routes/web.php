<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('me');
})->name('me');

Route::get('/me2', function () {
    return Inertia::render('me2');
})->name('me2');

Route::middleware(['auth', 'verified'])->group(function (): void {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// require __DIR__ . '/settings.php';
// require __DIR__ . '/auth.php';

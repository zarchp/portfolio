<?php

declare(strict_types=1);

use App\Http\Controllers\GoodreadsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('goodreads/read', GoodreadsController::class);

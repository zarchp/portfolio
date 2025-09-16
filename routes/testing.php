<?php

declare(strict_types=1);

use App\Http\Controllers\GoodreadsController;
use Illuminate\Support\Facades\Route;

Route::get('__goodreads_test', GoodreadsController::class)->name('__goodreads.test');

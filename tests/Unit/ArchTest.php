<?php

declare(strict_types=1);

use Illuminate\Database\Eloquent\Factories\Factory;

arch()->preset()->php();
arch()->preset()->security();
arch()->preset()->laravel();

arch('controllers')
    ->expect('App\Http\Controllers')
    ->not->toBeUsed();

arch('avoid inheritance')
    ->expect(['App\Services', 'App\Actions'])
    ->toExtendNothing();

arch('avoid open for extension')
    ->expect('App')
    ->classes()
    ->toBeFinal()
    ->ignoring([
        //
    ]);

arch('avoid abstraction')
    ->expect('App')
    ->not->toBeAbstract()
    ->ignoring([
        'App\Contracts',
    ]);

arch('factories')
    ->expect('Database\Factories')
    ->toExtend(Factory::class)
    ->toHaveMethod('definition')
    ->toOnlyBeUsedIn([
        'App\Models',
    ]);

arch('models')
    ->expect('App\Models')
    ->toHaveMethod('casts')
    ->toOnlyBeUsedIn([
        'App\Actions',
        'App\Contracts',
        'App\Data',
        'App\Http',
        'App\Jobs',
        'App\Models',
        'App\Notifications',
        'App\Policies',
        'App\Providers',
        'App\Queries',
        'App\Services',
        'Database\Factories',
        'Database\Seeders',
    ]);

arch('actions')
    ->expect('App\Actions')
    ->toHaveMethod('handle');

/* arch('avoid mutation')
    ->expect('App')
    ->classes()
    ->toBeReadonly()
    ->ignoring([
        'App\Console\Commands',
        'App\Data',
        'App\Exceptions',
        'App\Http\Controllers',
        'App\Http\Middleware',
        'App\Http\Requests',
        'App\Http\Resources',
        'App\Jobs',
        'App\Models',
        'App\Providers',
        'App\Queries',
        'App\Services',
    ]); */

/* arch('avoid inheritance')
    ->expect('App')
    ->classes()
    ->toExtendNothing()
    ->ignoring([
        'App\Console\Commands',
        'App\Data',
        'App\Exceptions',
        'App\Http\Middleware',
        'App\Http\Requests',
        'App\Http\Resources',
        'App\Jobs',
        'App\Models',
        'App\Notifications',
        'App\Providers',
        'App\Services',
    ]); */

/* arch('annotations')
    ->expect('App')
    ->toHaveMethodsDocumented(); */

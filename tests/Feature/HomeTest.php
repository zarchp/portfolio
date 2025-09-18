<?php

declare(strict_types=1);

use Inertia\Testing\AssertableInertia as Assert;

describe('home page', function (): void {
    it('renders successfully', function (): void {
        $this->get('/')
            ->assertOk()
            ->assertInertia(fn(Assert $assert): Assert => $assert->component('home/index'));
    });
});

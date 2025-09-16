<?php

declare(strict_types=1);

it('runs successfully and writes sitemap to the public path', function (): void {
    $this->artisan('sitemap:generate')->assertSuccessful();
});

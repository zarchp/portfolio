<?php

declare(strict_types=1);

/*
|--------------------------------------------------------------------------
| Test Case
|--------------------------------------------------------------------------
|
| The closure you provide to your test functions is always bound to a specific PHPUnit test
| case class. By default, that class is "PHPUnit\Framework\TestCase". Of course, you may
| need to change it using the "pest()" function to bind a different classes or traits.
|
*/

pest()->extend(Tests\TestCase::class)
    ->use(Illuminate\Foundation\Testing\RefreshDatabase::class)
    ->in('Feature');

/*
|--------------------------------------------------------------------------
| Expectations
|--------------------------------------------------------------------------
|
| When you're writing tests, you often need to check that values meet certain conditions. The
| "expect()" function gives you access to a set of "expectations" methods that you can use
| to assert different things. Of course, you may extend the Expectation API at any time.
|
*/

expect()->extend('toBeOne', function () {
    return $this->toBe(1);
});

/*
|--------------------------------------------------------------------------
| Functions
|--------------------------------------------------------------------------
|
| While Pest is very powerful out-of-the-box, you may have some testing code specific to your
| project that you don't want to repeat in every file. Here you can also expose helpers as
| global functions to help you to reduce the number of lines of code in your test files.
|
*/

function something(): void
{
    // ..
}

/**
 * Extends the Expectation API to determine if a timestamp is close to another timestamp.
 *
 * This is useful for comparing timestamps in tests where exact matching may not be reliable
 * due to slight differences in the milliseconds when the timestamps were created.
 *
 * @param int $expected The expected timestamp to compare against
 * @param int $tolerance The maximum allowed difference in seconds between timestamps (default: 10)
 * @return $this
 *
 * Example usage:
 * expect($someTimestamp)->toBeCloseToTimestamp(now()->timestamp);
 */
expect()->extend('toBeCloseToTimestamp', function (int $expected, int $tolerance = 10): \Pest\Expectation {
    return expect(abs($this->value - $expected) <= $tolerance)->toBeTrue();
});

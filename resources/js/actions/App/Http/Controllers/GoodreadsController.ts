import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\GoodreadsController::__invoke
 * @see app/Http/Controllers/GoodreadsController.php:21
 * @route '/api/goodreads/read'
 */
const GoodreadsController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GoodreadsController.url(options),
    method: 'get',
})

GoodreadsController.definition = {
    methods: ["get","head"],
    url: '/api/goodreads/read',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GoodreadsController::__invoke
 * @see app/Http/Controllers/GoodreadsController.php:21
 * @route '/api/goodreads/read'
 */
GoodreadsController.url = (options?: RouteQueryOptions) => {
    return GoodreadsController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GoodreadsController::__invoke
 * @see app/Http/Controllers/GoodreadsController.php:21
 * @route '/api/goodreads/read'
 */
GoodreadsController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GoodreadsController.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GoodreadsController::__invoke
 * @see app/Http/Controllers/GoodreadsController.php:21
 * @route '/api/goodreads/read'
 */
GoodreadsController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: GoodreadsController.url(options),
    method: 'head',
})
export default GoodreadsController
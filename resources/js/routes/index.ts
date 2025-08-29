import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../wayfinder'
/**
 * @see routes/web.php:8
 * @route '/'
 */
export const me = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: me.url(options),
    method: 'get',
})

me.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:8
 * @route '/'
 */
me.url = (options?: RouteQueryOptions) => {
    return me.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:8
 * @route '/'
 */
me.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: me.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:8
 * @route '/'
 */
me.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: me.url(options),
    method: 'head',
})

/**
 * @see routes/web.php:12
 * @route '/me2'
 */
export const me2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: me2.url(options),
    method: 'get',
})

me2.definition = {
    methods: ["get","head"],
    url: '/me2',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:12
 * @route '/me2'
 */
me2.url = (options?: RouteQueryOptions) => {
    return me2.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:12
 * @route '/me2'
 */
me2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: me2.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:12
 * @route '/me2'
 */
me2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: me2.url(options),
    method: 'head',
})

/**
 * @see routes/web.php:17
 * @route '/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:17
 * @route '/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:17
 * @route '/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:17
 * @route '/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})
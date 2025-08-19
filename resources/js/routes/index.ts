import { queryParams, type QueryParams } from './../wayfinder'
/**
 * @see routes/web.php:8
 * @route '/'
 */
export const me = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: me.url(options),
    method: 'get',
})

me.definition = {
    methods: ['get','head'],
    url: '/',
}

/**
 * @see routes/web.php:8
 * @route '/'
 */
me.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return me.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:8
 * @route '/'
 */
me.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: me.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:8
 * @route '/'
 */
me.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: me.url(options),
    method: 'head',
})

/**
 * @see routes/web.php:12
 * @route '/me2'
 */
export const me2 = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: me2.url(options),
    method: 'get',
})

me2.definition = {
    methods: ['get','head'],
    url: '/me2',
}

/**
 * @see routes/web.php:12
 * @route '/me2'
 */
me2.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return me2.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:12
 * @route '/me2'
 */
me2.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: me2.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:12
 * @route '/me2'
 */
me2.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: me2.url(options),
    method: 'head',
})

/**
 * @see routes/web.php:17
 * @route '/dashboard'
 */
export const dashboard = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ['get','head'],
    url: '/dashboard',
}

/**
 * @see routes/web.php:17
 * @route '/dashboard'
 */
dashboard.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return dashboard.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:17
 * @route '/dashboard'
 */
dashboard.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:17
 * @route '/dashboard'
 */
dashboard.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: dashboard.url(options),
    method: 'head',
})
import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOMServer from 'react-dom/server';
import { type RouteName, route } from 'ziggy-js';

const pages = import.meta.glob('./pages/**/*.tsx', { eager: true });

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer((page) =>
  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => (title ? title : appName),
    resolve: (name) => {
      const key = `./pages/${name}.tsx`;
      const mod = pages[key];
      if (!mod) {
        throw new Error(`[SSR] Page not found: ${key}`);
      }
      return mod as any;
    },
    setup: ({ App, props }) => {
      const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 15 * 60 * 1000, // 15m
            gcTime: 60 * 60 * 1000, // 1h
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      });

      /* eslint-disable */
      // @ts-expect-error
      global.route<RouteName> = (name, params, absolute) =>
        route(name, params as any, absolute, {
          // @ts-expect-error
          ...page.props.ziggy,
          // @ts-expect-error
          location: new URL(page.props.ziggy.location),
        });
      /* eslint-enable */

      return (
        <QueryClientProvider client={queryClient}>
          <App {...props} />
        </QueryClientProvider>
      );
    },
  }),
);

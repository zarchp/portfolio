export const SITE = {
  title: 'Anzar Syahid - Full Stack Developer Portfolio',
  description:
    'Anzar Syahid is an experienced full stack web developer specializing in Laravel, React, and modern web apps. Explore his portfolio of projects and achievements.',
  name: 'Anzar Syahid Portfolio',
  author: 'Anzar Syahid',
  handle: '@ZarChp',
  domain: 'anzar.dev',
  baseUrl: 'https://anzar.dev',
  defaultOgImage: '/images/og-preview.jpg',
  locale: 'en_US',
} as const;

export const absolute = (path: string) =>
  /^https?:\/\//.test(path) ? path : `${SITE.baseUrl}${path}`;

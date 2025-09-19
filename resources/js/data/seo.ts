import { SITE, absolute } from './site';

export type PageMetaInput = {
  path: string;
  title?: string;
  description?: string;
  image?: string;
  updatedTimeISO?: string;
};

export function buildPageMeta(i: PageMetaInput) {
  const title = i.title ?? SITE.title;
  const description = i.description ?? SITE.description;
  const url = absolute(i.path);
  const image = absolute(i.image ?? SITE.defaultOgImage);

  return {
    title: title,
    description: description,
    canonical: url,
    og: {
      type: 'website',
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      title: title,
      description: description,
      image,
      imageAlt: 'Portfolio preview',
      imageWidth: 1200,
      imageHeight: 630,
      imageType: 'image/jpeg',
      ...(i.updatedTimeISO ? { updatedTime: i.updatedTimeISO } : {}),
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: title,
      description: description,
      image,
      site: SITE.handle,
      creator: SITE.handle,
      domain: SITE.domain,
    },
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE.author,
        url,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE.baseUrl}/search?q={query}`,
          'query-input': 'required name=query',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: SITE.author,
        url: SITE.baseUrl,
        jobTitle: 'Full Stack Developer',
        sameAs: [
          'https://github.com/zarchp',
          'https://www.linkedin.com/in/anzar-syahid',
          'https://x.com/ZarChp',
        ],
      },
    ],
  };
}

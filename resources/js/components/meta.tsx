import { Head } from '@inertiajs/react';

type MetaProps = {
  title?: string;
  description?: string;
  canonical?: string;
  robots?: string;
  og?: {
    type?: string;
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    siteName?: string;
    locale?: string;
    updatedTime?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    imageType?: string;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    title?: string;
    description?: string;
    image?: string;
    site?: string;
    creator?: string;
    domain?: string;
  };
  jsonLd?: object | object[];
};

export default function Meta({
  title,
  description,
  canonical,
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  og = {},
  twitter = {},
  jsonLd,
}: MetaProps) {
  return (
    <Head title={title ?? undefined}>
      {/* Description */}
      {description && (
        <meta
          head-key="description"
          name="description"
          content={description}
        />
      )}

      {/* Canonical */}
      {canonical && (
        <link
          head-key="canonical"
          rel="canonical"
          href={canonical}
        />
      )}

      {/* Robots */}
      <meta
        head-key="robots"
        name="robots"
        content={robots}
      />

      {/* Open Graph */}
      {og.type && (
        <meta
          head-key="og:type"
          property="og:type"
          content={og.type}
        />
      )}
      {og.url && (
        <meta
          head-key="og:url"
          property="og:url"
          content={og.url}
        />
      )}
      {og.siteName && (
        <meta
          head-key="og:site_name"
          property="og:site_name"
          content={og.siteName}
        />
      )}
      {(og.title ?? title) && (
        <meta
          head-key="og:title"
          property="og:title"
          content={og.title ?? title!}
        />
      )}
      {(og.description ?? description) && (
        <meta
          head-key="og:description"
          property="og:description"
          content={og.description ?? description!}
        />
      )}
      {og.locale && (
        <meta
          head-key="og:locale"
          property="og:locale"
          content={og.locale}
        />
      )}

      {og.image && (
        <meta
          head-key="og:image"
          property="og:image"
          content={og.image}
        />
      )}
      {og.image && (
        <meta
          head-key="og:image:secure_url"
          property="og:image:secure_url"
          content={og.image}
        />
      )}
      {og.imageAlt && (
        <meta
          head-key="og:image:alt"
          property="og:image:alt"
          content={og.imageAlt}
        />
      )}
      {og.imageWidth && (
        <meta
          head-key="og:image:width"
          property="og:image:width"
          content={String(og.imageWidth)}
        />
      )}
      {og.imageHeight && (
        <meta
          head-key="og:image:height"
          property="og:image:height"
          content={String(og.imageHeight)}
        />
      )}
      {og.imageType && (
        <meta
          head-key="og:image:type"
          property="og:image:type"
          content={og.imageType}
        />
      )}

      {/* Twitter */}
      <meta
        head-key="twitter:card"
        name="twitter:card"
        content={twitter.card ?? 'summary_large_image'}
      />
      {(twitter.title ?? title) && (
        <meta
          head-key="twitter:title"
          name="twitter:title"
          content={twitter.title ?? title!}
        />
      )}
      {(twitter.description ?? description) && (
        <meta
          head-key="twitter:description"
          name="twitter:description"
          content={twitter.description ?? description!}
        />
      )}
      {twitter.image && (
        <meta
          head-key="twitter:image"
          name="twitter:image"
          content={twitter.image}
        />
      )}
      {twitter.site && (
        <meta
          head-key="twitter:site"
          name="twitter:site"
          content={twitter.site}
        />
      )}
      {twitter.creator && (
        <meta
          head-key="twitter:creator"
          name="twitter:creator"
          content={twitter.creator}
        />
      )}
      {twitter.domain && (
        <meta
          head-key="twitter:domain"
          name="twitter:domain"
          content={twitter.domain}
        />
      )}

      {/* JSON-LD (allow single or array) */}
      {jsonLd && (
        <script
          head-key="jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd, null, 0),
          }}
        />
      )}
    </Head>
  );
}

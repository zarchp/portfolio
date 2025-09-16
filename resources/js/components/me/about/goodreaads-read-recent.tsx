import { useQuery } from '@tanstack/react-query';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../ui/tooltip';

type GoodreadsItem = {
  title: string;
  link: string;
  authorName: string;
  description: string;
  image: string;
  userRating: number;
  userReadAt: string | null;
  userDateAdded: string | null;
};

type GoodreadsResponse = {
  profile_url: string;
  items: GoodreadsItem[];
  error?: string;
};

type Props = {
  className?: string;
  heading?: string;
  description?: string;
};

export default function GoodreadsReadRecent({ className }: Props) {
  const { data, isLoading, isError } = useQuery<GoodreadsResponse>({
    queryKey: ['goodreads', 'read', 'recent'],
    queryFn: async () => {
      const res = await fetch('/api/goodreads/read', {
        headers: { Accept: 'application/json' },
      });
      return (await res.json()) as GoodreadsResponse;
    },
    staleTime: 1000 * 60 * 15,
  });

  const profileUrl = data?.profile_url ?? '#';

  return (
    <section
      className={['flex flex-col gap-3', className].filter(Boolean).join(' ')}
    >
      <div className="text-sm text-secondary-foreground">
        I enjoy winding down with a good book. Here are some of my recent reads
        :
      </div>

      {isLoading && (
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-4 gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-xl border border-border/50 p-4"
              >
                <div className="aspect-[3/4] w-full animate-pulse rounded-lg bg-muted/40" />
              </div>
            ))}
          </div>
          <div className="h-4 w-3/5 animate-pulse rounded bg-muted/40"></div>
        </div>
      )}

      {isError && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm">
          Failed to load Goodreads data. Try again later.
        </div>
      )}

      {!isLoading && !isError && data?.items?.length ? (
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-5 gap-2">
            {data.items.map((b) => (
              <div
                key={b.link}
                className="group flex flex-col rounded border border-border"
              >
                <a
                  href={b.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block"
                  data-umami-event="about-goodreads-book-link"
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <img
                        src={b.image || '/images/book-placeholder.png'}
                        alt={b.title}
                        className="w-full rounded object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </TooltipTrigger>
                    <TooltipContent>{b.title}</TooltipContent>
                  </Tooltip>
                </a>
              </div>
            ))}
          </div>
          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-brand underline-offset-2 hover:underline"
            data-umami-event="about-goodreads-profile-link"
          >
            View Goodreads Profile
          </a>
        </div>
      ) : null}
    </section>
  );
}

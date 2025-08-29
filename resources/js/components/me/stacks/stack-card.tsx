// ENGLISH COMMENTS — SIMPLE STACK CARD (ICON LEFT, TEXT RIGHT, STAR TOP-RIGHT)
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

export type Level = 'Expert' | 'Advanced' | 'Intermediate';
export type Category =
  | 'backend'
  | 'frontend'
  | 'library'
  | 'database'
  | 'devops'
  | 'tools';

export type StackItem = {
  name: string;
  icon: string;
  level: Level;
  years?: number;
  hasStar?: boolean;
  category: Category;
  className?: string;
};

export function StackCard({
  name,
  icon,
  level,
  hasStar,
  className,
}: StackItem) {
  return (
    <div
      className={cn(
        'group relative flex flex-col items-center gap-2 rounded-xl border border-border/60 text-center',
        'transitio p-4 shadow-sm',
        'transition-all duration-200 ease-out',
        'hover:shadow-lg',
        'focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:outline-none',
        'motion-reduce:transform-none motion-reduce:transition-none',
        level === 'Expert' &&
          'hover:shadow-[0px_5px_10px_0px_#AEE5D557] hover:shadow-green-300/50',
        // shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]
        level === 'Advanced' && 'hover:shadow-blue-300/50',
        level === 'Intermediate' && 'hover:shadow-amber-300/50',
        className,
      )}
      tabIndex={0}
    >
      <div className="rounded-md bg-gray-100 bg-radial bg-clip-border p-3">
        <img
          src={icon}
          alt={name}
          className="size-10 shrink-0 group-hover:animate-wiggle-zoom"
        />
      </div>
      <div className="truncate text-base font-semibold text-foreground">
        {name}
      </div>
      <div
        className={cn(
          'rounded-md px-2 py-1 text-xs text-muted-foreground',
          level === 'Expert' && 'bg-green-100 text-green-500',
          level === 'Advanced' && 'bg-blue-100 text-blue-500',
          level === 'Intermediate' && 'bg-amber-100 text-amber-500',
        )}
      >
        {level}
      </div>
      {hasStar && (
        <div
          aria-label="Most expert"
          title="Most expert"
          className="absolute top-2 right-2 text-emerald-500"
        >
          <Star className="size-5 fill-yellow-400 text-yellow-400" />
        </div>
      )}
    </div>
  );
}

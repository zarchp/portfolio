'use client';

import { cn } from '@/lib/utils';
import Reveal from '../../motion/reveal';
import { Category } from './stack-card';
import { categories } from './stacks-data';

type Props = {
  filter: 'all' | Category;
  setFilter: (f: 'all' | Category) => void;
};

export function StacksFilter({ filter, setFilter }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category, i) => (
        <Reveal
          key={category.key}
          delay={i * 0.04}
        >
          <button
            onClick={() => setFilter(category.key as Category)}
            className={cn(
              'cursor-pointer rounded-full px-4 py-1.5 text-sm shadow-sm transition',
              filter === category.key
                ? 'bg-brand text-white'
                : 'border-border bg-zinc-100 hover:bg-zinc-200',
            )}
          >
            {category.label}
          </button>
        </Reveal>
      ))}
    </div>
  );
}

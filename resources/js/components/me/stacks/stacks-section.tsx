'use client';

import Reveal from '../../motion/reveal';
import { StackCard, type Category, type StackItem } from './stack-card';
import { labels } from './stacks-data';

type Props = { cat: Category; items: StackItem[] };

export function StacksSection({ cat, items }: Props) {
  return (
    <div
      id={cat}
      className="flex flex-col gap-2"
    >
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl font-semibold">{labels[cat]}</h3>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {items.map((item, i) => (
          <Reveal
            key={item.name}
            delay={i * 0.06}
          >
            <StackCard {...item} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { Section, SectionContainer, SectionContent } from '../section';
import { Category, type StackItem } from './stack-card';
import { order, stacks } from './stacks-data';
import { StacksFilter } from './stacks-filter';
import { StacksHeader } from './stacks-header';
import { StacksSection } from './stacks-section';

export default function Stacks() {
  const [filter, setFilter] = React.useState<'all' | Category>('all');

  const grouped = React.useMemo(() => {
    const map: Record<Category, StackItem[]> = {
      frontend: [],
      backend: [],
      library: [],
      database: [],
      devops: [],
      tools: [],
    };
    for (const s of stacks) map[s.category].push(s);
    return map;
  }, []);

  const sections = (
    filter === 'all' ? order : order.filter((c) => c === filter)
  )
    .map((cat) => ({ cat, items: grouped[cat] }))
    .filter(({ items }) => items.length);

  return (
    <Section id="stacks">
      <SectionContainer>
        <StacksHeader />

        <SectionContent className="flex flex-col gap-4">
          <StacksFilter
            filter={filter}
            setFilter={setFilter}
          />
          {sections.map(({ cat, items }) => (
            <StacksSection
              key={cat}
              cat={cat}
              items={items}
            />
          ))}
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}

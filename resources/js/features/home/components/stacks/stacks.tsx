'use client';

import React from 'react';
import { order, stacks } from '../../data/stacks';
import { Category, StackItemProps } from '../../types/stacks';
import { Section, SectionContainer, SectionContent } from '../section';
import { StacksFilter } from './stacks-filter';
import { StacksHeader } from './stacks-header';
import { StacksSection } from './stacks-section';

export default function Stacks() {
  const [filter, setFilter] = React.useState<'all' | Category>('all');

  const grouped = React.useMemo(() => {
    const map: Record<Category, StackItemProps[]> = {
      frontend: [],
      backend: [],
      library: [],
      database: [],
      devops: [],
      tools: [],
    };
    for (const s of stacks) {
      const category: Category = s.category;
      map[category].push(s);
    }
    return map;
  }, []);

  const sections = (
    filter === 'all' ? order : order.filter((c) => c === filter)
  )
    .map((cat) => ({ cat, items: grouped[cat as Category] }))
    .filter(({ items }) => items.length);

  return (
    <Section
      id="stacks"
      className="section-deferred"
    >
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

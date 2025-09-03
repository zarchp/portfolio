'use client';

import { experiencesSeed } from '@/components/me/experience/experience-data';
import { useCallback, useState } from 'react';
import { ExperienceCard } from './experience-card';
import type { ExperienceItem } from './experience.types';

export function ExperienceTimeline() {
  const [items, setItems] = useState<ExperienceItem[]>(experiencesSeed);

  const toggleAt = useCallback((idx: number) => {
    setItems((prev) =>
      prev.map((it, i) => (i === idx ? { ...it, isOpen: !it.isOpen } : it)),
    );
  }, []);

  return (
    <div className="relative flex flex-col gap-6">
      {items.map((item, i) => (
        <ExperienceCard
          key={`${item.company}-${item.duration}`}
          item={item}
          index={i}
          isLast={i === items.length - 1}
          onToggle={() => toggleAt(i)}
        />
      ))}
    </div>
  );
}

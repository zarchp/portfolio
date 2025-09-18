'use client';

import { useCallback, useState } from 'react';
import type { ExperienceItemProps } from '../../types/experience';
import { experiences } from './../../data/experience';
import { ExperienceCard } from './experience-card';

export function ExperienceTimeline() {
  const [items, setItems] = useState<ExperienceItemProps[]>(experiences);

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

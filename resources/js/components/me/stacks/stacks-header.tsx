'use client';

import { MotionOnVisible } from '@/components/motion/motion-on-visible';
import { fadeInUp } from '@/lib/motion';
import { Layers } from 'lucide-react';
import { memo } from 'react';
import {
  SectionBadge,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '../section';

export const StacksHeader = memo(function StacksHeader() {
  return (
    <MotionOnVisible variants={fadeInUp}>
      <SectionHeader>
        <SectionBadge>
          <Layers className="size-4" />
          Technology I Use
        </SectionBadge>
        <SectionTitle>My Stacks</SectionTitle>
        <SectionDescription>
          A curated overview of my technical expertise, showcasing the tools,
          frameworks, and technologies I use to design, build, and scale modern
          applications.
        </SectionDescription>
      </SectionHeader>
    </MotionOnVisible>
  );
});

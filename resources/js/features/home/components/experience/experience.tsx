'use client';

import { MotionOnVisible } from '@/components/motion/motion-on-visible';
import {
  Section,
  SectionBadge,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '@/features/home/components/section';
import { fadeInUp } from '@/lib/motion';
import { BriefcaseBusiness } from 'lucide-react';
import { ExperienceTimeline } from './experience-timeline';

export default function Experience() {
  return (
    <Section
      id="experience"
      className="section-deferred"
    >
      <SectionContainer>
        <MotionOnVisible variants={fadeInUp}>
          <SectionHeader>
            <SectionBadge>
              <BriefcaseBusiness className="h-4 w-4" />
              Professional Journey
            </SectionBadge>
            <SectionTitle>Work Experience</SectionTitle>
            <SectionDescription>
              A timeline of my career highlights and contributions
            </SectionDescription>
          </SectionHeader>
        </MotionOnVisible>

        <SectionContent>
          <ExperienceTimeline />
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}

'use client';

import {
  Section,
  SectionBadge,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '@/components/me/section';
import { MotionOnVisible } from '@/components/motion/motion-on-visible';
import { Button } from '@/components/ui/button';
import { allProjects, featuredProjects } from '@/data/projects';
import { fadeInUp } from '@/lib/motion';
import type { Project } from '@/types/project';
import { ChevronDown, Code } from 'lucide-react';
import { useMemo } from 'react';
import ProjectsGridList from './all-projects';
import FeaturedProjects from './featured-projects';
import { useIncrementalTake } from './use-incremental-take';

const STEP = 6;

export default function ProjectsSection() {
  const nonFeatured = useMemo<Project[]>(() => {
    const featuredIds = new Set(featuredProjects.map((p) => p.id));
    return allProjects.filter((p) => !featuredIds.has(p.id));
  }, []);

  const { take, canShowMore, showMore } = useIncrementalTake({
    initial: 0,
    step: STEP,
    max: nonFeatured.length,
  });

  const hasAnyGrid = take > 0;

  return (
    <Section
      id="projects"
      className="section-deferred"
    >
      <SectionContainer>
        <MotionOnVisible variants={fadeInUp}>
          <SectionHeader>
            <SectionBadge>
              <Code className="size-4" />
              Portfolio Showcase
            </SectionBadge>
            <SectionTitle>My Projects</SectionTitle>
            <SectionDescription>
              I’ve worked on a variety of projects—from simple sites to complex
              platforms. Here are a few highlights.
            </SectionDescription>
          </SectionHeader>
        </MotionOnVisible>

        <SectionContent className="flex flex-col gap-8">
          <FeaturedProjects projects={featuredProjects} />

          {hasAnyGrid ? (
            <div
              id="projects-grid"
              aria-live="polite"
            >
              <ProjectsGridList
                projects={nonFeatured}
                take={take}
              />
            </div>
          ) : null}

          <div className="text-center">
            <Button
              onClick={showMore}
              disabled={!canShowMore}
              variant="ghost"
              className="group mx-auto flex items-center gap-2 rounded-full px-6 py-2 text-lg text-secondary-foreground transition-all hover:bg-brand-50 hover:text-brand disabled:opacity-100"
              data-umami-event="show-more-projects-button"
            >
              {canShowMore ? 'Show More' : 'More projects coming soon 🚀'}
              {canShowMore && (
                <ChevronDown className="size-4 transition-transform group-hover:translate-y-0.5" />
              )}
            </Button>
          </div>
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}

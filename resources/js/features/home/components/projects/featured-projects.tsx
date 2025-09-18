'use client';

import type { ProjectProps } from '@/features/home/types/projects';
import React from 'react';
import ProjectCard from './project-card';

type FeaturedProjectsProps = {
  projects: ProjectProps[];
};

export default React.memo(function FeaturedProjects({
  projects,
}: FeaturedProjectsProps) {
  return (
    <div className="flex flex-col gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
});

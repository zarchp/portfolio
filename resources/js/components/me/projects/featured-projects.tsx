'use client';

import ProjectCard from '@/components/me/projects/project-card';
import type { Project } from '@/types/project';
import React from 'react';

type FeaturedProjectsProps = {
  projects: Project[];
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

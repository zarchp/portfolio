'use client';

import type { ProjectProps } from '@/features/home/types/projects';
import React, { useMemo } from 'react';
import ProjectGrid from './project-grid';

type ProjectsGridListProps = {
  projects: ProjectProps[];
  take?: number;
};

export default React.memo(function ProjectsGridList({
  projects,
  take = 6,
}: ProjectsGridListProps) {
  const visible = useMemo(() => projects.slice(0, take), [projects, take]);

  return (
    <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
      {visible.map((project) => (
        <ProjectGrid
          key={project.id}
          project={project}
          className="flex h-full grow"
        />
      ))}
    </div>
  );
});

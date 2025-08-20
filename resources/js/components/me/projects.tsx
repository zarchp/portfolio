'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Code, ExternalLink, Github } from 'lucide-react';
import {
  Section,
  SectionBadge,
  SectionContainer,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from './section';

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const featuredProjects: Project[] = [
  {
    id: '1',
    name: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
  },
  {
    id: '2',
    name: 'Task Management App',
    description:
      'Collaborative project management tool with real-time updates, drag-and-drop interface, and team collaboration features.',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
  },
  {
    id: '3',
    name: 'AI Content Generator',
    description:
      'Machine learning-powered content generation platform with natural language processing and custom model training capabilities.',
    techStack: ['Python', 'FastAPI', 'TensorFlow', 'React', 'Docker'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
  },
  {
    id: '4',
    name: 'Real-time Analytics Dashboard',
    description:
      'Data visualization platform with real-time metrics, customizable charts, and automated reporting features for business intelligence.',
    techStack: ['Vue.js', 'D3.js', 'Node.js', 'MongoDB', 'Socket.io'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
  },
  {
    id: '5',
    name: 'Mobile Banking App',
    description:
      'Secure mobile banking application with biometric authentication, transaction history, and peer-to-peer payment functionality.',
    techStack: ['React Native', 'Express.js', 'JWT', 'Encryption', 'AWS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
  },
  {
    id: '6',
    name: 'IoT Monitoring System',
    description:
      'Industrial IoT monitoring platform with sensor data collection, real-time alerts, and predictive maintenance algorithms.',
    techStack: ['Python', 'MQTT', 'InfluxDB', 'Grafana', 'Kubernetes'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      className="bg-background py-12"
    >
      <SectionContainer>
        <SectionHeader>
          <SectionBadge>
            <Code className="size-4" />
            Portfolio Showcase
          </SectionBadge>
          <SectionTitle>My Projects</SectionTitle>
          <SectionDescription>
            I've worked on a variety of projects, from simple websites to
            complex web applications. Here is a showcase of my favorites.
          </SectionDescription>
        </SectionHeader>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="group flex h-full flex-col overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 via-secondary to-muted/30">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute right-4 bottom-4 left-4">
                  <h3 className="font-display mb-2 text-xl font-semibold text-white transition-colors group-hover:text-primary">
                    {project.name}
                  </h3>
                </div>
              </div>

              <CardContent className="flex flex-1 flex-col p-6">
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/50 text-xs text-secondary-foreground transition-colors hover:bg-secondary/70"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex gap-3">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-border hover:bg-secondary/50"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-border px-8 text-foreground hover:bg-secondary/50"
          >
            View All Projects
          </Button>
        </div>
      </SectionContainer>
    </Section>
  );
}

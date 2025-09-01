import ProjectCard from '@/components/me/project-card';
import { fadeInUp } from '@/lib/motion';
import type { Project } from '@/types/project';
import { Code } from 'lucide-react';
import { MotionOnVisible } from '../motion/motion-on-visible';
import { Button } from '../ui/button';
import {
  Section,
  SectionBadge,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from './section';

const projects: Project[] = [
  {
    id: 'simm',
    title: 'Merchant Management System for OVO',
    subtitle: 'Enterprise Merchant Management Platform',
    description:
      'An enterprise-grade system built for PT OVO Visionet Internasional to manage the full merchant lifecycle from acquisition and activation to support, vendor operations, and analytics. Includes dashboards for multiple roles, mobile integration for couriers, and API access for third-party vendors.',
    imageUrl: '/images/projects/simm.png',
    liveUrl: null,
    repoUrl: null,
    status: 'live',
    tags: ['Web App', 'Dashboard', 'API', 'Mobile'],
    keyFeatures: [
      //   'Role-based dashboards with tailored views for managers, acquisition team, activation team, and vendors',
      //   'End-to-end merchant lifecycle workflows: acquisition, activation, vendor operations, and reporting',
      //   'Bulk operations: Excel import/export, scheduled daily reports, and password-protected files',
      //   'Handles daily processing of thousands of merchant records efficiently',
      //   'Audit trail to track history of data changes and user activities',
      //   'Collateral stock monitoring per vendor',
      //   'APIs for mobile apps and third-party vendors',
      //   'Courier mobile app (Android) for courier on-site merchant visits',
      //   'Scalable hosting on AWS with Cloudflare for performance and security',
      'Role-based dashboards for managers, acquisition, activation, and vendors',
      'Full merchant acquistion and activation lifecycle workflows',
      'Bulk Excel import/export, daily reports, and encrypted files',
      'Processes thousands of data records daily',
      'Audit trail for data changes and user activities',
      'Collateral stock tracking per vendor',
      'APIs for mobile apps and 3rd-party vendor systems',
      'Android app for couriers with e-forms, GPS, and photo uploads',
      'Hosted on AWS with Cloudflare for scale and security',
    ],
    deliverables: [
      //   'Participated in requirement gathering, problem analysis, and proposed best-fit solutions to the client',
      //   'Designed and built multi-role dashboards tailored for each business unit',
      //   'Developed Android integration via API for courier on-site merchant visits',
      //   'Built reporting engine: bulk Excel import, per-menu export, daily auto-report, and secure password-encrypted Excel',
      //   'Provided APIs for third-party vendors to sync data and update status',
      //   'Optimized system for daily processing of thousands of records',
      //   'Handled full development lifecycle: developing, testing, deployment to production, and ongoing maintenance',
      //   'Ensured system security by following recommendations from the OVO security team',
      'Participated requirement gathering, problem analysis, and proposed solutions',
      'Designed and built dashboards for multiple business roles',
      'Developed APIs for courier mobile app and 3rd-party vendor data sync',
      'Built reporting engine with bulk Excel, daily reports, and encryption',
      'Optimized system to handle thousands of records daily',
      'Managed full lifecycle: development, testing, deployment, and maintenance',
      'Applied security practices based on OVO security team guidance',
    ],
    techStacks: ['Laravel', 'Bootstrap', 'MySQL', 'Redis', 'AWS', 'Cloudflare'],
  },
  {
    id: 'portfolio',
    title: 'My Portfolio',
    subtitle: 'Professional Portfolio & Resume Website',
    description:
      'A modern, responsive portfolio showcasing my professional journey, projects, and skills. Designed with a custom UI system, dark mode, and optimized for speed, accessibility, and maintainability.',
    imageUrl: '/images/projects/portfolio.png',
    liveUrl: '#home',
    repoUrl: 'https://github.com/zarchp/portfolio',
    status: 'live',
    tags: ['Web App', 'Personal'],
    keyFeatures: [
      'Responsive design with light and dark mode',
      'Dedicated sections for Hero, About, Skills, Projects, and Contact',
      'Polished presentation with consistent branding and custom UI',
      'Accessible navigation with semantic HTML and keyboard support',
      'High performance with code-splitting, lazy loading, and prefetching',
    ],
    deliverables: [
      'Planned structure and layout for portfolio content',
      'Designed and built reusable UI components for consistency',
      'Developed project and skills showcase with dynamic content',
      'Implemented strong accessibility and responsive design standards',
      'Configured automated deployment and hosting',
      'Maintained code quality with testing, linting, and version control',
    ],
    techStacks: [
      'Laravel',
      'Filament',
      'Inertia',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
      'SQLite',
      'Pest',
      'Tencent Cloud',
    ],
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      className="bg-background py-12"
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
              I've worked on a variety of projects, from simple websites to
              complex web applications. Here is a showcase of my favorites.
            </SectionDescription>
          </SectionHeader>
        </MotionOnVisible>

        <SectionContent className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
          <div>
            <div className="text-center">
              <Button
                // variant="primary"
                className="text-2xl font-semibold"
              >
                More Projects
              </Button>
              {/* <p className="mt-2 text-sm text-muted-foreground">
                Showing {showCount} of {others.length}
              </p> */}
            </div>
          </div>
        </SectionContent>
      </SectionContainer>
    </Section>
  );
  return (
    <section
      id="projects"
      className="py-20"
    >
      <div className="container">
        {/* ENGLISH COMMENT: Header */}
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="mb-3">
            <span className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
              Portfolio Showcase
            </span>
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            A curated showcase of recent work — complete with screenshots, live
            links, and the exact stack used in production.
          </p>
        </div>

        {/* ENGLISH COMMENT: Responsive grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

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
    imageUrl: '/images/projects/ovo.png',
    liveUrl: null,
    repoUrl: null,
    status: 'live',
    tags: ['Web App', 'Dashboard', 'API', 'Mobile'],
    keyFeatures: [
      'Role-based dashboards for managers, acquisition, activation, and vendors',
      'Analytics dashboards with charts and insights for business teams',
      'Full merchant acquistion and activation lifecycle workflows',
      'APIs for mobile apps and third-party vendors integration',
      'Bulk Excel import/export, daily reports, and encrypted files',
      'Processes thousands of data records daily',
      'Audit trail for data changes and user activities',
      'Collateral stock tracking per vendor',
      'Android app for couriers with e-forms, GPS, and photo uploads',
    ],
    deliverables: [
      'Participated in requirement gathering, problem analysis, and proposed best-fit solutions',
      'Designed and built dashboards for multiple business roles',
      'Developed APIs for courier mobile app and third-party vendors',
      'Optimized system performance to handle thousands of records daily',
      'Built reporting engine with bulk Excel import/export, automated daily reports, and encryption',
      'Fixed penetration testing issues to meet OVO security team standards',
      'Maintained system stability with post-release support and issue resolution',
    ],
    techStacks: ['Laravel', 'Bootstrap', 'MySQL', 'Redis', 'AWS', 'Cloudflare'],
  },
  {
    id: 'gass',
    title: 'General Affair Services System',
    subtitle: 'All-in-One Internal Service Platform',
    description:
      'An enterprise super app built for PT SMI (Sarana Multi Infrastruktur) to support all employees (staff, heads, and directors) across divisions and directorates. The system was designed to improve General Affairs (GA) team productivity, accelerate digital transformation, and provide a single platform where employees can easily submit requests, complaints, and feedback. It also helps GA personnel deliver services more efficiently and gives management real-time visibility through reporting and dashboards.',
    imageUrl: '/images/projects/smi-ga.png',
    liveUrl: null,
    repoUrl: null,
    status: 'live',
    tags: ['Web App', 'Dashboard', 'Enterprise'],
    keyFeatures: [
      'Role-based dashboards for employees, GA staff, heads, and directors',
      'Single Sign-On (SSO) authentication for centralized and secure access',
      'Mobile-friendly design for easy access across devices',
      'Multi-level approval workflows involving team leaders, division heads, PICs, and directors',
      'Meeting room reservations with calendar-style scheduling and IPTV integration',
      'Operational vehicle requests with real-time position tracking',
      'Reimbursement services integrated with Oracle Finance (OraFin) for automated financial processing',
      'Reporting features with export options, tailored views for GA staff and management, and automated daily reports',
      'Audit trail to track all data changes and approval history',
    ],
    deliverables: [
      'Participated in requirement gathering, analyzed problems, and proposed best-fit solutions',
      'Led a cross-functional development team with Scrum practices',
      'Facilitated daily stand-ups, retrospectives, and backlog refinement',
      'Created GitLab issues, broke down features into smaller tasks, and assigned to developers',
      'Ensured code quality with reviews on functionality, coding standards, and testing',
      'Implemented key modules and resolved high-priority issues',
      'Deployed the system to development and production servers',
      'Fixed penetration testing issues to meet enterprise security standards',
      'Maintained system stability with post-release support and issue resolution',
    ],
    techStacks: [
      'Laravel',
      'Livewire',
      'Alpine.js',
      'Bootstrap',
      'SQL Server',
      'MySQL',
      'OraFin',
      'Self Hosted',
      'AWS',
      'RHEL',
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

import ProjectCard from '@/components/me/projects/project-card';
import { fadeInUp } from '@/lib/motion';
import type { Project } from '@/types/project';
import { Code } from 'lucide-react';
import { MotionOnVisible } from '../../motion/motion-on-visible';
import { Button } from '../../ui/button';
import {
  Section,
  SectionBadge,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '../section';
import ProjectGrid from './project-grid';

const featuredProjects: Project[] = [
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
      'An enterprise super app built for PT SMI (Sarana Multi Infrastruktur) to support all employees (staff, heads, and directors). The system was designed to improve General Affairs (GA) team productivity, accelerate digital transformation, and provide a single platform where employees can easily submit requests, complaints, and feedback. It also provides real-time reporting to management.',
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

const gridProjects: Project[] = [
  {
    id: 'portfolio',
    title: 'My Portfolio',
    subtitle: 'Personal Portfolio & Showcase',
    description:
      //   'A modern, responsive portfolio website showcasing my skills, projects, and professional journey with a focus on clarity, accessibility, and design.',
      'A modern, responsive portfolio website showcasing my skills, projects, and professional journey with a focus on clarity, accessibility, and design. It reflects my passion for both engineering and design excellence.',
    imageUrl: '/images/projects/portfolio.png',
    liveUrl: null,
    repoUrl: null,
    status: 'live',
    tags: ['Web App', 'Personal'],
    techStacks: ['Laravel', 'React', 'Tailwind CSS'],
  },
  {
    id: 'anugerah',
    title: 'Anugerah GA',
    subtitle: 'Procurement Management',
    description:
      'A centralized dashboard for handling purchase requests and branch data. It supports multi-level approvals, role-based reporting, data synchronization, and OraFin integration for streamlined procurement and administration.',
    imageUrl: '/images/projects/anugerah.png',
    liveUrl: null,
    repoUrl: null,
    status: 'live',
    tags: ['Web App', 'Dashboard'],
    techStacks: ['Laravel', 'Filament', 'OraFin'],
  },
  {
    id: 'playground',
    title: 'Playground',
    subtitle: 'Interactive Demos & Experiments',
    description:
      'A dedicated space for showcasing interactive web applications and experiments. It highlights mini projects such as games, utilities, and creative tools, demonstrating technical expertise while exploring innovative ideas.',
    imageUrl: '/images/projects/playground.png',
    liveUrl: null,
    repoUrl: null,
    status: 'live',
    tags: ['Web App', 'Experimental'],
    techStacks: ['Laravel', 'React'],
  },
  {
    id: 'taspen',
    title: 'Office Supplies and Asset Management',
    subtitle: 'Centralized Supplies and Assets',
    description:
      'A centralized platform for PT Bank Mandiri Taspen to manage office supply requests, purchase orders, vendor processes, and assets, supported by multi-level approval workflows.',
    imageUrl: '/images/projects/taspen.png',
    liveUrl: null,
    repoUrl: null,
    status: 'live',
    tags: ['Web App', 'Dashboard'],
    techStacks: ['Laravel', 'Livewire', 'Self Hosted'],
  },
  {
    id: 'ecms',
    title: 'Employee Condition Monitoring System',
    subtitle: 'Health & Attendance Tracking',
    description:
      'A mobile-first platform for PT SMI where employees report daily health status and attendance with GPS check-ins. HR can monitor conditions in real time, supported by charts and reports for stakeholders.',
    imageUrl: '/images/projects/smi-cms.png',
    liveUrl: null,
    repoUrl: null,
    status: 'live',
    tags: ['Web App', 'Mobile'],
    techStacks: ['Laravel', 'Livewire', 'GCP'],
  },
  {
    id: 'tjikini',
    title: 'Kedai Tjikini',
    subtitle: 'Food Ordering & Reservations',
    description:
      'A restaurant website that allows customers to browse menus, place online orders, and make table reservations with ease. The platform enhances dining convenience by combining traditional flavors with a modern digital experience.',
    imageUrl: '/images/projects/tjikini.png',
    liveUrl: null,
    repoUrl: null,
    status: 'live',
    tags: ['Web App', 'Restaurant'],
    techStacks: ['Laravel', 'Livewire'],
  },
  {
    id: 'replikakabah',
    title: "Replika Ka'bah",
    subtitle: "Educational Replica of Ka'bah",
    description:
      "An e-commerce website offering high-quality Ka'bah replicas for Hajj and Umrah training. It features detailed product catalogs, clear specifications, and easy ordering options to support realistic manasik education.",
    imageUrl: '/images/projects/replikakabah.png',
    liveUrl: null,
    repoUrl: null,
    status: 'live',
    tags: ['Web App', 'E-Commerce'],
    techStacks: ['Wordpress'],
  },
  {
    id: 'indodana',
    title: 'Indodana Prestashop',
    subtitle: 'PayLater Integration for Prestashop',
    description:
      'A Prestashop plugin built for Indodana to integrate its PayLater service into checkout. It allows merchants to offer Indodana’s installment payment options, giving customers flexible financing and a seamless shopping experience.',
    imageUrl: '/images/projects/indodana.png',
    liveUrl: null,
    repoUrl: null,
    status: 'live',
    tags: ['Plugin'],
    techStacks: ['Prestashop'],
  },
  {
    id: 'bpr',
    title: 'BPR Fortuna',
    subtitle: 'Trusted Rural Bank',
    description:
      'A landing page built for PT BPR Lumbung Mekar Fortuna, presenting savings, deposit products, and loan services with competitive interest rates, offering customers secure and convenient digital financial solutions online.',
    imageUrl: '/images/projects/bpr.png',
    liveUrl: null,
    repoUrl: null,
    status: 'live',
    tags: ['Web App', 'Landing Page'],
    techStacks: ['Laravel', 'OctoberCMS'],
  },
  {
    id: 'nkdc',
    title: 'NK Dental Care',
    subtitle: 'Clinic Landing Page & Dashboard',
    description:
      'A landing page and dashboard built for NK Dental Care. Admins can manage reservations and patient records, and doctors can submit results and print medical documents, streamlining clinic operations and patient services.',
    imageUrl: '/images/projects/nkdc.png',
    liveUrl: null,
    repoUrl: null,
    status: 'live',
    tags: ['Web App', 'Dashboard'],
    techStacks: ['Wordpress', 'Laravel'],
  },
  {
    id: 'yaitu',
    title: 'Yaitu.id',
    subtitle: 'Food Delivery for Offices',
    description:
      'A food delivery app for office areas and foodcourts, using the nearest couriers (internal staff) for faster service. It includes a landing page, a management dashboard, and an Android app on the Play Store for customers and couriers.',
    imageUrl: '/images/projects/yaitu.png',
    liveUrl: null,
    repoUrl: null,
    status: 'archived',
    tags: ['Web App', 'Mobile'],
    techStacks: ['Laravel', 'Android'],
  },
  {
    id: 'bagimu',
    title: 'Bagimu.id',
    subtitle: 'e-Learning Platform',
    description:
      'An e-learning platform built during the COVID-19 pandemic, enabling professionals to create and deliver courses via Zoom/GMeet. It provides flexible scheduling, expert-led sessions, and accessible learning for everyone.',
    imageUrl: '/images/projects/bagimu.png',
    liveUrl: null,
    repoUrl: null,
    status: 'archived',
    tags: ['Web App'],
    techStacks: ['Laravel', 'Livewire', 'AWS'],
  },
  {
    id: 'asemka_profile',
    title: 'Asemka Profile',
    subtitle: 'Company Profile Landing Page',
    description:
      'PT Asemka Commerce Indonesia’s company profile website showcases its wide range of digital solutions, core services, and strategic partnerships, positioning the company as a trusted technology partner for business growth.',
    imageUrl: '/images/projects/asemka_profile.png',
    liveUrl: null,
    repoUrl: null,
    status: 'archived',
    tags: ['Web App', 'Company Profile'],
    techStacks: ['Nuxt.js', 'AWS'],
  },
  {
    id: 'asemka_operation',
    title: 'Asemka Operational',
    subtitle: 'Warehouse Management System',
    description:
      'A warehouse management system to streamline operations, and real-time inventory. The first platform to sync with popular marketplaces to centralize order fulfillment and optimize stock management across multiple channels.',
    imageUrl: '/images/projects/asemka_operation.png',
    liveUrl: null,
    repoUrl: null,
    status: 'archived',
    tags: ['Web App', 'Dashboard'],
    techStacks: ['Laravel', 'AWS'],
  },
  {
    id: 'gbc',
    title: 'Grosir Bersama',
    subtitle: 'Wholesale e-Commerce',
    description:
      'A wholesale e-commerce platform based in Tanah Abang, Jakarta. It provides a digital marketplace for fashion and apparel, enabling merchants and buyers to browse, order, and manage wholesale purchases online with ease.',
    imageUrl: '/images/projects/gbc.png',
    liveUrl: null,
    repoUrl: null,
    status: 'archived',
    tags: ['Web App', 'e-Commerce'],
    techStacks: ['CS-Cart'],
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
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {gridProjects.map((project) => (
              <ProjectGrid
                key={project.id}
                project={project}
                className="flex h-full grow"
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
}

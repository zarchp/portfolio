'use client';

import { Badge } from '@/components/ui/badge';
import { fadeInUp } from '@/lib/motion';
import { BriefcaseBusiness, Building, Calendar } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MotionOnVisible } from '../motion/motion-on-visible';
import {
  Section,
  SectionBadge,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from './section';

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  type: string;
  techStack: string[];
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Freelance',
    role: 'Full Stack Developer',
    duration: 'Present',
    type: 'Freelance | Remote',
    techStack: [
      'Laravel',
      'Livewire',
      'Filament',
      'NativePHP',
      'Wordpress',
      'React.js',
      'Typescript',
      'Tailwind CSS',
      'Shadcn UI',
      'Pest',
      'MySQL',
      'Oracle',
      'SQL Server',
      'SQLite',
      'OpenAI',
      'AWS',
    ],
    achievements: [
      'Led development of a microservices architecture serving 1M+ users',
      'Reduced application load time by 40% through performance optimization',
      'Mentored 5 junior developers and established coding standards',
      'Architected and implemented real-time collaboration features',
    ],
  },
  {
    company: 'PT Adi Data Informatika',
    role: 'Lead Developer',
    duration: 'Oct 2022 -  Mar 2024',
    type: 'Full Time | Hybrid',
    techStack: [
      'Laravel',
      'Livewire',
      'Alpine.js',
      'React.js',
      'Typescript',
      'MySQL',
      'SQL Server',
      'AWS',
      'GCP',
    ],
    achievements: [
      'Led development of a microservices architecture serving 1M+ users',
      'Reduced application load time by 40% through performance optimization',
      'Mentored 5 junior developers and established coding standards',
      'Architected and implemented real-time collaboration features',
    ],
  },
  {
    company: 'PT Asemka Commerce Indonesia',
    role: 'Full Stack Developer',
    duration: 'Sep 2017 - Sep 2022',
    type: 'Full Time | WFO',
    techStack: [
      'Laravel',
      'Livewire',
      'Alpine.js',
      'Vue.js',
      'jQuery',
      'Prestashop',
      'Wordpress',
      'MySQL',
      'SQL Server',
      'AWS',
      'GCP',
    ],
    achievements: [
      'Built MVP from scratch that secured $2M Series A funding',
      'Implemented automated testing pipeline reducing bugs by 60%',
      'Designed and developed RESTful APIs serving 100K+ requests daily',
      'Collaborated with product team to deliver features ahead of schedule',
    ],
  },
  {
    company: 'PT Adicipta Inovasi Teknologi',
    role: 'Full Stack Developer',
    duration: 'Jan 2016 - Aug 2017',
    type: 'Full Time | WFO',
    techStack: ['CS-Cart', 'Laravel', 'jQuery', 'Bootstrap', 'MySQL'],
    achievements: [
      'Developed responsive web applications for 50+ enterprise clients',
      'Improved code quality by implementing comprehensive testing suite',
      'Created reusable component library used across multiple projects',
      'Optimized bundle size resulting in 25% faster page load times',
    ],
  },
  {
    company: 'CV Kabayan Consulting',
    role: 'Junior Developer',
    duration: 'Jun 2014 - Dec 2014',
    type: 'Full Time | WFO',
    techStack: ['Yii', 'Laravel', 'jQuery', 'Bootstrap', 'MySQL'],
    achievements: [
      'Delivered 30+ client websites with pixel-perfect designs',
      'Learned modern development practices and version control',
      'Contributed to cross-browser compatibility and accessibility improvements',
      'Participated in agile development process and client communications',
    ],
  },
];

interface TimelineItemProps {
  experience: ExperienceItem;
  index: number;
  isLast: boolean;
}

function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative flex items-start"
    >
      <div className="relative mt-6 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="z-10 flex h-4 w-4 items-center justify-center rounded-full bg-brand ring-4 ring-card"
        >
          <div className="h-2 w-2 rounded-full bg-white" />
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="mt-2 w-px bg-border"
            style={{ minHeight: '150px' }}
          />
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={
          isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }
        }
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        className={`ml-6 flex-1 pb-12 ${isLast ? 'pb-0' : ''}`}
      >
        <div className="flex flex-col gap-4 rounded-xl border border-border bg-background p-4 shadow-sm sm:p-6">
          <div className="flex flex-col gap-1">
            <h3 className="font-display text-2xl font-semibold text-foreground">
              {experience.role}
            </h3>
            <h4 className="font-display text-lg font-medium text-brand">
              {experience.company}
            </h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="size-4" />
                <span>{experience.type}</span>
              </div>
            </div>
          </div>

          <div className="">
            <h5 className="font-display mb-2 text-base font-medium text-foreground">
              Key Achievements:
            </h5>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, achievementIndex) => (
                <motion.li
                  key={achievementIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + 0.5 + achievementIndex * 0.1,
                  }}
                  className="flex items-start gap-2 text-base text-secondary-foreground"
                >
                  <div className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="">
            <h5 className="font-display mb-2 text-base font-medium text-foreground">
              Technologies Used:
            </h5>
            <div className="flex flex-wrap gap-2">
              {experience.techStack.map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + 0.4 + techIndex * 0.15,
                  }}
                >
                  <Badge
                    variant="secondary"
                    className="text-xs"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience">
      <SectionContainer>
        <MotionOnVisible variants={fadeInUp}>
          <SectionHeader>
            <SectionBadge>
              <BriefcaseBusiness className="size-4" />
              Professional Journey
            </SectionBadge>
            <SectionTitle>Work Experience</SectionTitle>
            <SectionDescription>
              Here's a timeline of my professional career
            </SectionDescription>
          </SectionHeader>
        </MotionOnVisible>

        <SectionContent>
          <div className="relative">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={`${experience.company}-${experience.duration}`}
                experience={experience}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}

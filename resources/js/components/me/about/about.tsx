'use client';

import GoodreadsReadRecent from '@/components/me/about/goodreaads-read-recent';
import {
  Section,
  SectionBadge,
  SectionContainer,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '@/components/me/section';
import {
  Code2,
  LibraryBig,
  Lightbulb,
  Sparkles,
  UserRoundCheck,
  Zap,
} from 'lucide-react';

import {
  contacts,
  expertises,
  highlights,
  sidebarIcons,
} from '@/components/me/about/about.constants';
import { PillarCard } from '@/components/me/about/pillar-card';
import { SidebarCard } from '@/components/me/about/sidebar-card';
import { MotionOnVisible } from '@/components/motion/motion-on-visible';
import {
  fadeIn,
  fadeInRight,
  fadeInUp,
  slideInRight,
  staggerContainer,
} from '@/lib/motion';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Section id="about">
      <SectionContainer>
        <MotionOnVisible variants={fadeInUp}>
          <SectionHeader>
            <SectionBadge>
              <UserRoundCheck className="size-4" />
              Behind the Code
            </SectionBadge>
            <SectionTitle>About Me</SectionTitle>
            <SectionDescription>
              An overview of who I am, what I do, and how I work
            </SectionDescription>
          </SectionHeader>
        </MotionOnVisible>

        <SectionContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <MotionOnVisible
                variants={fadeInRight}
                className="rounded-xl border p-6 shadow-sm backdrop-blur"
              >
                <MotionOnVisible variants={staggerContainer(0.15)}>
                  <motion.div
                    variants={fadeIn}
                    className="mb-6 flex flex-col gap-4 border-b pb-6"
                  >
                    <h3 className="flex items-center gap-2 text-3xl font-semibold">
                      👋{' '}
                      <span>
                        Hello,{' '}
                        <span className="block sm:inline">
                          I’m Anzar Syahid{' '}
                          <Sparkles className="hidden size-6 text-brand sm:inline" />
                        </span>
                      </span>
                    </h3>
                    <div className="text-lg text-gray-800 dark:text-gray-200">
                      A passionate{' '}
                      <span className="font-semibold text-brand">
                        Full Stack developer
                      </span>{' '}
                      with{' '}
                      <span className="font-semibold text-green-500">
                        9+ years
                      </span>{' '}
                      of experience delivering scalable solutions and innovative
                      digital products.
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    className="space-y-5 text-secondary-foreground"
                  >
                    <p>
                      I specialize in building scalable web applications with
                      Laravel, Livewire, React, and modern development
                      technologies. I thrive on learning, leading, and solving
                      complex challenges while turning each experience into
                      growth for both myself and my team.
                    </p>
                    <p>
                      I believe in clean, test-driven code and thoughtful design
                      as the foundation for reliable and user-friendly products.
                      My approach blends technical depth with practical
                      problem-solving to deliver solutions that create real
                      impact.
                    </p>
                    <p>
                      Currently, I’m expanding my expertise by learning
                      NativePHP to bring Laravel applications seamlessly to
                      Android and iOS, exploring cross-platform possibilities
                      that blend web, desktop and mobile development.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={staggerContainer(0.02)}
                    className="mt-8"
                  >
                    <motion.div
                      variants={fadeIn}
                      className="mb-2 text-sm font-semibold"
                    >
                      Expertise
                    </motion.div>
                    <div className="flex flex-wrap gap-2">
                      {expertises.map((expertise) => (
                        <motion.span
                          key={expertise}
                          variants={fadeIn}
                          className="rounded-md bg-brand-50 px-2 py-0.5 text-xs text-brand shadow-xs transition-all hover:shadow-sm dark:bg-brand-50 dark:text-brand-700"
                        >
                          {expertise}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    variants={staggerContainer(0.06)}
                    className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
                  >
                    <PillarCard
                      icon={<Code2 className="size-10 text-blue-500" />}
                      title="Clean Code"
                      desc="Crafting maintainable and elegant solutions"
                    />
                    <PillarCard
                      icon={<Zap className="size-10 text-yellow-500" />}
                      title="Performance"
                      desc="Optimizing for speed and efficiency"
                    />
                  </motion.div>
                </MotionOnVisible>
              </MotionOnVisible>
            </div>

            <MotionOnVisible
              variants={staggerContainer(0.2)}
              className="flex flex-col gap-4"
            >
              <SidebarCard
                icon={sidebarIcons.link}
                title="Let’s Connect"
              >
                <motion.div
                  variants={staggerContainer(0.04)}
                  className="flex flex-col gap-3"
                >
                  {contacts.map((contact) => (
                    <motion.a
                      variants={slideInRight}
                      key={contact.label}
                      href={contact.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-brand">{contact.icon}</div>
                        <div className="text-sm text-secondary-foreground transition-all group-hover:text-brand group-hover:underline">
                          {contact.label}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </SidebarCard>

              <SidebarCard
                icon={<Lightbulb />}
                title="Highlights"
              >
                <motion.div
                  variants={staggerContainer(0.04)}
                  className="flex flex-col gap-3"
                >
                  {highlights.map((a) => (
                    <motion.div
                      variants={slideInRight}
                      key={a.label}
                      className="flex items-center gap-3"
                    >
                      <div className="text-brand">{a.icon}</div>
                      <div className="text-sm text-secondary-foreground">
                        {a.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </SidebarCard>

              <SidebarCard
                icon={<LibraryBig />}
                title="Beyond Work"
              >
                <GoodreadsReadRecent />
              </SidebarCard>
            </MotionOnVisible>
          </div>
        </SectionContent>
      </SectionContainer>
    </Section>
  );
}

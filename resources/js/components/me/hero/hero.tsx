'use client';

import { MotionOnVisible } from '@/components/motion/motion-on-visible';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { profile } from '@/data/profile';
import { blur, blurUp, slideInUp, staggerContainer } from '@/lib/motion';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { InteractiveGrid } from './interactive-grid';
import ScrollForMore from './scroll-for-more';
import { SocialLinks } from './social-links';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <InteractiveGrid />

      <MotionOnVisible
        variants={staggerContainer(0.3)}
        className="pointer-events-none z-10 flex flex-col items-center gap-12 text-center"
      >
        <motion.div
          variants={blur}
          className="flex justify-center"
        >
          <Badge
            variant="outline"
            className="inline-flex items-center rounded-full border-success/30 bg-success/10 px-4 py-2 text-sm font-medium text-success ring-1 ring-success/10 ring-inset"
          >
            <span className="relative mr-2 flex size-2.5 items-center justify-center">
              <span className="absolute h-full w-full animate-ping rounded-full bg-green-500" />
              <span className="size-2 rounded-full bg-green-500" />
            </span>
            {profile.status}
          </Badge>
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.h1
            variants={blurUp}
            className="text-5xl font-extrabold tracking-tight text-pretty sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            variants={blurUp}
            className="text-2xl font-semibold text-pretty text-brand sm:text-3xl lg:text-4xl"
          >
            {profile.role}
          </motion.h2>

          <motion.p
            variants={blurUp}
            className="mx-auto max-w-lg text-muted-foreground sm:max-w-xl lg:max-w-3xl lg:text-xl"
          >
            {profile.description}
          </motion.p>
        </div>

        <motion.div
          variants={slideInUp}
          className="pointer-events-auto flex justify-center gap-4"
        >
          <Button
            variant="candy"
            asChild
            size="lg"
            className="group shadow-sm"
          >
            <a
              href="#projects"
              aria-label="Explore my work"
            >
              Explore My Work
              <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>

          <Button
            asChild
            variant="outliner"
            size="lg"
            className="group shadow-sm"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2"
            >
              <span className="wave text-lg">👋</span>
              Let’s Connect
            </a>
          </Button>
        </motion.div>

        <motion.div
          variants={slideInUp}
          className="pointer-events-auto flex justify-center"
        >
          <SocialLinks />
        </motion.div>
      </MotionOnVisible>

      <div className="pointer-events-auto flex justify-center">
        <ScrollForMore />
      </div>
    </section>
  );
}

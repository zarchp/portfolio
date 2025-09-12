import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeInRight, fadeInUp, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';
import type { Project } from '@/types/project';
import { Code2, ExternalLink } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { MotionOnVisible } from '../../motion/motion-on-visible';

type Props = {
  project: Project;
  className?: string;
};

const cardV: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 140, damping: 18 },
  },
};

const groupV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const chipV: Variants = {
  hidden: { opacity: 0, y: -6 },
  show: { opacity: 1, y: 0 },
};
const btnV: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0 },
};
const itemV: Variants = {
  hidden: { opacity: 0, x: -6 },
  show: { opacity: 1, x: 0 },
};

export default function ProjectGrid({ project, className }: Props) {
  const prefersReduced = useReducedMotion();

  return (
    <MotionOnVisible
      variants={fadeInUp}
      className={cn(className)}
    >
      <Card className="group overflow-hidden rounded-2xl border-border/60 bg-background/70 py-3 shadow-sm backdrop-blur-md transition-all hover:shadow-md md:py-4">
        <CardContent className="flex flex-col gap-4 px-4 md:px-4">
          <picture className="relative flex aspect-[16/9] w-full justify-center overflow-hidden rounded-md border border-border">
            <source
              srcSet={project.imageUrl + '.avif'}
              type="image/avif"
            />
            <source
              srcSet={project.imageUrl + '.webp'}
              type="image/webp"
            />
            <motion.img
              variants={fadeInUp}
              src={project.imageUrl + '.jpg'}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="object-fit h-full w-full rounded-md"
              whileHover={!prefersReduced ? { scale: 1.03, y: -3 } : undefined}
              transition={{ type: 'spring', stiffness: 140, damping: 20 }}
            />
          </picture>

          <MotionOnVisible
            variants={staggerContainer(0.1)}
            className="flex flex-col gap-3"
          >
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-2"
            >
              <Badge
                variant="outline"
                className={cn(
                  `capitalize`,
                  project.status === 'live' &&
                    `border-emerald-500/30 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400`,
                  project.status !== 'live' &&
                    `border-gray-500/30 bg-gray-500/15 text-gray-600 dark:text-gray-400`,
                )}
              >
                <div
                  className={cn(
                    `mr-0.5 size-1.5 rounded-full`,
                    project.status === 'live' &&
                      `animate-pulse bg-emerald-600 dark:bg-emerald-500`,
                    project.status !== 'live' &&
                      `animate-none bg-gray-600 dark:bg-gray-500`,
                  )}
                ></div>
                {project.status}
              </Badge>
              {project.tags?.map((tag) => (
                <Badge variant="outline">{tag}</Badge>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold tracking-tight">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-base text-muted-foreground">
                  {project.subtitle}
                </p>
              )}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-sm leading-relaxed text-secondary-foreground"
            >
              {project.description}
            </motion.div>
          </MotionOnVisible>

          <div className="flex flex-col gap-3">
            <motion.div
              className="flex flex-wrap gap-2"
              variants={staggerContainer(0.1)}
            >
              {project.techStacks.map((stack) => (
                <motion.div
                  key={stack}
                  variants={fadeInRight}
                >
                  <Badge
                    variant="secondary"
                    className="text-xs"
                  >
                    {stack}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {(project.repoUrl || project.liveUrl) && (
            <motion.div
              className="flex gap-2"
              variants={fadeInUp}
            >
              {project.repoUrl && (
                <Button
                  asChild
                  size="sm"
                  variant="outliner"
                  className="w-full"
                >
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Code2 className="size-4" />
                    View Repo
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  variant="candy"
                  asChild
                  size="sm"
                  className="w-full"
                >
                  <a
                    href={project.liveUrl}
                    target={isExternalUrl(project.liveUrl) ? '_blank' : '_self'}
                    rel={
                      isExternalUrl(project.liveUrl) ? 'noreferrer' : 'noopener'
                    }
                  >
                    <ExternalLink className="size-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </motion.div>
          )}
        </CardContent>
      </Card>
    </MotionOnVisible>
  );
}

function isExternalUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

'use client';

import { Badge } from '@/components/ui/badge';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Calendar, ChevronsUpDown, Clock, MapPin, Star } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import type { ExperienceItem } from './experience.types';

type Props = {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
  onToggle: () => void;
};

export function ExperienceCard({ item, index, isLast, onToggle }: Props) {
  const node = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(node, { once: true, margin: '-20%' });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={node}
      className="relative flex items-start"
    >
      <div className="relative mt-6 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: index * 0.08 }}
          className="z-10 flex h-4 w-4 items-center justify-center rounded-full bg-brand ring-4 ring-card"
        >
          <div className="h-2 w-2 rounded-full bg-white" />
        </motion.div>

        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 + 0.15 }}
            className="mt-2 w-px bg-border"
            style={{ minHeight: 54 }}
          />
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={
          isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -40 : 40 }
        }
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="ml-6 flex-1"
      >
        <Collapsible
          open={item.isOpen}
          onOpenChange={onToggle}
          className="flex flex-col gap-6 rounded-xl border border-border bg-background px-4 py-3 shadow-sm sm:px-6 sm:py-4"
        >
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {item.role}
              </h3>
              <h4 className="font-display text-lg font-medium text-brand">
                {item.company}
              </h4>

              <div className="mt-1 flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:gap-6">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-brand" />
                  <span>{item.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-brand" />
                  <span>{item.type}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-brand" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>

            <CollapsibleTrigger asChild>
              <button
                aria-label="Toggle details"
                className="cursor-pointer rounded-md p-2 transition hover:bg-muted"
              >
                <ChevronsUpDown className="h-5 w-5" />
              </button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h5 className="font-display text-base font-medium text-brand">
                Key Achievements:
              </h5>
              <div className="flex flex-col gap-2">
                {item.achievements.map((ach, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -14 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -14 }
                    }
                    transition={{ duration: 0.25, delay: 0.1 + i * 0.06 }}
                    className="flex items-start gap-2 text-sm text-secondary-foreground"
                  >
                    <Star className="mt-0.5 h-4 w-4 shrink-0 fill-yellow-400 text-yellow-500" />
                    <span>{ach}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h5 className="font-display text-base font-medium text-brand">
                Technologies Used:
              </h5>
              <div className="flex flex-wrap gap-2">
                {item.techStacks.map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.9 }
                    }
                    transition={{ duration: 0.2, delay: 0.1 + i * 0.05 }}
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
          </CollapsibleContent>
        </Collapsible>
      </motion.div>
    </div>
  );
}

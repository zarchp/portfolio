'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion } from 'motion/react';

type IconLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

export function IconLink({ href, label, children }: IconLinkProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.a
          whileHover={{ y: 0 }}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={label}
          className="group rounded-md p-2 transition-colors hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          data-umami-event={`social-link-${label}`}
        >
          {children}
        </motion.a>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        align="center"
      >
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}

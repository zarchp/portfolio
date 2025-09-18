'use client';

import { fadeInLeft } from '@/lib/motion';
import { motion } from 'framer-motion';
import * as React from 'react';

export function SidebarCard({
  title,
  icon,
  children,
  className = '',
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      variants={fadeInLeft}
      className={`rounded-xl border border-border bg-background/70 p-4 shadow-sm backdrop-blur-md ${className}`}
    >
      <div className="mb-3 flex items-center gap-2 border-b border-border pb-3">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {children}
    </motion.section>
  );
}

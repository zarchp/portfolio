'use client';

import { fadeInUp } from '@/lib/motion';
import { motion } from 'framer-motion';
import * as React from 'react';

export function PillarCard({
  icon,
  title,
  desc,
  className = '',
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`flex items-center justify-center gap-4 rounded-lg bg-card/80 px-4 py-6 ${className}`}
    >
      <div>{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-secondary-foreground">{desc}</p>
      </div>
    </motion.div>
  );
}

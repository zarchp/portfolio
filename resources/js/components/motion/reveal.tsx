import { cn } from '@/lib/utils'; // optional
import { motion } from 'framer-motion';
import { type PropsWithChildren } from 'react';

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}>;

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, margin: '-80px' }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 12,
        mass: 0.6,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

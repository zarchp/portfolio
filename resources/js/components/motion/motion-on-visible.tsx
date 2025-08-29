// ENGLISH COMMENT LINE: Wrapper to animate children when scrolled into view (once)
'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

type Props = React.ComponentProps<typeof motion.div> & {
  once?: boolean;
  amount?: number; // 0..1
};

export function MotionOnVisible({
  children,
  once = true,
  amount = 0.3,
  ...rest
}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

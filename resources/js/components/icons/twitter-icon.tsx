'use client';

import { cn } from '@/lib/utils';
import type { HTMLMotionProps, Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';

export interface TwitterIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface TwitterIconProps extends HTMLMotionProps<'div'> {
  size?: number;
}

const TwitterIcon = forwardRef<TwitterIconHandle, TwitterIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlled = useRef(false);

    useImperativeHandle(ref, () => {
      isControlled.current = true;
      return {
        startAnimation: () => {
          controls.start('animate');
        },
        stopAnimation: () => {
          controls.start('normal');
        },
      };
    });

    const handleEnter = useCallback(() => {
      if (!isControlled.current) {
        controls.start('animate');
      }
    }, [controls]);

    const handleLeave = useCallback(() => {
      if (!isControlled.current) {
        controls.start('normal');
      }
    }, [controls]);

    const svgVariants: Variants = {
      normal: { scale: 1, rotate: 0 },
      animate: {
        scale: [1, 1.1, 0.95, 1],
        rotate: [0, -3, 3, -2, 0],
        transition: { duration: 1.3, ease: 'easeInOut', repeat: Infinity },
      },
    };

    const pathVariants: Variants = {
      normal: { pathLength: 1, opacity: 1 },
      animate: {
        pathLength: [0, 1],
        opacity: [0.8, 1],
        transition: { duration: 1.3, ease: 'easeInOut', repeat: Infinity },
      },
    };

    return (
      <motion.div
        className={cn('inline-flex', className)}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        {...props}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 512 512"
          height={size}
          width={size}
          animate={controls}
          initial="normal"
          variants={svgVariants}
        >
          <motion.path
            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 
               106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 
               389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
            variants={pathVariants}
          />
        </motion.svg>
      </motion.div>
    );
  },
);

TwitterIcon.displayName = 'TwitterIcon';
export { TwitterIcon };

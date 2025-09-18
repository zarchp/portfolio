// EN: Bottom "Scroll for more" with a mouse icon + animated wheel.
// EN: Uses framer-motion; no Tailwind config changes needed.
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollForMore({
  href = '#projects',
  label = 'Scroll for more',
}: {
  href?: string;
  label?: string;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 120);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 8 }}
      transition={{ delay: 1.9 }}
      className="pointer-events-none absolute bottom-16 left-1/2 -translate-x-1/2 md:bottom-18"
      aria-hidden={!visible}
    >
      <a
        href={href}
        className="group pointer-events-auto flex flex-col items-center gap-3 rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition dark:border-white/10 dark:text-gray-200"
        aria-label={`${label} — go to Projects`}
      >
        <div className="relative h-6 w-[18px] rounded-full border-2 border-gray-400/80 dark:border-white/60">
          <motion.span
            className="absolute top-1.5 left-1/2 h-1.5 w-0.5 -translate-x-1/2 rounded-full bg-gray-400 dark:bg-white/70"
            animate={{ y: [-1, 4, -1], opacity: [1, 1, 0.6] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </a>
    </motion.div>
  );
}

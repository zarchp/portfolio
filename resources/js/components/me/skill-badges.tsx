import { motion } from 'motion/react';
import { Badge } from '../ui/badge';

const skills = [
  'TALL Stack',
  'React',
  'Next.js',
  'Vue.js',
  'TypeScript',
  'FilamentPHP',
  'Laravel',
  'Tailwind CSS',
  'Node.js',
  'Python',
  'PostgreSQL',
  'Docker',
];

export default function SkillBadges() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mb-12"
    >
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.8 + index * 0.1,
              ease: 'easeOut',
            }}
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2 },
            }}
          >
            <Badge
              variant="secondary"
              className="cursor-default border-border bg-card px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-accent-foreground/20 hover:bg-accent"
            >
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

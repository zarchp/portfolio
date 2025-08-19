'use client';

import { motion } from 'motion/react';

interface SkillBadgeProps {
  name: string;
  level?: string;
  years?: number;
  color?: string;
}

interface SkillCategoryProps {
  title: string;
  skills: SkillBadgeProps[];
}

const SkillBadge = ({ name, level, years, color }: SkillBadgeProps) => {
  const getBadgeColor = (skillName: string, customColor?: string) => {
    if (customColor) return customColor;

    const colorMap: Record<string, string> = {
      react: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      vue: 'bg-green-500/10 text-green-400 border-green-500/20',
      tailwind: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      typescript: 'bg-blue-600/10 text-blue-300 border-blue-600/20',
      javascript: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
      laravel: 'bg-red-500/10 text-red-400 border-red-500/20',
      php: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      mysql: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      postgresql: 'bg-blue-700/10 text-blue-300 border-blue-700/20',
      git: 'bg-red-600/10 text-red-300 border-red-600/20',
      docker: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
      aws: 'bg-orange-600/10 text-orange-300 border-orange-600/20',
    };

    const key = skillName.toLowerCase().replace(/[^a-z]/g, '');
    return colorMap[key] || 'bg-muted/50 text-muted-foreground border-border';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className={`group relative inline-flex cursor-default items-center gap-2 rounded-lg border px-3 py-2 transition-all duration-200 ${getBadgeColor(name, color)}`}
    >
      <span className="text-sm font-medium">{name}</span>

      {(level || years) && (
        <div className="flex items-center gap-1 text-xs opacity-70">
          {years && <span className="text-muted-foreground">{years}y</span>}
          {level && (
            <span className="rounded bg-black/20 px-1.5 py-0.5 text-xs text-current">
              {level}
            </span>
          )}
        </div>
      )}

      <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
    </motion.div>
  );
};

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-border bg-card p-6"
    >
      <h3 className="font-display mb-4 text-lg font-semibold text-foreground">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <SkillBadge {...skill} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const skillCategories: SkillCategoryProps[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 'Expert', years: 6 },
        { name: 'Vue.js', level: 'Advanced', years: 4 },
        { name: 'TypeScript', level: 'Expert', years: 5 },
        { name: 'JavaScript', level: 'Expert', years: 8 },
        { name: 'Tailwind CSS', level: 'Expert', years: 4 },
        { name: 'Next.js', level: 'Advanced', years: 3 },
        { name: 'Nuxt.js', level: 'Advanced', years: 3 },
        { name: 'HTML5', level: 'Expert', years: 8 },
        { name: 'CSS3', level: 'Expert', years: 8 },
        { name: 'Sass/SCSS', level: 'Advanced', years: 6 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Laravel', level: 'Expert', years: 7 },
        { name: 'PHP', level: 'Expert', years: 8 },
        { name: 'Node.js', level: 'Advanced', years: 4 },
        { name: 'Express.js', level: 'Advanced', years: 3 },
        { name: 'REST APIs', level: 'Expert', years: 6 },
        { name: 'GraphQL', level: 'Intermediate', years: 2 },
        { name: 'Livewire', level: 'Advanced', years: 3 },
        { name: 'NativePHP', level: 'Intermediate', years: 1 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', level: 'Expert', years: 8 },
        { name: 'PostgreSQL', level: 'Advanced', years: 4 },
        { name: 'MongoDB', level: 'Intermediate', years: 2 },
        { name: 'Redis', level: 'Advanced', years: 3 },
        { name: 'SQLite', level: 'Advanced', years: 5 },
        { name: 'Elasticsearch', level: 'Intermediate', years: 2 },
      ],
    },
    {
      title: 'Tools & Services',
      skills: [
        { name: 'Git', level: 'Expert', years: 8 },
        { name: 'Docker', level: 'Advanced', years: 4 },
        { name: 'AWS', level: 'Advanced', years: 3 },
        { name: 'Vercel', level: 'Advanced', years: 3 },
        { name: 'GitHub Actions', level: 'Advanced', years: 2 },
        { name: 'Webpack', level: 'Advanced', years: 4 },
        { name: 'Vite', level: 'Advanced', years: 2 },
        { name: 'Composer', level: 'Expert', years: 7 },
        { name: 'NPM/Yarn', level: 'Expert', years: 6 },
        { name: 'Linux', level: 'Advanced', years: 6 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full bg-background py-20"
    >
      <div className="container mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Technical Skills
          </h2>
          <p className="font-body mx-auto max-w-2xl text-lg text-muted-foreground">
            A comprehensive overview of my technical expertise, organized by
            category.
            {/* Each skill reflects years of hands-on experience and continuous learning. */}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCategory {...category} />
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="font-body text-sm text-muted-foreground">
            Skill levels: Intermediate (1-2 years) • Advanced (3-5 years) •
            Expert (5+ years)
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}

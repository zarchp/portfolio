import { SiX } from '@icons-pack/react-simple-icons';
import { Github, Linkedin, Mail } from 'lucide-react';

/* export type Level = 'Expert' | 'Advanced' | 'Intermediate';
export type Category = 'frontend' | 'backend' | 'database' | 'devops' | 'tools';

export type StackItem = {
  name: string;
  icon: string;
  level: Level;
  years?: number;
  hasStar?: boolean;
  category: Category;
  className?: string;
}; */

export const profile = {
  fullName: 'Muhamad Anzar Syahid',
  name: 'Anzar Syahid',
  email: 'anzar.syahid@gmail.com',
  phone: '6285777672735',
  role: 'Full Stack Developer',
  roles: [
    'Full Stack Developer',
    'Laravel Specialist',
    'React Developer',
    'Mobile Developer',
    'DevOps Engineer',
    'Vibe Code Cleanup Specialist',
    'Passionate Reader',
  ],
  status: 'Available for Hire',
  description:
    'I specialize in building modern web apps, simplifying complex ideas into intuitive, scalable products that drive user growth and business impact.',
  socials: [
    {
      href: 'mailto:anzar.syahid@gmail.com',
      label: 'Email',
      icon: Mail,
    },
    {
      href: 'https://www.linkedin.com/in/anzar-syahid',
      label: 'LinkedIn',
      icon: Linkedin,
    },
    {
      href: 'https://github.com/zarchp',
      label: 'GitHub',
      icon: Github,
    },
    {
      href: 'https://x.com/ZarChp',
      label: 'X',
      icon: SiX,
    },
  ],
  links: {
    whatsapp:
      'https://wa.me/6285777672735?text=Hello%2C%20I%20visited%20your%20portfolio%20and%20I%27m%20interested%20in%20your%20web%20development%20services.%20Can%20we%20discuss%20further%3F',
  },
  categories: ['All', 'Backend', 'Frontend', 'Databases', 'Tools'],
  stacksCategories: [
    { key: 'all', label: 'All' },
    { key: 'backend', label: 'Backend' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'database', label: 'Databases' },
    // { key: 'devops', label: 'DevOps' },
    { key: 'tools', label: 'Tools' },
    // { key: 'os', label: 'OS' },
  ],
  stacks: [
    // BACKEND
    {
      name: 'Laravel',
      icon: '/icons/laravel.svg',
      level: 'Expert',
      category: 'backend',
      hasStar: true,
    },
    {
      name: 'PHP',
      icon: '/icons/php.svg',
      level: 'Expert',
      category: 'backend',
      hasStar: false,
    },
    {
      name: 'Node.js',
      icon: '/icons/node.svg',
      level: 'Advanced',
      category: 'backend',
      hasStar: false,
    },
    {
      name: 'Livewire',
      icon: '/icons/livewire.svg',
      level: 'Advanced',
      category: 'backend',
      hasStar: false,
    },

    // FRONTEND
    {
      name: 'TypeScript',
      icon: '/icons/ts.svg',
      level: 'Expert',
      category: 'frontend',
      hasStar: true,
    },
    {
      name: 'React',
      icon: '/icons/react.svg',
      level: 'Expert',
      category: 'frontend',
      hasStar: true,
    },
    {
      name: 'Tailwind CSS',
      icon: '/icons/tailwind.svg',
      level: 'Expert',
      category: 'frontend',
      hasStar: false,
    },
    {
      name: 'Vue.js',
      icon: '/icons/vue.svg',
      level: 'Advanced',
      category: 'frontend',
      hasStar: false,
    },

    // DATABASE
    {
      name: 'PostgreSQL',
      icon: '/icons/postgres.svg',
      level: 'Advanced',
      category: 'database',
      hasStar: false,
    },
    {
      name: 'MySQL',
      icon: '/icons/mysql.svg',
      level: 'Expert',
      category: 'database',
      hasStar: false,
    },
    {
      name: 'MongoDB',
      icon: '/icons/mongo.svg',
      level: 'Intermediate',
      category: 'database',
      hasStar: false,
    },
    {
      name: 'Redis',
      icon: '/icons/redis.svg',
      level: 'Advanced',
      category: 'database',
      hasStar: false,
    },
    {
      name: 'SQLite',
      icon: '/icons/sqlite.svg',
      level: 'Advanced',
      category: 'database',
      hasStar: false,
    },

    // TOOLS
    {
      name: 'Docker',
      icon: '/icons/docker.svg',
      level: 'Advanced',
      category: 'tools',
      hasStar: false,
    },
    {
      name: 'Git',
      icon: '/icons/git.svg',
      level: 'Expert',
      category: 'tools',
      hasStar: false,
    },
    {
      name: 'Vercel',
      icon: '/icons/vercel.svg',
      level: 'Advanced',
      category: 'tools',
      hasStar: false,
    },
    {
      name: 'AWS',
      icon: '/icons/aws.svg',
      level: 'Intermediate',
      category: 'tools',
      hasStar: false,
    },
  ],
  projects: [
    {
      name: 'Sudoku Game',
      description: 'Interactive Sudoku game with hints and leaderboard.',
      tech: ['Laravel', 'React', 'TypeScript'],
      link: '/projects/sudoku',
    },
  ],
};

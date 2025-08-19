import { Github, Linkedin, Mail } from 'lucide-react';

export const profile = {
  fullName: 'Muhamad Anzar Syahid',
  name: 'Anzar Syahid',
  role: 'Full-Stack Developer',
  roles: [
    'Full-Stack Developer',
    'Front-End Developer',
    'Back-End Developer',
    'Mobile Developer',
    'Software Engineer',
  ],
  status: 'Available for Hire',
  description:
    'I specialize in building modern web apps, \n simplifying complex ideas into intuitive, scalable products that drive user growth and business impact.',
  skills: [
    'Laravel',
    'React',
    'Tailwind',
    'TypeScript',
    'Livewire',
    'Filament',
  ],
  projects: [
    {
      name: 'Sudoku Game',
      description: 'Interactive Sudoku game with hints and leaderboard.',
      tech: ['Laravel', 'React', 'TypeScript'],
      link: '/projects/sudoku',
    },
  ],
  contact: {
    email: 'you@example.com',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
  socials: [
    {
      href: 'mailto:hello@example.com',
      label: 'Email',
      icon: Mail,
    },
    {
      href: 'https://github.com/your-handle',
      label: 'GitHub',
      icon: Github,
    },
    {
      href: 'https://www.linkedin.com/in/your-handle',
      label: 'LinkedIn',
      icon: Linkedin,
    },
  ],
};

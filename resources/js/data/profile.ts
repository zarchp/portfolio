import { SiX } from '@icons-pack/react-simple-icons';
import { Github, Linkedin, Mail } from 'lucide-react';

export const profile = {
  fullName: 'Muhamad Anzar Syahid',
  name: 'Anzar Syahid',
  email: 'anzar.syahid@gmail.com',
  phone: '6285777672735',
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
    'I specialize in building modern web apps, simplifying complex ideas into intuitive, scalable products that drive user growth and business impact.',
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
      href: 'https://github.com/your-handle',
      label: 'GitHub',
      icon: Github,
    },
    {
      href: 'https://www.linkedin.com/in/your-handle',
      label: 'LinkedIn',
      icon: Linkedin,
    },
    {
      href: 'mailto:hello@example.com',
      label: 'Email',
      icon: Mail,
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
};

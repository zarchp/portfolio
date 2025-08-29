// ENGLISH COMMENT LINE: Centralized constants for DRY mapping + types
import { profile } from '@/data/profile';
import { SiWhatsapp, SiX } from '@icons-pack/react-simple-icons';
import {
  BadgeCheck,
  Briefcase,
  Download,
  Github,
  Link,
  Linkedin,
  Mail,
  Rocket,
} from 'lucide-react';

export const expertises = [
  'Laravel',
  'Livewire',
  'React',
  'Tailwind CSS',
  'Filament',
  'NativePHP',
  'MySQL',
  'AWS',
] as const;

export const highlights = [
  { icon: <Rocket className="size-5" />, label: '30+ Projects Delivered' },
  {
    icon: <BadgeCheck className="size-5" />,
    label: 'Trusted by Clients & Teams',
  },
  { icon: <Briefcase className="size-5" />, label: '9+ Years of Experience' },
] as const;

export const contacts = [
  {
    icon: <Mail className="size-5" />,
    label: 'anzar.syahid@gmail.com',
    href: 'mailto:anzar.syahid@gmail.com',
  },
  {
    icon: <Linkedin className="size-5" />,
    label: 'linkedin.com/in/anzar-syahid',
    href: 'https://www.linkedin.com/in/anzar-syahid',
  },
  {
    icon: <Github className="size-5" />,
    label: 'github.com/zarchp',
    href: 'https://github.com/zarchp',
  },
  {
    icon: <SiX className="size-5" />,
    label: 'x.com/ZarChp',
    href: 'https://x.com/ZarChp',
  },
  {
    icon: <SiWhatsapp className="size-5" />,
    label: 'Chat on WhatsApp',
    href: profile.links.whatsapp,
  },
  {
    icon: <Download className="size-5" />,
    label: 'Download CV',
    href: '#',
  },
] as const;

export const sidebarIcons = {
  link: <Link />,
} as const;

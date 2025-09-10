'use client';

import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { SocialLinks } from './hero/social-links';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: Twitter,
    },
    {
      name: 'Email',
      href: 'mailto:hello@example.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="relative border-t border-border">
      <div className="container mx-auto px-4 pt-4 pb-20">
        <div className="flex flex-col items-center gap-4">
          <SocialLinks
            gap="gap-4"
            iconSize="size-4 md:size-5"
          />

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Anzar Syahid
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

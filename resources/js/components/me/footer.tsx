'use client';

import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

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
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 pt-12 pb-24">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-10 w-10 rounded-full transition-colors duration-200 hover:bg-secondary"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              );
            })}
          </div>

          {/* Copyright and Credits */}
          <div className="space-y-2 text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Anzar Syahid
            </p>
            <p className="text-xs text-muted-foreground">
              Built with{' '}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-primary"
              >
                Next.js
              </a>
              ,{' '}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-primary"
              >
                Tailwind CSS
              </a>
              , and{' '}
              <a
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-primary"
              >
                shadcn/ui
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

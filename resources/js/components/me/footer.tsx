'use client';

import { SocialLinks } from './hero/social-links';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-deferred relative border-t border-border">
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

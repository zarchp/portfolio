import { Code, Coffee, Heart } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-[5px] border-border bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-8 md:grid-cols-3">
          {/* Left - Branding */}
          <div>
            <h3 className="font-brutal mb-2 text-2xl text-primary">
              DEV.PORTFOLIO
            </h3>
            <p className="font-bold text-muted-foreground">
              Building the future, one line of code at a time
            </p>
          </div>

          {/* Center - Made with love */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 font-bold text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 fill-destructive text-destructive" />
              <span>using</span>
              <Code className="h-4 w-4 text-primary" />
              <span>and</span>
              <Coffee className="text-neo-orange h-4 w-4" />
            </div>
            <p className="mt-2 text-sm font-bold text-muted-foreground">
              React • Tailwind • TypeScript • shadcn/ui
            </p>
          </div>

          {/* Right - Theme Toggle & Copyright */}
          <div className="text-center md:text-right">
            <div className="mb-3 flex justify-center md:justify-end">
              <ThemeToggle />
            </div>
            <p className="text-sm font-bold text-muted-foreground">
              © {currentYear} Full Stack Developer
            </p>
            <p className="text-xs font-bold text-muted-foreground">
              All rights reserved
            </p>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-8 border-t-3 border-border pt-6 text-center">
          <p className="text-sm font-bold text-muted-foreground">
            🚀 Ready to start your next project? Let's connect and build
            something amazing together!
          </p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const FloatingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Work', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 md:bottom-6 ${
        scrolled ? 'scale-80 md:scale-95' : 'scale-85 md:scale-100'
      }`}
    >
      <div
        className={`rounded-full border border-border bg-card/80 px-4 py-1 shadow-lg backdrop-blur-lg transition-all duration-300 ${
          scrolled ? 'shadow-xl' : 'shadow-lg'
        }`}
      >
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="cursor-pointer px-1.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="h-9 w-9 rounded-full p-0 hover:bg-accent/50"
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="hidden items-center gap-2 md:hidden">
            <div className="md:hidden">
              <Sheet
                open={isOpen}
                onOpenChange={setIsOpen}
              >
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 w-9 rounded-full p-0 hover:bg-accent/50"
                  >
                    <Menu className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-64 border-border bg-card"
                >
                  <div className="mt-8 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-lg font-semibold text-foreground">
                        Navigation
                      </span>
                    </div>
                    <nav className="flex flex-col gap-2">
                      {navItems.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => scrollToSection(item.href)}
                          className="rounded-lg px-3 py-2 text-left text-foreground transition-all duration-200 hover:bg-accent/50 hover:text-primary"
                        >
                          {item.label}
                        </button>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FloatingNavbar;

'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';

type NavItem = { label: string; href: `#${string}` };

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Work', href: '#experience' },
  { label: 'Stacks', href: '#stacks' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function FloatingNavbar() {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const [pill, setPill] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    visible: false,
  });

  const barRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const lockUntilRef = useRef<number>(0);
  const targetIndexRef = useRef<number | null>(null);

  const indexOfId = (id: string) =>
    navItems.findIndex((n) => n.href.slice(1) === id);
  const activeIndex = useMemo(() => indexOfId(activeSection), [activeSection]);

  const movePillTo = (index: number | null) => {
    const bar = barRef.current;
    if (!bar || index === null || !itemRefs.current[index]) {
      setPill((p) => ({ ...p, visible: false }));
      return;
    }
    const el = itemRefs.current[index]!;
    const barRect = bar.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    const scaleX = bar.offsetWidth / barRect.width;
    const scaleY = bar.offsetHeight / barRect.height;

    setPill({
      left: (elRect.left - barRect.left) * scaleX,
      top: (elRect.top - barRect.top) * scaleY,
      width: elRect.width * scaleX,
      height: elRect.height * scaleY,
      visible: true,
    });
  };

  const computeActiveByScroll = () => {
    const now = performance.now();
    if (now < lockUntilRef.current) return;

    const viewportMid = window.innerHeight / 2;
    let bestId: string | null = null;
    let bestDist = Number.POSITIVE_INFINITY;

    for (const { href } of navItems) {
      const el = document.querySelector(href) as HTMLElement | null;
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (r.height <= 0) continue;

      const mid = r.top + r.height / 2;
      const dist = Math.abs(mid - viewportMid);

      if (r.bottom < -64 || r.top > window.innerHeight + 64) continue;

      if (dist < bestDist) {
        bestDist = dist;
        bestId = href.slice(1);
      }
    }

    if (bestId && bestId !== activeSection) {
      setActiveSection(bestId);
      movePillTo(indexOfId(bestId));
    } else if (bestId) {
      movePillTo(indexOfId(bestId));
    }
  };

  /* --------------------------- Effects --------------------------- */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // scroll spy via rAF to batch work
      if (!('requestAnimationFrame' in window)) {
        computeActiveByScroll();
      } else {
        requestAnimationFrame(computeActiveByScroll);
      }
    };
    requestAnimationFrame(computeActiveByScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const ro = new ResizeObserver(() =>
      movePillTo(targetIndexRef.current ?? activeIndex),
    );
    if (barRef.current) ro.observe(barRef.current);

    (document as any).fonts?.ready?.then?.(() =>
      movePillTo(targetIndexRef.current ?? activeIndex),
    );

    (document as any).fonts?.ready?.then?.(() => computeActiveByScroll());

    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  useEffect(() => {
    requestAnimationFrame(() => movePillTo(activeIndex));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* --------------------------- Handlers --------------------------- */

  const toggleTheme = () => {
    setIsDark((v) => !v);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (href: string, i: number) => {
    const el = document.querySelector(href);
    if (!el) return;

    lockUntilRef.current = performance.now() + 1200;
    targetIndexRef.current = i;

    movePillTo(i);
    setActiveSection(href.slice(1));

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 md:bottom-6 ${
        scrolled ? 'scale-[.8] md:scale-[.95]' : 'scale-[.85] md:scale-100'
      }`}
      aria-label="Site navigation"
    >
      <div
        className={`rounded-full border border-border bg-card/80 px-1 py-0.5 shadow-lg backdrop-blur-lg transition-all duration-300 ${
          scrolled ? 'shadow-xl' : 'shadow-lg'
        }`}
      >
        <div className="flex items-center gap-1">
          <div
            ref={barRef}
            className="group relative flex items-center gap-1"
          >
            <motion.div
              animate={{
                left: pill.left,
                top: pill.top,
                width: pill.width,
                height: pill.height,
                opacity: pill.visible ? 1 : 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 40,
                mass: 0.6,
              }}
              className="pointer-events-none absolute rounded-full bg-brand shadow-sm"
            />

            {navItems.map((item, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={item.label}
                  ref={(el) => (itemRefs.current[i] = el)}
                  onClick={() => scrollToSection(item.href, i)}
                  onMouseEnter={() => movePillTo(i)}
                  onFocus={() => movePillTo(i)}
                  onMouseLeave={() =>
                    movePillTo(targetIndexRef.current ?? activeIndex)
                  }
                  onBlur={() =>
                    movePillTo(targetIndexRef.current ?? activeIndex)
                  }
                  className={`relative z-10 cursor-pointer rounded-full px-2 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-white group-hover:text-brand hover:text-white'
                      : 'text-muted-foreground hover:text-white/90'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="relative z-10 ml-1 h-9 w-9 rounded-full p-0 text-muted-foreground hover:bg-accent/50"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}

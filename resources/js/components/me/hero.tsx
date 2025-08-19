'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { profile } from '@/data/profile';
import styles from 'css/hero-grid.module.css';
import {
  ArrowRight,
  createLucideIcon,
  Download,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { AnimatedText } from '../smooth/animated-group';
import { AnimatedGroup } from '../smooth/animated-text';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import ScrollForMore from './scroll-for-more';

const XIcon = createLucideIcon('X', [
  [
    'path',
    {
      d: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
      stroke: 'none',
      fill: 'currentColor',
    },
  ],
]);

const CELL_SIZE = 120; // px
const COLORS = [
  'oklch(0.72 0.2 352.53)', // blue
  '#A764FF',
  '#4B94FD',
  '#FD4B4E',
  '#FF8743',
];

function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function SubGrid({ idx }: { idx: number }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [cellColors, setCellColors] = useState<(string | null)[]>([
    null,
    null,
    null,
    null,
  ]);
  // Add refs for leave timeouts
  const leaveTimeouts = useRef<(NodeJS.Timeout | null)[]>([
    null,
    null,
    null,
    null,
  ]);

  function handleHover(cellIdx: number) {
    setHovered(cellIdx);
    // Clear any pending timeout for this cell
    if (leaveTimeouts.current[cellIdx]) {
      clearTimeout(leaveTimeouts.current[cellIdx]!);
      leaveTimeouts.current[cellIdx] = null;
    }
    setCellColors((prev) =>
      prev.map((c, i) => (i === cellIdx ? getRandomColor() : c)),
    );
  }
  function handleLeave(cellIdx: number) {
    setHovered(null);
    // Add a small delay before removing the color
    leaveTimeouts.current[cellIdx] = setTimeout(() => {
      setCellColors((prev) => prev.map((c, i) => (i === cellIdx ? null : c)));
      leaveTimeouts.current[cellIdx] = null;
    }, 120);
  }
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      leaveTimeouts.current.forEach((t) => t && clearTimeout(t));
    };
  }, []);

  return (
    <div
      className={styles.subgrid}
      style={{ pointerEvents: 'none' }}
    >
      {[0, 1, 2, 3].map((cellIdx) => (
        <div
          key={cellIdx}
          className={styles.cell}
          style={{
            background: cellColors[cellIdx] || 'transparent',
            pointerEvents: 'auto',
          }}
          onMouseEnter={() => handleHover(cellIdx)}
          onMouseLeave={() => handleLeave(cellIdx)}
        />
      ))}
    </div>
  );
}

function InteractiveGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [grid, setGrid] = useState({ columns: 0, rows: 0 });

  useEffect(() => {
    function updateGrid() {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
        setGrid({
          columns: Math.ceil(width / CELL_SIZE),
          rows: Math.ceil(height / CELL_SIZE),
        });
      }
    }
    updateGrid();
    window.addEventListener('resize', updateGrid);
    return () => window.removeEventListener('resize', updateGrid);
  }, []);

  const total = grid.columns * grid.rows;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{ width: '100%', height: '100%' }}
    >
      <div
        className={styles.mainGrid}
        style={
          {
            gridTemplateColumns: `repeat(${grid.columns}, 1fr)`,
            gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
            '--grid-cell-size': `${CELL_SIZE}px`,
            width: '100%',
            height: '100%',
          } as React.CSSProperties
        }
      >
        {Array.from({ length: total }).map((_, idx) => (
          <SubGrid
            key={idx}
            idx={idx}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <InteractiveGrid />
      <AnimatedGroup
        preset="blur-slide"
        className="pointer-events-none flex flex-col items-center gap-12 text-center"
      >
        <div className="flex flex-col gap-6">
          <AnimatedGroup
            preset="blur-slide"
            className="pointer-events-none flex justify-center gap-3"
          >
            <Badge
              variant="outline"
              className="rounded-full border-success/30 bg-success/10 px-4 py-2 text-sm font-medium text-success transition-colors duration-300 hover:bg-success/20"
            >
              <div className="relative mr-2 flex h-2.5 w-2.5 items-center justify-center">
                <div className="absolute h-full w-full animate-ping rounded-full bg-green-500"></div>
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              {profile.status}
            </Badge>
          </AnimatedGroup>

          <AnimatedText
            as="h1"
            className="text-5xl font-bold tracking-tight text-pretty md:text-6xl lg:text-7xl"
          >
            {profile.name}
          </AnimatedText>

          <AnimatedText
            as="h2"
            className="text-2xl font-semibold text-pretty md:text-3xl lg:text-4xl"
          >
            <span className="text-brand">{profile.role}</span>
          </AnimatedText>

          <AnimatedText
            as="p"
            className="mx-auto max-w-sm text-muted-foreground md:max-w-xl lg:max-w-3xl lg:text-xl"
            delay={0.15}
          >
            {profile.description}
          </AnimatedText>
        </div>
        <AnimatedGroup
          preset="slide"
          className="pointer-events-auto flex justify-center gap-4"
        >
          <Button
            variant="candy"
            size="lg"
            className="group"
          >
            Explore My Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>

          <Button
            variant="outliner"
            size="lg"
            className="group"
          >
            <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            Get My CV
          </Button>
        </AnimatedGroup>
        <AnimatedGroup
          preset="slide"
          className="pointer-events-auto flex justify-center gap-4"
        >
          <div className="flex gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  aria-label="Github"
                  className="group rounded-md p-2 transition-all duration-300 hover:translate-y-[-2px] hover:bg-accent"
                >
                  <Github className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-background" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Github</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  aria-label="Github"
                  className="group rounded-md p-2 transition-all duration-300 hover:translate-y-[-2px] hover:bg-accent"
                >
                  <Linkedin className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-background" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="#"
                  aria-label="Github"
                  className="group rounded-md p-2 transition-all duration-300 hover:translate-y-[-2px] hover:bg-accent"
                >
                  <Mail className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-background" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Email</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </AnimatedGroup>
      </AnimatedGroup>

      <AnimatedGroup
        preset="slide"
        className="pointer-events-auto flex justify-center gap-4"
      >
        <ScrollForMore />
      </AnimatedGroup>
    </section>
  );
}

function HoverIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      href={href}
      aria-label={label}
      className="group rounded-md p-2 transition-colors hover:bg-accent"
    >
      {children}
    </motion.a>
  );
}

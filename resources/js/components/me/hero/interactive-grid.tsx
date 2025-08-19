'use client';

import styles from '@/../css/hero-grid.module.css';
import { useEffect, useMemo, useRef, useState } from 'react';

const CELL_SIZE_PX = 120 as const;
const COLORS = [
  'oklch(0.72 0.2 352.53)', // brand
  '#A764FF',
  '#4B94FD',
  '#FD4B4E',
  '#FF8743',
] as const;

const randColor = () => COLORS[(Math.random() * COLORS.length) | 0];

function SubGrid() {
  // ENGLISH COMMENT LINE: 2x2 subgrid whose cells gain a color on hover, and fade after a short delay.
  const [cellColors, setCellColors] = useState<Array<string | null>>([
    null,
    null,
    null,
    null,
  ]);
  const leaveTimers = useRef<Array<number | null>>([null, null, null, null]);

  const onEnter = (i: number) => {
    if (leaveTimers.current[i]) {
      window.clearTimeout(leaveTimers.current[i]!);
      leaveTimers.current[i] = null;
    }
    setCellColors((prev) =>
      prev.map((c, idx) => (idx === i ? randColor() : c)),
    );
  };

  const onLeave = (i: number) => {
    leaveTimers.current[i] = window.setTimeout(() => {
      setCellColors((prev) => prev.map((c, idx) => (idx === i ? null : c)));
      leaveTimers.current[i] = null;
    }, 120);
  };

  useEffect(() => {
    return () => {
      leaveTimers.current.forEach((t) => t && window.clearTimeout(t));
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
            background: cellColors[cellIdx] ?? 'transparent',
            pointerEvents: 'auto',
          }}
          onMouseEnter={() => onEnter(cellIdx)}
          onMouseLeave={() => onLeave(cellIdx)}
        />
      ))}
    </div>
  );
}

export function InteractiveGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const [cols, setCols] = useState(0);
  const [rows, setRows] = useState(0);

  const motionSafe = useMemo(() => {
    if (typeof window === 'undefined') return true;
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    // ENGLISH COMMENT LINE: Observe container size; compute grid without window listeners.
    const ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      setCols(Math.max(1, Math.ceil(width / CELL_SIZE_PX)));
      setRows(Math.max(1, Math.ceil(height / CELL_SIZE_PX)));
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  if (!motionSafe) return null;
  const total = cols * rows;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    >
      <div
        className={styles.mainGrid}
        style={
          {
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            '--grid-cell-size': `${CELL_SIZE_PX}px`,
          } as React.CSSProperties
        }
      >
        {Array.from({ length: total }).map((_, i) => (
          <SubGrid key={i} />
        ))}
      </div>
    </div>
  );
}

import { useEffect, useRef } from 'react';

export default function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d')!;
    let id = 0;
    let raf = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * 600 + 40,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.2 + 0.6,
    }));

    const obs = new ResizeObserver(resize);
    obs.observe(canvas);

    let running = true;
    document.addEventListener('visibilitychange', () => {
      running = document.visibilityState === 'visible';
      if (running) loop();
    });

    function loop() {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0.6;
      ctx.fillStyle =
        getComputedStyle(document.documentElement)
          .getPropertyValue('--particle-color')
          .trim() || 'rgba(0,0,0,.25)';

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    }

    resize();
    loop();
    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <canvas
        ref={ref}
        className="h-full w-full"
        style={{ ['--particle-color' as any]: 'oklch(0.70 0.03 320 / .45)' }}
      />
    </div>
  );
}

export default function RadialSpot() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_0%,oklch(0.95_0.03_320/0.7),transparent_60%)] dark:bg-[radial-gradient(1200px_circle_at_50%_0%,oklch(0.35_0.02_320/0.5),transparent_60%)]" />
      <div className="absolute inset-0 [background-image:repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,.02)_2px,rgba(0,0,0,.02)_3px),repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(0,0,0,.02)_2px,rgba(0,0,0,.02)_3px)] opacity-30 mix-blend-soft-light dark:opacity-20" />
    </div>
  );
}

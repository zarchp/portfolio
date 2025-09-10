export default function AuroraBeams() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-32 left-1/2 size-[110vmax] -translate-x-1/2 animate-[spin_40s_linear_infinite] opacity-50 blur-3xl">
        <div className="size-full rounded-full bg-[conic-gradient(from_180deg,oklch(0.86_0.17_340/0.25),transparent_30%,oklch(0.90_0.12_260/0.25),transparent_60%,oklch(0.88_0.16_20/0.25),transparent)] dark:bg-[conic-gradient(from_180deg,oklch(0.45_0.10_340/0.35),transparent_30%,oklch(0.40_0.08_260/0.35),transparent_60%,oklch(0.42_0.12_20/0.35),transparent)]" />
      </div>
    </div>
  );
}

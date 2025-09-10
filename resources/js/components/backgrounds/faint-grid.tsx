export default function FaintGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]"
    >
      <div className="h-full w-full bg-[linear-gradient(to_right,theme(colors.stone.200/40)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.stone.200/40)_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,theme(colors.stone.800/50)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.stone.800/50)_1px,transparent_1px)]" />
    </div>
  );
}

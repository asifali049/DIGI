export function GlobalBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-background"
    >
      <div
        className="
          absolute
          left-1/2
          top-[-10%]
          h-[70vh]
          w-[140vw]
          -translate-x-1/2
          rounded-full
          bg-violet-600/[0.07]
          blur-[160px]
          dark:bg-violet-600/[0.14]
        "
      />

      <div
        className="
          absolute
          right-[-10%]
          top-[30%]
          h-[60vh]
          w-[60vw]
          rounded-full
          bg-cyan-500/[0.05]
          blur-[160px]
          dark:bg-cyan-500/[0.10]
        "
      />

      <div
        className="
          absolute
          bottom-[-10%]
          left-[-10%]
          h-[60vh]
          w-[60vw]
          rounded-full
          bg-fuchsia-500/[0.05]
          blur-[160px]
          dark:bg-fuchsia-500/[0.10]
        "
      />
    </div>
  );
}

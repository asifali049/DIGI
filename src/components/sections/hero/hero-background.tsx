export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Left Orb */}

      <div
        className="
          absolute
          left-30
          top-30
          h-72
          w-72
          rounded-full
          bg-violet-600/40
          blur-[120px]
          sm:h-80
          sm:w-80
          lg:h-96
          lg:w-96
        "
      />

      {/* Right Orb */}

      <div
        className="
          absolute
          right-30
          top-20
          h-72
          w-72
          rounded-full
          bg-cyan-500/30
          blur-[120px]
          sm:h-80
          sm:w-80
          lg:h-96
          lg:w-96
        "
      />

      {/* Bottom Orb */}

      <div
        className="
          absolute
          bottom-45
          left-1/2
          h-85
          w-85
          -translate-x-1/2
          rounded-full
          bg-fuchsia-600/10
          blur-[160px]
          sm:h-105
          sm:w-105
          lg:h-125
          lg:w-125
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          dark:opacity-[0.06]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
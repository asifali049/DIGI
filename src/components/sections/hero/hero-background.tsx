export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Left Orb */}
      <div className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-violet-600/40 blur-[120px]" />

      {/* Right Orb */}
      <div className="absolute right-[-120px] top-20 h-96 w-96 rounded-full bg-cyan-500/30 blur-[120px]" />

      {/* Bottom Orb */}
      <div className="absolute bottom-[-180px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-[160px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
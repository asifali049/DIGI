export function GridBackground() {
  return (
    <div
      className="absolute inset-0 -z-10 opacity-[0.05]"
      style={{
        backgroundImage: `
        linear-gradient(to right, white 1px, transparent 1px),
        linear-gradient(to bottom, white 1px, transparent 1px)
      `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}
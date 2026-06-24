export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-50 [data-theme=light]:opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%)",
        }}
      />
      <div
        className="absolute -top-65 left-[55%] h-175 w-175 rounded-full opacity-55 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, var(--electric) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-225 -left-50 h-150 w-150 rounded-full opacity-40 blur-[80px]"
        style={{
          background: "radial-gradient(circle, var(--royal) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--cyan-glow), transparent 70%)", animation: "var(--animate-aurora)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--violet-glow), transparent 70%)", animation: "var(--animate-aurora)", animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--neon), transparent 70%)", animation: "var(--animate-aurora)", animationDelay: "-12s" }}
      />
      <div className="absolute inset-0 noise opacity-[0.015] mix-blend-overlay" />
    </div>
  );
}

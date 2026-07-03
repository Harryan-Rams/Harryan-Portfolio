import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement;
      setHover(Boolean(t.closest("a, button, [data-cursor='hover']")));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed z-[100] hidden md:block transition-transform duration-150 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hover ? 1.8 : 1})`,
        }}
      >
        <div
          className="h-6 w-6 rounded-full border border-primary/60 transition-colors"
          style={{ boxShadow: "0 0 20px color-mix(in oklab, var(--cyan-glow) 60%, transparent)" }}
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none fixed z-[99] hidden md:block h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  );
}

import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${Math.round(v).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="About" title="Young developer. Curious mind. Big mission." />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              On <span className="text-foreground">25th November 2024</span>, I met my mentor{" "}
              <span className="text-foreground">Clinton Ochieng</span> — and my journey into coding began. Before
              that day I knew almost nothing about programming. Today I'm building real websites and dreaming up
              real solutions.
            </p>
            
            {/* Mentor Card */}
            <div className="border-gradient p-5 my-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden">
                  <img
                    src="/clinton-ochieng.jpg"
                    alt="Clinton Ochieng"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">Clinton Ochieng</h3>
                  <p className="text-sm text-muted-foreground">My Mentor & Teacher</p>
                </div>
              </div>
            </div>
            
            <p>
              I'm learning the fundamentals of web development with HTML and CSS, one project at a time. Every
              project teaches me something new — from structuring content, to working with images, to designing
              attractive interfaces, to expressing creativity through code.
            </p>
            <p>
              Beyond the code, I care about <span className="text-gradient-static font-medium">using technology
              to help people</span>. That's the spark behind <span className="text-foreground">Compassion Safe</span>{" "}
              — a platform I'm developing to help organizations securely manage records for children and caregivers.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {["HTML", "CSS", "Web Design", "Responsive Layouts", "Problem Solving", "Tech for Good", "KidsCodeLab", "Compassion"].map((t) => (
                <span key={t} className="rounded-full glass px-3 py-1 text-xs font-mono text-muted-foreground">{t}</span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { v: 5, suffix: "", l: "Projects built" },
              { v: 1, suffix: "", l: "Mentor guiding me" },
              { v: 2, suffix: "", l: "Languages learned" },
              { v: 1, suffix: "", l: "Mission in motion" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-gradient p-6"
              >
                <div className="font-display text-4xl font-semibold text-gradient-static">
                  <Counter to={s.v} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">
        <span className="h-1 w-1 rounded-full bg-primary" /> {eyebrow}
      </div>
      <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}

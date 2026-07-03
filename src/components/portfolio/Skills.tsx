import { motion } from "motion/react";
import { Code2, Palette, Layout, Heart, Sparkles } from "lucide-react";
import { SectionHeader } from "./About";

const categories = [
  {
    Icon: Code2, title: "Web Fundamentals", accent: "var(--cyan-glow)",
    skills: [
      { name: "HTML — Structure & semantics", level: 85 },
      { name: "CSS — Styling & layout", level: 80 },
      { name: "Responsive design", level: 70 },
      { name: "Accessibility basics", level: 60 },
    ],
  },
  {
    Icon: Palette, title: "Design & Creativity", accent: "var(--violet-glow)",
    skills: [
      { name: "Color theory", level: 75 },
      { name: "Typography & spacing", level: 70 },
      { name: "UI composition", level: 72 },
      { name: "Visual storytelling", level: 68 },
    ],
  },
  {
    Icon: Layout, title: "Project Building", accent: "var(--neon)",
    skills: [
      { name: "Personal webpage", level: 90 },
      { name: "Multi-page sites", level: 75 },
      { name: "Forms & menus", level: 70 },
      { name: "Portfolio (this site!)", level: 80 },
    ],
  },
  {
    Icon: Heart, title: "Mindset", accent: "var(--cyan-glow)",
    skills: [
      { name: "Curiosity & learning", level: 98 },
      { name: "Persistence", level: 92 },
      { name: "Empathy for users", level: 95 },
      { name: "Teamwork with mentor", level: 96 },
    ],
  },
  {
    Icon: Sparkles, title: "Currently Learning", accent: "var(--violet-glow)",
    skills: [
      { name: "JavaScript basics", level: 35 },
      { name: "Working with databases", level: 25 },
      { name: "Building Compassion Safe", level: 40 },
      { name: "Deploying real sites", level: 50 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Skills"
          title="What I'm learning and growing."
          subtitle="A snapshot of the skills I've picked up since November 2024 — and the ones I'm leveling up next."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group border-gradient relative overflow-hidden p-6 transition-transform hover:-translate-y-1"
              data-cursor="hover"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-40"
                style={{ background: `radial-gradient(circle, ${cat.accent}, transparent 70%)` }}
              />
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: `color-mix(in oklab, ${cat.accent} 20%, transparent)`, color: cat.accent }}
                >
                  <cat.Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold">{cat.title}</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {cat.skills.map((s) => (
                  <li key={s.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-foreground/90">{s.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${cat.accent}, color-mix(in oklab, ${cat.accent} 60%, white))` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Github, Check, Sparkles, Lightbulb, Wrench } from "lucide-react";
import { SectionHeader } from "./About";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Category = "Flagship" | "Live" | "In Development";

type Project = {
  title: string;
  year: string;
  blurb: string;
  tags: string[];
  features: string[];
  category: Category;
  demo: string;
  repo: string;
  gradient: string;
  metric: string;
  highlights: string[];
  learned: string;
};

const projects: Project[] = [
  {
    title: "Compassion Platform",
    year: "2025",
    blurb:
      "A platform supporting community care and social impact initiatives. Focused on accessibility, user engagement, and connecting people with the right support services.",
    tags: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    features: [
      "Modern dashboard interface",
      "Fully responsive design",
      "Community-focused UX",
      "Built for real-world impact",
    ],
    category: "Flagship",
    demo: "https://compassion-peach.vercel.app/",
    repo: "https://github.com/ryan2009-max",
    gradient: "linear-gradient(135deg, oklch(0.55 0.2 30), oklch(0.55 0.22 350))",
    metric: "Flagship · Live",
    highlights: [
      "First production deployment on Vercel",
      "Designed with real community needs in mind",
      "Bridged design thinking with code",
    ],
    learned:
      "This project taught me how to take an idea from concept to deployed product. I learned how to structure a real React/Next.js codebase, think about users beyond myself, and use Vercel to ship something the world can actually visit.",
  },
  {
    title: "Personal Portfolio Website",
    year: "2024",
    blurb:
      "A responsive personal portfolio showcasing my skills, projects, and journey as a developer. Designed with a modern UI and optimized for desktop and mobile.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    features: [
      "Responsive across devices",
      "Project showcase",
      "Contact section",
      "Modern user interface",
    ],
    category: "Live",
    demo: "https://ryan2009-max.github.io/my-portfolio/",
    repo: "https://github.com/ryan2009-max/my-portfolio",
    gradient: "linear-gradient(135deg, oklch(0.45 0.2 250), oklch(0.55 0.22 290))",
    metric: "Live demo",
    highlights: [
      "First site I ever deployed publicly",
      "Hand-coded layout with semantic HTML",
      "Mobile-first responsive design",
    ],
    learned:
      "Building my first portfolio taught me the fundamentals: how the browser renders HTML, how the cascade in CSS actually works, and how to use Git and GitHub Pages to share my work with the world.",
  },
  {
    title: "Animated Website",
    year: "2024",
    blurb:
      "An experimental web project demonstrating animations, transitions, and interactive UI elements built from scratch.",
    tags: ["HTML", "CSS", "JavaScript"],
    features: [
      "Smooth CSS animations",
      "Interactive components",
      "Modern visual effects",
    ],
    category: "Live",
    demo: "https://ryan2009-max.github.io/Animated/",
    repo: "https://github.com/ryan2009-max/Animated",
    gradient: "linear-gradient(135deg, oklch(0.5 0.18 150), oklch(0.55 0.2 200))",
    metric: "Live demo",
    highlights: [
      "Explored keyframes and transitions",
      "Practiced timing and easing",
      "Learned to make interfaces feel alive",
    ],
    learned:
      "This was where I discovered that good animation is about restraint and timing. I learned how CSS transitions, transforms and keyframes work together to bring an interface to life without overwhelming the user.",
  },
  {
    title: "Cafe Menu Website",
    year: "2024",
    blurb:
      "A clean and attractive cafe menu site displaying food and beverage offerings with a user-friendly layout.",
    tags: ["HTML", "CSS"],
    features: ["Organized menu categories", "Responsive layout", "Simple navigation"],
    category: "Live",
    demo: "https://ryan2009-max.github.io/cafe-manu/",
    repo: "https://github.com/ryan2009-max/cafe-manu",
    gradient: "linear-gradient(135deg, oklch(0.55 0.2 320), oklch(0.6 0.22 30))",
    metric: "Live demo",
    highlights: [
      "Practiced typography and spacing",
      "Structured content with semantic HTML",
      "Designed for real-world readability",
    ],
    learned:
      "The cafe menu sharpened my eye for layout and hierarchy. I learned that even a simple project is a chance to practice typography, whitespace, and how to organize information so it feels effortless to read.",
  },
  {
    title: "Cat Photo Gallery",
    year: "2024",
    blurb:
      "A photo gallery project focused on displaying cat images using modern HTML structure and clean styling techniques.",
    tags: ["HTML", "CSS"],
    features: ["Image gallery layout", "Responsive design", "Semantic HTML"],
    category: "Live",
    demo: "https://ryan2009-max.github.io/my-cats-photo-project/",
    repo: "https://github.com/ryan2009-max/my-cats-photo-project",
    gradient: "linear-gradient(135deg, oklch(0.5 0.16 180), oklch(0.55 0.18 220))",
    metric: "Live demo",
    highlights: [
      "One of my very first coding projects",
      "Learned semantic HTML structure",
      "Practiced responsive image handling",
    ],
    learned:
      "This early project introduced me to semantic HTML and how the browser actually treats markup. It was the moment coding started to click — small tags, big results.",
  },
  {
    title: "PDF Tracking System",
    year: "2025 — Present",
    blurb:
      "A document management and PDF tracking system designed to organize, monitor, and manage PDF files efficiently for teams.",
    tags: ["React", "Next.js", "Auth", "Dashboard"],
    features: [
      "PDF upload & management",
      "Tracking & analytics",
      "Search functionality",
      "User authentication",
      "Dashboard reporting",
    ],
    category: "In Development",
    demo: "#",
    repo: "#",
    gradient: "linear-gradient(135deg, oklch(0.45 0.22 310), oklch(0.5 0.2 250))",
    metric: "Building",
    highlights: [
      "Designing real auth flows",
      "Working with file uploads and storage",
      "Thinking like a product engineer",
    ],
    learned:
      "Building this is teaching me how real applications come together — authentication, file handling, dashboards and state management. I'm learning to think in systems instead of single pages.",
  },
  {
    title: "Compassion Care",
    year: "2025 — Present",
    blurb:
      "A digital platform focused on providing care, support, and assistance for communities through technology.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    features: [
      "User management",
      "Care request tracking",
      "Community engagement",
      "Notifications & reporting",
    ],
    category: "In Development",
    demo: "#",
    repo: "#",
    gradient: "linear-gradient(135deg, oklch(0.5 0.2 20), oklch(0.55 0.22 340))",
    metric: "Building",
    highlights: [
      "Designed around real community needs",
      "Notifications and reporting flows",
      "Care-first product thinking",
    ],
    learned:
      "Compassion Care is teaching me that technology means the most when it serves people. I'm learning how to design flows that respect users, handle sensitive data carefully, and build features that actually help.",
  },
];

const filters = ["All", "Flagship", "Live", "In Development"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Selected Work"
            title="Real projects. Real links. Real growth."
            subtitle="From my first static pages to deployed React platforms — every project below is live or in active development."
          />
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-1.5 text-sm transition-all ${
                  filter === f
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => {
              const isLive = p.demo && p.demo !== "#";
              const hasRepo = p.repo && p.repo !== "#";
              return (
                <motion.article
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border glass-strong transition-all hover:-translate-y-1 hover:border-primary/40"
                  data-cursor="hover"
                >
                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    className="relative aspect-[16/10] overflow-hidden text-left"
                    style={{ background: p.gradient }}
                    aria-label={`Open details for ${p.title}`}
                  >
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                    <div className="absolute bottom-3 left-3 rounded-full bg-black/40 px-3 py-1 text-xs font-mono text-white/90 backdrop-blur">
                      {p.metric}
                    </div>
                    <div className="absolute right-3 top-3 rounded-full bg-black/40 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-white/80 backdrop-blur">
                      {p.category}
                    </div>
                  </button>

                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                        <p className="mt-0.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                          {p.year}
                        </p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>

                    <ul className="flex flex-col gap-1.5">
                      {p.features.slice(0, 3).map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-mono text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 border-t border-border pt-4 text-sm">
                      <button
                        type="button"
                        onClick={() => setActive(p)}
                        className="inline-flex items-center gap-1.5 text-foreground hover:text-primary"
                      >
                        View details <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                      {hasRepo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="ml-auto inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="h-3.5 w-3.5" /> Code
                        </a>
                      )}
                      {isLive && !hasRepo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="ml-auto inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto border-border glass-strong p-0">
          {active && (
            <>
              <div
                className="relative h-40 w-full overflow-hidden rounded-t-lg sm:h-52"
                style={{ background: active.gradient }}
              >
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-white/80 backdrop-blur">
                  {active.category}
                </div>
                <div className="absolute bottom-4 left-6">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-white/70">
                    {active.year}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6 p-6 sm:p-8">
                <DialogHeader className="space-y-2 text-left">
                  <DialogTitle className="font-display text-2xl sm:text-3xl">
                    {active.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                    {active.blurb}
                  </DialogDescription>
                </DialogHeader>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
                      <Wrench className="h-3.5 w-3.5" /> Key Features
                    </div>
                    <ul className="flex flex-col gap-2">
                      {active.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="mb-3 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
                      <Sparkles className="h-3.5 w-3.5" /> Highlights
                    </div>
                    <ul className="flex flex-col gap-2">
                      {active.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="mb-3 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
                    <Lightbulb className="h-3.5 w-3.5" /> What I Learned
                  </div>
                  <p className="rounded-xl border border-border bg-muted/30 p-4 text-sm leading-relaxed text-foreground/90">
                    {active.learned}
                  </p>
                </div>

                <div>
                  <div className="mb-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {active.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-muted px-2.5 py-1 text-xs font-mono text-foreground/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 border-t border-border pt-5 text-sm">
                  {active.demo && active.demo !== "#" ? (
                    <a
                      href={active.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-primary-foreground hover:opacity-90"
                    >
                      Live Demo <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-muted-foreground">
                      Coming soon
                    </span>
                  )}
                  {active.repo && active.repo !== "#" && (
                    <a
                      href={active.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-foreground hover:text-primary"
                    >
                      <Github className="h-4 w-4" /> View Code
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

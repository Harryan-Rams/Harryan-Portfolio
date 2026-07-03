import { motion } from "motion/react";
import { Sparkles, GraduationCap, Code2, Heart, Rocket } from "lucide-react";
import { SectionHeader } from "./About";

type Item = {
  type: "start" | "learn" | "build" | "mission" | "future";
  date: string;
  title: string;
  org: string;
  blurb: string;
};

const items: Item[] = [
  { type: "start", date: "25 Nov 2024", title: "Met my mentor Clinton Ochieng", org: "The beginning", blurb: "A simple introduction to coding that changed the direction of my life. From zero knowledge to falling in love with technology." },
  { type: "learn", date: "Late 2024", title: "Learned the fundamentals", org: "HTML & CSS", blurb: "Started learning how websites are structured and styled. Every line of code felt like unlocking a new superpower." },
  { type: "build", date: "Project #1", title: "Personal Webpage", org: "First build", blurb: "My first ever project. Learned to structure content and present information online." },
  { type: "build", date: "Project #2", title: "Cat Photo App", org: "Practice", blurb: "Worked with images and page layouts for the first time." },
  { type: "build", date: "Project #3", title: "Cafe Menu", org: "Practice", blurb: "Designed an attractive, organized interface and learned about visual hierarchy." },
  { type: "build", date: "Project #4", title: "Color Maker", org: "Practice", blurb: "Explored creativity in web design — colors, gradients, and styling." },
  { type: "build", date: "Project #5", title: "My Portfolio Website", org: "In progress", blurb: "Showcasing my skills, projects, and growth as a young developer." },
  { type: "mission", date: "2025 — Present", title: "Compassion Safe", org: "My mission project", blurb: "Designing a web app to help organizations securely manage records for children and caregivers — combining everything I've learned with real-world purpose." },
  { type: "future", date: "Next", title: "More projects, more impact", org: "The journey continues", blurb: "Learning JavaScript, deepening my craft, and building tools that solve real problems in my community." },
];

const iconFor: Record<Item["type"], React.ElementType> = {
  start: Sparkles, learn: GraduationCap, build: Code2, mission: Heart, future: Rocket,
};

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Timeline"
          title="My coding journey so far."
          subtitle="From November 2024 to now — every milestone, every project, every step forward."
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2" />

          <ul className="space-y-10">
            {items.map((item, i) => {
              const Icon = iconFor[item.type];
              const left = i % 2 === 0;
              return (
                <motion.li
                  key={item.title + item.date}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  <span className="absolute left-4 top-4 z-10 -translate-x-1/2 md:left-1/2">
                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full glass-strong text-primary">
                      <Icon className="h-4 w-4" />
                      <span className="absolute inset-0 rounded-full bg-primary/30 blur-md" />
                    </span>
                  </span>

                  <div className={`pl-14 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                    <div className="border-gradient p-6">
                      <div className="font-mono text-xs uppercase tracking-widest text-primary">{item.date}</div>
                      <h3 className="mt-2 font-display text-xl font-semibold">{item.title}</h3>
                      <div className="text-sm text-muted-foreground">{item.org}</div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.blurb}</p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

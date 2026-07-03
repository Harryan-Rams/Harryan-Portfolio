import { motion } from "motion/react";
import { CheckCircle, Clock, ArrowRight, Brain, Database, Smartphone, Lock, Share2 } from "lucide-react";
import { SectionHeader } from "./About";

const roadmap = [
  {
    phase: "Completed",
    status: "done",
    items: [
      { icon: CheckCircle, title: "HTML & CSS Fundamentals", description: "Semantic HTML, layouts, flexbox, grid, responsive design" },
      { icon: CheckCircle, title: "First Projects", description: "Personal webpage, cat gallery, cafe menu, animated site" },
      { icon: CheckCircle, title: "Portfolio V1", description: "First portfolio website using GitHub Pages" },
    ],
  },
  {
    phase: "In Progress",
    status: "current",
    items: [
      { icon: Brain, title: "JavaScript Fundamentals", description: "Variables, functions, DOM manipulation, arrays & objects" },
      { icon: Database, title: "React & Next.js", description: "Components, state, routing, and modern React patterns" },
      { icon: Smartphone, title: "Compassion Safe MVP", description: "Core features: forms, auth, basic UI" },
    ],
  },
  {
    phase: "Next Up",
    status: "upcoming",
    items: [
      { icon: Lock, title: "Authentication", description: "User logins, secure sessions, role-based access" },
      { icon: Database, title: "Databases", description: "Storing and managing child & caregiver records securely" },
      { icon: Share2, title: "Notifications", description: "SMS alerts and updates for caregivers & staff" },
    ],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Roadmap"
          title="My learning journey ahead."
          subtitle="What I'm currently learning and what's coming next on my path to becoming a professional developer."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {roadmap.map((phase, phaseIndex) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: phaseIndex * 0.1 }}
              className="border-gradient flex flex-col"
            >
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-semibold">{phase.phase}</h3>
                  {phase.status === "done" ? (
                    <CheckCircle className="h-6 w-6 text-primary" />
                  ) : phase.status === "current" ? (
                    <Clock className="h-6 w-6 text-accent animate-pulse" />
                  ) : (
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  )}
                </div>
              </div>
              <div className="p-6 space-y-5 flex-1">
                {phase.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className={`mt-1 flex h-9 w-9 items-center justify-center rounded-full ${phase.status === "done" ? "bg-primary/15 text-primary" : phase.status === "current" ? "bg-accent/15 text-accent" : "bg-muted text-muted-foreground"}`}>
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

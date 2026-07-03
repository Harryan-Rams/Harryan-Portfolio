import { motion } from "motion/react";
import { Trophy, Award, Calendar, Code, Heart, Zap } from "lucide-react";
import { SectionHeader } from "./About";

const achievements = [
  {
    icon: Trophy,
    title: "First Website Launch",
    date: "Nov 2024",
    description: "Started coding journey and launched first personal webpage",
    color: "var(--cyan-glow)",
  },
  {
    icon: Award,
    title: "5 Projects Built",
    date: "Dec 2024 - Present",
    description: "Completed 5 portfolio-worthy projects from static to React",
    color: "var(--violet-glow)",
  },
  {
    icon: Heart,
    title: "Compassion Safe Concept",
    date: "2025",
    description: "Designed Compassion Safe to help children & caregivers",
    color: "var(--neon)",
  },
  {
    icon: Code,
    title: "Learning JavaScript Journey",
    date: "Ongoing",
    description: "Continuous learning & dedication to improving skills",
    color: "var(--primary)",
  },
  {
    icon: Zap,
    title: "This Portfolio",
    date: "2025",
    description: "Professional portfolio built with React & Tailwind",
    color: "var(--accent)",
  },
  {
    icon: Calendar,
    title: "Mentorship",
    date: "Nov 2024",
    description: "Guided by mentor Clinton Ochieng",
    color: "var(--destructive)",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Achievements"
          title="Milestones & badges."
          subtitle="Key moments that mark my growth and dedication to continuous learning."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, i) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group border-gradient relative flex flex-col gap-4 overflow-hidden p-6 transition-transform hover:-translate-y-1"
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-10 blur-2xl" style={{ background: achievement.color }} />
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: `color-mix(in oklab, ${achievement.color} 20%, transparent)`, color: achievement.color }}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{achievement.date}</div>
                </div>
                <h3 className="font-display text-xl font-semibold">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

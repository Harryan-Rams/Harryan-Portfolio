import { motion } from "motion/react";
import { Quote, Star, User } from "lucide-react";
import { SectionHeader } from "./About";

const testimonials = [
  {
    name: "Clinton Ochieng",
    role: "Mentor & Teacher",
    avatar: "CO",
    image: "/clinton-ochieng.jpg",
    text: "Harryan's growth has been incredible to witness. From knowing almost nothing about coding in November 2024 to building real-world applications like Compassion Safe in just a few months — his dedication, curiosity, and passion for using technology to help others are truly inspiring.",
    rating: 5,
  },
  {
    name: "KidsCodeLab",
    role: "Learning Program",
    avatar: "KL",
    text: "Harryan is a shining example of what young learners can achieve with the right guidance and opportunities. His commitment to building tools that make a difference in his community shows maturity beyond his years.",
    rating: 5,
  },
  {
    name: "Compassion Community",
    role: "Beneficiaries",
    avatar: "CC",
    text: "We're excited about Compassion Safe — Harryan's vision for helping organizations better support children and caregivers through technology is exactly the kind of innovation our community needs.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title="What others say."
          subtitle="Kind words from my mentor, teachers, and community about my journey and work."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-gradient flex flex-col p-7"
            >
              <Quote className="h-8 w-8 text-primary/60 mb-4" />
              <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center gap-2 mt-6 pt-4 border-t border-border">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="font-display text-sm font-bold text-primary-foreground">{t.avatar}</span>
                  )}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div className="ml-auto flex">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

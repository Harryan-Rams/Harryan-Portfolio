import { motion } from "motion/react";
import { Sparkles, Heart, Lightbulb, Rocket } from "lucide-react";
import { SectionHeader } from "./About";

const chapters = [
  {
    Icon: Sparkles,
    title: "The day everything changed",
    date: "25 November 2024",
    body: "On 25th November 2024, my life took an exciting new direction when I met a mentor named Clinton Ochieng. Before that day, I had little knowledge about coding. What started as a simple introduction soon became a journey of learning, creativity, and problem-solving.",
  },
  {
    Icon: Lightbulb,
    title: "Learning by building",
    date: "First projects",
    body: "Together with Clinton, we began learning HTML and CSS. We built a Personal Webpage, a Cat Photo App, a Cafe Menu, and a Color Maker. Each project taught me something new — structure, layout, design, creativity. Currently we're working on this Portfolio Website, my fifth project.",
  },
  {
    Icon: Heart,
    title: "The birth of Compassion Safe",
    date: "The big idea",
    body: "As I continued learning, I began to see that coding is more than just writing code — it is about creating solutions that help people. I noticed that many organizations supporting children and families struggle to manage records securely. That's when Compassion Safe was born: a web app to help organizations safely store and manage child records, caregiver details, home visit reports, and important documents — with SMS notifications and updates.",
  },
  {
    Icon: Rocket,
    title: "This is only the beginning",
    date: "What's next",
    body: "I'm deeply thankful to Clinton Ochieng for introducing me to coding, and to KidsCodeLab for partnering with Compassion to give young people like me a chance to learn. From simple webpages to designing Compassion Safe, this journey has taught me that every great project starts with a willingness to learn. This is only the beginning.",
  },
];

export function Blog() {
  return (
    <section id="journey" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="My Journey"
          title="The story behind the code."
          subtitle="How a single conversation in November 2024 became a mission to use technology to help children, families, and communities."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {chapters.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col rounded-2xl border border-border glass p-7 transition-all hover:-translate-y-1 hover:border-primary/40"
              data-cursor="hover"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <c.Icon className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-muted px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {c.date}
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold leading-snug transition-colors group-hover:text-primary">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 border-gradient p-8 text-center"
        >
          <p className="font-display text-xl italic text-foreground/90 sm:text-2xl">
            "Every great project starts with a willingness to learn."
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            With gratitude to <span className="text-foreground">Clinton Ochieng</span> ·{" "}
            <span className="text-foreground">KidsCodeLab</span> ·{" "}
            <span className="text-foreground">Compassion</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

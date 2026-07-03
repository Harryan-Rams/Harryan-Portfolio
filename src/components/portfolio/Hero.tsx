import { motion } from "motion/react";
import { ArrowRight, Download, Github, Globe, Music2, Mail, Sparkles } from "lucide-react";
import { Particles } from "./Particles";

const rotating = ["the Web", "Real Problems", "Compassion Safe", "Better Communities", "My Future"];

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 -z-10">
        <Particles density={70} />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5 text-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-muted-foreground">Young developer · Learning, building, shipping</span>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Building{" "}
              <span className="text-gradient">solutions</span>
              <br />
              for{" "}
              <span className="relative inline-flex h-[1.1em] overflow-hidden align-bottom">
                <span className="flex flex-col" style={{ animation: "rotateWords 12s infinite" }}>
                  {rotating.map((w) => (
                    <span key={w} className="text-gradient-static h-[1.1em]">{w}.</span>
                  ))}
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground"
            >
              I'm <span className="text-foreground font-medium">Harryan Rams</span> — a young web developer in training,
              learning to build with HTML, CSS, and beyond. Currently designing{" "}
              <span className="text-foreground">Compassion Safe</span>, a platform to help organizations protect and
              support children and caregivers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] glow-cyan"
              >
                See my projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-muted"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <div className="ml-2 flex items-center gap-1">
                {[
                  { Icon: Github, label: "GitHub", href: "https://github.com" },
                  { Icon: Globe, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61559059730457" },
                  { Icon: Music2, label: "TikTok", href: "https://www.tiktok.com/@harryanrams258" },
                  { Icon: Mail, label: "Email", href: "mailto:harryanrams2007@gmail.com" },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-2 text-xs text-muted-foreground"
            >
              <span className="font-mono uppercase tracking-widest">Learning with</span>
              {["KidsCodeLab", "Compassion", "HTML", "CSS", "Mentor: Clinton Ochieng"].map((b) => (
                <span key={b} className="font-display text-sm font-medium text-foreground/70">{b}</span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <HeroCard />
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes rotateWords {
          0%, 18% { transform: translateY(0); }
          20%, 38% { transform: translateY(-1.1em); }
          40%, 58% { transform: translateY(-2.2em); }
          60%, 78% { transform: translateY(-3.3em); }
          80%, 98% { transform: translateY(-4.4em); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-2xl" />
      <div className="border-gradient relative overflow-hidden p-6 glow-violet">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-2 font-mono">
            <Sparkles className="h-3 w-3 text-primary" />
            harryan.profile.js
          </div>
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
          </div>
        </div>
        <pre className="mt-5 overflow-x-auto font-mono text-[13px] leading-relaxed">
{`const harryan = {
  name: "Harryan Rams",
  role: "Young Developer",
  learning: ["HTML", "CSS", "JS"],
  mentor: "Clinton Ochieng",
  mission: "Tech for good",
  building: "Compassion Safe",
};`}
        </pre>
        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
          {[
            { v: "5", l: "Projects" },
            { v: "1", l: "Big Idea" },
            { v: "∞", l: "Curiosity" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-2xl font-semibold text-gradient-static">{s.v}</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

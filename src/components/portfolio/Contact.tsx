import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Send, Mail, MapPin, Github, Globe, Music2 } from 'lucide-react';
import { toast } from "sonner";
import { SectionHeader } from "./About";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent — I'll reply as soon as I can!");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's connect."
          subtitle="Whether you want to chat about coding, collaborate on a project, or learn more about Compassion Safe — I'd love to hear from you."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="border-gradient p-6">
              <h3 className="font-display text-xl font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The fastest way to reach me. I'll read your message and reply personally.
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary"><Mail className="h-4 w-4" /></span>
                  <a href="mailto:harryanrams2007@gmail.com" className="hover:text-primary">harryanrams2007@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent"><MapPin className="h-4 w-4" /></span>
                  <span className="text-muted-foreground">Learning with KidsCodeLab & Compassion</span>
                </li>
              </ul>
              <div className="mt-6 flex gap-2">
                {[
                  { Icon: Github, label: "GitHub", href: "https://github.com" },
                  { Icon: Globe, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61559059730457" },
                  { Icon: Music2, label: "TikTok", href: "https://www.tiktok.com/@harryanrams258" },
                ].map(({ Icon, label, href }) => (
                  <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground hover:text-foreground">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="border-gradient space-y-5 p-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Subject" name="subject" />
            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                id="message" name="message" rows={5} required
                className="w-full resize-none rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Tell me what's on your mind…"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60 glow-cyan"
            >
              {loading ? "Sending…" : "Send message"}
              <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-mono uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name} name={name} type={type} required={required}
        className="w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
        placeholder={label}
      />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-sm">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent font-display text-xs font-bold text-primary-foreground">HR</span>
          <span className="font-display font-medium">Harryan Rams</span>
          <span className="text-muted-foreground">· built with curiosity · {new Date().getFullYear()}</span>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          Mentored by Clinton Ochieng · KidsCodeLab × Compassion
        </div>
      </div>
    </footer>
  );
}

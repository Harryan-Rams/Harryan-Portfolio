import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Aurora } from "@/components/portfolio/Aurora";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Blog } from "@/components/portfolio/Blog";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Achievements } from "@/components/portfolio/Achievements";
import { Roadmap } from "@/components/portfolio/Roadmap";
import { BackToTop } from "@/components/portfolio/BackToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harryan Rams — Young Developer & Creator of Compassion Safe" },
      { name: "description", content: "Portfolio of Harryan Rams — a young web developer learning to build with HTML, CSS, JavaScript, React, and creating real-world solutions like Compassion Safe. Mentored by Clinton Ochieng." },
      { name: "keywords", content: "Harryan Rams, portfolio, web developer, HTML, CSS, JavaScript, React, Compassion Safe, KidsCodeLab, Clinton Ochieng, young developer" },
      { name: "author", content: "Harryan Rams" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Harryan Rams — Young Developer & Creator of Compassion Safe" },
      { property: "og:description", content: "Young developer building real-world solutions. Learning with KidsCodeLab and Compassion, mentored by Clinton Ochieng." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "Harryan Rams Portfolio" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Harryan Rams — Young Developer & Creator of Compassion Safe" },
      { name: "twitter:description", content: "Portfolio of Harryan Rams — young web developer creating real-world solutions like Compassion Safe." },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.ico" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Aurora />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <Roadmap />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster position="bottom-right" theme="dark" />
    </>
  );
}

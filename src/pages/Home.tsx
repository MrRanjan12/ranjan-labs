import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "Ranjan Kumar Prajapati | Full-Stack Developer & AI Enthusiast";
    
    // Add meta tags
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Portfolio of Ranjan Kumar Prajapati - MERN Stack Developer, Systems Architect, and AI/ML Enthusiast.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Portfolio of Ranjan Kumar Prajapati - MERN Stack Developer, Systems Architect, and AI/ML Enthusiast.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

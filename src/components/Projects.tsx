import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Github, ExternalLink, Cpu } from "lucide-react";

const PROJECTS = [
  {
    title: "Unified AI Chat Platform",
    problem: "Fragmented AI interactions across platforms; no unified interface for Telegram and web users.",
    approach: "Built a single Express.js backend powering a Telegram bot (grammy) and a React web chat UI. Implemented streaming responses, rate limiting, and custom commands.",
    impact: "Demonstrates real-world AI integration and multi-platform architecture. Handles streaming response effectively.",
    tech: ["React", "Express.js", "LLM API", "grammy"],
    github: "https://github.com/MrRanjan12",
    featured: true
  },
  {
    title: "MERN Blog Platform",
    problem: "No secure, feature-rich blogging solution with proper auth and content management.",
    approach: "Full-stack blogging platform with JWT auth, role-based access, rich text editor, image upload, pagination, and Google AdSense integration.",
    impact: "Shipped end-to-end with production-ready auth, CMS features, and monetization. Deepened full-stack system design.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    github: "https://github.com/MrRanjan12",
    featured: false
  },
  {
    title: "Real-Time Call App",
    problem: "Need for a lightweight, real-time calling interface with dynamic room management.",
    approach: "Built a Socket.IO-based calling interface with dynamic routing, invite system, and modular server structure.",
    impact: "Hands-on experience with real-time bidirectional communication and event-driven architecture.",
    tech: ["Socket.IO", "Express.js", "JavaScript"],
    github: "https://github.com/MrRanjan12",
    featured: false
  },
  {
    title: "Weather Dashboard",
    problem: "Need a clean, responsive weather dashboard with real API data.",
    approach: "Fetches live weather data from a public API displaying temp, humidity, conditions with error states.",
    impact: "Clean execution of API integration, async JS, and responsive UI fundamentals.",
    tech: ["HTML5", "CSS3", "JavaScript", "REST API"],
    github: "https://github.com/MrRanjan12",
    featured: false
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Deployed_Prototypes" subtitle="Select architectural implementations and applications." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group glass-panel rounded-2xl p-6 sm:p-8 flex flex-col h-full relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-glow ${project.featured ? 'border-primary/50' : 'border-border/50'}`}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 glass-panel border border-primary/30 rounded-xl bg-background/50 text-primary">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    {/* Placeholder for live link */}
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-3 mb-6 flex-grow text-sm sm:text-base">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground font-mono text-xs uppercase tracking-wider">Problem:</strong><br/>
                    {project.problem}
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground font-mono text-xs uppercase tracking-wider">Approach:</strong><br/>
                    {project.approach}
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground font-mono text-xs uppercase tracking-wider">Impact:</strong><br/>
                    {project.impact}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-border/50">
                  <ul className="flex flex-wrap gap-2 font-mono text-xs text-primary/80">
                    {project.tech.map((t) => (
                      <li key={t} className="px-2 py-1 bg-primary/10 rounded border border-primary/20">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

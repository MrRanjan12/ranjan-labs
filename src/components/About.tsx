import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Terminal, Database, BrainCircuit, Code2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="About_Me" 
          subtitle="A deeper dive into my engineering philosophy and journey."
        />

        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* Main Bio */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 lg:col-span-8 space-y-6 text-muted-foreground leading-relaxed"
          >
            <p className="text-lg text-foreground font-medium">
              I'm a full-stack developer with a deep curiosity for how complex systems work — from distributed APIs to intelligent agents.
            </p>
            <p>
              My journey started with building fast, responsive web applications, but I've always been drawn to the harder questions: how do systems scale, how do machines learn, how can code solve real human problems? 
            </p>
            <p>
              I'm currently transitioning from MERN stack engineering toward AI/ML research and systems thinking — building a long-term foundation not just for a career, but for meaningful contribution to technology.
            </p>
            
            <div className="mt-8 p-6 glass-panel rounded-xl border-l-4 border-l-primary bg-primary/5">
              <h3 className="font-mono text-primary mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> root@ranjan:~# cat current_focus.txt
              </h3>
              <p className="font-mono text-sm">
                Exploring Large Language Model API integration, prompt engineering, and building autonomous agents while solidifying core systems knowledge in Python and C++.
              </p>
            </div>
          </motion.div>

          {/* Quick Stats / Traits Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4"
          >
            <TraitCard 
              icon={<Code2 className="text-primary w-6 h-6" />}
              title="Full-Stack Engineering"
              desc="End-to-end MERN expertise"
            />
            <TraitCard 
              icon={<Database className="text-accent w-6 h-6" />}
              title="System Design"
              desc="Architecting scalable APIs"
            />
            <TraitCard 
              icon={<BrainCircuit className="text-primary w-6 h-6" />}
              title="AI / ML Interest"
              desc="Bridging web with intelligence"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

function TraitCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-5 glass-panel rounded-xl flex items-start gap-4 hover:border-primary/50 transition-colors group">
      <div className="p-2 rounded bg-background border border-border group-hover:border-primary/50 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="text-foreground font-bold font-sans">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{desc}</p>
      </div>
    </div>
  );
}

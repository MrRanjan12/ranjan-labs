import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Briefcase, GraduationCap } from "lucide-react";

export function Timeline() {
  return (
    <section id="experience" className="py-24 relative bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Experience Side */}
          <div>
            <SectionHeading title="Experience" />
            <div className="relative pl-8 border-l border-primary/30 space-y-12 mt-8">
              
              {/* Item */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[49px] top-1 p-2 bg-background border border-primary rounded-full text-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)]">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="glass-panel p-6 rounded-xl relative group hover:border-primary/50 transition-colors">
                  <h4 className="text-xl font-bold text-foreground">Web Development Intern</h4>
                  <h5 className="text-primary font-mono text-sm mt-1 mb-4">OctaNet Services Pvt. Ltd. | Jan – Mar 2024 (Remote)</h5>
                  <ul className="space-y-2 text-muted-foreground text-sm list-disc pl-4">
                    <li>Built responsive UI components with semantic HTML, CSS, JS; reduced CLS by improving image sizing and layout.</li>
                    <li>Wrote modular JS for feature flags and state management; participated in code reviews and QA.</li>
                    <li>Collaborated asynchronously with remote team for staging deployments and bug triage via Git workflows.</li>
                  </ul>
                </div>
              </motion.div>

              {/* Activity Item */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-2 w-4 h-4 bg-background border border-accent rounded-full shadow-[0_0_8px_hsl(var(--accent)/0.5)]" />
                <div className="glass-panel p-6 rounded-xl border-accent/20">
                  <h4 className="text-lg font-bold text-foreground">Continuous Practice & Exploration</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm list-disc pl-4 mt-4">
                    <li>Regular DSA practice on LeetCode/HackerRank (arrays, strings, linked lists, stacks/queues).</li>
                    <li>Exploring advanced React patterns (hooks, context, reducers).</li>
                    <li>Participated in IESoft Technologies Coding Assessment (June 2025).</li>
                  </ul>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Education Side */}
          <div>
            <SectionHeading title="Education" />
            <div className="relative pl-8 border-l border-primary/30 space-y-12 mt-8">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[49px] top-1 p-2 bg-background border border-primary rounded-full text-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="glass-panel p-6 rounded-xl hover:border-primary/50 transition-colors">
                  <h4 className="text-xl font-bold text-foreground">Bachelor of Computer Applications</h4>
                  <h5 className="text-primary font-mono text-sm mt-1 mb-2">Dr. C.V. Raman University | 2022 – 2025</h5>
                  <p className="text-muted-foreground text-sm font-mono">CGPA: <span className="text-foreground">7.61</span></p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-2 w-4 h-4 bg-background border-border rounded-full" />
                <div className="p-6 border border-border/50 rounded-xl bg-background/50">
                  <h4 className="text-lg font-bold text-foreground">12th Grade</h4>
                  <h5 className="text-muted-foreground font-mono text-sm mt-1 mb-2">BSEB Patna | 2022</h5>
                  <p className="text-muted-foreground text-sm font-mono">Score: <span className="text-foreground">64.4%</span></p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-2 w-4 h-4 bg-background border-border rounded-full" />
                <div className="p-6 border border-border/50 rounded-xl bg-background/50">
                  <h4 className="text-lg font-bold text-foreground">10th Grade</h4>
                  <h5 className="text-muted-foreground font-mono text-sm mt-1 mb-2">BSEB Patna | 2020</h5>
                  <p className="text-muted-foreground text-sm font-mono">Score: <span className="text-foreground">77.3%</span></p>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

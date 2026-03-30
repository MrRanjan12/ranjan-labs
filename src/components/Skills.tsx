import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Bootstrap / jQuery", level: 80 },
    ],
    color: "primary"
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB (Mongoose)", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "WebSockets (Socket.IO)", level: 75 },
    ],
    color: "accent"
  },
  {
    title: "Core Languages",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 65 },
      { name: "C++", level: 40 },
    ],
    color: "primary"
  },
  {
    title: "AI & Emerging",
    skills: [
      { name: "LLM API Integration", level: 70 },
      { name: "Prompt Engineering", level: 80 },
      { name: "Bot Dev (grammy)", level: 75 },
    ],
    color: "accent"
  }
];

const OTHER_TOOLS = [
  "Git", "GitHub", "VS Code", "Postman", "Chrome DevTools", "Render", "Railway", "DSA", "JWT/Auth", "OOP"
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="System_Capabilities" align="center" subtitle="Technical competencies and technical stack telemetry." />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${category.color}/10 blur-3xl rounded-full group-hover:bg-${category.color}/20 transition-all`} />
              
              <h3 className="text-xl font-bold font-mono text-foreground mb-6 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full bg-${category.color} animate-pulse`} />
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-sans text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-background rounded-full overflow-hidden border border-border/50">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full bg-${category.color} relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h4 className="font-mono text-sm text-muted-foreground mb-4 uppercase tracking-widest">Additional Tools & Concepts</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {OTHER_TOOLS.map((tool) => (
              <span 
                key={tool} 
                className="px-4 py-2 glass-panel border border-border/50 rounded-md text-sm font-mono text-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

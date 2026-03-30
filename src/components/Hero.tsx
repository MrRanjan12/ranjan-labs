import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown, Rocket } from "lucide-react";
import { useTypewriter } from "@/hooks/use-typewriter";

const TITLES = [
  "MERN Stack Developer",
  "Full-Stack Engineer",
  "Systems Architect",
  "AI/ML Researcher"
];

export function Hero() {
  const typedText = useTypewriter(TITLES, 80, 40, 2000);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="hero">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary font-mono text-sm w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            System Online
          </div>
          
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-sans tracking-tight mb-2">
              Ranjan Kumar<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                Prajapati
              </span>
            </h1>
            <div className="h-10 sm:h-12 mt-4 flex items-center">
              <span className="text-xl sm:text-2xl font-mono text-muted-foreground">
                <span className="text-primary mr-2">{">"}</span>
                {typedText}
                <motion.span 
                  animate={{ opacity: [1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-3 h-6 bg-primary ml-1 align-middle"
                />
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed border-l-2 border-primary/30 pl-4">
            Building the web of tomorrow — one system at a time. Transitioning from full-stack development toward AI/ML and systems-level engineering.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a 
              href="#projects"
              className="group px-6 py-3 bg-primary text-primary-foreground font-mono font-medium rounded hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all flex items-center gap-2"
            >
              <Rocket className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              View_Projects
            </a>
            <a 
              href="https://github.com/MrRanjan12" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 border border-border rounded glass-panel hover:border-primary hover:text-primary transition-colors group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://linkedin.com/in/ranjan-kumar-prajapati" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 border border-border rounded glass-panel hover:border-primary hover:text-primary transition-colors group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex justify-center items-center relative"
        >
          <motion.div
            animate={{ 
              y: [-15, 15, -15],
              rotateZ: [0, 5, -5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-100 h-100"
          >
            {/* The declared image from requirements.yaml */}
            <img 
              src={`${import.meta.env.BASE_URL}images/hero-orb.png`} 
              alt="Futuristic core"
              className="w-full h-full object-contain drop-shadow-[0_0_30px_hsl(var(--primary)/0.6)]"
            />
            
            {/* Decorative orbit rings */}
            <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-8 border border-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-16 border border-primary/10 border-dashed rounded-full animate-[spin_20s_linear_infinite]" />
          </motion.div>
        </motion.div>
      </div>

      <motion.a 
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
}

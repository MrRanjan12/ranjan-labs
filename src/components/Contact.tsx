import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Terminal, Send, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "contact.ranjan@example.com"; // Placeholder

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-card/50 border-t border-border/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading title="Initialize_Contact" align="center" subtitle="My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-panel p-1 rounded-xl max-w-2xl mx-auto overflow-hidden text-left"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-background/80 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="mx-auto flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <Terminal className="w-3 h-3" /> contact.sh
            </div>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 sm:p-8 font-mono text-sm sm:text-base bg-background/40">
            <p className="text-primary mb-4">$ ./init_comm_link.sh --target="Ranjan"</p>
            <p className="text-muted-foreground mb-2">{">"} Establishing secure connection...</p>
            <p className="text-green-400 mb-6">{">"} Connection established. Awaiting input.</p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-8">
              <button 
                onClick={handleCopy}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)] transition-all font-bold"
              >
                <Mail className="w-4 h-4" />
                {copied ? "Address Copied!" : "Copy Email Address"}
              </button>
              
              <a 
                href="mailto:contact.ranjan@example.com"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border border-primary/50 text-foreground rounded hover:bg-primary/10 transition-all"
              >
                <Send className="w-4 h-4 text-primary" />
                Direct Message
              </a>
            </div>

            <div className="mt-12 pt-6 border-t border-border/50 flex justify-center gap-6">
              <a href="https://github.com/MrRanjan12" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                <Github className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                GitHub
              </a>
              <a href="https://linkedin.com/in/ranjan-kumar-prajapati" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                <Linkedin className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

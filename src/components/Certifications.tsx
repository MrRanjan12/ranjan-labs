import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Award } from "lucide-react";

const CERTS = [
  { title: "Python (Intermediate)", issuer: "SoloLearn", date: "Aug 2025" },
  { title: "JavaScript (Basic)", issuer: "HackerRank", date: "Dec 2024" },
  { title: "Introduction to C++", issuer: "SoloLearn", date: "Nov 2024" },
  { title: "Web Development Internship", issuer: "OctaNet Services Pvt Ltd", date: "Feb 2024" },
  { title: "Introduction to JavaScript", issuer: "SoloLearn", date: "Jan 2024" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp", date: "Oct 2023" },
  { title: "Introduction to C", issuer: "SoloLearn", date: "Aug 2023" },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Certifications" align="center" subtitle="Verified knowledge and continuous learning milestones." />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
          {CERTS.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-panel p-5 rounded-xl border border-border/50 hover:border-primary/50 transition-colors flex flex-col gap-3 group"
            >
              <div className="text-primary group-hover:text-glow">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-foreground leading-tight">{cert.title}</h4>
                <div className="flex justify-between items-center mt-3 font-mono text-xs">
                  <span className="text-muted-foreground">{cert.issuer}</span>
                  <span className="text-primary/70">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

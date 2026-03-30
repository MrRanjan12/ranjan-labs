import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-4 mb-4"
      >
        {align === "center" && (
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
        )}
        <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-foreground uppercase">
          <span className="text-primary font-mono text-xl mr-2">{"//"}</span>
          {title}
        </h2>
        {align === "center" ? (
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        ) : (
          <div className="h-px w-full max-w-[200px] bg-gradient-to-r from-primary/50 to-transparent" />
        )}
      </motion.div>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground font-mono text-sm md:text-base max-w-2xl"
          style={align === "center" ? { margin: "0 auto" } : {}}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

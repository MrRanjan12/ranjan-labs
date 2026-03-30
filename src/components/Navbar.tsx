import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const activeSection = useActiveSection(NAV_ITEMS.map(item => item.href.substring(1)));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled ? "py-4 glass-panel border-b-primary/20" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Terminal className="w-6 h-6 text-primary group-hover:text-glow transition-all" />
          <span className="font-mono font-bold text-lg tracking-tight">
            Ranjan<span className="text-primary">.dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "relative py-2 text-muted-foreground hover:text-primary transition-colors",
                activeSection === item.href.substring(1) && "text-foreground"
              )}
            >
              <span className="text-primary/50 mr-1">0{NAV_ITEMS.indexOf(item) + 1}.</span>
              {item.label}
              {activeSection === item.href.substring(1) && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary shadow-[0_0_8px_hsl(var(--primary))]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 border border-primary text-primary rounded font-medium hover:bg-primary/10 hover:border-glow transition-all duration-300"
          >
            Init_Contact
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-border mt-4 overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-4 gap-4 font-mono">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-muted-foreground hover:text-primary border-l-2 border-transparent hover:border-primary transition-all"
                >
                  <span className="text-primary/50 mr-2">0{idx + 1}.</span>
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

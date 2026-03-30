import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/30 bg-background text-center text-muted-foreground font-mono text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-2">
        <a href="#" className="flex items-center gap-2 group mb-2">
          <Terminal className="w-4 h-4 text-primary group-hover:text-glow transition-all" />
          <span className="font-mono font-bold tracking-tight text-foreground">
            Ranjan<span className="text-primary">.dev</span>
          </span>
        </a>
        <p>Built with React & Tailwind CSS.</p>
        <p>© {new Date().getFullYear()} Ranjan Kumar Prajapati. All rights reserved.</p>
      </div>
    </footer>
  );
}

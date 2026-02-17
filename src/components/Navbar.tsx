import { Anchor } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/10 bg-background/60 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Anchor className="h-6 w-6 text-primary rotate-45" />
          <span className="font-display text-xl font-bold tracking-tight text-foreground">CORAL TIDE</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/90">
          <a href="#" className="hover:text-primary transition-colors">Visit</a>
          <a href="#" className="hover:text-primary transition-colors">Animals</a>
          <a href="#" className="hover:text-primary transition-colors">Conservation</a>
          <a href="#" className="hover:text-primary transition-colors">Membership</a>
        </div>

        <div className="md:hidden">
          {/* Mobile menu trigger placeholder */}
          <div className="w-8 h-8 rounded-full bg-background/10" />
        </div>
      </div>
    </nav>
  );
}

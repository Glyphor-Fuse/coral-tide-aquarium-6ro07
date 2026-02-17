import { Button } from "@/components/ui/button";
import { ArrowRight, Waves } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/50 z-10" />
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.png"
        >
          <source src="/videos/hero-reef.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="mb-6 flex items-center gap-2 rounded-full border border-border/20 bg-background/10 px-4 py-4.5 text-sm backdrop-blur-md">
            <Waves className="h-4 w-4 text-primary" />
            <span className="text-foreground font-medium">Voted #1 Aquarium Experience 2024</span>
          </div>
          
          <h1 className="font-display mb-6 text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-7xl lg:text-8xl drop-shadow-lg">
            THE OCEAN IS <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CALLING
            </span>
          </h1>
          
          <p className="mb-8 max-w-2xl text-lg text-foreground-200 sm:text-xl font-light drop-shadow-md">
            Immerse yourself in a cinematic underwater world. Witness the kinetic energy of the reef and discover the vibrant life beneath the waves.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-lg h-12 shadow-lg shadow-primary/20">
              Buy Tickets
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-border/50 text-foreground hover:bg-background/10 hover:border-border px-8 text-lg h-12 backdrop-blur-sm">
              View Schedule <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50"
      >
        <div className="h-10 w-6 rounded-full border-2 border-border/30 flex justify-center p-1">
          <div className="h-2 w-1.5 bg-background/50 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}

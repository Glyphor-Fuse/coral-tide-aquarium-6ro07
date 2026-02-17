import { motion } from "framer-motion";
import { CircleAlert, Clock, Fish, Star } from 'lucide-react';
import { useState } from "react";

const scheduleData = [
  { time: "10:00 AM", title: "Morning Reef Feed", location: "Grand Tank", type: "Feeding", description: "Watch our divers hand-feed the gentle giants of the reef. Arrive early for the best view!" },
  { time: "11:30 AM", title: "Shark Encounter", location: "Predator Cove", type: "Show", description: "An educational deep dive into shark behavior with our lead biologists." },
  { time: "01:00 PM", title: "Sea Turtle Talk", location: "Lagoon Deck", type: "Talk", description: "Meet our rescued sea turtles and learn about our rehabilitation efforts." },
  { time: "02:30 PM", title: "Penguin Parade", location: "Ice Shelf", type: "Event", description: "Our colony takes a walk! Great photo opportunity for families." },
  { time: "04:00 PM", title: "Jellyfish Glow", location: "Abyss Zone", type: "Experience", description: "Special lighting effects reveal the bioluminescent patterns of our jellies." },
];

export default function Schedule() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl mb-4">Day at the Reef</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Plan your visit around our daily interactive experiences. 
            Times adjust based on animal comfort.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {scheduleData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 group cursor-pointer ${
                  activeIdx === idx ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setActiveIdx(idx === activeIdx ? null : idx)}
              >
                {/* Time (Left on desktop) */}
                <div className="flex-1 w-full md:text-right">
                   <div className="md:hidden flex items-center gap-3 mb-2">
                     <span className="text-primary font-bold font-display text-xl">{item.time}</span>
                     <div className="h-px bg-border flex-1" />
                   </div>
                   <span className="hidden md:block text-2xl font-display font-bold text-primary/90 group-hover:scale-110 transition-transform origin-right">
                     {item.time}
                   </span>
                </div>

                {/* Center Dot */}
                <div className={`relative z-10 hidden md:flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors duration-300 ${
                  activeIdx === idx ? "border-primary bg-background shadow-[0_0_15px_rgba(255,107,107,0.5)]" : "border-muted-foreground/30 bg-card"
                }`}>
                  {activeIdx === idx && <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />}
                </div>

                {/* Content (Right on desktop) */}
                <div className="flex-1 w-full">
                  <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                    activeIdx === idx 
                      ? "bg-card border-primary/30 shadow-lg shadow-primary/5 translate-x-2" 
                      : "bg-muted/10 border-border/5 hover:bg-card hover:border-border"
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-xl text-foreground">{item.title}</h3>
                      <span className="text-xs font-medium px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20">
                        {item.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Clock className="w-4 h-4" /> <span>{item.time}</span>
                      <span className="mx-1">•</span>
                      <span>{item.location}</span>
                    </div>
                    
                    <motion.div 
                      initial={false}
                      animate={{ height: activeIdx === idx ? "auto" : 0, opacity: activeIdx === idx ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-muted-foreground pt-3 border-t border-border/50">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

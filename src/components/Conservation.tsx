import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Heart, Leaf, Star } from 'lucide-react';

export default function Conservation() {
  const items = [
    {
      title: "Reef Restoration",
      description: "We've replanted over 5,000 coral fragments back into the wild this year alone.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-background-900 to-background-800 relative overflow-hidden group">
        <img src="/images/conservation-diver.png" alt="Diver" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"/>
      </div>,
      icon: <Leaf className="h-4 w-4 text-primary" />,
      className: "md:col-span-2",
    },
    {
      title: "Turtle Rescue",
      description: "Our hospital has rehabilitated 42 sea turtles and released them home.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
         <img src="/images/conservation-turtle.png" alt="Turtle" className="absolute inset-0 w-full h-full object-cover opacity-60"/>
      </div>,
      icon: <Heart className="h-4 w-4 text-primary" />,
      className: "md:col-span-1",
    },
    {
      title: "Plastic Free",
      description: "We are a 100% single-use plastic free facility.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-background-900 to-background-800 relative p-6 flex items-center justify-center">
        <Star className="h-16 w-16 text-foreground-500 opacity-80" />
      </div>,
      icon: <Star className="h-4 w-4 text-foreground-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Water Quality",
      description: "We filter 2 million gallons of seawater daily using sustainable energy.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-background-900 to-background-900 relative p-6 flex items-center justify-center">
         <div className="text-4xl font-display font-bold text-foreground-400">2M+</div>
      </div>,
      icon: <Star className="h-4 w-4 text-foreground-500" />,
      className: "md:col-span-2",
    },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">Conservation Impact</h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            Your ticket directly funds our mission to protect the ocean for future generations.
            We are more than an aquarium; we are a sanctuary.
          </p>
        </div>
        <BentoGrid className="max-w-7xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

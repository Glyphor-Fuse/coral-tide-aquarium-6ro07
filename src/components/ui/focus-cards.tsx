import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const FocusCards = ({ cards }: { cards: { title: string; src: string; description: string }[] }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
      {cards.map((card, index) => (
        <div
          key={card.title}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={cn(
            "rounded-2xl relative overflow-hidden h-96 transition-all duration-300 ease-out cursor-pointer border border-white/5",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-70"
          )}
        >
          <img
            src={card.src}
            alt={card.title}
            className="object-cover absolute inset-0 w-full h-full transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-2xl font-display font-bold text-white mb-2">{card.title}</h3>
            <p className="text-neutral-300 text-sm opacity-0 hover:opacity-100 transition-opacity duration-300 translate-y-4 hover:translate-y-0 transform">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

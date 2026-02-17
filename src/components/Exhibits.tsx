import { FocusCards } from "@/components/ui/focus-cards";

export default function Exhibits() {
  const cards = [
    {
      title: "Predator Cove",
      src: "/images/exhibit-sharks.png",
      description: "Home to our resident Tiger Sand Sharks and Blacktips. Watch them glide through the darkness.",
    },
    {
      title: "Jellyfish Abyss",
      src: "/images/exhibit-jellyfish.png",
      description: "A mesmerizing display of Moon Jellies illuminated by changing LED currents.",
    },
    {
      title: "Coral Gardens",
      src: "/images/exhibit-coral.png",
      description: "The heartbeat of our aquarium. Thousands of clownfish, tangs, and angels in a living reef.",
    },
    {
      title: "The Ice Shelf",
      src: "/images/exhibit-penguin.png",
      description: "Chill out with our playful colony of Gentoo penguins in their sub-zero habitat.",
    },
  ];

  return (
    <section className="py-24 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="text-secondary font-medium tracking-wider text-sm uppercase mb-2 block">Discover Our World</span>
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">Featured Exhibits</h2>
        </div>
        <FocusCards cards={cards} />
      </div>
    </section>
  );
}

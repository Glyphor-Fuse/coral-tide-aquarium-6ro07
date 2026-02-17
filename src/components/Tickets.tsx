import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Tickets() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/5 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl mb-4">Start Your Adventure</h2>
          <p className="text-muted-foreground text-lg">Select the pass that fits your journey.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-md p-8 flex flex-col hover:border-primary/40 transition-colors shadow-sm">
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold text-foreground">Standard</h3>
              <p className="text-muted-foreground text-sm mt-2">Perfect for a casual day trip.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-foreground">$29</span>
              <span className="text-muted-foreground">/adult</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {["General Admission", "All Daily Shows", "Digital Map"].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                  <Check className="h-4 w-4 text-primary" /> {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full" variant="outline">Select Tickets</Button>
          </div>

          {/* Card 2 - Featured */}
          <div className="rounded-2xl border border-primary bg-card relative p-8 flex flex-col shadow-2xl shadow-primary/10 scale-105 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Best Value
            </div>
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold text-foreground">Annual Pass</h3>
              <p className="text-muted-foreground text-sm mt-2">Unlimited visits for a full year.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-foreground">$89</span>
              <span className="text-muted-foreground">/year</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {["Unlimited Admission", "Priority Entry", "10% Gift Shop Discount", "Members-Only Events", "Free Parking"].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                  <Check className="h-4 w-4 text-primary" /> {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Become a Member</Button>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-md p-8 flex flex-col hover:border-primary/40 transition-colors shadow-sm">
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold text-foreground">VIP Tour</h3>
              <p className="text-muted-foreground text-sm mt-2">Behind the scenes experience.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-foreground">$129</span>
              <span className="text-muted-foreground">/person</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {["Guided 90-min Tour", "Feed the Rays", "Skip All Lines", "Souvenir Photo Pack"].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                  <Check className="h-4 w-4 text-primary" /> {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full" variant="outline">Book Tour</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

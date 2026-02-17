export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">CORAL TIDE</h3>
            <p className="text-muted-foreground max-w-sm">
              Inspiring conservation of our world's aquatic treasures through education, research, and immersive experiences.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Visit</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>1000 Ocean Drive</li>
              <li>Bay City, CA 90210</li>
              <li>Daily: 9AM - 6PM</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>(555) 123-4567</li>
              <li>hello@coraltide.com</li>
              <li>Press Inquiries</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; 2024 Coral Tide Aquarium. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

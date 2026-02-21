import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import projectLogo from "@assets/logo_1771678672101.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "Results", href: "/results" },
  { label: "News & Events", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-4 font-display text-xl font-bold text-primary">
            <img src={projectLogo} alt="DTT4SD Logo" className="h-10 w-auto object-contain" />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" 
              alt="European Union Flag" 
              className="h-8 w-auto object-contain hidden sm:block border border-muted"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === item.href
                    ? "text-primary font-bold border-b-2 border-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
              Subscribe
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-background p-4 shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary p-2 rounded-md hover:bg-muted",
                  location === item.href ? "text-primary font-bold bg-muted" : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full bg-secondary text-secondary-foreground font-bold">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

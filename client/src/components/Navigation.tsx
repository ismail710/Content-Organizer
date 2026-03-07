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
    <nav className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo + EU Flag */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img src={projectLogo} alt="DTT4SD Logo" className="h-10 w-auto object-contain" />
            <div className="h-6 w-px bg-border" />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
              alt="European Union Flag"
              className="h-7 w-auto object-contain rounded-sm border border-muted/60 shadow-sm"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium px-3 py-1.5 rounded-md transition-colors hover:text-primary hover:bg-primary/5",
                  location === item.href
                    ? "text-primary bg-primary/8 font-semibold after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile: hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
          <div className="md:hidden border-t bg-background shadow-lg animate-in slide-in-from-top-5">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors px-3 py-2.5 rounded-lg hover:text-primary hover:bg-primary/5",
                  location === item.href
                    ? "text-primary font-semibold bg-primary/8 border-l-2 border-primary pl-[10px]"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
}

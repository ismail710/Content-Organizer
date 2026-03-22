import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import euCofundedLogo from "@assets/logo_1771678672101.png";

const projectPlatformUrl = import.meta.env.VITE_PROJECT_PLATFORM_URL || "#";
const hasPlatformUrl = projectPlatformUrl !== "#";

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

          {/* Co-funded logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img src={euCofundedLogo} alt="Co-funded by the European Union" className="h-12 w-auto object-contain" />
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
            <a
              href={projectPlatformUrl}
              target={hasPlatformUrl ? "_blank" : undefined}
              rel={hasPlatformUrl ? "noopener noreferrer" : undefined}
              aria-disabled={!hasPlatformUrl}
              onClick={(event) => {
                if (!hasPlatformUrl) event.preventDefault();
              }}
              className={cn(
                "ml-2 inline-flex items-center gap-1 text-sm font-semibold px-3 py-1.5 rounded-md border transition-colors",
                hasPlatformUrl
                  ? "text-primary border-primary/25 hover:bg-primary/5"
                  : "text-muted-foreground border-border cursor-not-allowed"
              )}
            >
              Moodle / Platform
              {hasPlatformUrl && <ExternalLink className="h-3.5 w-3.5" />}
            </a>
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
            <a
              href={projectPlatformUrl}
              target={hasPlatformUrl ? "_blank" : undefined}
              rel={hasPlatformUrl ? "noopener noreferrer" : undefined}
              aria-disabled={!hasPlatformUrl}
              onClick={(event) => {
                if (!hasPlatformUrl) {
                  event.preventDefault();
                  setIsOpen(false);
                } else {
                  setIsOpen(false);
                }
              }}
              className={cn(
                "text-sm font-medium transition-colors px-3 py-2.5 rounded-lg border",
                hasPlatformUrl
                  ? "text-primary border-primary/30 hover:bg-primary/5"
                  : "text-muted-foreground border-border cursor-not-allowed"
              )}
            >
              Moodle / Platform
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}

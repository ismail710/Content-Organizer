import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4 md:py-7">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          
          {/* Column 1: EU Funding */}
          <div className="col-span-2 md:col-span-1 flex flex-row md:flex-col items-center md:items-start gap-3 md:space-y-4">
            <div className="flex items-center gap-2">
               <img 
                 src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" 
                 alt="EU Flag" 
                 className="h-8 md:h-12 w-auto flex-shrink-0"
               />
               <span className="text-xs md:text-sm font-semibold leading-tight">
                 Co-funded by the European Union
               </span>
            </div>
            <p className="text-xs md:text-sm opacity-90 whitespace-nowrap">
              Project No: 101237713
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm md:text-lg font-bold mb-2 md:mb-4 font-display text-secondary">Quick Links</h3>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-base">
              <li><Link href="/about" className="hover:text-secondary transition-colors">About</Link></li>
              <li><Link href="/results" className="hover:text-secondary transition-colors">Results</Link></li>
              <li><Link href="/partners" className="hover:text-secondary transition-colors">Partners</Link></li>
              <li><Link href="/news" className="hover:text-secondary transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-sm md:text-lg font-bold mb-2 md:mb-4 font-display text-secondary">Contact</h3>
            <ul className="space-y-1 md:space-y-3 text-xs md:text-sm">
              <li>
                <p className="font-semibold text-secondary/90">Željko Bačić</p>
                <p className="opacity-75 hidden md:block">Project Coordinator</p>
                <p className="opacity-75 hidden md:block">University of Zagreb</p>
              </li>
              <li className="flex items-center gap-1">
                <Mail className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                <a href="mailto:dtt4sd@gmail.com" className="hover:text-secondary truncate">dtt4sd@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="text-sm md:text-lg font-bold mb-2 md:mb-4 font-display text-secondary">Follow Us</h3>
            <div className="flex flex-wrap gap-2 md:gap-4">
              <a href="https://www.facebook.com/share/1EXyQ14HaT/?mibextid=wwXIfr" className="p-1.5 md:p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all">
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="https://www.linkedin.com/company/ddt4sd/" target="_blank" rel="noopener noreferrer" className="p-1.5 md:p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all">
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-3 md:mt-5 pt-3 md:pt-4 border-t border-primary-foreground/20 text-xs text-center md:text-left text-primary-foreground/70">
          <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-white">Cookie Policy</Link>
            <span>© {new Date().getFullYear()} ErasmusProject</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

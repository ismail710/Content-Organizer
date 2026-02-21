import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: EU Funding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* EU Flag - Static Import Simulation */}
               <img 
                 src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" 
                 alt="EU Flag" 
                 className="h-12 w-auto"
               />
               <span className="text-sm font-semibold max-w-[150px] leading-tight">
                 Co-funded by the European Union
               </span>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Project Number: 2024-1-XX01-KA220-HED-000000000
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-display text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-secondary transition-colors">About the Project</Link></li>
              <li><Link href="/results" className="hover:text-secondary transition-colors">Project Results</Link></li>
              <li><Link href="/partners" className="hover:text-secondary transition-colors">Consortium</Link></li>
              <li><Link href="/news" className="hover:text-secondary transition-colors">News & Events</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-display text-secondary">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@erasmusproject.eu" className="hover:text-secondary">info@erasmusproject.eu</a>
              </li>
              <li className="opacity-90">University of Example</li>
              <li className="opacity-90">123 Education Lane</li>
              <li className="opacity-90">1000 Brussels, Belgium</li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-display text-secondary">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-xs text-center md:text-left text-primary-foreground/70">
          <div className="grid md:grid-cols-2 gap-4">
            <p>
              Funded by the European Union. Views and opinions expressed are however those of the author(s) only 
              and do not necessarily reflect those of the European Union or the European Education and Culture 
              Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.
            </p>
            <div className="flex justify-center md:justify-end gap-6">
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/cookies" className="hover:text-white">Cookie Policy</Link>
              <span>© {new Date().getFullYear()} ErasmusProject</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

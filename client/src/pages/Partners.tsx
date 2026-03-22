import { PageHeader } from "@/components/PageHeader";
import { usePartners } from "@/hooks/use-partners";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Globe } from "lucide-react";
import { Link } from "wouter";

export default function Partners() {
  const { data: partners, isLoading } = usePartners();

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Consortium" 
        description="Our project brings together 5 countries , combining expertise in pedagogy, technology, and social inclusion."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="bg-slate-100 p-1 rounded-full inline-flex gap-1 border border-slate-200 min-w-max">
            <Link href="/partners" className="rounded-full px-6 py-2 text-sm font-semibold bg-primary text-white shadow-sm">
              Consortium
            </Link>
            <Link href="/partners/team" className="rounded-full px-6 py-2 text-sm font-semibold text-muted-foreground hover:bg-white hover:text-primary transition-colors">
              Project Team
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeletons
            Array(5).fill(0).map((_, i) => (
              <Card key={i} className="h-full border-border/60 shadow-sm animate-pulse">
                <div className="h-48 bg-slate-100"></div>
                <CardContent className="p-6">
                  <div className="h-6 w-3/4 bg-slate-100 mb-4 rounded"></div>
                  <div className="h-4 w-full bg-slate-100 mb-2 rounded"></div>
                  <div className="h-4 w-full bg-slate-100 mb-2 rounded"></div>
                </CardContent>
              </Card>
            ))
          ) : partners?.map((partner) => (
            <Link key={partner.id} href={`/partners/${partner.id}`} className="block h-full">
              <Card className="h-full border-border/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer group">
                <div className="h-48 bg-white p-8 flex items-center justify-center border-b border-slate-100">
                  <img 
                    src={partner.logoUrl} 
                    alt={`${partner.name} logo`} 
                    className="h-28 w-60 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="p-6 pb-2">
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">
                    {partner.role}
                  </div>
                  <h3 className="text-xl font-bold font-display text-primary">{partner.name}</h3>
                </CardHeader>
                <CardContent className="p-6 pt-2 flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {partner.description}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0 bg-slate-50 border-t border-slate-100 justify-center">
                  <span className="flex items-center text-primary text-sm font-medium group-hover:underline">
                    <Globe className="w-4 h-4 mr-2 text-secondary group-hover:scale-110 transition-transform" />
                    View Details
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
          
        
        </div>

      </div>
    </div>
  );
}

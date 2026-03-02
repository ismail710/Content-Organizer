import { PageHeader } from "@/components/PageHeader";
import { usePartners } from "@/hooks/use-partners";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export default function Partners() {
  const { data: partners, isLoading } = usePartners();

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Consortium" 
        description="Our project brings together 5 countries , combining expertise in pedagogy, technology, and social inclusion."
      />

      <div className="container mx-auto px-4 py-16">
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
            <a key={partner.id} href={partner.websiteUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
              <Card className="h-full border-border/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer group">
                <div className="h-48 bg-white p-8 flex items-center justify-center border-b border-slate-100">
                  <img 
                    src={partner.logoUrl} 
                    alt={`${partner.name} logo`} 
                    className="h-20 w-44 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="p-6 pb-2">
                  <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">
                    {partner.role}
                  </div>
                  <h3 className="text-xl font-bold font-display text-primary">{partner.name}</h3>
                </CardHeader>
                <CardContent className="p-6 pt-2 flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {partner.description}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0 bg-slate-50 border-t border-slate-100 justify-center">
                  <span className="flex items-center text-primary text-sm font-medium group-hover:underline">
                    <Globe className="w-4 h-4 mr-2 text-secondary group-hover:scale-110 transition-transform" />
                    Visit Website
                  </span>
                </CardFooter>
              </Card>
            </a>
          ))}
          
          {/* Join Us Card */}
          <Card className="h-full border-2 border-dashed border-primary/20 bg-primary/5 flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
            <h3 className="text-xl font-bold font-display text-primary mb-2">Interested in collaborating?</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              We are always open to networking with associated partners and other Erasmus+ projects.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Contact Coordinator
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

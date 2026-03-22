import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";
import { ArrowLeft, Globe } from "lucide-react";
import { usePartnerById } from "@/hooks/use-partners";

export default function PartnerDetail() {
  const [, params] = useRoute("/partners/:id");
  const id = params ? Number(params.id) : 0;
  const { data: partner, isLoading } = usePartnerById(id);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 animate-pulse">
        <div className="h-8 w-40 bg-slate-200 rounded mb-6" />
        <div className="h-10 w-2/3 bg-slate-200 rounded mb-4" />
        <div className="h-80 w-full bg-slate-200 rounded" />
      </div>
    );
  }

  if (!partner) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Partner not found</h1>
        <Link href="/partners">
          <Button>Back to Partners</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title={partner.name} description="Partner profile and detailed description" />

      <div className="container mx-auto px-4 py-12">
        <Link href="/partners">
          <Button variant="ghost" className="mb-6 -ml-2">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Partners
          </Button>
        </Link>

        <Card className="border-border/60 shadow-sm">
          <CardHeader className="pb-4">
            <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">
              {partner.role}
            </div>
            <div className="h-44 bg-white rounded-lg border border-slate-100 p-6 flex items-center justify-center">
              <img src={partner.logoUrl} alt={`${partner.name} logo`} className="h-28 w-72 object-contain" />
            </div>
          </CardHeader>

          <CardContent>
            <h2 className="text-2xl font-bold font-display text-primary mb-4">Description</h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{partner.description}</p>

            <a href={partner.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-8">
              <Button>
                <Globe className="h-4 w-4 mr-2" /> Visit Website
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

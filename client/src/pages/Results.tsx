import { PageHeader } from "@/components/PageHeader";
import { useResults } from "@/hooks/use-results";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Mail, Star } from "lucide-react";

export default function Results() {
  const { data: results, isLoading } = useResults();

  const deliverables = results?.filter(r => r.type === 'deliverable') || [];
  const newsletters = results?.filter(r => r.type === 'newsletter') || [];
  const promotional = results?.filter(r => r.type === 'promotional') || [];

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Project Results" 
        description="Access and download all public deliverables, intellectual outputs, and dissemination materials created during the project lifecycle."
      />

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="deliverables" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-slate-100 p-1 rounded-full">
              <TabsTrigger value="deliverables" className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white">Deliverables</TabsTrigger>
              <TabsTrigger value="newsletters" className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white">Newsletters</TabsTrigger>
              <TabsTrigger value="promotional" className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white">Promotional</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="deliverables" className="animate-in fade-in-50 duration-500">
            <div className="grid md:grid-cols-2 gap-6">
              {isLoading ? <div>Loading...</div> : deliverables.length > 0 ? (
                deliverables.map(item => (
                  <ResultCard key={item.id} item={item} icon={FileText} />
                ))
              ) : (
                <EmptyState message="No deliverables published yet." />
              )}
            </div>
          </TabsContent>

          <TabsContent value="newsletters" className="animate-in fade-in-50 duration-500">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? <div>Loading...</div> : newsletters.length > 0 ? (
                newsletters.map(item => (
                  <ResultCard key={item.id} item={item} icon={Mail} />
                ))
              ) : (
                <EmptyState message="No newsletters published yet." />
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="promotional" className="animate-in fade-in-50 duration-500">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? <div>Loading...</div> : promotional.length > 0 ? (
                promotional.map(item => (
                  <ResultCard key={item.id} item={item} icon={Star} />
                ))
              ) : (
                <EmptyState message="No promotional materials available yet." />
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function ResultCard({ item, icon: Icon }: { item: any, icon: any }) {
  return (
    <Card className="hover:shadow-md transition-all border-border/60">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-2">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-lg font-display text-gray-900 leading-tight mb-1">{item.title}</h3>
          <p className="text-xs text-muted-foreground">Published: {new Date(item.publishedAt).toLocaleDateString()}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
        <a href={item.fileUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="w-full border-primary/20 hover:border-primary hover:bg-primary/5 text-primary">
            <Download className="w-4 h-4 mr-2" /> Download
          </Button>
        </a>
      </CardContent>
    </Card>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="col-span-full py-20 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
}

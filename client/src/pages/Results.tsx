import { PageHeader } from "@/components/PageHeader";
import { useResults } from "@/hooks/use-results";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Mail, Star, Lock } from "lucide-react";
import { useCreateContact } from "@/hooks/use-contacts";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, type ComponentType, type FormEvent } from "react";
import type { ResultItem } from "@shared/schema";

export default function Results() {
  const { data: results, isLoading } = useResults();
  const createContact = useCreateContact();
  const [subscriberName, setSubscriberName] = useState("");
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const [showSubscribeForm, setShowSubscribeForm] = useState(false);

  const deliverables = (results?.filter((r) => r.type === "deliverable") || []).sort((a, b) => {
    const aMatch = a.title.match(/D\s*(\d+)\.(\d+)/i);
    const bMatch = b.title.match(/D\s*(\d+)\.(\d+)/i);

    if (aMatch && bMatch) {
      const aMajor = Number(aMatch[1]);
      const aMinor = Number(aMatch[2]);
      const bMajor = Number(bMatch[1]);
      const bMinor = Number(bMatch[2]);

      if (aMajor !== bMajor) return aMajor - bMajor;
      return aMinor - bMinor;
    }

    if (aMatch) return -1;
    if (bMatch) return 1;
    return a.title.localeCompare(b.title);
  });
  const newsletters = results?.filter(r => r.type === 'newsletter') || [];
  const promotional = results?.filter(r => r.type === 'promotional') || [];

  function submitNewsletterSubscription(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    createContact.mutate(
      {
        name: subscriberName,
        email: subscriberEmail,
        message: "Newsletter subscription via Results page",
        type: "newsletter",
        gdprConsent,
      },
      {
        onSuccess: () => {
          setSubscriberName("");
          setSubscriberEmail("");
          setGdprConsent(false);
        },
      }
    );
  }

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
            <p className="text-sm text-muted-foreground mb-6">
              All project deliverables are listed below. Downloads are enabled only for deliverables marked as public.
            </p>
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

          <TabsContent value="newsletters" className="animate-in fade-in-50 duration-500 flex flex-col min-h-[60vh]">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? <div>Loading...</div> : newsletters.length > 0 ? (
                newsletters.map(item => (
                  <ResultCard key={item.id} item={item} icon={Mail} />
                ))
              ) : (
                <EmptyState message="No newsletters published yet." />
              )}
            </div>

            <div className="mt-auto pt-10 max-w-4xl mx-auto w-full rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/10 p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold font-display text-primary">Stay in the Loop</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Subscribe to receive new newsletter releases and project updates.
                  </p>
                </div>
                <Button
                  type="button"
                  onClick={() => setShowSubscribeForm((state) => !state)}
                  className="w-full md:w-auto"
                >
                  {showSubscribeForm ? "Hide Form" : "Subscribe to Newsletter"}
                </Button>
              </div>

              {showSubscribeForm && (
                <form onSubmit={submitNewsletterSubscription} className="space-y-4 mt-6 pt-6 border-t border-primary/15">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="subscriberName">Full Name</Label>
                      <Input
                        id="subscriberName"
                        value={subscriberName}
                        onChange={(event) => setSubscriberName(event.target.value)}
                        placeholder="Jane Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subscriberEmail">Email Address</Label>
                      <Input
                        id="subscriberEmail"
                        type="email"
                        value={subscriberEmail}
                        onChange={(event) => setSubscriberEmail(event.target.value)}
                        placeholder="jane@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-md border p-3 bg-white/70">
                    <Checkbox
                      id="newsletterGdpr"
                      checked={gdprConsent}
                      onCheckedChange={(checked) => setGdprConsent(Boolean(checked))}
                    />
                    <Label htmlFor="newsletterGdpr" className="text-sm leading-relaxed font-normal cursor-pointer">
                      I consent to the processing of my personal data in accordance with GDPR for newsletter communication.
                    </Label>
                  </div>

                  <Button type="submit" disabled={createContact.isPending}>
                    {createContact.isPending ? "Subscribing..." : "Confirm Subscription"}
                  </Button>
                </form>
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

type ResultCardProps = {
  item: ResultItem;
  icon: ComponentType<{ className?: string }>;
};

function ResultCard({ item, icon: Icon }: ResultCardProps) {
  const canDownload = item.isPublic && item.fileUrl;

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
        {canDownload ? (
          <a href={item.fileUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="w-full border-primary/20 hover:border-primary hover:bg-primary/5 text-primary">
              <Download className="w-4 h-4 mr-2" /> You may download it
            </Button>
          </a>
        ) : (
          <Button variant="outline" size="sm" disabled className="w-full">
            <Lock className="w-4 h-4 mr-2" /> Available to consortium only
          </Button>
        )}
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

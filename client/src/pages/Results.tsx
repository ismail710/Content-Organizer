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

  const deliverables = results?.filter(r => r.type === 'deliverable') || [];
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
                  <ResultCard key={item.id} item={item} icon={FileText} showVisibility />
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

            <div className="mt-10 max-w-2xl mx-auto">
              <Card className="border-primary/15">
                <CardHeader>
                  <h3 className="text-xl font-bold font-display text-primary">Subscribe to the Newsletter</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive project updates directly in your inbox.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={submitNewsletterSubscription} className="space-y-4">
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

                    <div className="flex items-start gap-3 rounded-md border p-3 bg-slate-50">
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
                      {createContact.isPending ? "Subscribing..." : "Subscribe"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
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
  showVisibility?: boolean;
};

function ResultCard({ item, icon: Icon, showVisibility = false }: ResultCardProps) {
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
          {showVisibility && (
            <p className="text-xs mt-1 text-muted-foreground">
              Visibility: {item.isPublic ? "Public" : "Internal"}
            </p>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
        {canDownload ? (
          <a href={item.fileUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="w-full border-primary/20 hover:border-primary hover:bg-primary/5 text-primary">
              <Download className="w-4 h-4 mr-2" /> Download
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

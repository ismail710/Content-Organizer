import { Link, useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projectTeamMembers } from "@/lib/staticData";

function toSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

export default function ProjectTeamDetail() {
  const [, params] = useRoute("/partners/team/:slug");
  const slug = params?.slug ?? "";
  const member = projectTeamMembers.find((item) => toSlug(item.name) === slug);

  if (!member) {
    return (
      <div className="min-h-screen bg-background">
        <PageHeader title="Project Team" description="Profile not found." />
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-muted-foreground mb-6">The requested team profile could not be found.</p>
          <Link href="/partners/team">
            <Button>Back to Project Team</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title={member.name} description={member.role} />

      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="bg-slate-100 p-1 rounded-full inline-flex gap-1 border border-slate-200 min-w-max">
            <Link href="/partners" className="rounded-full px-6 py-2 text-sm font-semibold text-muted-foreground hover:bg-white hover:text-primary transition-colors">
              Consortium
            </Link>
            <Link href="/partners/team" className="rounded-full px-6 py-2 text-sm font-semibold bg-primary text-white shadow-sm">
              Project Team
            </Link>
          </div>
        </div>

        <Link href="/partners/team">
          <Button variant="ghost" className="mb-8 -ml-2">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Team Profiles
          </Button>
        </Link>

        <Card className="overflow-hidden border-border/60 shadow-sm">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/10 p-8 border-b border-border/50">
            <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
              {member.imageUrl ? (
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-40 h-40 rounded-2xl object-cover border border-white shadow-sm"
                />
              ) : (
                <div className="w-40 h-40 rounded-2xl bg-primary/10 border border-white shadow-sm flex items-center justify-center text-primary font-bold text-4xl">
                  {initials(member.name)}
                </div>
              )}
              <div>
                <p className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">Project Team</p>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-primary leading-tight">{member.name}</h2>
                <p className="text-muted-foreground mt-2">{member.role}</p>
                {member.affiliation && <p className="text-sm text-muted-foreground mt-2">{member.affiliation}</p>}
                {member.contactEmail && <p className="text-sm text-primary mt-1">{member.contactEmail}</p>}
              </div>
            </div>
          </div>

          <CardContent className="p-8">
            <div className="space-y-6">
              {member.bio.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-sm md:text-base leading-8 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

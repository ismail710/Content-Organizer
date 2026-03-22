import { Link } from "wouter";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { projectTeamMembers } from "@/lib/staticData";

function toSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function previewText(value: string) {
  const firstParagraph = value.split("\n\n")[0] || value;
  return firstParagraph;
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

export default function ProjectTeam() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Project Team"
        description="Leadership profiles and full biographies of key experts driving DTT4SD implementation."
      />

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

        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold font-display text-primary">Leadership Profiles</h2>
          <p className="text-muted-foreground mt-3">
            Explore the project team in detail. Each profile includes the full professional biography and leadership role within DTT4SD.
          </p>
        </div>

        {projectTeamMembers.length > 0 ? (
          <div className="grid xl:grid-cols-2 gap-8">
            {projectTeamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden border-border/60 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-primary/5 to-secondary/10 p-6 border-b border-border/50">
                  <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
                    {member.imageUrl ? (
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-28 h-28 rounded-2xl object-cover border border-white shadow-sm"
                      />
                    ) : (
                      <div className="w-28 h-28 rounded-2xl bg-primary/10 border border-white shadow-sm flex items-center justify-center text-primary font-bold text-2xl">
                        {initials(member.name)}
                      </div>
                    )}
                    <div>
                      <p className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">Project Team</p>
                      <h3 className="text-2xl font-bold font-display text-primary leading-tight">{member.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
                      {member.affiliation && <p className="text-xs text-muted-foreground mt-1">{member.affiliation}</p>}
                      {member.contactEmail && <p className="text-xs text-primary mt-1">{member.contactEmail}</p>}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-sm leading-7 text-muted-foreground line-clamp-4">
                    {previewText(member.bio)}
                  </p>
                  <Link href={`/partners/team/${toSlug(member.name)}`}>
                    <Button variant="outline" className="mt-5 border-primary/30 text-primary hover:bg-primary/5">
                      Read Full Profile <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="border-border/60">
            <CardContent className="p-10 text-center text-muted-foreground">
              Project team profiles will appear here once data is available.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

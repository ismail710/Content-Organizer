import { PageHeader } from "@/components/PageHeader";
import { CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="About the Project" 
        description="Learn more about our objectives, work packages, and the impact we aim to achieve through this European collaboration."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold font-display text-primary mb-6">Project Overview</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  This project aims to bridge the gap between theoretical knowledge and practical application in the field of sustainable digital education. By bringing together experts from 5 European countries, we are creating a comprehensive framework for educators.
                </p>
                <p className="mt-4">
                  The primary motivation for this project is the rapid digital transformation of the education sector, which has left many institutions struggling to adapt. Our consortium believes that a collaborative, transnational approach is the best way to address these shared challenges.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-display text-primary mb-6">Key Objectives</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Develop a standardized curriculum for digital literacy",
                  "Create open educational resources for teachers",
                  "Foster cross-cultural collaboration among students",
                  "Establish a network of digital education experts",
                  "Promote inclusion in digital learning environments"
                ].map((obj, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-border">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium">{obj}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-display text-primary mb-6">Timeline</h2>
              <div className="relative border-l-2 border-primary/20 ml-3 space-y-8 pl-8 py-2">
                {[
                  { date: "M1 - Jan 2024", title: "Project Kick-off", desc: "Initial meeting in Brussels to align on goals." },
                  { date: "M6 - Jun 2024", title: "Research Phase Complete", desc: "Completion of the needs analysis report." },
                  { date: "M12 - Dec 2024", title: "Mid-term Evaluation", desc: "Assessment of progress and interim report." },
                  { date: "M18 - Jun 2025", title: "Pilot Testing", desc: "Testing the toolkit with 50 teachers." },
                  { date: "M24 - Dec 2025", title: "Final Conference", desc: "Dissemination event and project closure." },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                      <span className="font-bold text-primary font-display">{item.title}</span>
                      <span className="text-xs font-bold uppercase text-muted-foreground bg-slate-100 px-2 py-0.5 rounded">{item.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card className="bg-primary text-primary-foreground border-none shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-display mb-4 text-secondary">Project Details</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="opacity-70 text-xs uppercase tracking-wider">Programme</dt>
                    <dd className="font-medium text-lg">Erasmus+</dd>
                  </div>
                  <div>
                    <dt className="opacity-70 text-xs uppercase tracking-wider">Key Action</dt>
                    <dd className="font-medium text-lg">KA220 - Cooperation partnerships</dd>
                  </div>
                  <div>
                    <dt className="opacity-70 text-xs uppercase tracking-wider">Project Reference</dt>
                    <dd className="font-medium">2024-1-XX01-KA220-HED-000000</dd>
                  </div>
                  <div>
                    <dt className="opacity-70 text-xs uppercase tracking-wider">Start Date</dt>
                    <dd className="font-medium">01-01-2024</dd>
                  </div>
                  <div>
                    <dt className="opacity-70 text-xs uppercase tracking-wider">End Date</dt>
                    <dd className="font-medium">31-12-2025</dd>
                  </div>
                  <div>
                    <dt className="opacity-70 text-xs uppercase tracking-wider">Coordinator</dt>
                    <dd className="font-medium">University of Example (BE)</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <div className="bg-slate-50 p-6 rounded-xl border border-border">
              <h3 className="font-bold font-display text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Work Packages
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>WP1: Management</span>
                  <span className="font-bold text-gray-400">M1-M24</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>WP2: Research & Analysis</span>
                  <span className="font-bold text-gray-400">M2-M8</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>WP3: Curriculum Design</span>
                  <span className="font-bold text-gray-400">M9-M16</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>WP4: Dissemination</span>
                  <span className="font-bold text-gray-400">M1-M24</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

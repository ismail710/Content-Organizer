import { PageHeader } from "@/components/PageHeader";
import { CheckCircle2, Clock, Target, ChevronDown, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function About() {
  const [openWp, setOpenWp] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="About the Project" 
        description="Learn more about our objectives, work packages, and the impact we aim to achieve through this European collaboration."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12 order-2 md:order-1">
            <section>
              <h2 className="text-2xl font-bold font-display text-primary mb-6">Project Overview</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  This Erasmus+ project aims to bridge the gap between theoretical knowledge and practical application in the field of Digital Twin Technology (DTT) for Sustainable Development. By bringing together a transnational consortium of experts, we are creating a modernized educational framework that integrates advanced digital simulations with real-world industrial needs.
                </p>
                <p className="mt-4">
                  Through the development of open-access resources and digital twin showcases, DTT4SD ensures that the next generation of professionals is equipped to lead a more sustainable and technologically advanced future.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-display text-primary mb-6">Project Objectives</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Improved level of competencies and skills of teaching staff in partner HEIs",
                  "Digital twin showcases developed",
                  "Partner HEIs digital twin technology supported courses modernized",
                  "Business sector actively participate in digital twin showcase development and usage",
                ].map((obj, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-border">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium">{obj}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-display text-primary mb-6">Work Packages</h2>
              <div className="space-y-6">
                {[
                  {
                    wp: "WP1", title: "Project Management and Coordination", leader: "UNIZG",
                    period: "January 2026 – December 2028",
                    objectives: [
                      "Formalize Governance: Prepare and finalize key administrative documents, including the Project Management Plan and the Partnership Agreement.",
                      "Define Leadership Structures: Formalize the selection of Work Package (WP) and Task leaders, as well as their respective teams.",
                      "Maintain Consistent Oversight: Ensure continuous monitoring through 18 bimonthly PMB meetings and at least 4 PSC meetings.",  
                      "Facilitate Internal Collaboration: Establish and maintain day-to-day communication channels between all project partners.",
                      "Document Progress: Generate official meeting minutes for all PMB, PSC, and event gatherings to ensure transparency.",
                      "Ensure Regulatory Compliance: Prepare all technical and financial documentation in strict accordance with EACEA instructions.",
                      "Finalize Project Outcomes: Compile and submit the Final report covering both technical achievements and financial accountability.",
                    ],
                    tasks: [
                      { id: "T1.1", title: "Project management and reporting setup", leader: "UNIZG" },
                      { id: "T1.2", title: "Project management execution", leader: "UNIZG" },
                      { id: "T1.3", title: "Progress and Final reports submission", leader: "UNIZG" },
                    ]
                  },
                  {
                    wp: "WP2", title: "Curricula Development and Training", leader: "UT",
                    period: "January 2026 – June 2027",
                    objectives: [
                      "Align curricula and competencies with partner and stakeholder needs.",
                      "Develop and modernize higher education and lifelong learning courses.",
                      "Enhance teaching staff skills and provide necessary infrastructure.",
                    ],
                    tasks: [
                      { id: "T2.1", leader: "UCAR", desc: "Connecting policies with partner needs for curricula modernization. Stakeholder survey (250 responses target), comparative curricula analysis, and unified Catalogue of competencies presented at a stakeholder workshop." },
                      { id: "T2.2", leader: "UT", desc: "One new MSc course on digital twin applications developed. 12 university courses (3 per partner) modernized. LLL courses developed; each partner HEI prepares 3 different courses." },
                      { id: "T2.3", leader: "UT", desc: "1st training in Enschede (M5/M6, basic ICT & didactics, 14 teachers). 2nd training in Zagreb (M16/M17, digital twin development & equipment, 21 teachers). 2 preparatory online trainings to maximize effect." },
                      { id: "T2.4", leader: "IAV", desc: "Public procurement for equipment and software at 6 partner HEI labs (HW/SW for digital twins + remote sensing and in-situ sensors). Open call per national legislation and Erasmus+ guidelines." },
                    ]
                  },
                  {
                    wp: "WP3", title: "Modernized Curricula and Digital Twin Showcase Implementation", leader: "UJ",
                    period: "July 2027 – December 2028",
                    objectives: [
                      "Implement modernized curricula and engage students in higher education and lifelong learning programs.",
                      "Develop and demonstrate functional, upgradable digital twin platforms in collaboration with HEIs and industry.",
                      "Foster practical skills and stakeholder engagement through hackathons and hands-on trainings.",
                    ],
                    tasks: [
                      { id: "T3.1", leader: "UJ", desc: "HEI bodies adopt modernized courses. At least 140 university students enrolled and 400 LLL participants. Deliverable: report on implemented courses and teaching." },
                      { id: "T3.2", leader: "OIKON", desc: "Partner HEIs and business stakeholders co-develop multifunctional, upgradable educational digital twin platform. Students participate via practical placement. Deliverable: 5 functional digital twin showcases (one per partner country)." },
                      { id: "T3.3", leader: "CRTEAN", desc: "3 national hackathon preparation events (M18–M30, physical/online) + 3 in-situ HEI trainings with Program partner support transferring knowledge to colleagues and students." },
                      { id: "T3.4", leader: "UNIZG", desc: "Student hackathon: 2 teams per Asian partner HEI. Used for promotion, dissemination, exploitation and engaging business/public stakeholders and media. Deliverable: organized hackathon and report." },
                    ]
                  },
                  {
                    wp: "WP4", title: "Communication, Dissemination and Exploitation", leader: "IAV",
                    period: "January 2026 – December 2028",
                    objectives: [
                      "Ensure effective internal and external communication to promote project identity and activities.",
                      "Disseminate project results and materials to reach target groups and stakeholders.",
                      "Facilitate exploitation and sustainable cooperation between HEIs, businesses, and the public.",
                    ],
                    tasks: [
                      { id: "T4.1", leader: "ITU", desc: "Communication Plan covering internal/external communication, target groups, project identity and channels. Tools: website (www.dtt4ds.eu), Facebook, YouTube, e-Newsletter (quarterly). Deliverable: plan, project website and final communication report." },
                      { id: "T4.2", leader: "IAV / UNIZG", desc: "Google-based project platform for document management (UNIZG). Promotion materials (leaflet, poster, roll-up, branded items) produced by IAV in English, French and Arabic. Project brochure printed for Final conference." },
                      { id: "T4.3", leader: "IAV / IRESA", desc: "Dissemination & Exploitation Plan identifying target groups, D&E goals, actions and success indicators. Covers post-project sustainability and stakeholder links (farmers, businesses, public). Deliverable: D&E plan and end-of-project report." },
                      { id: "T4.4", leader: "CRTEAN", desc: "Multiplier events to strengthen HEI–business–public cooperation. Each South-Med HEI targets 5 new bilateral cooperation agreements. Deliverable: multiplier events reports." },
                    ]
                  },
                  {
                    wp: "WP5", title: "Quality Assurance and Sustainability", leader: "FU",
                    period: "April 2026 – December 2028",
                    objectives: [
                      "Establish a quality assurance framework and conduct external evaluations throughout the project.",
                      "Monitor deliverable quality and ensure timely response to risks and deviations.",
                      "Develop sustainability and cooperation plans to secure long-term project impact after funding ends.",
                    ],
                    tasks: [
                      { id: "T5.1", leader: "FU", desc: "Quality Assurance Plan with tools and procedures. External evaluator engaged from M15, delivering two evaluation reports (M18 and M35). Deliverable: QA plan." },
                      { id: "T5.2", leader: "UCAR", desc: "QAC team monitors QA indicators and reports per QAP. PMB responds to risks/deviations. Quality assessment of all deliverables prior to final adoption. Deliverables: internal periodical QA reports." },
                      { id: "T5.3", leader: "FU", desc: "Project Sustainability Plan (PSP) providing generic framework. Each South-Med partner develops its own SP. Consortia Memorandum of Cooperation adopted by Final conference. Deliverables: PSP, 6 partner SPs and Consortia MoC." },
                      { id: "T5.4", leader: "USK", desc: "Final conference organized by UIT in M35/M36. Gathering all partners, students and stakeholders. Project results publication promoted, Hackathon winners proclaimed. Deliverable: Final conference report." },
                    ]
                  },
                ].map((wp, wi) => (
                  <div key={wi} className="border border-border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenWp(openWp === wi ? null : wi)}
                      className="w-full bg-primary px-5 py-4 flex flex-wrap items-center justify-between gap-2 text-left hover:bg-primary/90 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded">{wp.wp}</span>
                        <span className="font-bold text-primary-foreground font-display">{wp.title}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-3 text-xs text-primary-foreground/70">
                          <span>WPL: <span className="font-semibold text-secondary">{wp.leader}</span></span>
                          <span>{wp.period}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-primary-foreground/70 transition-transform duration-200 ${openWp === wi ? "rotate-180" : ""}`} />
                      </div>
                    </button>
                    {openWp === wi && (
                      <>
                        {/* Tasks */}
                        <div className="divide-y divide-border">
                          {wp.tasks.map((t: any, ti: number) => (
                            <div key={ti} className="px-5 py-3 bg-white flex gap-4 items-center">
                              <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded flex-shrink-0">{t.id}</span>
                              <span className="text-sm font-medium text-gray-800">{t.title ?? t.desc}</span>
                            </div>
                          ))}
                        </div>
                        {/* Objectives (WP1 only) */}
                        {(wp as any).objectives && (
                          <div className="px-5 py-4 bg-slate-50 border-t border-border">
                            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-3">
                              <Target className="w-4 h-4" /> Objectives
                            </p>
                            <ul className="space-y-2">
                              {(wp as any).objectives.map((obj: string, oi: number) => (
                                <li key={oi} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                                  <span>{obj}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Progress Section */}
            <section>
              <h2 className="text-2xl font-bold font-display text-primary mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-secondary" /> Project Progress
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-primary">Project Duration</span>
                    <span className="text-sm font-bold text-secondary">5%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <div className="bg-primary h-3 rounded-full transition-all duration-700" style={{ width: "5%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Jan 2026 – Dec 2028 (36 months)</p>
                </div>
                <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-primary">Achievements</span>
                    <span className="text-sm font-bold text-secondary">5%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <div className="bg-secondary h-3 rounded-full transition-all duration-700" style={{ width: "5%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Deliverables &amp; milestones completed</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 order-1 md:order-2">
            <Card className="bg-primary text-primary-foreground border-none shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-display mb-4 text-secondary">Project Details</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="opacity-70 text-xs uppercase tracking-wider">Programme</dt>
                    <dd className="font-medium text-lg">Erasmus+</dd>
                  </div>
                  <div>
                    <dt className="opacity-70 text-xs uppercase tracking-wider">Action Type</dt>
                    <dd className="font-medium">CBHE – Capacity Building in Higher Education</dd>
                  </div>
                  <div>
                    <dt className="opacity-70 text-xs uppercase tracking-wider">Project Acronym</dt>
                    <dd className="font-medium text-lg">DTT4DS</dd>
                  </div>
                  <div>
                    <dt className="opacity-70 text-xs uppercase tracking-wider">Project Number</dt>
                    <dd className="font-medium">101237713</dd>
                  </div>
                  <div>
                    <dt className="opacity-70 text-xs uppercase tracking-wider">Start Date</dt>
                    <dd className="font-medium">01-01-2026</dd>
                  </div>
                  <div>
                    <dt className="opacity-70 text-xs uppercase tracking-wider">End Date</dt>
                    <dd className="font-medium">31-12-2028</dd>
                  </div>
                  <div>
                    <dt className="opacity-70 text-xs uppercase tracking-wider">Coordinator</dt>
                    <dd className="font-medium">University of Zagreb (UNIZG)</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <div className="bg-slate-50 p-6 rounded-xl border border-border hidden md:block">
              <h3 className="font-bold font-display text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Work Packages
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>WP1: Management & Coordination</span>
                  <span className="font-bold text-gray-400">Jan'26–Dec'28</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>WP2: Curricula Dev. & Training</span>
                  <span className="font-bold text-gray-400">Jan'26–Jun'27</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>WP3: Showcase Implementation</span>
                  <span className="font-bold text-gray-400">Jul'27–Dec'28</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>WP4: Communication & Dissem.</span>
                  <span className="font-bold text-gray-400">Jan'26–Dec'28</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span>WP5: Quality & Sustainability</span>
                  <span className="font-bold text-gray-400">Apr'26–Dec'28</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

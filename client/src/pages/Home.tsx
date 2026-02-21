import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Users, Lightbulb, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useNewsList } from "@/hooks/use-news";
import { NewsCard } from "@/components/NewsCard";
import { usePartners } from "@/hooks/use-partners";

export default function Home() {
  const { data: newsItems, isLoading: newsLoading } = useNewsList();
  const { data: partners, isLoading: partnersLoading } = usePartners();

  // Take only top 3 news items
  const latestNews = newsItems?.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary border border-secondary/30 rounded-full px-4 py-1 mb-6 text-sm font-bold backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-secondary"></span>
              Erasmus+ KA220 Project
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold leading-tight mb-6">
              Innovating Education for a <span className="text-secondary">Sustainable Future</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-lg">
              Empowering students and educators through cross-border cooperation, digital transformation, and inclusive learning methodologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-base px-8 h-14">
                  About the Project
                </Button>
              </Link>
              <Link href="/results">
                <Button size="lg" variant="outline" className="border-white text-primary-foreground hover:bg-white hover:text-primary font-bold text-base px-8 h-14">
                  View Results
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block relative"
          >
            {/* Hero Image - Diverse group of students working together */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 rotate-3 hover:rotate-0 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                alt="Students collaborating" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <p className="font-bold text-lg">Building bridges across Europe</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Quick Info */}
      <section className="bg-slate-50 py-12 border-b">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-primary font-display mb-2">24</h3>
            <p className="text-muted-foreground font-medium">Months Duration</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-primary font-display mb-2">5</h3>
            <p className="text-muted-foreground font-medium">Partner Countries</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-primary font-display mb-2">3</h3>
            <p className="text-muted-foreground font-medium">Major Outputs</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-primary font-display mb-2">200+</h3>
            <p className="text-muted-foreground font-medium">Participants</p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 font-display text-gray-900">Why this project matters</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This Erasmus+ Strategic Partnership aims to address the digital skills gap in higher education by developing open educational resources and innovative teaching methodologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-all">
              <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">Innovation</h3>
              <p className="text-muted-foreground">Developing new methodologies for digital learning that engage students and improve retention.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-all">
              <div className="bg-yellow-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">Inclusion</h3>
              <p className="text-muted-foreground">Ensuring that digital education is accessible to all students, regardless of their background.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-all">
              <div className="bg-green-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Download className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">Resources</h3>
              <p className="text-muted-foreground">Creating open-access downloadable toolkits for educators across Europe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Stay Updated</span>
              <h2 className="text-3xl font-bold mt-2 font-display text-gray-900">Latest News & Events</h2>
            </div>
            <Link href="/news">
              <Button variant="ghost" className="text-primary font-semibold hover:bg-primary/10">
                View All News <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsLoading ? (
               [1, 2, 3].map(i => (
                 <div key={i} className="h-96 bg-white rounded-xl animate-pulse border border-border/50"></div>
               ))
            ) : (
              latestNews?.map(item => (
                <NewsCard key={item.id} item={item} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Partners Banner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
             <h3 className="text-2xl font-bold font-display text-gray-900">Our Consortium</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {partnersLoading ? (
              <div className="text-muted-foreground">Loading partners...</div>
            ) : partners && partners.length > 0 ? (
              partners.map(partner => (
                <div key={partner.id} className="h-16 flex items-center justify-center">
                  <span className="font-display font-bold text-xl">{partner.name}</span>
                </div>
              ))
            ) : (
              // Fallback placeholders if no partners yet
              <>
                <div className="font-bold text-xl text-gray-400">University A</div>
                <div className="font-bold text-xl text-gray-400">Institute B</div>
                <div className="font-bold text-xl text-gray-400">Organization C</div>
                <div className="font-bold text-xl text-gray-400">NGO D</div>
              </>
            )}
          </div>
          <div className="text-center mt-10">
            <Link href="/partners">
              <Button variant="outline">Meet the Partners</Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

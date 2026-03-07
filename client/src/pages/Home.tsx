import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Users, Lightbulb, ExternalLink, Leaf, Handshake, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { useNewsList } from "@/hooks/use-news";
import { NewsCard } from "@/components/NewsCard";
import { usePartners } from "@/hooks/use-partners";

const heroSlides = [
  {
    image: "/amphi.jpeg",
    caption: "Project kick-off in Tunisia",
    tag: "Kick-off",
  },
  {
    image: "/groupe.jpeg",
    caption: "Project kick-off in Tunisia",
    tag: "Kick-off",
  },
  {
    image: "/reunion.jpg",
    caption: "Project kick-off in Tunisia",
    tag: "Kick-off",
  },
];


// Tracks unique visitors via CounterAPI (global, works on static hosting)
// with a localStorage fallback if the API is unreachable.
function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const isNewSession = !sessionStorage.getItem("visited");

    if (!isNewSession) {
      // Already counted this tab session – just show the cached value
      const cached = parseInt(localStorage.getItem("visitorCount") ?? "0", 10) || 0;
      setCount(cached);
      return;
    }

    sessionStorage.setItem("visited", "1");

    // Hit the free global counter (no sign-up required)
    fetch("https://api.counterapi.dev/v1/dtt4ds-project/visitors/up")
      .then((r) => r.json())
      .then((data) => {
        const value: number = data?.count ?? data?.value ?? 0;
        if (value > 0) {
          localStorage.setItem("visitorCount", String(value));
          setCount(value);
        } else {
          throw new Error("invalid response");
        }
      })
      .catch(() => {
        // Offline / CORS fallback: local increment
        const stored = parseInt(localStorage.getItem("visitorCount") ?? "0", 10) || 0;
        const newCount = stored + 1;
        localStorage.setItem("visitorCount", String(newCount));
        setCount(newCount);
      });
  }, []);

  return (
    <h3 className="text-3xl md:text-4xl font-bold text-primary font-display mb-2">
      {count !== null ? count.toLocaleString() : "—"}
    </h3>
  );
}

export default function Home() {
  const { data: newsItems, isLoading: newsLoading } = useNewsList();
  const { data: partners, isLoading: partnersLoading } = usePartners();
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const latestNews = newsItems?.slice(0, 3);

  const goTo = useCallback((index: number) => {
    setDirection(index > slide ? 1 : -1);
    setSlide(index);
  }, [slide]);

  const next = useCallback(() => {
    setDirection(1);
    setSlide((s) => (s + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[70vh] flex items-center">
        {/* Full-background Slider */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={slide}
            custom={direction}
            variants={{
              enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[slide].image}
              alt={heroSlides[slide].caption}
              className="w-full h-full object-cover"
            />
            {/* Light overlay */}
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next */}
        <button onClick={prev} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white rounded-full p-1.5 md:p-2 transition-colors" title="Previous slide">
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
        </button>
        <button type="button" onClick={next} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white rounded-full p-1.5 md:p-2 transition-colors" title="Next slide">
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              title={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === slide ? "w-6 bg-secondary" : "w-2 bg-white/50"}`}
            />
          ))}
        </div>

        {/* Slide caption badge */}
        <div className="absolute bottom-12 right-6 z-20 hidden md:block">
          <span className="bg-black/40 backdrop-blur-sm text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
            {heroSlides[slide].tag} — {heroSlides[slide].caption}
          </span>
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 py-12 sm:py-20 md:py-28">
          <div className="max-w-2xl">
            {/* Badge */}

            {/* Hero heading */}
            <motion.h1
              className="text-2xl sm:text-4xl md:text-6xl font-display font-extrabold leading-tight mb-6 md:mb-8 mt-52 md:mt-72 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              Project kick-off in{" "}
              <span className="text-secondary">Tunisia</span>
            </motion.h1>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.6 }}
            >
              <div className="flex flex-wrap gap-4">
                <Link href="/about">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-sm md:text-base px-5 md:px-8 h-11 md:h-14">
                    About the Project
                  </Button>
                </Link>
                <Link href="/results">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-bold text-sm md:text-base px-5 md:px-8 h-11 md:h-14">
                    View Results
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Title Banner */}
      <div className="bg-primary border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex items-center justify-center gap-4">
          <span className="hidden sm:block h-px w-12 bg-white/20 flex-shrink-0" />
          <p className="text-center text-base font-semibold text-primary-foreground/90 tracking-wide leading-snug">
            <span className="text-white/50 font-medium mr-2">CBHE Erasmus+</span>
            Developing Higher Education on Sustainable Development and Social Responsibility Using Digital Twin Tools
          </p>
          <span className="hidden sm:block h-px w-12 bg-white/20 flex-shrink-0" />
        </div>
      </div>

      {/* Stats / Quick Info */}
      <section className="bg-slate-50 py-12 border-b">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-primary font-display mb-2">3</h3>
            <p className="text-muted-foreground font-medium">Years</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-primary font-display mb-2">10</h3>
            <p className="text-muted-foreground font-medium">Partners</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-primary font-display mb-2">5</h3>
            <p className="text-muted-foreground font-medium">WorkPackages</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-primary font-display mb-2">679 476</h3>
            <p className="text-muted-foreground font-medium">Budget</p>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <VisitorCounter />
            <p className="text-muted-foreground font-medium">Visitors</p>
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
              This Erasmus+ project aims to modernize higher education by enhancing teaching competencies and developing industry-integrated digital twin showcases and courses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-all">
              <div className="bg-green-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">Sustainability</h3>
              <p className="text-muted-foreground">Leveraging Digital Twin technology to simulate and optimize resource efficiency, contributing to greener industrial practices and sustainable urban development.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-all">
              <div className="bg-yellow-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Handshake className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">Collaboration</h3>
              <p className="text-muted-foreground">Bridging the gap between higher education and the business sector by co-creating real-world industrial showcases and practical learning environments.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-all">
              <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">Professional Excellence</h3>
              <p className="text-muted-foreground">Empowering teaching staff with advanced digital skills to lead the transition towards modernized, technology-driven curricula.</p>
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
      <section className="py-16 overflow-hidden bg-slate-50 border-y border-border/40">
        <div className="container mx-auto px-4 mb-10 text-center">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Consortium</span>
          <h3 className="text-2xl font-bold font-display text-gray-900 mt-1">Our Partners</h3>
        </div>

        {partnersLoading ? (
          <div className="flex justify-center gap-8">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-36 h-20 bg-white animate-pulse rounded-xl border border-border/40" />
            ))}
          </div>
        ) : partners && partners.length > 0 ? (
          <div
            className="relative flex"
            style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
          >
            {/* Duplicate the list for seamless infinite scroll */}
            {[0, 1].map(copy => (
              <div
                key={copy}
                className="flex shrink-0 gap-8 pr-8 animate-marquee"
                style={{ animationDuration: `${partners.length * 4}s` }}
              >
                {partners.map(partner => (
                  <Link key={partner.id} href="/partners">
                    <motion.div
                      whileHover={{ scale: 1.07, y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-40 h-24 bg-white rounded-xl border border-border/40 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center p-4 cursor-pointer group"
                      title={partner.name}
                    >
                      <img
                        src={partner.logoUrl}
                        alt={`${partner.name} logo`}
                        className="h-12 w-28 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                      />
                    </motion.div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center gap-8 flex-wrap">
            {["University A","Institute B","Organization C","NGO D"].map(name => (
              <div key={name} className="font-bold text-xl text-gray-400">{name}</div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}

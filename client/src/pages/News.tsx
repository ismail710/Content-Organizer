import { PageHeader } from "@/components/PageHeader";
import { useNewsList } from "@/hooks/use-news";
import { NewsCard } from "@/components/NewsCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function News() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  
  // Fetch specific type if filtered, otherwise fetch all (server logic might differ slightly, but for now we filter client side or via hook params)
  // For simplicity, fetching all and filtering client-side if the API supported filtering we'd pass param
  const { data: allNews, isLoading } = useNewsList();
  const now = Date.now();

  const allUpdates = allNews || [];
  const eventOnly = allUpdates.filter((item) => item.type === "event");
  const upcomingEvents = eventOnly.filter((item) => item.eventDate && new Date(item.eventDate).getTime() >= now);
  const pastEvents = eventOnly.filter((item) => item.eventDate && new Date(item.eventDate).getTime() < now);

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="News & Events" 
        description="Stay up to date with the latest project activities, transnational meetings, and multiplier events."
      />

      <div className="container mx-auto px-4 py-12">
        
        {/* Filter Controls */}
        <div className="mb-10 overflow-x-auto pb-2">
          <div className="inline-flex gap-1 bg-slate-100 p-1 rounded-full border border-slate-200 min-w-max">
            <Button
            variant="ghost"
            onClick={() => setFilter('all')}
            className={`rounded-full px-5 py-2 font-semibold transition-all ${
              filter === "all"
                ? "bg-primary text-white shadow-sm hover:bg-primary/90"
                : "text-muted-foreground hover:bg-white hover:text-primary"
            }`}
          >
            All Updates
          </Button>
            <Button
              variant="ghost"
              onClick={() => setFilter('upcoming')}
              className={`rounded-full px-5 py-2 font-semibold transition-all ${
                filter === "upcoming"
                  ? "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90"
                  : "text-muted-foreground hover:bg-white hover:text-primary"
              }`}
            >
              Upcoming Events
            </Button>
            <Button
              variant="ghost"
              onClick={() => setFilter('past')}
              className={`rounded-full px-5 py-2 font-semibold transition-all ${
                filter === "past"
                  ? "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90"
                  : "text-muted-foreground hover:bg-white hover:text-primary"
              }`}
            >
              Past Events
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="h-96 bg-white rounded-xl animate-pulse border border-border/50"></div>
            ))}
          </div>
        ) : filter === "all" ? (
          allUpdates.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allUpdates.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-xl text-muted-foreground">No updates found.</p>
            </div>
          )
        ) : filter === "upcoming" ? (
          <section>
            <h3 className="text-2xl font-bold font-display text-primary mb-6">Upcoming Events</h3>
            {upcomingEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="py-10 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
                <p className="text-muted-foreground">No upcoming events announced yet.</p>
              </div>
            )}
          </section>
        ) : (
          <section>
            <h3 className="text-2xl font-bold font-display text-primary mb-6">Past Events</h3>
            {pastEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="py-10 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
                <p className="text-muted-foreground">No past events available yet.</p>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}

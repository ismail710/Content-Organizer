import { PageHeader } from "@/components/PageHeader";
import { useNewsList } from "@/hooks/use-news";
import { NewsCard } from "@/components/NewsCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function News() {
  const [filter, setFilter] = useState<'all' | 'news' | 'event'>('all');
  
  // Fetch specific type if filtered, otherwise fetch all (server logic might differ slightly, but for now we filter client side or via hook params)
  // For simplicity, fetching all and filtering client-side if the API supported filtering we'd pass param
  const { data: allNews, isLoading } = useNewsList(filter === 'all' ? undefined : filter);

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="News & Events" 
        description="Stay up to date with the latest project activities, transnational meetings, and multiplier events."
      />

      <div className="container mx-auto px-4 py-12">
        
        {/* Filter Controls */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
          <Button 
            variant={filter === 'all' ? "default" : "outline"}
            onClick={() => setFilter('all')}
            className="rounded-full"
          >
            All Updates
          </Button>
          <Button 
            variant={filter === 'news' ? "default" : "outline"}
            onClick={() => setFilter('news')}
            className="rounded-full"
          >
            Project News
          </Button>
          <Button 
            variant={filter === 'event' ? "default" : "outline"}
            onClick={() => setFilter('event')}
            className="rounded-full"
          >
            Upcoming Events
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="h-96 bg-white rounded-xl animate-pulse border border-border/50"></div>
            ))
          ) : allNews && allNews.length > 0 ? (
            allNews.map(item => (
              <NewsCard key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-xl text-muted-foreground">No updates found for this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

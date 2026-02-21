import { useRoute, Link } from "wouter";
import { useNewsItem } from "@/hooks/use-news";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ArrowLeft, Share2 } from "lucide-react";
import { format } from "date-fns";

export default function NewsItem() {
  const [, params] = useRoute("/news/:id");
  const id = params ? parseInt(params.id) : 0;
  const { data: item, isLoading } = useNewsItem(id);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-20 animate-pulse">
        <div className="h-8 w-24 bg-slate-200 rounded mb-4"></div>
        <div className="h-12 w-3/4 bg-slate-200 rounded mb-6"></div>
        <div className="h-96 w-full bg-slate-200 rounded mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 w-full bg-slate-200 rounded"></div>
          <div className="h-4 w-full bg-slate-200 rounded"></div>
          <div className="h-4 w-2/3 bg-slate-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Link href="/news">
          <Button>Back to News</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-slate-50 border-b">
        <div className="container mx-auto px-4 py-12">
          <Link href="/news">
            <Button variant="ghost" size="sm" className="mb-6 -ml-4 text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to News
            </Button>
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="uppercase tracking-wider">
              {item.type}
            </Badge>
            <span className="flex items-center text-sm text-muted-foreground bg-white px-3 py-0.5 rounded-full border">
              <Calendar className="w-3.5 h-3.5 mr-2" />
              {item.eventDate 
                ? format(new Date(item.eventDate), "MMMM d, yyyy") 
                : format(new Date(item.publishedAt), "MMMM d, yyyy")}
            </span>
            {item.location && (
              <span className="flex items-center text-sm text-muted-foreground bg-white px-3 py-0.5 rounded-full border">
                <MapPin className="w-3.5 h-3.5 mr-2" />
                {item.location}
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold font-display text-primary leading-tight max-w-4xl">
            {item.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden mb-10 shadow-lg border border-border/50">
               <img 
                 src={item.imageUrl || "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80"} 
                 alt={item.title}
                 className="w-full h-auto object-cover max-h-[500px]"
               />
            </div>

            {/* Content */}
            <article className="prose prose-lg prose-blue max-w-none">
              {item.content.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </article>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-border sticky top-24">
              <h3 className="font-bold text-lg font-display mb-4">Share this article</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full bg-white hover:bg-primary hover:text-white transition-colors">
                  <Share2 className="w-4 h-4" />
                </Button>
                {/* Add actual social share links here if needed */}
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="font-bold text-lg font-display mb-4">Subscribe</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Don't miss any updates about our project activities.
                </p>
                <Link href="/contact">
                  <Button className="w-full">Sign up for Newsletter</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

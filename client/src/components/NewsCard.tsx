import { Link } from "wouter";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import type { NewsItem } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export function NewsCard({ item }: { item: NewsItem }) {
  // Fallback if image is missing
  const imageUrl = item.imageUrl || "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80";

  return (
    <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300 border-border/60">
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
          <Badge variant={item.type === 'event' ? "secondary" : "default"} className="font-bold uppercase tracking-wider text-xs">
            {item.type}
          </Badge>
        </div>
        <img 
          src={imageUrl} 
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <CardHeader className="p-6 pb-2">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-medium">
          {item.type === 'event' && item.eventDate ? (
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {format(new Date(item.eventDate), "MMM d, yyyy")}
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {format(new Date(item.publishedAt), "MMM d, yyyy")}
            </div>
          )}
          
          {item.type === 'event' && item.location && (
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {item.location}
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold font-display text-primary leading-tight line-clamp-2">
          {item.title}
        </h3>
      </CardHeader>
      
      <CardContent className="p-6 pt-2 flex-grow">
        <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
          {item.content}
        </p>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Link 
          href={`/news/${item.id}`} 
          className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
        >
          Read more <ArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}

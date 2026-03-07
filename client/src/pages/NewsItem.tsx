import { useRoute, Link } from "wouter";
import { useNewsItem } from "@/hooks/use-news";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ArrowLeft, Share2, Copy, Check } from "lucide-react";
import { format } from "date-fns";
import { useState as useStateShare } from "react";

export default function NewsItem() {
  const [, params] = useRoute("/news/:id");
  const id = params ? parseInt(params.id) : 0;
  const { data: item, isLoading } = useNewsItem(id);
  const [copied, setCopied] = useStateShare(false);

  const handleShare = async () => {
    const url = window.location.href;
    const title = item?.title ?? "DTT4DS News";
    if (navigator.share) {
      try { await navigator.share({ title, url }); } catch (_) {}
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const encodedUrl = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const encodedTitle = item ? encodeURIComponent(item.title) : "";

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
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant="outline" size="icon"
                  className="rounded-full bg-white hover:bg-primary hover:text-white transition-colors"
                  onClick={handleShare}
                  title={copied ? "Copied!" : "Copy link or share"}
                >
                  {copied ? <Check className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4" />}
                </Button>
                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-9 w-9 rounded-full border bg-white hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                  title="Share on Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                {/* Twitter/X */}
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-9 w-9 rounded-full border bg-white hover:bg-black hover:text-white hover:border-black transition-colors"
                  title="Share on X (Twitter)"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-9 w-9 rounded-full border bg-white hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors"
                  title="Share on LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
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

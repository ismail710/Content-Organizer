import { useQuery } from "@tanstack/react-query";
import { newsItems } from "@/lib/staticData";

export function useNewsList(type?: 'news' | 'event') {
  return useQuery({
    queryKey: ["news", type],
    queryFn: async () => {
      const items = type ? newsItems.filter((n) => n.type === type) : newsItems;
      return [...items].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    },
  });
}

export function useNewsItem(id: number) {
  return useQuery({
    queryKey: ["news", id],
    queryFn: async () => newsItems.find((n) => n.id === id) ?? null,
  });
}

import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

export function useNewsList(type?: 'news' | 'event') {
  return useQuery({
    queryKey: [api.news.list.path, type],
    queryFn: async () => {
      const url = type 
        ? `${api.news.list.path}?type=${type}` 
        : api.news.list.path;
      
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch news");
      return api.news.list.responses[200].parse(await res.json());
    },
  });
}

export function useNewsItem(id: number) {
  return useQuery({
    queryKey: [api.news.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.news.get.path, { id });
      const res = await fetch(url);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch news item");
      return api.news.get.responses[200].parse(await res.json());
    },
  });
}

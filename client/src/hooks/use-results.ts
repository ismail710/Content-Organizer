import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useResults(type?: 'deliverable' | 'newsletter' | 'promotional') {
  return useQuery({
    queryKey: [api.results.list.path, type],
    queryFn: async () => {
      const url = type 
        ? `${api.results.list.path}?type=${type}`
        : api.results.list.path;
        
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch results");
      return api.results.list.responses[200].parse(await res.json());
    },
  });
}

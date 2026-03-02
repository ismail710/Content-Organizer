import { useQuery } from "@tanstack/react-query";
import { resultItems } from "@/lib/staticData";

export function useResults(type?: 'deliverable' | 'newsletter' | 'promotional') {
  return useQuery({
    queryKey: ["results", type],
    queryFn: async () => {
      const items = type ? resultItems.filter((r) => r.type === type) : resultItems;
      return [...items].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    },
  });
}

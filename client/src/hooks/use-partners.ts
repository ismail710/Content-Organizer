import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function usePartners() {
  return useQuery({
    queryKey: [api.partners.list.path],
    queryFn: async () => {
      const res = await fetch(api.partners.list.path);
      if (!res.ok) throw new Error("Failed to fetch partners");
      return api.partners.list.responses[200].parse(await res.json());
    },
  });
}

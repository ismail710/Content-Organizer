import { useQuery } from "@tanstack/react-query";
import { partners } from "@/lib/staticData";

export function usePartners() {
  return useQuery({
    queryKey: ["partners"],
    queryFn: async () => partners,
  });
}

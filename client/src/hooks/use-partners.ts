import { useQuery } from "@tanstack/react-query";
import { partners } from "@/lib/staticData";

export function usePartners() {
  return useQuery({
    queryKey: ["partners"],
    queryFn: async () => partners,
  });
}

export function usePartnerById(id: number) {
  return useQuery({
    queryKey: ["partners", id],
    queryFn: async () => partners.find((partner) => partner.id === id) ?? null,
  });
}

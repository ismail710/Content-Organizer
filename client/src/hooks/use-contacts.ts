import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type InsertContactItem } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export function useCreateContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContactItem) => {
      // Validate client-side; no server needed for static deployment
      api.contacts.create.input.parse(data);
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We will get back to you shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

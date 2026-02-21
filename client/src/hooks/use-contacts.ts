import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type InsertContactItem } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export function useCreateContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContactItem) => {
      const validated = api.contacts.create.input.parse(data);
      const res = await fetch(api.contacts.create.path, {
        method: api.contacts.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contacts.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to submit contact form");
      }
      return api.contacts.create.responses[201].parse(await res.json());
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

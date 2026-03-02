import { PageHeader } from "@/components/PageHeader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContactItem } from "@shared/schema";
import { useCreateContact } from "@/hooks/use-contacts";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const createContact = useCreateContact();

  const form = useForm<InsertContactItem>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      type: "contact",
      gdprConsent: false,
    },
  });

  function onSubmit(data: InsertContactItem) {
    createContact.mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Contact Us" 
        description="Have questions about the project or want to get involved? Send us a message or subscribe to our newsletter."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-none shadow-lg bg-primary text-primary-foreground">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-xl font-bold font-display text-secondary">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Project Coordinator</p>
                      <p className="text-sm opacity-90 font-semibold">Željko Bačić</p>
                      <p className="text-sm opacity-75">University of Zagreb</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Phone</p>
                      <p className="text-sm opacity-90"></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Email</p>
                      <a href="mailto:mlumse@geof.hr" className="text-sm opacity-90 hover:text-white block"></a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-slate-50 p-6 rounded-xl border border-border">
              <h3 className="font-bold font-display text-gray-900 mb-2">Data Protection</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your personal data will be processed in accordance with the GDPR (General Data Protection Regulation). We will only use your data to respond to your inquiry or send you project updates if you have subscribed.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h2 className="text-2xl font-bold font-display text-primary mb-6">Send a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="min-h-[150px]" 
                            {...field} 
                            value={field.value || ""} // Handle optional null
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="gdprConsent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-slate-50">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            GDPR Consent
                          </FormLabel>
                          <FormDescription>
                            I agree to the processing of my personal data for the purpose of this inquiry. 
                            <a href="/privacy" className="text-primary underline ml-1">Privacy Policy</a>
                          </FormDescription>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto bg-primary text-primary-foreground"
                    disabled={createContact.isPending}
                  >
                    {createContact.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

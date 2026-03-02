import { z } from "zod";

// --- Partners ---
export const insertPartnerSchema = z.object({
  name: z.string(),
  role: z.string(),
  description: z.string(),
  websiteUrl: z.string(),
  logoUrl: z.string(),
});

export type Partner = {
  id: number;
  name: string;
  role: string;
  description: string;
  websiteUrl: string;
  logoUrl: string;
};
export type InsertPartner = z.infer<typeof insertPartnerSchema>;

// --- News & Events ---
export const insertNewsSchema = z.object({
  title: z.string(),
  content: z.string(),
  type: z.string(), // 'news', 'event'
  eventDate: z.coerce.date().optional().nullable(),
  location: z.string().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
});

export type NewsItem = {
  id: number;
  title: string;
  content: string;
  type: string;
  eventDate: Date | null;
  location: string | null;
  imageUrl: string | null;
  publishedAt: Date;
};
export type InsertNewsItem = z.infer<typeof insertNewsSchema>;

// --- Results / Deliverables ---
export const insertResultSchema = z.object({
  title: z.string(),
  description: z.string(),
  type: z.string(), // 'deliverable', 'newsletter', 'promotional'
  fileUrl: z.string(),
});

export type ResultItem = {
  id: number;
  title: string;
  description: string;
  type: string;
  fileUrl: string;
  publishedAt: Date;
};
export type InsertResultItem = z.infer<typeof insertResultSchema>;

// --- Contacts / Newsletter Subscribers ---
export const insertContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string().optional().nullable(),
  type: z.string(), // 'contact', 'newsletter'
  gdprConsent: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy to continue.",
  }),
});

export type ContactItem = {
  id: number;
  name: string;
  email: string;
  message: string | null;
  type: string;
  gdprConsent: boolean;
  createdAt: Date;
};
export type InsertContactItem = z.infer<typeof insertContactSchema>;

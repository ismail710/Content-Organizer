import { pgTable, text, serial, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// --- Partners ---
export const partners = pgTable("partners", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(), // Coordinator, Partner, etc.
  description: text("description").notNull(),
  websiteUrl: text("website_url").notNull(),
  logoUrl: text("logo_url").notNull(),
});

export const insertPartnerSchema = createInsertSchema(partners).omit({ id: true });
export type Partner = typeof partners.$inferSelect;
export type InsertPartner = z.infer<typeof insertPartnerSchema>;

// --- News & Events ---
export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  type: text("type").notNull(), // 'news', 'event'
  eventDate: timestamp("event_date"), // only if type === 'event'
  location: text("location"),         // only if type === 'event'
  imageUrl: text("image_url"),
  publishedAt: timestamp("published_at").defaultNow().notNull(),
});

export const insertNewsSchema = createInsertSchema(news).omit({ id: true, publishedAt: true });
export type NewsItem = typeof news.$inferSelect;
export type InsertNewsItem = z.infer<typeof insertNewsSchema>;

// --- Results / Deliverables ---
export const results = pgTable("results", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(), // 'deliverable', 'newsletter', 'promotional'
  fileUrl: text("file_url").notNull(),
  publishedAt: timestamp("published_at").defaultNow().notNull(),
});

export const insertResultSchema = createInsertSchema(results).omit({ id: true, publishedAt: true });
export type ResultItem = typeof results.$inferSelect;
export type InsertResultItem = z.infer<typeof insertResultSchema>;

// --- Contacts / Newsletter Subscribers ---
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message"), // Optional for newsletter-only signups
  type: text("type").notNull(), // 'contact', 'newsletter'
  gdprConsent: boolean("gdpr_consent").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contacts).omit({ id: true, createdAt: true }).extend({
  gdprConsent: z.boolean().refine(val => val === true, {
    message: "You must accept the privacy policy to continue.",
  }),
  email: z.string().email(),
});

export type ContactItem = typeof contacts.$inferSelect;
export type InsertContactItem = z.infer<typeof insertContactSchema>;

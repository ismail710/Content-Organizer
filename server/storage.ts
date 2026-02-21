import { db } from "./db";
import {
  partners,
  news,
  results,
  contacts,
  type InsertPartner,
  type Partner,
  type InsertNewsItem,
  type NewsItem,
  type InsertResultItem,
  type ResultItem,
  type InsertContactItem,
  type ContactItem,
} from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  // Partners
  getPartners(): Promise<Partner[]>;
  createPartner(partner: InsertPartner): Promise<Partner>;

  // News & Events
  getNews(type?: "news" | "event"): Promise<NewsItem[]>;
  getNewsItem(id: number): Promise<NewsItem | undefined>;
  createNewsItem(item: InsertNewsItem): Promise<NewsItem>;

  // Results
  getResults(type?: "deliverable" | "newsletter" | "promotional"): Promise<ResultItem[]>;
  createResult(result: InsertResultItem): Promise<ResultItem>;

  // Contacts
  createContact(contact: InsertContactItem): Promise<ContactItem>;
}

export class DatabaseStorage implements IStorage {
  async getPartners(): Promise<Partner[]> {
    return await db.select().from(partners);
  }

  async createPartner(partner: InsertPartner): Promise<Partner> {
    const [inserted] = await db.insert(partners).values(partner).returning();
    return inserted;
  }

  async getNews(type?: "news" | "event"): Promise<NewsItem[]> {
    if (type) {
      return await db.select().from(news).where(eq(news.type, type)).orderBy(desc(news.publishedAt));
    }
    return await db.select().from(news).orderBy(desc(news.publishedAt));
  }

  async getNewsItem(id: number): Promise<NewsItem | undefined> {
    const [item] = await db.select().from(news).where(eq(news.id, id));
    return item;
  }

  async createNewsItem(item: InsertNewsItem): Promise<NewsItem> {
    const [inserted] = await db.insert(news).values(item).returning();
    return inserted;
  }

  async getResults(type?: "deliverable" | "newsletter" | "promotional"): Promise<ResultItem[]> {
    if (type) {
      return await db.select().from(results).where(eq(results.type, type)).orderBy(desc(results.publishedAt));
    }
    return await db.select().from(results).orderBy(desc(results.publishedAt));
  }

  async createResult(result: InsertResultItem): Promise<ResultItem> {
    const [inserted] = await db.insert(results).values(result).returning();
    return inserted;
  }

  async createContact(contact: InsertContactItem): Promise<ContactItem> {
    const [inserted] = await db.insert(contacts).values(contact).returning();
    return inserted;
  }
}

export const storage = new DatabaseStorage();

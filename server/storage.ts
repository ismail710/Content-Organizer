import {
  type InsertPartner,
  type Partner,
  type InsertNewsItem,
  type NewsItem,
  type InsertResultItem,
  type ResultItem,
  type InsertContactItem,
  type ContactItem,
} from "@shared/schema";

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

export class MemStorage implements IStorage {
  private partners: Partner[] = [];
  private news: NewsItem[] = [];
  private results: ResultItem[] = [];
  private contacts: ContactItem[] = [];
  private nextId = { partners: 1, news: 1, results: 1, contacts: 1 };

  async getPartners(): Promise<Partner[]> {
    return [...this.partners];
  }

  async createPartner(partner: InsertPartner): Promise<Partner> {
    const item: Partner = { id: this.nextId.partners++, ...partner };
    this.partners.push(item);
    return item;
  }

  async getNews(type?: "news" | "event"): Promise<NewsItem[]> {
    const items = type ? this.news.filter((n) => n.type === type) : [...this.news];
    return items.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  async getNewsItem(id: number): Promise<NewsItem | undefined> {
    return this.news.find((n) => n.id === id);
  }

  async createNewsItem(item: InsertNewsItem): Promise<NewsItem> {
    const newsItem: NewsItem = {
      id: this.nextId.news++,
      title: item.title,
      content: item.content,
      type: item.type,
      eventDate: item.eventDate ?? null,
      location: item.location ?? null,
      imageUrl: item.imageUrl ?? null,
      publishedAt: new Date(),
    };
    this.news.push(newsItem);
    return newsItem;
  }

  async getResults(type?: "deliverable" | "newsletter" | "promotional"): Promise<ResultItem[]> {
    const items = type ? this.results.filter((r) => r.type === type) : [...this.results];
    return items.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  async createResult(result: InsertResultItem): Promise<ResultItem> {
    const item: ResultItem = {
      id: this.nextId.results++,
      ...result,
      publishedAt: new Date(),
    };
    this.results.push(item);
    return item;
  }

  async createContact(contact: InsertContactItem): Promise<ContactItem> {
    const item: ContactItem = {
      id: this.nextId.contacts++,
      name: contact.name,
      email: contact.email,
      message: contact.message ?? null,
      type: contact.type,
      gdprConsent: contact.gdprConsent,
      createdAt: new Date(),
    };
    this.contacts.push(item);
    return item;
  }
}

export const storage = new MemStorage();

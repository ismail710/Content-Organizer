import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Partners
  app.get(api.partners.list.path, async (_req, res) => {
    const items = await storage.getPartners();
    res.json(items);
  });

  // News & Events
  app.get(api.news.list.path, async (req, res) => {
    const typeStr = req.query.type as string | undefined;
    // ensure valid enum type if provided
    let type: "news" | "event" | undefined;
    if (typeStr === "news" || typeStr === "event") type = typeStr;

    const items = await storage.getNews(type);
    res.json(items);
  });

  app.get(api.news.get.path, async (req, res) => {
    const item = await storage.getNewsItem(Number(req.params.id));
    if (!item) {
      return res.status(404).json({ message: "News/Event not found" });
    }
    res.json(item);
  });

  // Results
  app.get(api.results.list.path, async (req, res) => {
    const typeStr = req.query.type as string | undefined;
    let type: "deliverable" | "newsletter" | "promotional" | undefined;
    if (typeStr === "deliverable" || typeStr === "newsletter" || typeStr === "promotional") {
      type = typeStr;
    }

    const items = await storage.getResults(type);
    res.json(items);
  });

  // Contacts
  app.post(api.contacts.create.path, async (req, res) => {
    try {
      const input = api.contacts.create.input.parse(req.body);
      await storage.createContact(input);
      res.status(201).json({ success: true });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed data function to prepopulate database
  seedDatabase().catch(console.error);

  return httpServer;
}

async function seedDatabase() {
  const existingPartners = await storage.getPartners();
  if (existingPartners.length === 0) {
    console.log("Seeding partners...");
    await storage.createPartner({
      name: "Coordinator University",
      role: "Coordinator",
      description: "Leading institution in European educational research with decades of experience.",
      websiteUrl: "https://example.com/coordinator",
      logoUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=200&h=200",
    });
    await storage.createPartner({
      name: "InnovateTech NGO",
      role: "Partner",
      description: "Technical partner developing the digital platforms and tools.",
      websiteUrl: "https://example.com/partner1",
      logoUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200&h=200",
    });
    await storage.createPartner({
      name: "European Policy Institute",
      role: "Partner",
      description: "Policy advisory and evaluation of project outcomes.",
      websiteUrl: "https://example.com/partner2",
      logoUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=200&h=200",
    });
  }

  const existingNews = await storage.getNews();
  if (existingNews.length === 0) {
    console.log("Seeding news & events...");
    await storage.createNewsItem({
      title: "Project Kickoff Meeting in Brussels",
      content: "The consortium gathered in Brussels to launch the new Erasmus+ initiative. We discussed the work packages, upcoming milestones, and overall coordination strategy for the next three years.",
      type: "event",
      eventDate: new Date("2026-03-15T09:00:00Z"),
      location: "Brussels, Belgium",
      imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600&h=400",
    });
    
    await storage.createNewsItem({
      title: "First Phase of Research Complete",
      content: "We are thrilled to announce that WP1 research has concluded ahead of schedule. The preliminary data suggests strong alignment with our initial hypotheses regarding educational frameworks.",
      type: "news",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=400",
    });
  }

  const existingResults = await storage.getResults();
  if (existingResults.length === 0) {
    console.log("Seeding results...");
    await storage.createResult({
      title: "D1.1 Baseline Analysis Report",
      description: "Comprehensive study on the current state of digital education across partner countries.",
      type: "deliverable",
      fileUrl: "/assets/deliverable1.pdf",
    });
    await storage.createResult({
      title: "Newsletter - Issue 1",
      description: "Summary of kickoff meeting and first quarter achievements.",
      type: "newsletter",
      fileUrl: "/assets/newsletter1.pdf",
    });
  }
}

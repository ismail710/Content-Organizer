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
      name: "Institut Agronomique et Vétérinaire Hassan II",
      role: "Partner",
      description: "Leading agricultural and veterinary institution in Morocco.",
      websiteUrl: "https://iav.ac.ma/",
      logoUrl: "/logo/logo_IAV.png",
    });
    await storage.createPartner({
      name: "Institut National Agronomique de Tunisie",
      role: "Partner",
      description: "National agricultural institute of Tunisia.",
      websiteUrl: "http://www.inat.tn/fr",
      logoUrl: "/logo/inat.png",
    });
    await storage.createPartner({
      name: "UNIZG",
      role: "Partner",
      description: "Major public research university in Croatia.",
      websiteUrl: "https://www.unizg.hr/homepage/",
      logoUrl: "/logo/UniZg.png",
    });
    await storage.createPartner({
      name: "University Ibn Tofail",
      role: "Partner",
      description: "Public university in Kenitra, Morocco.",
      websiteUrl: "https://www.uit.ac.ma/",
      logoUrl: "/logo/ibn-tofail.png",
    });
    await storage.createPartner({
      name: "ITC - Faculty of Geo Information Science and Earth Observation / University of Twente",
      role: "Partner",
      description: "Leading institution in geoinformation science and earth observation.",
      websiteUrl: "https://www.itc.nl/",
      logoUrl: "/logo/ITC.png",
    });
    await storage.createPartner({
      name: "Oikon Ltd. – Institute of Applied Ecology",
      role: "Partner",
      description: "Applied ecology institute based in Croatia.",
      websiteUrl: "https://oikon.hr/",
      logoUrl: "/logo/OIKON.png",
    });
    await storage.createPartner({
      name: "University of Jendouba",
      role: "Partner",
      description: "Public university in Tunisia.",
      websiteUrl: "https://uj.rnu.tn/fr",
      logoUrl: "/logo/Jendouba.png",
    });
    await storage.createPartner({
      name: "CRTEAN – Regional Center for Remote Sensing of North Africa States",
      role: "Partner",
      description: "Regional center specializing in remote sensing technology for North Africa.",
      websiteUrl: "https://crtean.org.tn/",
      logoUrl: "/logo/CRTEAN.png",
    });
    await storage.createPartner({
      name: "Fayoum University",
      role: "Partner",
      description: "Public university in Egypt offering comprehensive educational programs.",
      websiteUrl: "https://www.fayoum.edu.eg/en",
      logoUrl: "/logo/Fayoum.png",
    });
  }

  const existingNews = await storage.getNews();
  if (existingNews.length === 0) {
    console.log("Seeding news & events...");
    await storage.createNewsItem({
      title: "Kick-off meeting",
      content: "Tunisia - UCAR\n\n11-13 February 2026\n\nThe official launch of the DTT4SD project represents a strategic milestone, marking the operational beginning of this international initiative dedicated to integrating Digital Twin Tools into higher education and sectors related to sustainable development.\n\nThis inaugural phase aims to clearly and systematically present the overall vision of the project, which is grounded in digital innovation, pedagogical transformation, and capacity building to address contemporary environmental challenges.",
      type: "news",
      eventDate: new Date("2026-02-11T09:00:00Z"),
      location: "Tunisia - UCAR",
      imageUrl: "/groupe.jpeg",
    });
    
    await storage.createNewsItem({
      title: "CURRICULA DEVELOPMENT AND 1st TRAINING",
      content: "Enschede (UT)\n\nSummer 2026",
      type: "event",
      eventDate: new Date("2026-06-01T09:00:00Z"),
      location: "Enschede (UT)",
      imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600&h=400",
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

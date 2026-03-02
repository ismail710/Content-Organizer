import type { Partner, NewsItem, ResultItem } from "@shared/schema";

export const partners: Partner[] = [
  {
    id: 1,
    name: "University of Jendouba (UJ)",
    role: "Partner",
    description: "Public university located in Jendouba, Tunisia. Represented by Prof. Hichem Sebai PhD, President. PIC 932548883.",
    websiteUrl: "https://uj.rnu.tn/fr",
    logoUrl: "/logo/Jendouba.png",
  },
  {
    id: 2,
    name: "Carthage University (UCAR)",
    role: "Coordinator",
    description: "Leading Tunisian university located in Amilcar Carthage. Represented by Prof. Nadia el Mzoughi PhD, President. PIC 996994034.",
    websiteUrl: "https://www.ucar.tn/",
    logoUrl: "/logo/inat.png",
  },
  {
    id: 3,
    name: "CRTEAN – Centre Régional de Télédétection des États de l'Afrique du Nord",
    role: "Partner",
    description: "Regional center for remote sensing of North African States, Tunis. Represented by Dr. ElHadi Gashut, Director. PIC 902207768.",
    websiteUrl: "https://crtean.org.tn/",
    logoUrl: "/logo/CRTEAN.png",
  },
  {
    id: 4,
    name: "Fayoum University (FU)",
    role: "Partner",
    description: "Public university in Fayoum, Egypt. Represented by Prof. Arafa Sabir Hassan PhD, President. PIC 932842017.",
    websiteUrl: "https://www.fayoum.edu.eg/en",
    logoUrl: "/logo/Fayoum.png",
  },
  {
    id: 5,
    name: "Institut Agronomique et Vétérinaire Hassan II (IAV)",
    role: "Partner",
    description: "Premier agricultural and veterinary institute in Rabat, Morocco. Represented by Prof. Mohammed Yessef PhD, President. PIC 998781744.",
    websiteUrl: "https://iav.ac.ma/",
    logoUrl: "/logo/logo_IAV.png",
  },
  {
    id: 6,
    name: "Ibn Tofail University (UIT)",
    role: "Partner",
    description: "Public university in Kenitra, Morocco. Represented by Prof. Mohamed Larbi Kerkeb PhD, President. PIC 925495722.",
    websiteUrl: "https://www.uit.ac.ma/",
    logoUrl: "/logo/ibn-tofail.png",
  },
  {
    id: 7,
    name: "Universiteit Twente (UT)",
    role: "Partner",
    description: "Leading research university in Enschede, Netherlands. Represented by Prof. Freek van den Meer PhD, Rector. PIC 999900833.",
    websiteUrl: "https://www.itc.nl/",
    logoUrl: "/logo/ITC.png",
  },
  {
    id: 8,
    name: "Oikon Ltd. – Institut za primijenjenu ekologiju (OIKON)",
    role: "Partner",
    description: "Institute of Applied Ecology located in Zagreb, Croatia. Represented by Dalibor Hatić, CEO. PIC 998582118.",
    websiteUrl: "https://oikon.hr/",
    logoUrl: "/logo/OIKON.png",
  },
  {
    id: 9,
    name: "IRESA – Institution de la Recherche et de l'Enseignement Supérieur Agricoles",
    role: "Partner",
    description: "Tunisian institution for agricultural higher education and research, Tunis. Represented by Prof. Zohra Lili Chabaane PhD, President. PIC 999419519.",
    websiteUrl: "https://www.iresa.tn/",
    logoUrl: "/logo/UniZg.png",
  },
];

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Kick-off meeting",
    content:
      "Tunisia - UCAR\n\n11-13 February 2026\n\nThe official launch of the DTT4SD project represents a strategic milestone, marking the operational beginning of this international initiative dedicated to integrating Digital Twin Tools into higher education and sectors related to sustainable development.\n\nThis inaugural phase aims to clearly and systematically present the overall vision of the project, which is grounded in digital innovation, pedagogical transformation, and capacity building to address contemporary environmental challenges.",
    type: "news",
    eventDate: new Date("2026-02-11T09:00:00Z"),
    location: "Tunisia - UCAR",
    imageUrl: "/groupe.jpeg",
    publishedAt: new Date("2026-02-11T09:00:00Z"),
  },
  {
    id: 2,
    title: "CURRICULA DEVELOPMENT AND 1st TRAINING",
    content: "Enschede (UT)\n\nSummer 2026",
    type: "event",
    eventDate: new Date("2026-06-01T09:00:00Z"),
    location: "Enschede (UT)",
    imageUrl:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600&h=400",
    publishedAt: new Date("2026-02-24T00:00:00Z"),
  },
];

export const resultItems: ResultItem[] = [
  {
    id: 1,
    title: "D1.1 Baseline Analysis Report",
    description:
      "Comprehensive study on the current state of digital education across partner countries.",
    type: "deliverable",
    fileUrl: "/assets/deliverable1.pdf",
    publishedAt: new Date("2026-02-24T00:00:00Z"),
  },
  {
    id: 2,
    title: "Newsletter - Issue 1",
    description: "Summary of kickoff meeting and first quarter achievements.",
    type: "newsletter",
    fileUrl: "/assets/newsletter1.pdf",
    publishedAt: new Date("2026-02-24T00:00:00Z"),
  },
];

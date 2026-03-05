import type { Partner, NewsItem, ResultItem } from "@shared/schema";

export const partners: Partner[] = [
  {
    id: 1,
    name: "University of Jendouba (UJ)",
    role: "Partner",
    description: "UNIVERSITY OF JENDOUBA (UJ), PIC 932548883, established in CITE FAIEZ, JENDOUBA 8100, Tunisia, represented for the purposes of signature of the Agreement by the Prof. Hichem Sebai PhD, President,",
    websiteUrl: "https://uj.rnu.tn/fr",
    logoUrl: "/logo/Jendouba.png",
  },
  {
    id: 2,
    name: "Carthage University (UCAR)",
    role: "Coordinator",
    description: "CARHAGE UNIVERSITY (UCAR), PIC 996994034, established in AVENUE DE LA REPUBLIQUE, AMILCAR CARTHAGE 1054, Tunisia, represented for the purposes of signature of the Agreement by the Prof. Nadia el Mzoughi, PhD, President,",
    websiteUrl: "https://www.ucar.tn/",
    logoUrl: "/logo/inat.png",
  },
  {
    id: 3,
    name: "CRTEAN – Centre Régional de Télédétection des États de l'Afrique du Nord",
    role: "Partner",
    description: "CENTRE REGIONAL DE TELEDETECTION DES ETATS DE L’AFRIQUE DU NORD, (CRTEAN), PIC 902207768, established in 18 RUE MUSA IBN NOUSSAIR, TUNIS 1004, Tunisia, represented for the purposes of signature of the Agreement by the Dr. ElHadi Gashut, Director,",
    websiteUrl: "https://crtean.org.tn/",
    logoUrl: "/logo/CRTEAN.png",
  },
  {
    id: 4,
    name: "Fayoum University (FU)",
    role: "Partner",
    description: "FAYOUM UNIVERSITY (FU), PIC 932842017, established in FAYOUM UNIVERSITY THIRD FLOOR UNIVERSITY ADMINISTRATION BUILDING, FAYOUM 63514, Egypt, represented for the purposes of signature of the Agreement by the Prof. Arafa Sabir Hassan, PhD, President,",
    websiteUrl: "https://www.fayoum.edu.eg/en",
    logoUrl: "/logo/Fayoum.png",
  },
  {
    id: 5,
    name: "Institut Agronomique et Vétérinaire Hassan II (IAV)",
    role: "Partner",
    description: "INSTITUTE AGRONOMIQUE ET VETERINAIRE HASSAN (IAV), PIC 998781744, established in AVENUE ALLAL EL FASSI MADINAT, AL RABAT 10101, Morocco, represented for the purposes of signature of the Agreement by the Prof. Mohammed Yessef, PhD, President,",
    websiteUrl: "https://iav.ac.ma/",
    logoUrl: "/logo/logo_IAV.png",
  },
  {
    id: 6,
    name: "Ibn Tofail University (UIT)",
    role: "Partner",
    description: "IBN TOFAIL UNIVERSITY (UIT), PIC 925495722, established in UNIVERSITAIRE, KENITRA 14000, Morocco, represented for the purpose of signature of the Agreement by the Prof. Mohamed Larbi Kerkeb, PhD, President,",
    websiteUrl: "https://www.uit.ac.ma/",
    logoUrl: "/logo/ibn-tofail.png",
  },
  {
    id: 7,
    name: "Universiteit Twente (UT)",
    role: "Partner",
    description: "UNIVERSITEIT TWENTE (UT), PIC 999900833, established in DRIENERLOLAAN 5, ENSCHEDE 7522 NB, Netherlands, represented for the purposes of signature of the Agreement by the Prof. Freek van den Meer, PhD, Rector.",
    websiteUrl: "https://www.itc.nl/",
    logoUrl: "/logo/ITC.png",
  },
  {
    id: 8,
    name: "Oikon Ltd. – Institut za primijenjenu ekologiju (OIKON)",
    role: "Partner",
    description: "OIKON DOO – INSTITUT ZA PRIMIJENJENU EKOLOGIJU, (OIKON), PIC 998582118, established in TRG SENJSKIH USKOKA 1-2, ZAGREB 10020, Croatia, represented for the purposes of signature of the Agreement by the Dalibor Hatić, CEO,",
    websiteUrl: "https://oikon.hr/",
    logoUrl: "/logo/OIKON.png",
  },
  {
    id: 9,
    name: "IRESA – Institution de la Recherche et de l'Enseignement Supérieur Agricoles",
    role: "Partner",
    description: "INSTITUTION DE LA RECHERCHE ET DE L’ENSEIGNEMENT SUPERIEUR AGRICOLES (IRESA), PIC 999419519, established in RUE ALAIN SAVARY 30 MINISTERE DE L AGRICULTURE ET DES RESSOURCES HYDRAULIQUES, TUNIS 1002, Tunisia, represented for the purposes of signature of the Agreement by the Prof. Zohra Lili Chabaane, PhD, President,",
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

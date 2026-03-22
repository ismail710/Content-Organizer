import type { Partner, NewsItem, ResultItem } from "@shared/schema";

export type ProjectTeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  affiliation?: string;
  contactEmail?: string;
  bio: string;
};

export const partners: Partner[] = [
  {
    id: 1,
    name: "University of Jendouba (UJ)",
    role: "Partner",
    description: "The UJ is the university of the North-West Tunisian region including 13 academic institutions. It offers diverse curricula across various fields. UJ has conducted several E+ projects. The participation of UJ in MLUMSE project will be through the Higher School of Engineers of Medjez El Bab (ESIM) founded in 1964. ESIM offers 3 engineering programs in Hydraulics & Land Planning, Topography & Geomatics, and  Mechanical & Agro-Industrial Engineering, Bachelor's degree in Hydromechanics, two research Master’s programs (Climate Change and Water Management (CCGE) and Agro-Industrial Equipment Engineering (GEAI)), two professional Master’s programs (Sustainable Development (DEMETER) and Renewable Energy and Agroindustry (ERAI)) and Doctoral program in Environment and Life Sciences. ",
    websiteUrl: "https://uj.rnu.tn/fr",
    logoUrl: "/logo/Jendouba.png",
  },
  {
    id: 2,
    name: "Carthage University (UCAR)",
    role: "Coordinator",
    description: "The UCAR is a Tunisian Education and Research university; it includes 35 HEI’s covering a wide array of disciplines. The National Institute of Agronomy (INAT) will be the university’s partner in the project. The INAT is established in 1998 under the supervision of the Ministry of Agriculture (IRESA) and the Ministry of Higher Education and Scientific Research (UCAR). It formed since its creation more than 4000 agronomic engineers in several specialties.",
    websiteUrl: "https://www.ucar.tn/",
    logoUrl: "/logo/inat.png",
  },
  {
    id: 3,
    name: "CRTEAN – Centre Régional de Télédétection des États de l'Afrique du Nord",
    role: "Partner",
    description: "Regional organization established in 1990 after the signing of the Constitutive Act of the five countries members of North Africa States, (Algeria, Mauritania, Morocco, Tunis & Libya), and joined later Egypt and Sudan. The CRTEAN has, in its Tunis headquarters, all the privileges and immunities as any international organizations. The Center aims to encouraging the institutions in Member States for: Using remote sensing techniques and upstream systems in the areas of sustainable development and scientific research; Technologies Transfer; Capacity building for the member states",
    websiteUrl: "https://crtean.org.tn/",
    logoUrl: "/logo/CRTEAN.png",
  },
  {
    id: 4,
    name: "Fayoum University (FU)",
    role: "Partner",
    description: "FU is a governmental public university independent since 2005. FU provides high quality all level academic programs. The university graduates can compete in national, regional and international labour market and confront the challenges of the 21st century. It includes 18 faculties and two institutes with around 27 000 students and about 2000 teaching staff. It includes a Research Centre on Environmental Researches and Intelligent Technology at Faculty of Sciences",
    websiteUrl: "https://www.fayoum.edu.eg/en",
    logoUrl: "/logo/Fayoum.png",
  },
  {
    id: 5,
    name: "Institut Agronomique et Vétérinaire Hassan II (IAV)",
    role: "Partner",
    description: "Created in 1968, the “Institut Agronomique et Vétérinaire Hassan II” (IAV) is a multidisciplinary polytechnic centre hosting several schools: Agronomy, Veterinary school, Agro-food industry, Horticulture, Topography - Geomatic Sciences and Rural engineering. IAV hosts 320 scientists and faculty members and 180 Technical staff in 22 departments. Most of IAV scientists are graduated from foreign institutions and supported by international program mobility.",
    websiteUrl: "https://iav.ac.ma/",
    logoUrl: "/logo/logo_IAV.png",
  },
  {
    id: 6,
    name: "Ibn Tofail University (UIT)",
    role: "Partner",
    description: "Established in 1989, the Ibn Tofaïl University is a non-profit public higher education institution located in the urban setting of the small city of Kénitra, Rabat-Sale-Kenitra. Partner in project is team from Faculty of Human and Social Sciences of Kenitra covering several geospatial studies and courses. Project team participated in several CBHE projects. ",
    websiteUrl: "https://www.uit.ac.ma/",
    logoUrl: "/logo/ibn-tofail.png",
  },
  {
    id: 7,
    name: "Universiteit Twente (UT)",
    role: "Partner",
    description: "The Faculty of Geo-Information Science and Earth Observation (ITC) provides international postgraduate education, research and project services in the field of geoinformation science and earth observation using remote sensing and GIS. ITC has established an excellent track record in innovating and utilizing remote sensing for spatial data collection and spatio-temporal analysis in a wide variety of challenges in the development, planning and monitoring of resources",
    websiteUrl: "https://www.itc.nl/",
    logoUrl: "/logo/ITC.png",
  },
  {
    id: 8,
    name: "Oikon Ltd. – Institut za primijenjenu ekologiju (OIKON)",
    role: "Partner",
    description: "Institute of Applied Ecology is a leading Croatian SME with proven expertise in geoinformatics, remote sensing, digital cartography, advanced GIS solutions, and Nature Protection + in the development and implementation of innovative digital twin technologies. Drawing on extensive experience from numerous projects funded by both EU and national agencies, the company has successfully integrated state‑of‑the‑art satellite image processing, automated mapping systems, and environmental monitoring tools to support sustainable spatial planning, natural resource management, and nature protection initiatives.",
    websiteUrl: "https://oikon.hr/",
    logoUrl: "/logo/OIKON.png",
  },
  {
    id: 9,
    name: "UNIZG - University of Zagreb",
    role: "Partner",
    description: " Participated in 10 funded Erasmus+ projects. Key projects related to this call: BESTSDI (E+CBHE 150155), EO4GEO (E+SSA 591991), GEOBIZ (E+CBHE 610225), SEED4NA (E+CBHE 610328), UN4DRR (E+CBHE 609592), TODO (H2020 857592), SPIDER (E+SP 005642), MLUMSE (E+CBHE 101179645). Expertise: geospatial technologies; remote sensing, satellite positioning & navigation, GIS, Spatial data infrastructure, project management (coordinator of 3 CBHE projects)",
    websiteUrl: "https://www.unizg.hr/homepage/",
    logoUrl: "/logo/UniZg.png",
  },
  {
    id: 10,
    name: "IRESA – Institution de la Recherche et de l'Enseignement Supérieur Agricoles",
    role: "Partner",
    description: "The Institution of Agricultural Research and Higher Education (IRESA) is a Public Establishment of an Administrative nature with legal personality and financial autonomy created by Law 90-72 of July 30, 1990. IRESA role is to ensure the promotion of ",
    websiteUrl: "https://www.iresa.tn/",
    logoUrl: "/logo/iresa.png",
  },
];

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Kick-off meeting",
    content:
      "Tunisia - UCAR\n\n11-13 February 2026\n\nThe official launch of the DTT4SD project represents a strategic milestone, marking the operational beginning of this international initiative dedicated to integrating Digital Twin Tools into higher education and sectors related to sustainable development.\n\nThis inaugural phase aims to clearly and systematically present the overall vision of the project, which is grounded in digital innovation, pedagogical transformation, and capacity building to address contemporary environmental challenges.",
    type: "event",
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
      "",
    publishedAt: new Date("2026-02-24T00:00:00Z"),
  },
  
];

export const resultItems: ResultItem[] = [
  {
    id: 1,
    title: "D1.1 : Project Management Plan",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2026-02-24T00:00:00Z"),
  },
  {
    id: 2,
    title: "D1.2 : Project structure establishment",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2026-03-02T00:00:00Z"),
  },
  {
    id: 3,
    title: "D1.3 : Progress Report",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2026-04-08T00:00:00Z"),
  },
  {
    id: 4,
    title: "D2.1 : Global and national goals linked to existing partner curricula report",
    description: "",
    type: "deliverable",
    fileUrl: "/assets/deliverables/D2.1.pdf",
    isPublic: true,
    publishedAt: new Date("2026-05-20T00:00:00Z"),
  },
  {
    id: 5,
    title: "D2.2 : Catalogue of competences",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2026-06-10T00:00:00Z"),
  },
  {
    id: 6,
    title: "D2.3 : Workshop report",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2026-06-20T00:00:00Z"),
  },
  {
    id: 7,
    title: "D2.4 : University and LLL courses developed",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2026-07-01T00:00:00Z"),
  },
  {
    id: 8,
    title: "D2.5 : 1st Theme based training report",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2026-07-15T00:00:00Z"),
  },
  {
    id: 9,
    title: "D2.6 : 2nd Theme based training report",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2026-07-30T00:00:00Z"),
  },
  {
    id: 10,
    title: "D2.7 : Equipment procurement and installation report",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2026-08-10T00:00:00Z"),
  },
  {
    id: 11,
    title: "D3.1 : National student and teacher training report",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2026-08-20T00:00:00Z"),
  },
  {
    id: 12,
    title: "D3.2 : New/modernized university courses delivery report",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2026-09-01T00:00:00Z"),
  },
  {
    id: 13,
    title: "D3.3 : LLL courses delivery report",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2026-09-15T00:00:00Z"),
  },
  {
    id: 14,
    title: "D3.4 : Hackathon organized",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2026-09-30T00:00:00Z"),
  },
  {
    id: 15,
    title: "D4.1 : Project Communication Plan",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2026-10-10T00:00:00Z"),
  },
  {
    id: 16,
    title: "D4.2 : Project webpage",
    description: "",
    type: "deliverable",
    fileUrl: "/assets/deliverables/D4.2.pdf",
    isPublic: true,
    publishedAt: new Date("2026-10-20T00:00:00Z"),
  },
  {
    id: 17,
    title: "D4.3 : Project web-platform",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2026-11-01T00:00:00Z"),
  },
  {
    id: 18,
    title: "D4.4 : Dissemination and Exploitation Plan",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2026-11-15T00:00:00Z"),
  },
  {
    id: 19,
    title: "D4.5 : D&E conducted activities & results",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2026-11-30T00:00:00Z"),
  },
  {
    id: 20,
    title: "D4.6 : Promotion materials",
    description: "",
    type: "deliverable",
    fileUrl: "/assets/deliverables/D4.6.pdf",
    isPublic: true,
    publishedAt: new Date("2026-12-10T00:00:00Z"),
  },
  {
    id: 21,
    title: "D4.7 : Multiplier events report",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2026-12-20T00:00:00Z"),
  },
  {
    id: 22,
    title: "D5.1 : Project Quality Assurance Plan",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2027-01-05T00:00:00Z"),
  },
  {
    id: 23,
    title: "D5.2 : Internal Periodic Quality Assurance",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2027-01-20T00:00:00Z"),
  },
  {
    id: 24,
    title: "D5.3 : External Quality Assurance Plan",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2027-02-01T00:00:00Z"),
  },
  {
    id: 25,
    title: "D5.4 : Development of Project & partners Sustainability Plans",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2027-02-15T00:00:00Z"),
  },
  {
    id: 26,
    title: "D5.5 : Consortia Memorandum of Cooperation",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2027-03-01T00:00:00Z"),
  },
  {
    id: 27,
    title: "D5.6 : Final Project Conference",
    description: "",
    type: "deliverable",
    fileUrl: "",
    isPublic: false,
    publishedAt: new Date("2027-03-15T00:00:00Z"),
  },
  {
    id: 28,
    title: "Newsletter - Issue 1",
    description: "Summary of kickoff meeting and first quarter achievements.",
    type: "newsletter",
    fileUrl: "/assets/newsletter1.pdf",
    isPublic: true,
    publishedAt: new Date("2026-02-24T00:00:00Z"),
  },
];

export const projectTeamMembers: ProjectTeamMember[] = [
  {
    name: "Prof. Željko Bačić",
    role: "UNIZG - Project Team Lead",
    imageUrl: "/project team/zeljko.png",
    bio: `Prof. Željko Bačić graduated at the Faculty of Geodesy, University of Zagreb in 1986, and took his PhD at the Technical University of Graz, Austria in 1997. Since then, he has taught Satellite Positioning and related topics at the Faculty of Geodesy in Zagreb and at the Faculty of Civil Engineering, Architecture and Geodesy in Split (2013-2021). He was Vice Dean at the Faculty of Geodesy for science and international cooperation in the period 2015-2017, and is presently Head of the Chair of Satellite Geodesy.

In the period 1999-2012, he was Director General of the Croatian State Geodetic Administration (national mapping and cadastre authority), during which time new cadastre and geodetic system legislation was adopted, cadastre service reorganized, and comprehensive reform of land administration in Croatia was conducted. A new topographical map of Croatia was produced at scale 1:25,000, while the Croatian permanent GNSS network (CROPOS) and National SDI were established.

He was a delegate in EuroGeographics, member of the Management Board (2002-2007), and its President (2005-2007). He was also a member of the Cambridge Conference Advisory Board (2003-2011), and initiator and chairman of the Management Board on Regional Cooperation in Cadastre in South-East Europe (2007-2012). He is academic delegate from Croatia in EuroSDR and Croatian representative in the EC DG DEFIS Copernicus Committee, as well as a member of the Reference Group for Space of the Croatian Ministry of Science and Education.

He has led WB, EU-CARDS, EU-IPA, EU-PHARE and numerous bilateral projects with Norway, Sweden, Germany, the Netherlands and the UK in geodesy, cadastre, cartography and geoinformatics. He has participated in 10 Erasmus+ Capacity Building in Higher Education projects, coordinating 5 of them.`,
  },
  {
    name: "Dr. El Hadi Gashut",
    role: "CRTEAN - Institutional Lead",
    imageUrl: "/project team/hadi.jpg",
    bio: `Dr. El Hadi Gashut is a distinguished geophysicist with extensive expertise in remote sensing, Geographic Information Systems (GIS), and space management. He holds a Master's degree in Remote Sensing and GIS, as well as a PhD in Space Management.

Throughout his career, Dr. Gashut has held several high-level leadership positions in the fields of remote sensing and space sciences. He served as Director General of the Libyan Center for Remote Sensing and Space Sciences from 1989 to 2011, where he played a pivotal role in strengthening national capabilities in geospatial technologies and space applications.

From 2008 to 2011, he also served as Director of the Libyan Space Program Project, contributing significantly to the strategic planning and development of Libya's space initiatives.

Between 2005 and 2012, he served as Secretary of the Association of Remote Sensing for Arab Countries, fostering regional cooperation and enhancing collaboration in remote sensing across the Arab world.

Since 2013, Dr. Gashut has been serving as Director General of the Regional Center for Remote Sensing of North African States (CRTEAN), where he leads regional initiatives in capacity building, scientific research, and the advancement of space-based technologies in support of sustainable development across North Africa.

Under his leadership, CRTEAN has actively participated in and coordinated numerous externally funded projects related to geospatial technologies and space applications, contributing to infrastructure enhancement, capacity building, and sustainable development initiatives across its member states. Among these initiatives is the project "Developing Higher Education on Sustainable Development and Social Responsibility Using Digital Twin Tools (DTT4SD)", in which CRTEAN serves as a partner. In this project, Dr. Gashut acts as the institutional lead and legal representative of the Center.`,
  },
  {
    name: "Associate Prof. Nasr Mahmoud Ahmed Abdou, PhD",
    role: "Faculty Member and Laboratory Director",
    imageUrl: "/project team/nasr.jpg",
    affiliation: "Soil and Water Department, Faculty of Agriculture, Fayoum University",
    bio: `Associate Professor Nasr M. Abdou was born in Fayoum, Egypt. He received his B.Sc. in Agriculture from Cairo University in 2003, followed by an M.Sc. from Fayoum University in 2008. In 2016, he was awarded a Ph.D. in Soil Science and Plant Production from the Russian State Agrarian University. He currently serves as a faculty member at the Faculty of Agriculture, Fayoum University, teaching a range of undergraduate and postgraduate courses. He is also Director of the Central Laboratory for Soil, Water, and Plant Analysis.

Between October 2021 and June 2022, he completed advanced professional training at the Russian State Agrarian University, focusing on the design and implementation of smart irrigation systems and IoT-based automated control of soil moisture and temperature.

With over 15 years of experience in agricultural research and development, Dr. Abdou has contributed to national and international projects, including IHE and PRIMA initiatives. He has supervised numerous M.Sc. and Ph.D. theses and has published more than 30 peer-reviewed journal articles and conference papers. His research interests include soil health assessment, climate-smart agriculture, and smart irrigation and drainage technologies. Dr. Abdou is fluent in Arabic, English, and Russian.`,
  },
  {
    name: "Pr. Kenza Aitelkadi",
    role: "Associate Professor",
    imageUrl: "/project team/kenza.jpg",
    affiliation: "Department of Cartography, Photogrammetry, GIS and Remote Sensing, IAV Hassan II Institute, Rabat, Morocco",
    contactEmail: "k.aitelkadi@iav.ac.ma",
    bio: `Pr. Kenza Aitelkadi is an Associate Professor in the Department of Cartography, Photogrammetry, GIS, and Remote Sensing at the School of Geomatic Sciences and Surveying Engineering, IAV Hassan II Institute, Rabat, Morocco. Since graduating from IAV Hassan II in 2008 and obtaining her PhD in 2016, she has established a distinguished academic career centered on the intersection of geospatial engineering and digital innovation.

Her primary expertise lies in photogrammetry, lasergrammetry, 3D modeling, and deep learning architectures. Recently, Pr. Aitelkadi has expanded her research to encompass Digital Twin technology and Precision Agriculture, utilizing high-fidelity spatial data to drive sustainable development and environmental resilience. Her work is deeply integrated into national and international projects involving Earth observation, data mining, and spatial data infrastructures.

Since 2018, Pr. Aitelkadi has spearheaded a complementary research axis focused on agri-entrepreneurship and knowledge management. In this capacity, she plays a central role in the valorization of research and academic output, bridging the gap between theoretical study and professional application. Through her coordination of international projects, she actively supports the development and promotion of work produced by the students and research teams of IAV Hassan II, fostering a culture of innovation and labor market orientation within the Moroccan and African higher education landscape.`,
  },
  {
    name: "Dr. Zeineb Kassouk",
    role: "Assistant Professor and UCAR Coordinator",
    imageUrl: "/project team/zeineb.png",
    affiliation: "National Agronomic Institute of Tunisia (INAT), Carthage University (UCAR)",
    contactEmail: "zeineb.kassouk@inat.u-carthage.tn",
    bio: `Dr. Zeineb Kassouk (ORCID: 0000-0001-5158-0998) is an Assistant Professor in Rural Engineering, Water, and Forestry at the National Agronomic Institute of Tunisia (INAT), which is part of Carthage University (UCAR). She is a key member of the GREEN-TEAM research laboratory (LR17AGR01), focusing on the integrated management of natural resources through remote sensing and spatial analysis.

Dr. Kassouk holds a dual Ph.D., one in Geographic Information Sciences from Paris Est University and another in Rural, Water, and Forestry Engineering from INAT. Her research is centered on developing innovative methods to enhance the information content of satellite data, enabling more precise mapping of land use variability and change.

Her expertise combines geospatial analysis, spectral data processing, and machine learning for environmental monitoring, with a strong focus on promoting sustainable land management. She was a coordinator of European funding projects (Eranet Med, ArimnetYoung, PHC, Interreg). She is the UCAR coordinator for the DTT4SD project.`,
  },
  {
    name: "Assistant Professor Ivan Tomljenovic",
    role: "Remote Sensing and Applied Geoinformatics Specialist",
    imageUrl: "",
    affiliation: "University of Zagreb",
    bio: `Assistant Professor Ivan Tomljenovic is a remote sensing and applied geoinformatics specialist with extensive experience in satellite imagery processing, LiDAR analysis, and GIS-based data modelling. He earned his PhD in Applied Geoinformatics (dr.rer.nat.) at the University of Salzburg and holds BSc and MSc degrees in Geodesy and Geoinformatics from the University of Zagreb.

Across ESA-funded and national projects, he delivers end-to-end workflows from raw data preparation and orthorectification through object-based image analysis, automated classification, and rigorous QA/QC to produce decision-ready spatial products. His portfolio includes Sentinel-driven coastal and benthic habitat mapping, invasive plant species detection, human-induced coastal change monitoring, and Copernicus land-cover services, complemented by field survey and validation.

He works fluently with ArcGIS/QGIS, eCognition, SNAP, and AutoCAD, and develops reproducible pipelines in Python, R, and SQL. He is a published author in leading journals on LiDAR/OBIA building extraction. He is known for clear communication, disciplined delivery, and interdisciplinary teamwork.`,
  },
];


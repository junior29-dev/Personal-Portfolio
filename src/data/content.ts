export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "businesses", label: "Businesses" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const skillGroups = [
  {
    title: "Frontend",
    blurb: "Interfaces people enjoy using",
    skills: [
      { name: "React", level: 70 },
      { name: "TypeScript", level: 70 },
      { name: "JavaScript", level: 60 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    title: "Backend",
    blurb: "APIs and services that hold up",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 70 },
      { name: "FastAPI", level: 80 },
      { name: "RestAPI", level: 78 },
    ],
  },
  {
    title: "Programming Languages & Paradigms",
    blurb: "Core languages I build with",
    skills: [
      { name: "Python", level: 85 },
      { name: "C++", level: 70 },
      { name: "JavaScript", level: 70 },
      { name: "TypeScript", level: 65 },
      { name: "Object-Oriented Programming", level: 80 },
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Functional Programming", level: 75 },
    ],
  },
  {
    title: "Databases",
    blurb: "Where the data lives",
    skills: [
      { name: "PostgreSQL", level: 69 },
      { name: "Supabase", level: 62 },
      { name: "SQL", level: 60 }
    ],
  },
  {
    title: "Cloud & DevOps",
    blurb: "Infrastructure, automation and deployment",
    skills: [
      { name: "AWS", level: 15 },
      { name: "Oracle Cloud", level: 66 },
      { name: "Networking", level: 72 },
      { name: "Docker", level: 25 },
      { name: "CI/CD", level: 35 },
      { name: "Bash Scripting", level: 35 },
    ],
  },
  {
    title: "Systems & Networking",
    blurb: "Operating systems and network fundamentals",
    skills: [
      { name: "Linux", level: 64 },
      { name: "Windows", level: 65 },
      { name: "TCP/IP", level: 60 },
      { name: "HTTP/HTTPS", level: 75 },
      { name: "Firewalls", level: 40 },
      { name: "Networking", level: 72 },
    ],
  },
  {
    title: "Data Science & Quantitative Finance",
    blurb: "Statistical computing and financial mathematics",
    skills: [
      { name: "Scientific Python Analytics", level: 65 },
      { name: "Calculus", level: 60 },
      { name: "Linear Algebra", level: 60 },
      { name: "Probability Theory", level: 65 },
      { name: "Statistical Inference", level: 60 },
      { name: "Regression Analysis", level: 60 },
      { name: "Probability Distributions", level: 60 },
      { name: "Financial Derivatives", level: 55 },
      { name: "API Integration", level: 75 },
    ],
  },
  {
    title: "Development Tools & Operating Systems",
    blurb: "Daily drivers",
    skills: [
      { name: "Git", level: 68 },
      { name: "GitHub", level: 78 },
      { name: "VS Code", level: 85 },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Wildlife Corridor Network System",
    description:
      "A system applying advanced algorithms and data structures to model and optimize wildlife movement corridors across fragmented habitats.",
    stack: ["C++", "Algorithms", "Data Structures", "Graph Theory"],
    github: "https://github.com/junior29-dev/wildlife-corridor",
    demo: "#",
  },
  {
    title: "Vehicle Rental Desktop App",
    description:
      "A full-featured desktop application for managing vehicle rentals, built with modern OOP principles and a polished Qt interface.",
    stack: ["C++", "OOP", "Qt"],
    github: "https://github.com/junior29-dev/vehicle-rental",
    demo: "#",
  },
  {
    title: "Phone Number Intelligence Tool",
    description:
      "A Python-based tool that queries public APIs to extract carrier, location, and line-type intelligence from phone numbers.",
    stack: ["Python", "FAST APIs", "Data Parsing", "Next.Js"],
    github: "https://github.com/junior29-dev/phone-intel",
    demo: "#",
  },
  {
    title: "Airplane Booking System Desktop App",
    description:
      "A cross-platform airplane booking application with seat selection, booking management, and a responsive UI for both mobile and desktop.",
    stack: ["C++", "Qt", "OOP", "Cross-platform"],
    github: "https://github.com/junior29-dev/airplane-booking",
    demo: "#",
  },
];

export type Business = {
  name: string;
  tagline: string;
  mission: string;
  services: string[];
  accent: string;
};

export const businesses: Business[] = [
  {
    name: "Terra Websites",
    tagline: "Web design & development",
    mission:
      "Modern websites for businesses, startups, and personal brands that need to make a strong first impression online.",
    services: ["Custom web design", "Landing pages", "Brand websites", "Maintenance & support"],
    accent: "#3B6CF6",
  },
  {
    name: "Terra Markets",
    tagline: "Systematic trading & fintech",
    mission:
      "AI-driven trading systems and market analysis tools built for traders who want data-backed decisions.",
    services: ["Algorithmic trading systems", "Market analysis tools", "Financial dashboards"],
    accent: "#8B5CF6",
  },
  {
    name: "Terra Academics",
    tagline: "Education & academic support",
    mission:
      "Educational resources and technology-driven learning support that help students grasp difficult material faster.",
    services: ["Tutoring resources", "Study tools", "Academic content"],
    accent: "#28E0D6",
  },
  {
    name: "PathWise",
    tagline: "Your roadmap to a career in tech",
  mission:
      "Helping students and aspiring professionals discover the right technology career through AI-powered guidance, personalized roadmaps, and expert mentorship.",
    services: [
      "AI career guidance", "Personalized learning roadmaps", "Mentorship & career connections"],
    accent: "#F6873B",
  },
];

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  kind: "education" | "milestone" | "goal" | "experience";
};

export const timeline: TimelineItem[] = [
  {
    year: "2023",
    title: "Self-taught Full-Stack Website Development",
    description: "Learned to build websites from scratch using HTML5, CSS3, JavaScript, and React, creating several personal projects.",
    kind: "goal",
  },
  {
    year: "2024",
    title: "Matriculated with a Bachelor's Pass",
    description: "Completed high school with a focus on technical studies, laying the foundation for a career in technology.",
    kind: "education",
  },
  {
    year: "2024",
    title: "First year of BSc General in Computer Science & Informatics",
    description: "Began formal study in computer science, focused on programming fundamentals and systems thinking.",
    kind: "education",
  },
  {
    year: "2025",
    title: "Self-taught Quant Development fundamentals",
    description: "Learned quantitative development, algorithmic trading, and financial modeling, applying programming skills to finance.",
    kind: "goal",
  },
  {
    year: "2025",
    title: "Founded BPM Holdings",
    description: "Brought multiple ventures under one company.",
    kind: "milestone",
  },
  {
    year: "2026",
    title: "Freelance Software Development",
    description: "Gained professional experience in software development, contributing to real-world projects and collaborating with a team of engineers.",
    kind: "experience",
  },
  {
    year: "2026",
    title: "Currently a Developer at OmnitechWorks",
    description: "Gained professional experience in software development, contributing to real-world projects and collaborating with a team of engineers.",
    kind: "experience",
  },
  {
    year: "2026",
    title: "Second Year in BSc Gen in Computer Science and Informatics",
    description: "Deepened work in full-stack development, AI, and cloud computing while running BPM Holdings.",
    kind: "education",
  },
  {
    year: "Ahead",
    title: "Software Engineering / DevOps Career + Scaling BPM Holdings",
    description: "Aiming for a software engineering and devOps role that sharpens my craft, alongside growing BPM Holdings' brands.",
    kind: "goal",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
};

export const certifications: Certification[] = [
  { name: "FNB App Academy", issuer: "FNB", date: "2025" },
  { name: "Introduction to Artificial Intelligence", issuer: "HP Life", date: "2025" },
  { name: "Data Analysis", issuer: "HP Life", date: "2025" },
];

export const contactLinks = [
  { label: "Email", value: "boipelokotu1@gmail.com", href: "mailto:boipelokotu1@gmail.com", icon: "Mail" },
  { label: "GitHub", value: "github.com/junior29-dev", href: "https://github.com/junior29-dev", icon: "Github" },
  { label: "LinkedIn", value: "linkedin.com/in/boipelo-madiba-12340b355", href: "https://linkedin.com/in/boipelo-madiba-12340b355", icon: "Linkedin" },
];

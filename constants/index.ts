export type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string; // Put images in /public folder
  /** Panel colours: `bg` fills the card, `fg` is used for all text on it. */
  tone: { bg: string; fg: string };
  /** How the image sits in its frame. "fill" covers it, "contain" shows it whole, "wide" uses a 16:9 frame. */
  frame?: "fill" | "contain" | "wide";
  /** CSS object-position, for images whose subject is off-centre. */
  focus?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Gas Delivery platform",
    description: "A platform where by people can refill or buy gas online. Dealers can input the available gases with their respective prices, such that when a client can log in and place an order and the gas will be delivered to their exact location.",
    tech: ["React.js", "Flutter", "Django", "Tailwind"],
    link: "https://GasDelivery.com",
    github: "https://github.com/Benard-Ndiritu/GasDelivery",
    image: "/projects/gasdelivery.png",
    tone: { bg: "#22341d", fg: "#eef4e4" },
  },
  {
    title: "POS system",
    description: "A POS system whereby sellers in different businesses can use to monitor and automate their sales.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "Docker"],
    link: "https://pos-pb69.onrender.com/",
    github: "https://github.com/Benard-Ndiritu/POS.git",
    image: "/projects/POS.jpeg",
    tone: { bg: "#0f4fc4", fg: "#ffffff" },
    frame: "contain",
  },
  {
    title: "DevTrack",
    description: "DevTrack is a simple issue tracking system built with Django. It allows users to create, assign, and track tasks with different statuses.",
    tech: ["Django"],
    link: "https://DevTrack.com",
    github: "https://github.com/prezzoproff/DevTrack",
    image: "/projects/devtrack.png",
    tone: { bg: "#f3b27c", fg: "#2b1508" },
  },
  {
    title: "Crochet marketing",
    description: "A simple portfolio whereby crochet artists can showcase their skills as well as market their products.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://benardcrotchet.netlify.app/",
    github: "https://github.com/Benard-Ndiritu/Crotchet.git",
    image: "/projects/tote-bag.jpeg",
    tone: { bg: "#a80f22", fg: "#fff1ee" },
  },
  {
    title: "Portfolio",
    description: "A professional portfolio where I have included some of my projects.",
    tech: ["Next.js", "Tailwind"],
    link: "https://ndiritu.netlify.app/",
    github: "https://github.com/Benard-Ndiritu/Portfolio.git",
    image: "/projects/portfolio.png",
    tone: { bg: "#252d36", fg: "#f1f3f5" },
    focus: "14% 50%",
  },
  {
    title: "Simping site",
    description: "A simple page where you ask a girl out on a date.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://qmanydlee.netlify.app/",
    github: "https://github.com/Benard-Ndiritu/SM.git",
    image: "/projects/simp.png",
    tone: { bg: "#f2c6c3", fg: "#3a1218" },
    frame: "wide",
  },
];

export const STACK: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["React", "Next.js", "Angular", "React Native"] },
  { group: "Backend", items: ["Node.js", "Django", "Java", "PostgreSQL"] },
  { group: "Cloud", items: ["AWS", "Docker"] },
  { group: "Data", items: ["NumPy", "Pandas"] },
];

export const EMAIL = "ndiritubenard99@gmail.com";

export const GMAIL_COMPOSE =
  "https://mail.google.com/mail/?view=cm&fs=1&to=ndiritubenard99@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Benard,";

export const RESUME = "/Benard_Resume.pdf";

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Benard-Ndiritu" },
  { label: "LinkedIn", href: "www.linkedin.com/in/benard-ndiritu-578276212" },
  { label: "Instagram", href: "https://instagram.com/mirror_core" },
  { label: "X", href: "https://x.com/Caspianqman" },
];

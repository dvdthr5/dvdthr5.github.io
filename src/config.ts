export const siteConfig = {
  name: "David Glover",
  title: "Software Engineer",
  description: "Full-stack engineer specializing in practical ML, data-driven products, and clean UI engineering.",
  accentColor: "#1d4ed8",
  social: {
    email: "david05glover@gmail.com",
    linkedin: "https://linkedin.com/in/davidgglover",
    github: "https://github.com/dvdthr5",
  },
  aboutMe:
  "I'm a full-stack developer who enjoys creating usable tools. I've built data-driven apps, campus utilities, and robotics software. Recenly I've beebn focused on a computer vision for collectibles and real-time updating UIs with solid backend foundations.",
  skills: ["Python", "Java", "Node.js", "Javascript", "AWS", "C", "C++", "MongoDB", "SQL", "PyQt", "Web Scraping",],
  projects: [
    {
	name: "Vendr (IOS Prototype)",
	description: 
	"App for card vendors to snap a photo of Pokemon cards, pull raw prices from TCGplayer, and track trade values. Backend on MongoDB; ungraded cards priciing pipeline first, graded pricing as a later phase.",
	link: "https://github.com/dvdthr5/",
	skills: ["Swift (IOS plan)", "Node,js", "MongoDB", "TCGplayer API"],
	},
	{
	name: "SlugHub",
	description:
	"Multi-page student app: schedule input, UCSC events -. add to schedule, and anonymous class forums. Auth with MongoDB + bycrpt; course catalog/fourms powered by scrapers and real data validation.",
	link: "https://github.com/dvdthr5",
	skills: ["PyQt6", "MongoDB", "Web Scraping", "Auth"],
},
	{
	name: "Pokemon Card Chrome Extension",
	description: "Browser extension that scrapes eBay listings, enriches metadata via PokeAPI, and overlays market values from PriceCharting for quick deal checks.",
	links: "https://github.com/dvdthr5",
	skills: ["React", "Chrome Extension APIs", "Node.js", "Web Scraping"],
},
{	name: "Rover Dual-Camera Ops",
	description: "Camera control and telemetry software for a robotics rover. helped wire and assemble body/arm modules and supported test runs.",
	link: "https://github.com/dvdthr5",
	skills: ["C/C++", "Python", "Hardware Integration"],
},
  ],
  experience: [
    {
      company: "Rover Team",
      title: "Programmer",
      dateRange: "Sept 2024 - Present",
      bullets: [
	"Built software for dual-camera operations and live monitoring.",
	"Collaborated across mechanical and electical teams to integrate control loops.",
	"Contributed to chassis/arm assembly and wiring; assisted in testing.",
      ],
    },
      ],
  education: [
    {
      school: "University of California, Santa Cruz",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2023 - 2027",
      achievements: [
        "3.8 GPA",
        "Dean's List",
      ],
    },
  ],
};

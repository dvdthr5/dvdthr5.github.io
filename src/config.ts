export const siteConfig = {
  name: "David Glover",
  title: "david05glover@gmail.com | 4089661311",
  description:
    "Full-stack engineer specializing in practical ML, data-driven products, and clean UI engineering.",
  accentColor: "#1d4ed8",
  social: {
    email: "david05glover@gmail.com",
    linkedin: "https://linkedin.com/in/davidgglover",
    github: "https://github.com/dvdthr5",
  },
  aboutMe:
    "I'm a full-stack developer who enjoys creating usable tools. I've built data-driven apps, campus utilities, robotics software, and hackathon projects. Recently I've been focused on computer vision for collectibles and real-time updating UIs with solid backend foundations.",
  skills: [
    "Python",
    "C",
    "C++",
    "Java",
    "JavaScript",
    "Node.js",
    "React",
    "PyQt6",
    "Flask",
    "MongoDB",
    "SQL",
    "AWS",
    "OpenCV",
    "Web Scraping",
    "Git/GitHub",
    "Docker",
  ],
  projects: [
    {
      name: "SlugHub - CruzHacks 2025",
      description:
        "Multi-page student app for UCSC: schedule input with bus timing, events integration with add-to-schedule, and anonymous class forums. Auth with MongoDB + bcrypt; course catalog/forums powered by scrapers and real data validation.",
      link: "https://github.com/dvdthr5/SlugHub",
      skills: ["PyQt6", "MongoDB", "Web Scraping", "Authentication"],
    },
    {
      name: "SaveOurSlug - CruzHacks 2024",
      description:
        "Hackathon project promoting campus sustainability. Gamified eco-friendly actions with Flask + JS, allowing students to log activities, compete on leaderboards, and boost awareness.",
      link: "https://github.com/dvdthr5/SaveOurSlugs",
      skills: ["Flask", "JavaScript", "Web Development"],
    },
    {
      name: "Stock Dashboard",
      description:
        "Python-based dashboard for real-time stock tracking and visualization. Uses APIs for live feeds with Pandas + Matplotlib analytics, allowing trend comparisons and portfolio insights.",
      link: "https://github.com/dvdthr5/personal-finance-dashboard",
      skills: ["Python", "Pandas", "Matplotlib", "APIs"],
    },
    {
      name: "Pokémon Card Chrome Extension",
      description:
        "Browser extension enhancing eBay listings with enriched Pokémon card metadata via PokéAPI and overlays of market values from PriceCharting for quick deal checks.",
      link: "https://github.com/dvdthr5",
      skills: ["React", "Chrome Extension APIs", "Node.js", "Web Scraping"],
    },
    {
      name: "Rover Dual-Camera Ops",
      description:
        "Software for rover dual-camera operations and telemetry. Implemented camera control loops, supported integration with hardware subsystems, and contributed to chassis/arm assembly and testing.",
      link: "https://github.com/dvdthr5",
      skills: ["C/C++", "Python", "OpenCV", "Hardware Integration"],
    },
    {
      name: "William the Bill Bot",
      description:
        "Python + Tkinter app for shared expense management. Splits bills evenly, tracks who owes whom, and includes a ‘Paid’ feature that resolves debts while preserving history in SQLite.",
      link: "https://github.com/dvdthr5/William-BillOrganizer",
      skills: ["Python", "Tkinter", "SQLite"],
    },
  ],
  experience: [
    {
      company: "UCSC Rover Team",
      title: "Lead Programmer",
      dateRange: "Sept 2024 – Present",
      bullets: [
        "Leading the software division of a 40+ member interdisciplinary team competing in the 2025 University Rover Challenge (URC).",
        "Developing rover control systems in Python/C++ with OpenCV-based vision pipelines.",
        "Trained incoming members on Git, Python, and SSH workflows to integrate them into the dev team.",
      ],
    },
    {
      company: "The Buttery Bakery",
      title: "Supervisor",
      dateRange: "July 2024 – Present",
      bullets: [
        "Promoted to supervisor within six months in a high-volume café.",
        "Manage and train a team of 10+ employees; oversee scheduling, operations, and customer service.",
        "Maintained efficient workflows and high morale in a fast-paced environment.",
      ],
    },
  ],
  education: [
    {
      school: "University of California, Santa Cruz",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2023 – 2027",
      achievements: ["3.8 GPA", "Dean's List"],
    },
  ],
  resume: {
    link: "/davidGloverResume2025.pdf",
    label: "View Resume",
  },
};

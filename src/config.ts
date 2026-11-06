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
    name: "SlugHub (CruzHacks 2025)",
    description:
      "Full-stack student productivity platform for UCSC. Features class scheduling with bus timing integration, event syncing, and anonymous class forums. Built with Flask + MongoDB and PyQt6 frontend; includes authentication, course scraping, and persistent user data.",
    link: "https://github.com/dvdthr5/SlugHub",
    skills: ["PyQt6", "Flask", "MongoDB", "TypeScript", "Web Scraping", "Authentication"],
  },
  {
    name: "SaveOurSlug (CruzHacks 2024)",
    description:
      "Gamified sustainability app that encourages eco-friendly habits through leaderboards and activity tracking. Designed REST APIs with Flask and MongoDB for real-time updates and user management.",
    link: "https://github.com/dvdthr5/SaveOurSlugs",
    skills: ["Flask", "JavaScript", "MongoDB", "Web Development"],
  },
  {
    name: "Neural Network Card Classifier",
    description:
      "Trained a convolutional neural network on 120k+ images for Pokémon card classification. Automated dataset creation and preprocessing in Python; deployed inference using FastAPI and Docker for modular testing and scalability.",
    link: "https://github.com/dvdthr5",
    skills: ["Python", "TensorFlow", "FastAPI", "Docker", "Machine Learning"],
  },
  {
    name: "Full-Stack Stock Dashboard",
    description:
      "Data-driven web application for tracking stock market trends and visualizing portfolio performance. Implemented Flask APIs, JavaScript frontend updates, and MongoDB storage for live data caching and persistence.",
    link: "https://github.com/dvdthr5/personal-finance-dashboard",
    skills: ["Flask", "JavaScript", "MongoDB", "APIs"],
  },
  {
    name: "UCSC Rover Computer Vision System",
    description:
      "Developed computer vision software for object detection and tracking on the UCSC robotics team rover. Implemented real-time image processing in Python and C++ using OpenCV, with modular data logging and visualization tools.",
    link: "https://github.com/dvdthr5",
    skills: ["C++", "Python", "OpenCV", "Image Processing", "Computer Vision"],
  },
  {
    name: "Encryption GUI",
    description:
      "Created a desktop application for encrypting and decrypting files using Python’s cryptography libraries. Designed a simple Tkinter interface prioritizing usability and secure key handling for local file operations.",
    link: "https://github.com/dvdthr5/encryptiongui",
    skills: ["Python", "Tkinter", "Cryptography", "GUI Design"],
  },
],
  experience: [
  {
    company: "JLab Smart Sensing",
    title: "Research Pathways Fellow",
    dateRange: "June 2026 - March 2027",
    bullets: [
      "Designed machine learning experiments for RF-based soil sensing across four field and laboratory datasets, including cross-site validation and feature ablation.",
      "Built reusable ML evaluation pipelines comparing regression models across handcrafted, PCA, kernel PCA, autoencoder, and CNN-based features.",
      "Developed an end-to-end radar signal-processing pipeline to transform raw radar captures into soil permittivity estimates.",
      "Contributed experimental methodology, ML evaluation, and analysis to a research paper on non-invasive soil compaction sensing.",
      "Built a multithreaded Python tool to concurrently collect and log measurements from three sensor systems.",
      "Developed curriculum and onboarding materials for Introduction to Research for Engineers."
    ]
  },
  {
    company: "JLab Smart Sensing",
    title: "Undergraduate Researcher",
    dateRange: "January 2026 - Present",
    bullets: [
      "Led development of NodeFlow, a full-stack irrigation monitoring and control platform used across four farms.",
      "Designed REST APIs and backend services for sensor ingestion, hardware management, authentication, and historical data retrieval.",
      "Built an automated irrigation engine using real-time sensor measurements, configurable thresholds, and manual overrides.",
      "Implemented real-time sensor updates with Socket.IO and simulated hardware services for end-to-end testing.",
      "Improved application reliability through database migrations, automated testing, GitHub Actions CI/CD, and containerized AWS deployment."
    ]
  },
  {
    company: "New Instance Coffee",
    title: "Software and Data Intern",
    dateRange: "June 2024 - January 2026",
    bullets: [
      "Automated Python data pipelines and MySQL queries to analyze product performance metrics and generate management reports.",
      "Developed backend workflows and deployed containerized services to improve web performance and analytics."
    ]
  },
  {
    company: "UCSC Rover Team",
    title: "Lead Programmer",
    dateRange: "September 2024 - Present",
    bullets: [
      "Led software development for a 40+ member interdisciplinary team competing in the University Rover Challenge.",
      "Developed rover control systems using Python, C++, and OpenCV while mentoring members on Git, Python, and SSH workflows."
    ]
  },
  {
    company: "The Buttery Bakery",
    title: "Supervisor",
    dateRange: "July 2024 - Present",
    bullets: [
      "Promoted to supervisor within six months, managing and training 10+ employees in a high-volume café.",
      "Oversaw daily operations, scheduling, and customer service while maintaining efficient team workflows."
    ]
  }
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
    link: "/DavidGlover_Resume2026.pdf",
    label: "View Resume",
  },
};

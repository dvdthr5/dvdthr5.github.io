export const siteConfig = {
  name: "David Glover",
  title: "david05glover@gmail.com | 4089661311",
  description:
    "Full-stack software engineer and researcher building intelligent, data-driven systems from research to production.",
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
    name: "NodeFlow",
    description:
      "Led development of a full-stack irrigation monitoring and control platform used across four farms. Designed REST APIs and backend services for sensor ingestion, hardware management, authentication, and historical data retrieval. Built an automated irrigation engine with configurable sensor thresholds, real-time Socket.IO updates, and manual overrides. Implemented automated testing, database migrations, CI/CD pipelines, and containerized AWS deployment.",
    link: "https://github.com/jlab-sensing/NodeFlow",
    skills: [
      "React",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Socket.IO",
      "REST APIs",
      "Docker",
      "AWS",
      "GitHub Actions",
      "Alembic"
    ],
  },
  {
    name: "ArrowBerry",
    description:
      "Developed a full-stack mobile application that converts grocery receipts into structured pantry inventories and recommends recipes based on available ingredients and spoilage priority. Designed a Supabase relational database and authentication system, integrated Gemini-based receipt processing, and built automated recipe scraping and ingredient-parsing pipelines.",
    link: "https://github.com/dvdthr5",
    skills: [
      "React Native",
      "TypeScript",
      "Expo",
      "Supabase",
      "PostgreSQL",
      "Gemini",
      "Jest",
      "Web Scraping"
    ],
  },
  {
    name: "Custom HTTP Server",
    description:
      "Built a multithreaded HTTP/1.0 server in C using POSIX sockets, supporting concurrent client connections and static file serving. Implemented HTTP request parsing, header validation, URI handling, and Content-Length support. Tested memory safety and correctness using Valgrind.",
    link: "https://github.com/dvdthr5",
    skills: [
      "C",
      "POSIX Sockets",
      "Multithreading",
      "HTTP",
      "Networking",
      "Systems Programming",
      "Valgrind"
    ],
  },
  {
    name: "SlugHub (CruzHacks 2025)",
    description:
      "Developed a full-stack student productivity platform integrating class scheduling, bus arrival times, event synchronization, and anonymous course forums. Built Flask backend services with MongoDB persistence, user authentication, and automated course data scraping.",
    link: "https://github.com/dvdthr5/SlugHub",
    skills: [
      "Python",
      "PyQt6",
      "Flask",
      "MongoDB",
      "Web Scraping",
      "Authentication"
    ],
  },
  {
    name: "SaveOurSlug (CruzHacks 2024)",
    description:
      "Built a gamified sustainability application encouraging environmentally conscious habits through activity tracking and competitive leaderboards. Developed Flask REST APIs and MongoDB data models for user management, activity persistence, and leaderboard updates.",
    link: "https://github.com/dvdthr5/SaveOurSlugs",
    skills: [
      "Python",
      "Flask",
      "JavaScript",
      "MongoDB",
      "REST APIs"
    ],
  },
  {
    name: "Neural Network Card Classifier",
    description:
      "Trained a convolutional neural network to classify Pokémon cards using a dataset of over 120,000 images. Automated dataset collection and preprocessing with Python, and developed a containerized FastAPI inference service for model deployment and testing.",
    link: "https://github.com/dvdthr5",
    skills: [
      "Python",
      "TensorFlow",
      "CNN",
      "FastAPI",
      "Docker",
      "Machine Learning"
    ],
  },
  {
    name: "Full-Stack Stock Dashboard",
    description:
      "Developed a full-stack financial dashboard for monitoring stock market trends and visualizing portfolio performance. Implemented Flask REST APIs, dynamic JavaScript visualizations, and MongoDB storage for market data caching and persistent portfolio tracking.",
    link: "https://github.com/dvdthr5/personal-finance-dashboard",
    skills: [
      "Python",
      "Flask",
      "JavaScript",
      "MongoDB",
      "REST APIs",
      "Data Visualization"
    ],
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
      achievements: ["Honors", "3.8 GPA", "Dean's List"],
    },
  ],
  resume: {
    link: "/DavidGlover_Resume2026.pdf",
    label: "View Resume",
  },
};

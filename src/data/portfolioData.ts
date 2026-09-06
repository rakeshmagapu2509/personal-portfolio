import type { PersonalInfo, SkillCategory, Project, Hackathon, Achievement, Education, SocialProfile, Certificate } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  fullName: "Magapu Rakesh",
  displayName: "Rakesh Magapu",
  title: "B.Tech CSE & AIML Student",
  currentEducation: "B.Tech — Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
  year: "3rd Year",
  college: "Bonam Venkata Chalamayya Engineering College",
  careerGoal: "Software Engineer / AI/ML Developer",
  tagline: "Exploring Artificial Intelligence, Machine Learning, and modern software development — one problem at a time.",
  heroDescription: "Aspiring Software Engineer and B.Tech CSE (AI & ML) student with a strong foundation in programming, data structures and algorithms, software development, and artificial intelligence.",
  aboutBio: [
    "I'm Rakesh Magapu, an aspiring Software Engineer and 3rd-year B.Tech student specializing in Computer Science & Engineering with Artificial Intelligence and Machine Learning at Bonam Venkata Chalamayya Engineering College, Odalarevu.",
    "I have a strong foundation in programming, data structures and algorithms, software development, and artificial intelligence. Passionate about building practical projects, solving technical problems, and continuously learning emerging technologies.",
    "Seeking an entry-level software engineering opportunity to apply technical skills, gain industry experience, and contribute to innovative solutions in a professional environment."
  ],
  currentlyExploring: [
    {
      title: "Artificial Intelligence",
      description: "Intelligent agent architectures, search heuristics, probability theory, and foundational AI systems.",
      badge: "Core Foundation",
      focus: ["Algorithmic Problem Solving", "Heuristic Search", "Knowledge Representation", "Inference Logic"]
    },
    {
      title: "Machine Learning",
      description: "Supervised & unsupervised learning models, regression, classification, feature engineering, and statistical modeling.",
      badge: "In Progress",
      focus: ["Model Evaluation", "Scikit-Learn", "Feature Scaling", "Data Preprocessing"]
    },
    {
      title: "Deep Learning",
      description: "Neural network fundamentals, convolutional architectures, optimization algorithms, and representation learning.",
      badge: "In Depth",
      focus: ["Neural Networks", "Backpropagation", "Loss Optimization", "PyTorch / TensorFlow Concepts"]
    },
    {
      title: "Software Development",
      description: "Full-stack web architecture, clean code practices, Git workflows, database modeling, and modular system design.",
      badge: "Engineering",
      focus: ["React & Modern UI", "REST APIs", "SQL Schema Design", "Clean Architecture"]
    }
  ],
  email: "rakeshmagapu2509@gmail.com",
  phone: "+91 79898 94262",
  phoneRaw: "07989894262",
  location: "Andhra Pradesh, India",
  statusNotice: "Open to software engineering opportunities, internships, and technical discussions.",
  resumeFileName: "resume.pdf",
  profileImagePath: "/profile.jpg"
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    description: "Core languages utilized for algorithmic problem solving, software engineering, and analytical modeling.",
    skills: [
      {
        name: "Python",
        category: "Programming Languages",
        description: "Primary language for data manipulation, scientific computing, automation, and AI/ML model development.",
        iconName: "FileCode2",
        accentColor: "#38bdf8",
        tags: ["Core", "Data Structures", "OOP", "Scripting"]
      },
      {
        name: "Java",
        category: "Programming Languages",
        description: "Robust object-oriented programming foundation, strongly-typed system design, and algorithmic problem solving.",
        iconName: "Coffee",
        accentColor: "#f97316",
        tags: ["OOP", "Collections Framework", "Software Design"]
      },
      {
        name: "C",
        category: "Programming Languages",
        description: "Low-level systems programming, manual memory understanding, pointers, and computational fundamentals.",
        iconName: "Terminal",
        accentColor: "#94a3b8",
        tags: ["Memory Layout", "Pointers", "Algorithms"]
      }
    ]
  },
  {
    id: "web-dev",
    name: "Web Development",
    description: "Foundational client-side technologies for building structured, accessible, and responsive web interfaces.",
    skills: [
      {
        name: "HTML",
        category: "Web Development",
        description: "Semantic document structure, accessibility foundations, and SEO-compliant web layouts.",
        iconName: "Code2",
        accentColor: "#f97316",
        tags: ["Semantic HTML5", "Accessibility (a11y)", "DOM"]
      },
      {
        name: "CSS",
        category: "Web Development",
        description: "Responsive layouts, Flexbox, CSS Grid, custom properties, animations, and modern UI styling.",
        iconName: "Palette",
        accentColor: "#38bdf8",
        tags: ["CSS3", "Responsive Layouts", "Flexbox & Grid"]
      }
    ]
  },
  {
    id: "ai-ml",
    name: "AI / ML",
    description: "Theoretical understanding and hands-on implementation of mathematical and learning systems.",
    skills: [
      {
        name: "Machine Learning",
        category: "AI / Machine Learning",
        description: "Model selection, regression, classification trees, hyperparameter tuning, and validation metrics.",
        iconName: "BrainCircuit",
        accentColor: "#818cf8",
        tags: ["Supervised Learning", "Unsupervised Learning", "Feature Engineering"]
      }
    ]
  },
  {
    id: "tools",
    name: "Tools & Platforms",
    description: "Developer workflows, version control systems, and interactive computation environments.",
    skills: [
      {
        name: "Git",
        category: "Development Tools",
        description: "Distributed version control, branching strategies, commit hygiene, and repository management.",
        iconName: "GitBranch",
        accentColor: "#f43f5e",
        tags: ["Version Control", "Branching", "Merge Workflows"]
      },
      {
        name: "GitHub",
        category: "Development Tools",
        description: "Remote code collaboration, pull requests, issue tracking, and repository hosting.",
        iconName: "Github",
        accentColor: "#e2e8f0",
        tags: ["Collaboration", "Open Source", "Code Review"]
      },
      {
        name: "VS Code",
        category: "Development Tools",
        description: "Primary integrated development environment with advanced extensions, debugging, and linting.",
        iconName: "Code",
        accentColor: "#0284c7",
        tags: ["Debugging", "Extensions", "Workspaces"]
      },
      {
        name: "Jupyter",
        category: "Development Tools",
        description: "Interactive computing notebook environment for data exploration, model experimentation, and visualization.",
        iconName: "BookOpen",
        accentColor: "#f97316",
        tags: ["Notebooks", "Data Visualization", "Experimentation"]
      }
    ]
  }
];

// Completed engineering projects
export const projects: Project[] = [
  {
    id: "online-event-registration-system",
    title: "Online Event Registration System",
    subtitle: "Full-Stack Event Management & Registration Platform",
    shortDescription: "A comprehensive web-based platform facilitating seamless event discovery, participant registration, attendee credential management, and automated workflows.",
    detailedDescription: "Designed and developed an end-to-end event registration portal enabling users to explore upcoming campus and technical events, submit registration details, and receive automated confirmations. Backed by structured relational data modeling, secure input validation, and an intuitive responsive user interface.",
    technologies: ["React", "Node.js", "JavaScript", "MySQL", "HTML/CSS", "REST APIs"],
    githubUrl: "https://github.com/rakeshmagapu2509",
    category: "Web Development",
    featured: true,
    date: "Completed",
    status: "Completed",
    keyHighlights: [
      "Dynamic event registration workflow with real-time client-side form validation",
      "Relational database schema designed for events, attendees, and registration records",
      "Clean RESTful API endpoints for participant enrollment and data retrieval",
      "Mobile-responsive user interface with intuitive event exploration cards"
    ]
  },
  {
    id: "personal-portfolio-website",
    title: "My Personal Portfolio Website",
    subtitle: "Futuristic AI/ML Developer Interface & Credentials Showcase",
    shortDescription: "A high-performance, futuristic portfolio featuring an interactive canvas neural network background, HUD glassmorphism aesthetics, verified credentials showcase, and responsive design.",
    detailedDescription: "Architected and built a modern personal portfolio designed to present academic accomplishments, verified certifications, hackathons, and technical projects. Features a real-time cursor-reactive neural network canvas, high-resolution certificate lightbox modal with zoom controls, and a fully typed modular architecture.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "HTML5 Canvas", "Lucide Icons"],
    githubUrl: "https://github.com/rakeshmagapu2509",
    liveDemoUrl: "http://localhost:5173/",
    category: "Web Development",
    featured: true,
    date: "Completed",
    status: "Completed",
    keyHighlights: [
      "Real-time interactive canvas neural network with proximity-based cursor physics",
      "Futuristic dark obsidian (#030306) and electric purple/neon violet glassmorphism",
      "Full-screen certificate lightbox modal with interactive zoom and download controls",
      "Strongly typed, extensible modular data layer in TypeScript with zero mock data"
    ]
  }
];

// Blueprint architecture template preview
export const futureProjectSchemaTemplate: Project = {
  id: "template-preview",
  title: "Intelligent Model Pipeline (Architecture Template)",
  subtitle: "Future Project Showcase Example",
  shortDescription: "A preview of the interactive card architecture that will automatically display Rakesh's upcoming AI/ML and software engineering projects.",
  detailedDescription: "This interactive modal showcases how future projects added by Rakesh to portfolioData.ts will render with rich details, technical tags, GitHub repositories, and live deployment links.",
  technologies: ["Python", "Machine Learning", "React", "REST API"],
  githubUrl: "https://github.com/rakeshmagapu2509",
  liveDemoUrl: "",
  category: "AI / Machine Learning",
  featured: true,
  date: "Upcoming",
  status: "In Development",
  keyHighlights: [
    "Modular model training pipeline with feature validation",
    "Clean REST API backend interfacing with client UI",
    "Real-time inference and evaluation dashboard"
  ]
};

export const educationList: Education[] = [
  {
    institution: "Bonam Venkata Chalamayya Engineering College, Odalarevu",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering (AI & ML)",
    year: "2024 – 2028",
    location: "Odalarevu, Allavaram, Amalapuram, AP",
    status: "Currently Enrolled (3rd Year)",
    cgpa: "8.9 CGPA",
    graduationYear: "Graduation 2028",
    summary: "Pursuing rigorous academic training in Computer Science & Engineering with specialization in Artificial Intelligence and Machine Learning, focusing on algorithms, intelligent systems, and scalable software development.",
    focusAreas: [
      "Artificial Intelligence & Machine Learning",
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java / Python / C)",
      "Database Management Systems (DBMS)",
      "Full-Stack Web Development",
      "Software Engineering Principles"
    ]
  },
  {
    institution: "Sri Shirdi Sai Junior College",
    degree: "Intermediate (10+2)",
    field: "Mathematics, Physics & Chemistry (MPC)",
    year: "2022 – 2024",
    location: "Kadiam, Andhra Pradesh",
    status: "Completed (2024)",
    cgpa: "9.28 GPA",
    graduationYear: "Graduated 2024",
    summary: "Completed higher secondary education with top honors, establishing strong foundations in analytical thinking, calculus, physics, and problem-solving.",
    focusAreas: [
      "Mathematics & Calculus",
      "Physics & Mechanics",
      "Chemistry",
      "Analytical Problem Solving"
    ]
  },
  {
    institution: "Maharshi Vidyaniketan",
    degree: "Secondary School Certificate (SSC / Class X)",
    field: "General Academic Curriculum",
    year: "Completed 2022",
    location: "Atreyapuram, Andhra Pradesh",
    status: "Completed (2022)",
    cgpa: "9.1 GPA",
    graduationYear: "Graduated 2022",
    summary: "Graduated secondary schooling with high distinction, fostering an early passion for technology, mathematics, and logical reasoning.",
    focusAreas: [
      "Mathematics & Geometry",
      "General Science",
      "Information Technology Basics",
      "Logical Aptitude"
    ]
  }
];

export const hackathonsList: Hackathon[] = [
  {
    id: "sih-2025",
    name: "Smart India Hackathon (SIH) 2025",
    organization: "Ministry of Education & AICTE",
    role: "Participant & Team Developer",
    date: "2025",
    description: "Participated in the premier nationwide innovation challenge, collaborating within a student development team to engineer innovative technology solutions for designated real-world problem statements.",
    status: "Participated",
    technologies: ["Problem Solving", "Software Prototyping", "Full-Stack Development", "Team Collaboration"]
  },
  {
    id: "hackmeela",
    name: "HackMelaa 2026",
    organization: "FEBE & BVCEC Autonomous",
    role: "Participant & Developer",
    date: "Aug 2026",
    description: "Centralised hackathon organized by FEBE and BVCEC, showcasing rapid prototyping, technical innovation, and collaborative engineering under timed constraints.",
    status: "Participated",
    certificateId: "hackmelaa-2026",
    technologies: ["Problem Solving", "Software Design", "Collaborative Engineering", "Rapid Prototyping"]
  },
  {
    id: "bvc-cse-hackathon",
    name: "BVC CSE Hackathon 2026",
    organization: "Bonam Venkata Chalamayya Engineering College (CSE & IT)",
    role: "Participant & Problem Solver",
    date: "12 Aug 2026",
    description: "Departmental hackathon organized by the Department of CSE, tackling engineering problem statements, testing core computational concepts, teamwork, and rapid prototype development.",
    status: "Participated",
    certificateId: "bvc-cse-hackathon-2026",
    technologies: ["Data Structures", "Algorithms", "Rapid Prototyping", "Full-Stack Development"]
  }
];

export const achievementsList: Achievement[] = [];

export const socialProfiles: SocialProfile[] = [
  {
    name: "GitHub",
    handle: "rakeshmagapu2509",
    url: "https://github.com/rakeshmagapu2509",
    category: "Source Code & Repositories",
    description: "Explore my code repositories, experiments, scripts, and open-source learning progress.",
    accentColor: "#e2e8f0",
    badge: "Code Repositories"
  },
  {
    name: "LinkedIn",
    handle: "rakesh-magapu-760b9434a",
    url: "https://www.linkedin.com/in/rakesh-magapu-760b9434a",
    category: "Professional Network",
    description: "Connect with me professionally, follow my academic journey, and reach out for opportunities.",
    accentColor: "#0a66c2",
    badge: "Professional"
  },
  {
    name: "LeetCode",
    handle: "7ccb8QVMgX",
    url: "https://leetcode.com/u/7ccb8QVMgX/",
    category: "Algorithmic Problem Solving",
    description: "Track my daily coding practice, algorithmic challenges, and data structure problem solutions.",
    accentColor: "#ffa116",
    badge: "Algorithms"
  },
  {
    name: "HackerRank",
    handle: "rakeshmagapu2509",
    url: "https://www.hackerrank.com/profile/rakeshmagapu2509",
    category: "Coding & Problem Solving",
    description: "Solve algorithmic challenges, verify language proficiencies, and practice problem-solving skills.",
    accentColor: "#2ec866",
    badge: "Problem Solving"
  },
  {
    name: "Kaggle",
    handle: "rakeshmagapu",
    url: "https://www.kaggle.com/rakeshmagapu",
    category: "Data Science & Machine Learning",
    description: "Explore datasets, machine learning experiments, and competitive data science notebooks.",
    accentColor: "#20beff",
    badge: "Machine Learning"
  },
  {
    name: "Instagram",
    handle: "@rakesh_magapu",
    url: "https://www.instagram.com/rakesh_magapu/",
    category: "Personal & Social",
    description: "Personal updates, student life, and glimpses behind the screen.",
    accentColor: "#e1306c",
    badge: "Social"
  }
];

export const certificatesList: Certificate[] = [
  {
    id: "ibm-design-thinking",
    title: "Enterprise Design Thinking Practitioner",
    issuer: "IBM SkillsBuild",
    date: "08 Aug 2026",
    certificateType: "Practitioner Certificate",
    imagePath: "/certificates/ibm-enterprise-design-thinking.png",
    verificationUrl: "https://www.credly.com/go/tjJ9BPK1",
    downloadFileName: "Rakesh-Magapu-IBM-Enterprise-Design-Thinking.png",
    skillsCovered: [
      "Enterprise Design Thinking",
      "User Research & Empathy",
      "Agile Problem Solving",
      "Collaborative Ideation"
    ]
  },
  {
    id: "ey-microsoft-ai-passport",
    title: "AI Skills Passport",
    issuer: "EY & Microsoft",
    date: "Completed 2026",
    certificateType: "Certificate of Completion",
    imagePath: "/certificates/ey-microsoft-ai-skills-passport.png",
    downloadFileName: "Rakesh-Magapu-EY-Microsoft-AI-Skills-Passport.png",
    skillsCovered: [
      "Artificial Intelligence Fundamentals",
      "Employability & Sustainability",
      "Business AI Applications",
      "Technology & Innovation"
    ]
  },
  {
    id: "microsoft-prompt-engineering",
    title: "Write effective prompts to achieve optimal results",
    issuer: "Microsoft Learn",
    date: "28 July 2026",
    certificateType: "Certificate of Completion",
    imagePath: "/certificates/microsoft-prompt-engineering.png",
    downloadFileName: "Rakesh-Magapu-Microsoft-Write-Effective-Prompts.png",
    skillsCovered: [
      "Prompt Engineering",
      "Context & Constraint Setting",
      "Generative AI Optimization",
      "Few-Shot Prompting"
    ]
  },
  {
    id: "microsoft-copilot-chat",
    title: "Get started with Microsoft 365 Copilot Chat (Basic)",
    issuer: "Microsoft Learn",
    date: "28 July 2026",
    certificateType: "Certificate of Completion",
    imagePath: "/certificates/microsoft-copilot-chat.png",
    downloadFileName: "Rakesh-Magapu-Microsoft-Copilot-Chat.png",
    skillsCovered: [
      "Microsoft 365 Copilot",
      "AI Chat Workflows",
      "Workplace Automation",
      "Productivity Engineering"
    ]
  },
  {
    id: "apssdc-python",
    title: "Python Programming",
    issuer: "Andhra Pradesh State Skill Development Corporation (APSSDC)",
    program: "APSSDC Summer Online Internship - 2026",
    date: "04 May 2026 – 03 July 2026",
    certificateType: "Certificate of Completion",
    certificateNo: "APSSDC/SIP/2026-27/30454",
    imagePath: "/certificates/apssdc-python-programming.png",
    downloadFileName: "Rakesh-Magapu-APSSDC-Python-Programming.png",
    skillsCovered: [
      "Core Python & OOP",
      "Data Structures & Algorithms",
      "Data Handling & Automation",
      "Applied Software Problem Solving"
    ]
  },
  {
    id: "infosys-java-programming",
    title: "Programming using Java",
    issuer: "Infosys Springboard",
    program: "Infosys Springboard Course Completion",
    date: "21 Oct 2025",
    certificateType: "Course Completion Certificate",
    imagePath: "/certificates/infosys-programming-using-java.jpg",
    verificationUrl: "https://verify.onwingspan.com",
    downloadFileName: "Rakesh-Magapu-Infosys-Programming-Using-Java.jpg",
    skillsCovered: [
      "Java Programming",
      "Object-Oriented Programming (OOP)",
      "Control Structures & Methods",
      "Core Java Architecture"
    ]
  },
  {
    id: "bvc-cse-hackathon-2026",
    title: "Hackathon 2026 — Certificate of Participation",
    issuer: "BVC Engineering College (CSE & IT)",
    program: "HACKATHON 2026 — Department of Computer Science & Engineering, BVCEC",
    date: "12 Aug 2026",
    certificateType: "Certificate of Participation",
    certificateNo: "Roll No: 24221A4229",
    imagePath: "/certificates/bvc-cse-hackathon-2026.jpg",
    downloadFileName: "Rakesh-Magapu-BVC-CSE-Hackathon-2026.jpg",
    skillsCovered: [
      "Competitive Problem Solving",
      "Software Prototyping",
      "Full-Stack Development",
      "Team Collaboration"
    ]
  },
  {
    id: "hackmelaa-2026",
    title: "HackMelaa 2026 — Certificate of Appreciation",
    issuer: "FEBE & BVCEC Autonomous",
    program: "HackMelaa 2026 Centralised Hackathon (Konaseema, AP)",
    date: "Aug 2026",
    certificateType: "Certificate of Appreciation",
    certificateNo: "HM2026KM112",
    imagePath: "/certificates/hackmelaa-2026.jpg",
    downloadFileName: "Rakesh-Magapu-HackMelaa-2026-Certificate.jpg",
    skillsCovered: [
      "Technical Excellence",
      "Rapid Software Prototyping",
      "Innovative Engineering",
      "Hackathon Collaboration"
    ]
  }
];

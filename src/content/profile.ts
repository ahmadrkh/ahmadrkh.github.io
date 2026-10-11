/**
 * Single source of truth for the website and the CV page.
 * Edit this file to update both at once.
 */

export type Link = { label: string; href: string };

export type Entry = {
  title: string;
  org?: string;
  role?: string;
  location?: string;
  period: string;
  bullets?: string[];
  tags?: string[];
  links?: Link[];
};

export type Project = {
  title: string;
  context: string;
  year?: string;
  summary: string;
  tags: string[];
  links?: Link[];
};

export type TeachingEntry = {
  course: string;
  role: string;
  instructor: string;
  terms: string[];
  bullets?: string[];
};

export const profile = {
  name: "Ahmadreza Khanari",
  headline: "Computer Engineer · Machine Learning & Computer Vision",
  affiliation: "B.Sc. Computer Engineering, Sharif University of Technology",
  location: "Tehran, Iran",
  email: "a.reza.khanari@gmail.com",
  site: "https://ahmadrkh.github.io",
  cvUpdated: "October 2026",
  thesis: {
    title: "Voice Cloning with Multi-Announcer Support",
    supervisor: "Prof. Hossein Sameti",
  },
  links: {
    github: "https://github.com/ahmadrkh",
    linkedin: "https://linkedin.com/in/ahmadrkh",
  },

  bio: [
    "I am a computer engineer with research interests in computer vision, deep learning, and statistical machine learning. I studied Computer Engineering at Sharif University of Technology, where I worked on multi-camera 3D perception for autonomous vehicles under the supervision of Prof. Shohreh Kasaei, and completed my bachelor's project on multi-speaker voice cloning under Prof. Hossein Sameti.",
    "Across these projects I have built end-to-end pipelines — from data processing and geometric vision to fine-tuning large pretrained models — and I care about understanding methods from first principles. Alongside research, I have served as a teaching assistant for seven courses across eleven terms and spent a year and a half as a front-end engineer shipping production software.",
  ],

  interests: [
    "3D Computer Vision & Scene Understanding",
    "Deep Learning for Perception",
    "Speech Synthesis & Voice Cloning",
    "Statistical Machine Learning",
  ],

  education: [
    {
      title: "B.Sc. in Computer Engineering",
      org: "Sharif University of Technology",
      location: "Tehran, Iran",
      period: "Oct 2020 – Mar 2026",
    },
  ] satisfies Entry[],

  coursework: [
    "Engineering Probability & Statistics",
    "Data Structures & Algorithms",
    "Design of Algorithms",
    "Fundamental 3D Computer Vision",
    "Numerical Computation",
    "Computer Simulation",
    "Signals & Systems",
    "Systems Analysis & Design",
  ],

  research: [
    {
      title: "Multi-Camera 3D Perception for Autonomous Vehicles",
      role: "Research project, supervised by Prof. Shohreh Kasaei",
      org: "Sharif University of Technology",
      period: "2024",
      bullets: [
        "Built a perception pipeline that stitches rear, left and right camera streams into a panoramic view of the vehicle's surroundings using SIFT feature matching, iterative homography estimation, and EWMA smoothing to suppress drift across sequential frames.",
        "Estimated depth from the stitched panoramas with learned monocular models (Monodepth2, PanoDepth) and validated the pipeline on nuScenes, Oxford RobotCar, and CARLA simulator data.",
        "Benchmarked the DeepInteraction model for depth estimation and 3D object detection, analysing robustness and documenting methodology, results, and limitations in a technical report.",
      ],
      tags: ["PyTorch", "OpenCV", "nuScenes-devkit", "CARLA"],
      links: [{ label: "Code", href: "https://github.com/ahmadrkh/FCV-project" }],
    },
    {
      title: "Voice Cloning with Multi-Announcer Support",
      role: "Bachelor's project, supervised by Prof. Hossein Sameti",
      org: "Sharif University of Technology",
      period: "2025 – 2026",
      bullets: [
        "Fine-tuned the Chatterbox multilingual text-to-speech model on a curated corpus of professional radio-announcer recordings to synthesise broadcast-quality speech.",
        "Targeted zero-shot voice cloning that preserves a speaker's prosody and pronunciation, reducing output discrepancies for continuous-broadcast applications.",
      ],
      tags: ["PyTorch", "torchaudio", "Hugging Face", "TTS"],
    },
  ] satisfies Entry[],

  projects: [
    {
      title: "Stereo Vision: Depth from Rectified Image Pairs",
      context: "Computer Vision coursework",
      summary:
        "A from-scratch stereo matching pipeline — SAD/SSD block matching, cost-volume construction, and disparity-to-depth conversion — written without OpenCV's built-in stereo solvers to study the algorithm in depth.",
      tags: ["Python", "NumPy", "OpenCV"],
      links: [{ label: "Code", href: "https://github.com/ahmadrkh/Stereo-Vision" }],
    },
    {
      title: "Numerical Methods in Python",
      context: "Teaching material, Numerical Computation",
      year: "2023",
      summary:
        "A series of Jupyter notebooks implementing core numerical methods in Python, used by students as the course's reference implementation guide.",
      tags: ["Python", "NumPy", "Jupyter"],
    },
    {
      title: "JobTrack",
      context: "Independent engineering project",
      year: "2025",
      summary:
        "A full-stack Kanban application for tracking applications across six pipeline stages, with optimistic drag-and-drop updates, a typed REST API, and CI/CD through GitHub Actions.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      links: [
        { label: "Live", href: "https://jobtrack-ahmadrkh.vercel.app" },
        { label: "Code", href: "https://github.com/ahmadrkh/jobtrack" },
      ],
    },
  ] satisfies Project[],

  teaching: [
    {
      course: "Scientific and Technical Presentation",
      role: "Teaching Assistant",
      instructor: "Prof. Shohreh Kasaei",
      terms: ["Fall 2024", "Spring 2025", "Fall 2025"],
      bullets: ["Advised students on infographic and user-manual design; graded assignments."],
    },
    {
      course: "Web Programming",
      role: "Product Owner, Course Project",
      instructor: "Dr. Poursoltani, Dr. Abrishami",
      terms: ["Spring 2025", "Fall 2025"],
      bullets: ["Defined features and sprint tasks for student teams and ran weekly sprint reviews."],
    },
    {
      course: "Software Engineering",
      role: "Teaching Assistant",
      instructor: "Dr. Rivadeh",
      terms: ["Spring 2025"],
      bullets: ["Designed a quiz, proposed final-exam questions, and graded the final examination."],
    },
    {
      course: "Signals and Systems",
      role: "Teaching Assistant",
      instructor: "Prof. Hossein Sameti",
      terms: ["Fall 2024"],
      bullets: ["Designed and graded a practical programming assignment."],
    },
    {
      course: "Basic Programming",
      role: "Teaching Assistant",
      instructor: "Dr. Arminpour",
      terms: ["Spring 2024"],
      bullets: ["Designed assignments on functional programming and file handling and the course project; invigilated examinations."],
    },
    {
      course: "Probability and Statistics",
      role: "Teaching Assistant",
      instructor: "Dr. Najafi",
      terms: ["Fall 2023"],
      bullets: ["Designed and graded quizzes."],
    },
    {
      course: "Numerical Computation",
      role: "Teaching Assistant",
      instructor: "Dr. Hossein Ghorban",
      terms: ["Spring 2023", "Fall 2023"],
      bullets: ["Authored the Python implementation guide and designed and graded coding assignments."],
    },
  ] satisfies TeachingEntry[],

  experience: [
    {
      title: "Front-End Developer",
      org: "Kafshbaf",
      period: "Mar 2025 – Aug 2025",
      bullets: [
        "Built pages of a bilingual B2B marketplace connecting buyers with suppliers for bulk orders, in a project supervised by Dr. Mohsen Ansari (Sharif University of Technology).",
        "Collaborated closely with back-end and DevOps engineers in an agile team.",
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    },
    {
      title: "Front-End Developer (Intern → Junior)",
      org: "Avan Holding (Adowing)",
      period: "Mar 2024 – Mar 2025",
      bullets: [
        "Developed an internal employee platform with profile pages and project-management features, including task tracking and time logging.",
      ],
      tags: ["Next.js", "TypeScript", "Redux", "Tailwind CSS"],
    },
  ] satisfies Entry[],

  service: [
    {
      title: "Rasta Summer School",
      role: "Workshop staff and lead",
      period: "2022 – 2024",
      bullets: [
        "Taught advanced topics to high-school students through gamified, problem-solving workshops.",
        "Head of Game Theory Workshop (2024) · Co-Head of Blockchain Workshop (2023) · Algorithms Workshop Staff (2022).",
      ],
    },
    {
      title: "Winter Seminar Series (WSS), Sharif University of Technology",
      role: "Technical and executive staff",
      period: "2023 – 2024",
      bullets: ["Helped organise and deliver a technical seminar series for students and professionals."],
    },
  ] satisfies Entry[],

  skills: [
    { group: "Machine Learning", items: ["PyTorch", "scikit-learn", "Hugging Face", "torchaudio"] },
    { group: "Vision & Data", items: ["OpenCV", "NumPy", "Pandas", "Matplotlib", "nuScenes-devkit"] },
    { group: "Languages", items: ["Python", "C", "Java", "R", "SQL", "TypeScript"] },
    { group: "Tools", items: ["Git", "Linux", "Jupyter", "LaTeX", "Next.js / React"] },
  ],

  languages: [
    { name: "Persian", level: "Native" },
    { name: "English", level: "TOEFL iBT 88 (R 25 · L 21 · S 21 · W 21), Dec 2025" },
  ],

  references: [
    {
      name: "Prof. Shohreh Kasaei",
      title: "Professor, Department of Computer Engineering; Director, Image Processing Laboratory",
      org: "Sharif University of Technology",
      relation: "Supervisor — 3D computer vision project",
    },
    {
      name: "Dr. Mohsen Ansari",
      title: "Assistant Professor, Department of Computer Engineering; Director, Cyber-Physical Systems Laboratory",
      org: "Sharif University of Technology",
      relation: "Supervisor — industrial web development project",
    },
    {
      name: "Dr. Sepideh Safari",
      title: "Lecturer, Department of Computer Engineering; Senior Postdoctoral Researcher, IPM",
      org: "Sharif University of Technology",
      relation: "Supervisor — industrial web development project",
    },
  ],
};

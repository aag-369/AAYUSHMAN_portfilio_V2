import { Shield, Atom, Brain, Satellite, Eye, Activity } from "lucide-react";

export type Status = "IN PROGRESS" | "COMPLETED";

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  accentColor: string;
  icon: any;
  domain: string;
  status: Status;
  featured?: boolean;
}


export const projects: Project[] = [
  {
    title: "Metasploitable Vulnerability Assessment",
    subtitle: "Cyber Offense Framework",
    description: "Executed a comprehensive Black Box penetration test against a Metasploitable 2 environment. Utilized advanced industry tools, including sqlmap and Burp Suite, to identify, exploit, and document critical web and network layer vulnerabilities.",
    tags: ["Black Box Testing", "sqlmap", "Burp Suite", "Metasploitable 2", "Penetration Testing"],
    accentColor: "cyber", // #10B981
    icon: Shield,
    domain: "CYBERSECURITY",
    status: "COMPLETED"
  },
  {
    title: "Fusion Gate",
    subtitle: "Quantum-Safe Anomaly Detection",
    description: "Developing a framework for Industrial IoT utilizing a GRU model and Qiskit to monitor Quantum Bit Error Rate (QBER) and dynamically switch between cryptographic algorithms based on channel integrity.",
    tags: ["Qiskit", "GRU Model", "QBER", "Industrial IoT", "Quantum Cryptography"],
    accentColor: "quantum", // #00FFFF
    icon: Atom,
    domain: "QUANTUM · IOT",
    status: "IN PROGRESS",
    featured: true
  },
  {
    title: "Quantum Teleportation & Satellite Classification",
    subtitle: "Quantum Vision Protocol",
    description: "Engineered quantum teleportation pipelines utilizing Qiskit and developed a satellite image classification architecture leveraging quantum computing principles for enhanced pattern recognition.",
    tags: ["Qiskit", "Quantum Teleportation", "Satellite Imagery", "Quantum ML", "Bell States"],
    accentColor: "neural", // #A855F7
    icon: Satellite,
    domain: "QUANTUM · VISION",
    status: "COMPLETED"
  },
  {
    title: "VisiReport AI",
    subtitle: "Autonomous PCBA Inspection",
    description: "Building a deep learning framework for the autonomous inspection of medical Printed Circuit Board Assemblies (PCBA), handling full architecture design and model training for defect detection.",
    tags: ["Deep Learning", "PCBA Inspection", "Computer Vision", "Medical Imaging", "PyTorch"],
    accentColor: "neural",
    icon: Eye,
    domain: "DEEP LEARNING · MED-TECH",
    status: "IN PROGRESS"
  },
  {
    title: "Medical Diagnostic Models",
    subtitle: "Multiclass Neural Classification",
    description: "Developed and trained high-accuracy multiclass classification models for Brain Tumour Detection (4 classes, 98.2% accuracy), Bone Fractures (10 classes), and Liver Cancer detection.",
    tags: ["Brain Tumour Detection", "Bone Fractures", "Liver Cancer", "Multiclass Classification", "CNN"],
    accentColor: "cyber",
    icon: Activity,
    domain: "AI · MEDICAL",
    status: "COMPLETED"
  }
];

export const experience = [
  {
    title: "Cyber Security Engineer Intern",
    company: "Mindenious",
    dates: "Nov 2025 — Jan 2026",
    location: "Remote",
    accent: "cyber",
    badge: "CYBERSECURITY",
    bullets: [
      "Conducted 'Black Box' vulnerability assessments against Metasploitable 2 environments",
      "Identified, analyzed, and documented critical security flaws across attack surfaces",
      "Utilized sqlmap and Burp Suite for network and application layer assessments"
    ]
  },
  {
    title: "Chairperson",
    company: "IEEE GRSS SRM Student Chapter",
    dates: "Aug 2024 — Feb 2025",
    location: "Chennai, TN",
    accent: "quantum",
    badge: "LEADERSHIP · IEEE",
    bullets: [
      "Supervised and managed entire technical and non-technical chapter team",
      "Led challenging projects and research papers under NASA's Impact Team"
    ]
  },
  {
    title: "President",
    company: "Colossal",
    dates: "Jan 2024 — Jan 2025",
    location: "Chennai, TN",
    accent: "neural",
    badge: "LEADERSHIP · EDITORIAL",
    bullets: [
      "Managed the Newsletter of the Department of Computational Intelligence at SRMIST"
    ]
  },
  {
    title: "AR/VR Domain Member",
    company: "CINTEL's Next Gen AI",
    dates: "Aug 2023 — Jul 2024",
    location: "Chennai, TN",
    accent: "neural",
    badge: "AR/VR · XR",
    bullets: [
      "Explored AR/VR domains, learning C#, Unity, 3D game development",
      "Researched evolution of Mixed Reality systems"
    ]
  },
  {
    title: "Corporate Member",
    company: "DSA Astrophilia",
    dates: "Sep 2023 — Apr 2024",
    location: "Chennai, TN",
    accent: "quantum",
    badge: "ASTROPHYSICS · EVENTS",
    bullets: [
      "Organized events on astrophysics and stargazing for SRM students"
    ]
  }
];

export const certifications = [
  "UI/UX Designing — Feelpixel",
  "Neures 2.0 — DS Community, SRM",
  "Advanced Python Programming — 1M1B",
  "Creators of Metaverse — 1M1B",
  "AI Flux - Computer Vision",
  "Object Oriented Programming in C++",
  "ML with Python — IBM",
  "CodeNex Hackathon — Participant",
  "Quantum Computing Conclave",
  "Disaster Risk Monitoring — NVIDIA",
  "Cyber Security Internship — Mindenious",
  "Cyber Security Training — Certification"
];

export const education = [
  {
    institution: "SRM Institute of Science & Technology",
    degree: "B.Tech CSE with specialization in AI & ML",
    date: "Expected May 2027",
    location: "Chennai, TN",
    coursework: ["Quantum Mechanics", "Deep Learning", "Network Security"],
    accent: "quantum-neural"
  },
  {
    institution: "Delhi Public School, Siliguri",
    degree: "Higher Secondary — PCM + Computer Science",
    date: "April 2023",
    location: "Siliguri, WB",
    coursework: [],
    accent: "cyber"
  },
  {
    institution: "Auxilium Convent School, Siliguri",
    degree: "Secondary School Certificate (SSC)",
    date: "March 2021",
    location: "Siliguri, WB",
    coursework: [],
    accent: "neural"
  }
];

export const programmingLanguages = [
  { name: "Python", color: "cyan" },
  { name: "C", color: "green" },
  { name: "C++", color: "emerald" },
  { name: "Qiskit DSL", color: "purple" },
  { name: "MATLAB", color: "orange" },
  { name: "C#", color: "blue" }
];

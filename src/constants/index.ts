import { Code, Palette, Zap, BrainCog } from "lucide-react";
export const projects = [
  {
    title: "Real-Time motion Transfer Using FOMM",
    description:
      "AI-powered interactive system capable of real-time animation, with a robust pipeline for animating still images with real-time input, ensuring high performance and accuracy.",
    tech: ["Python", "TensorFlow.js", "OpenCv", "GAN"],
    color: "from-purple-500 to-pink-500",
    link: "https://github.com/thisme8/Motion-Transfer-Using-FOMM",
  },
  {
    title: "Hariyo Paila ",
    description:
      " MERN stack-based , small-scale carbon credit exchange platform inspired by the Kyoto Protocol",
    tech: ["Node.js", "React.js", "RAG chatbot"],
    color: "from-blue-500 to-cyan-500",
    link: "https://github.com/hcoe-sidewinder/hackathon",
  },
  {
    title: "Region-Based Crop Yield Prediction using LSTM",
    description:
      "Machine learning-based system for predicting crop yield based on real-time regional data.",
    tech: ["Python-Flask ", "LSTM", "Naive-Bayes Classifier", "Leaflet.js"],
    color: "from-green-500 to-teal-500",
    link: "https://github.com/thisme8/Crop-Yield-Prediction-repo",
  },
  {
    title: "SANDUK - A Family Health Vault",
    description:
      "Machine learning-based system for predicting crop yield based on real-time regional data.",
    tech: [
      "React Native",
      "D3.js",
      "Linear Regression",
      "Python",
      "RAG chatbot",
    ],
    color: "from-yellow-500 to-yellow-50",

    link: "https://github.com/hcoe-sidewinder/sanduk",
  },
];

export const skills = [
  { name: "Frontend ", icon: Code, level: 80 },
  { name: "UI/UX Design", icon: Palette, level: 87 },
  { name: "Backend", icon: BrainCog, level: 65 },
  { name: "Performance", icon: Zap, level: 82 },
];

export const certificates = [
  {
    id: 1,
    title: "Flutter Training Course",
    provider: "DataCamp",
    date: "July 2023",
    category: "frontend",
    image: "/flutter.jpg?height=300&width=400",
    description: "Comprehensive Flutter course for mobile development",
    skills: ["Flutter", "Dart"],

    color: "from-purple-500 to-pink-500",
  },

  {
    id: 1,
    title: "Understanding Cloud Computing",
    provider: "DataCamp",
    date: "July 2023",
    category: "cloud",
    image: "/certificate-2.pdf?height=300&width=400",
    description: "Comprehensive Flutter course for mobile development",
    skills: ["AWS", "Cloud"],

    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "MERN Stack Training",
    provider: "Cloud Native Computing Foundation",
    date: "July 2024",
    category: "fullstack",
    image: "/mern.jpg?height=300&width=400",
    description: "Complete full-stack development with modern frameworks",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 3,
    title: "Intermediate SQL",
    provider: "DataCamp",
    date: "May 2025",
    category: "database",
    pdf: "/certificate.pdf?height=300&width=400",
    description: "Intermediate Level Sql from DataCamp",
    skills: ["SQL", "PostGreSQL"],
    color: "from-yellow-500 to-orange-500",
  },
];

export const categories = [
  { id: "all", name: "All Certificates", count: certificates.length },
  {
    id: "frontend",
    name: "Frontend",
    count: certificates.filter((c) => c.category === "frontend").length,
  },
  {
    id: "cloud",
    name: "Cloud",
    count: certificates.filter((c) => c.category === "cloud").length,
  },
  {
    id: "database",
    name: "Database",
    count: certificates.filter((c) => c.category === "database").length,
  },
  {
    id: "fullstack",
    name: "Full-Stack",
    count: certificates.filter((c) => c.category === "fullstack").length,
  },
];

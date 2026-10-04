export const roleConfigs = {
  sde: {
    id: "sde",
    label: "SDE / Full Stack Developer",
    shortLabel: "SDE / Full Stack",
    badge: "SDE / Full Stack",
    heroTitle: "Software Engineer & Full Stack Developer",
    heroSubtitle: "React · Node.js · Express.js · REST APIs · PostgreSQL",
    heroDescription: "I build full-stack web applications with responsive React interfaces, Node.js and Express.js backends, REST APIs, and SQL databases. I focus on writing clean, maintainable code and applying strong fundamentals in data structures, object-oriented programming, and software development.",
    aboutIntro: "I'm a recent computer science graduate interested in software engineering. I enjoy solving problems and building practical applications using JavaScript, backend technologies, APIs, and databases. I'm looking for opportunities to learn, contribute, and grow as a software engineer.",
    aboutFocus: "End-to-end software engineering with an emphasis on React interfaces, backend APIs, database modeling, and scalable system logic.",
    accentColor: "indigo",
    doorTheme: {
      color: "from-indigo-500/20 via-sky-500/10 to-indigo-900/40",
      border: "border-indigo-500/30 hover:border-indigo-400/60",
      glow: "hover:shadow-indigo-500/15",
      pill: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
      btn: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30",
      doorPanelBg: "bg-gradient-to-b from-[#121829] via-[#0d121f] to-[#090d16]",
      doorBorder: "border-indigo-500/30",
      accentGlow: "bg-indigo-500/20"
    },
    codeSnippet: {
      filename: "SystemService.js",
      language: "javascript",
      code: [
        "// Software Engineer - Backend Service & Data Layer",
        "class SystemService {",
        "  constructor(database) {",
        "    this.db = database;",
        "  }",
        "  async executeQuery(params) {",
        "    // Optimized relational data query & logic",
        "    return await this.db.query('SELECT * FROM records WHERE status = $1', [params.status]);",
        "  }",
        "}"
      ]
    },
    resumeUrl: "https://ap.wps.com/l/cbCaecHPOtOwKfq0",
    resumeBtnLabel: "View Resume"
  },
  fullstack: {
    id: "fullstack",
    label: "Full Stack Developer",
    shortLabel: "Full Stack",
    badge: "Full Stack",
    heroTitle: "Full Stack Developer",
    heroSubtitle: "React & Node.js | REST APIs & Interactive Web Apps",
    heroDescription: "I build end-to-end practical web applications, combining responsive frontend interfaces with robust backend APIs, databases, and authentication.",
    aboutIntro: "I'm a recent computer science graduate and full stack developer who enjoys building practical web applications. I work with frontend and backend technologies, REST APIs, and databases to create functional, user-friendly applications. I'm eager to contribute to real-world projects and continue growing as a developer.",
    aboutFocus: "Full-stack web architecture with an emphasis on React frontend interfaces, Node.js API services, and relational databases.",
    accentColor: "sky",
    doorTheme: {
      color: "from-sky-500/20 via-indigo-500/10 to-sky-900/40",
      border: "border-sky-500/30 hover:border-sky-400/60",
      glow: "hover:shadow-sky-500/15",
      pill: "bg-sky-500/10 text-sky-400 border-sky-500/30",
      btn: "bg-sky-600 hover:bg-sky-500 text-white shadow-sky-600/30",
      doorPanelBg: "bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-[#070b14]",
      doorBorder: "border-sky-500/30",
      accentGlow: "bg-sky-500/20"
    },
    codeSnippet: {
      filename: "FullStackApp.jsx",
      language: "javascript",
      code: [
        "// Full Stack Developer - End-to-End Application",
        "export default function Dashboard() {",
        "  const [items, setItems] = useState([]);",
        "  useEffect(() => {",
        "    fetch('/api/v1/data')",
        "      .then(res => res.json())",
        "      .then(data => setItems(data));",
        "  }, []);",
        "  return <DataGrid items={items} onUpdate={refresh} />;",
        "}"
      ]
    },
    resumeUrl: "https://ap.wps.com/l/cbCaepVB2q3nhV6b",
    resumeBtnLabel: "Download / View Full Stack Resume"
  },
  devops: {
    id: "devops",
    label: "DevOps Engineer",
    shortLabel: "DevOps",
    badge: "DevOps",
    heroTitle: "DevOps Engineer",
    heroSubtitle: "CI/CD Automation | Containerization & Cloud Workflows",
    heroDescription: "I configure automated deployment pipelines, containerize applications with Docker, and manage infrastructure workflows for reliable software delivery.",
    aboutIntro: "I'm a recent computer science graduate interested in DevOps, automation, and deployment. I've explored tools and workflows for containerization, CI/CD, monitoring, and application deployment through hands-on projects. I'm looking for opportunities to strengthen my skills and contribute to reliable software delivery.",
    aboutFocus: "Infrastructure automation with an emphasis on Docker containerization, CI/CD pipelines, and Linux environment management.",
    accentColor: "emerald",
    doorTheme: {
      color: "from-emerald-500/20 via-teal-500/10 to-emerald-900/40",
      border: "border-emerald-500/30 hover:border-emerald-400/60",
      glow: "hover:shadow-emerald-500/15",
      pill: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      btn: "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30",
      doorPanelBg: "bg-gradient-to-b from-[#0f1f1d] via-[#0b1716] to-[#08100f]",
      doorBorder: "border-emerald-500/30",
      accentGlow: "bg-emerald-500/20"
    },
    codeSnippet: {
      filename: "docker-compose.yml",
      language: "yaml",
      code: [
        "# DevOps Infrastructure & Multi-Container Setup",
        "version: '3.8'",
        "services:",
        "  app:",
        "    build: .",
        "    ports: [\"3000:3000\"]",
        "    environment:",
        "      - NODE_ENV=production",
        "  postgres:",
        "    image: postgres:16-alpine",
        "    volumes: [\"pgdata:/var/lib/postgresql/data\"]"
      ]
    },
    resumeUrl: "https://ap.wps.com/l/cbCaet6vebjR7Z9L",
    resumeBtnLabel: "Download / View DevOps Resume"
  }
};

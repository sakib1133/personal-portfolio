export const roleExperience = {
  sde: [
    {
      id: "exp-sde-personal-projects",
      period: "2025–2026",
      role: "PROJECT EXPERIENCE",
      organization: "Independent Software Developer | Personal Projects",
      bullets: [
        "Built full-stack web applications using React, Node.js, Express.js, and SQL databases.",
        "Developed REST APIs, implemented authentication, and integrated database operations.",
        "Tested and deployed personal projects while managing source code using Git and GitHub."
      ]
    }
  ],
  fullstack: [],
  devops: [
    {
      id: "exp-devops-personal-projects",
      period: "2025–2026",
      role: "PROJECT EXPERIENCE",
      organization: "Independent DevOps Engineer | Personal Projects",
      bullets: [
        "Configured Docker-based environments to containerize and run full-stack applications.",
        "Implemented monitoring and observability using Prometheus, Grafana, and Node Exporter.",
        "Worked with CI/CD workflows, Git, and GitHub to manage source code, automate builds, and support application deployment."
      ]
    }
  ]
};

roleExperience.sde = [...roleExperience.sde, ...roleExperience.fullstack];

// Fallback compatibility
export const experienceData = roleExperience.sde;

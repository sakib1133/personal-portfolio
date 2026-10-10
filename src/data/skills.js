export const roleSkills = {
  sde: [
    {
      category: "Languages",
      description: "Core software development languages",
      skills: ["C++", "JavaScript (ES6+)"]
    },
    {
      category: "Frontend",
      description: "Responsive UI and modern frontend development",
      skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS"]
    },
    {
      category: "Backend & APIs",
      description: "Server-side logic and API development",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"]
    },
    {
      category: "Database",
      description: "Relational data modeling and persistence",
      skills: ["PostgreSQL", "SQLite", "Prisma ORM"]
    },
    {
      category: "Core Concepts",
      description: "Computer science and application fundamentals",
      skills: ["Data Structures & Algorithms", "OOP", "DBMS", "SDLC", "Agile", "API Security"]
    },
    {
      category: "Development Tools",
      description: "Tooling for development and API workflow",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Fetch/Axios", "CRUD", "JSON APIs"]
    },
    {
      category: "DevOps",
      description: "Containerization, delivery, and hosting platforms",
      skills: ["Docker", "CI/CD", "Render", "Vercel"]
    }
  ],
  fullstack: [
    {
      category: "Languages",
      description: "Core software development languages",
      skills: ["C++", "JavaScript (ES6+)"]
    },
    {
      category: "Frontend",
      description: "Responsive UI and modern frontend development",
      skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS"]
    },
    {
      category: "Backend & APIs",
      description: "Server-side logic and API development",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"]
    },
    {
      category: "Database",
      description: "Relational data modeling and persistence",
      skills: ["PostgreSQL", "SQLite", "Prisma ORM"]
    },
    {
      category: "Core Concepts",
      description: "Computer science and application fundamentals",
      skills: ["Data Structures & Algorithms", "OOP", "DBMS", "SDLC", "Agile", "API Security"]
    },
    {
      category: "Development Tools",
      description: "Tooling for development and API workflow",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Fetch/Axios", "CRUD", "JSON APIs"]
    },
    {
      category: "DevOps",
      description: "Containerization, delivery, and hosting platforms",
      skills: ["Docker", "CI/CD", "Render", "Vercel"]
    }
  ],
  devops: [
    {
      category: "Containerization",
      description: "Application packaging & multi-container environments",
      skills: ["Docker", "Docker Compose"]
    },
    {
      category: "CI/CD & Automation",
      description: "Continuous integration & automated delivery pipelines",
      skills: ["GitHub Actions", "Jenkins"]
    },
    {
      category: "Linux & Shell",
      description: "Operating system environments & automation scripts",
      skills: ["Linux / Ubuntu", "Bash Scripting"]
    },
    {
      category: "Deployment & Infrastructure",
      description: "Application deployment, hosting platforms, runtime configs & databases",
      skills: ["Render", "Vercel", "Dockerized Deployment", "PostgreSQL Administration", "Nginx Basics"]
    },
    {
      category: "Workflow & VCS",
      description: "Source code management & collaborative branching",
      skills: ["Git", "GitHub"]
    }
  ]
};

// Fallback compatibility
export const skillCategories = roleSkills.sde;

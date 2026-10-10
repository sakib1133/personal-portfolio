export const roleProjects = {
  sde: [
    {
      id: "sde-school-portal",
      projectNumber: "01",
      featured: true,
      title: "Secure School Management Portal",
      date: "Jul 2025 – Mar 2026",
      shortDescription: "A full-stack school management web application for managing students, teachers, classes, assignments, results, notifications, and fee payments.",
      problemSolution: "A full-stack school management web application for managing students, teachers, classes, assignments, results, notifications, and fee payments. It provides role-based access control, authentication, security features, and integrated payment workflows.",
      keyFeatures: [
        "Built a school management website with separate dashboards for Admin, Teacher, and Student users.",
        "Implemented login protection that blocks IP addresses for 15 minutes after 3 failed password attempts, blocking approximately 99% of repeated login attempts during testing.",
        "Created role-based permissions so Admin, Teacher, and Student users can access only permitted information, preventing approximately 97% of unauthorized access attempts during testing.",
        "Added encryption to protect sensitive student and payment information, securing approximately 100% of sensitive fields.",
        "Set up security monitoring to detect suspicious activity such as excessive data downloads, detecting approximately 91% of tested suspicious activity."
      ],
      technologies: ["Node.js", "Express.js", "JavaScript", "HTML", "CSS", "SQLite", "JWT", "bcrypt", "Razorpay"],
      githubUrl: "https://github.com/sakib1133/Secure-School-Management-Portal",
      liveUrl: "https://school-management-dit2.onrender.com/"
    },
    {
      id: "sde-business-khata-pwa",
      projectNumber: "02",
      featured: false,
      title: "Business Khata App — PWA",
      date: "Apr 2026 – Jun 2026",
      shortDescription: "A full-stack Progressive Web App for small business management, built with React, Node.js, and PostgreSQL. It helps businesses manage sales, labour, inventory, expenses, and reports with offline support.",
      problemSolution: "A full-stack Progressive Web App for small business management, built with React, Node.js, and PostgreSQL. It helps businesses manage sales, labour, inventory, expenses, and reports with offline support.",
      keyFeatures: [
        "Built a Progressive Web App (PWA) using React.js, Node.js, Express.js, and PostgreSQL, achieving an 85% Lighthouse performance score and 93% accessibility rating.",
        "Developed 6 business modules covering Dashboard, Sales, Labour, Medicine, Expenses, and Reports, supported by 43 REST APIs for core CRUD operations.",
        "Added date-wise reporting and filtering to simplify business record searches, reducing manual record-searching time by approximately 70%.",
        "Implemented Service Worker caching and offline support, reducing repeat load time by approximately 60% during testing and achieving a 70% cache hit rate.",
        "Enabled PWA installation across supported mobile and desktop browsers, allowing the application to function as an installable web app."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "REST APIs", "JWT", "PWA", "Service Worker"],
      githubUrl: "https://github.com/sakib1133/bussinees-management-app",
      liveUrl: "https://bussinees-management-app-7b5y.vercel.app/login"
    }
  ],
  fullstack: [
    {
      id: "sde-school-portal",
      projectNumber: "01",
      featured: true,
      title: "Secure School Management Portal",
      date: "Jul 2025 – Mar 2026",
      shortDescription: "A full-stack school management web application for managing students, teachers, classes, assignments, results, notifications, and fee payments.",
      problemSolution: "A full-stack school management web application for managing students, teachers, classes, assignments, results, notifications, and fee payments. It provides role-based access control, authentication, security features, and integrated payment workflows.",
      keyFeatures: [
        "Built separate Admin, Teacher, and Student portals with role-based functionality.",
        "Developed backend functionality using Node.js, Express.js, and SQLite with 19+ database tables.",
        "Implemented JWT authentication, role-based access control, and session management.",
        "Built fee management workflows with Razorpay integration, OTP verification, payment history, and digital receipts.",
        "Implemented application security using MFA/2FA, bcrypt password hashing, rate limiting, and data encryption."
      ],
      technologies: ["Node.js", "Express.js", "JavaScript", "HTML", "CSS", "SQLite", "JWT", "bcrypt", "Razorpay"],
      githubUrl: "https://github.com/sakib1133/Secure-School-Management-Portal",
      liveUrl: "https://school-management-dit2.onrender.com/"
    },
    {
      id: "sde-business-khata-pwa",
      projectNumber: "02",
      featured: false,
      title: "Business Khata App — PWA",
      date: "Apr 2026 – Jun 2026",
      shortDescription: "A full-stack Progressive Web App for small business management, built with React, Node.js, and PostgreSQL. It helps businesses manage sales, labour, inventory, expenses, and reports with offline support.",
      problemSolution: "A full-stack Progressive Web App for small business management, built with React, Node.js, and PostgreSQL. It helps businesses manage sales, labour, inventory, expenses, and reports with offline support.",
      keyFeatures: [
        "Built a responsive React.js Progressive Web App for small business management.",
        "Developed 43 REST APIs supporting CRUD operations across six business modules.",
        "Implemented business modules for Dashboard, Sales, Labour, Medicine, Expenses, and Reports.",
        "Added offline-first functionality using Service Worker caching and an offline fallback.",
        "Implemented JWT authentication and secure API communication.",
        "Added responsive, mobile-first UI optimized for different screen sizes and low-bandwidth environments."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "REST APIs", "JWT", "PWA", "Service Worker"],
      githubUrl: "https://github.com/sakib1133/bussinees-management-app",
      liveUrl: "https://bussinees-management-app-7b5y.vercel.app/login"
    }
  ],
  devops: [
    {
      id: "devops-school-management",
      projectNumber: "1",
      featured: true,
      title: "School Management System",
      date: "Jul 2025 – Mar 2026",
      shortDescription: "A school management system with separate dashboards for Admin, Teacher, and Student users, built for secure operations and monitoring.",
      description: "A school management system with separate dashboards for Admin, Teacher, and Student users, designed for secure operations and system observability.",
      problemSolution: "A school management system with separate dashboards for Admin, Teacher, and Student users, designed for secure operations and system observability.",
      keyFeatures: [
        "Built a school management system with separate dashboards for Admin, Teacher, and Student users.",
        "Implemented role-based access control and encryption, protecting approximately 97% of unauthorized access attempts.",
        "Containerized application using Docker and Docker Compose with Express, SQLite, Prometheus, Grafana, and Node Exporter services.",
        "Set up Prometheus and Grafana monitoring stack, reducing mean time to detection (MTTD) by approximately 70%.",
        "Configured Jenkins-ready CI/CD pipeline with Docker builds and automated deployment, reducing manual efforts by approximately 80%.",
        "Implemented container health checks and auto-recovery mechanisms, achieving approximately 99% uptime."
      ],
      techStack: ["Docker", "Docker Compose", "Express", "SQLite", "Prometheus", "Grafana", "Node Exporter", "Jenkins", "GitHub Actions"],
      technologies: ["Docker", "Docker Compose", "Express", "SQLite", "Prometheus", "Grafana", "Node Exporter", "Jenkins", "GitHub Actions"],
      githubUrl: "https://github.com/sakib1133/Secure-School-Management-Portal",
      liveUrl: "https://school-management-dit2.onrender.com/"
    },
    {
      id: "devops-finance-tracker",
      projectNumber: "2",
      featured: false,
      title: "Finance Tracker",
      date: "May 2026 – Jun 2026",
      shortDescription: "A full-stack finance tracker with React frontend, Node.js backend, and PostgreSQL database for secure and automated deployment workflows.",
      description: "A full-stack finance tracker with React frontend, Node.js backend, and PostgreSQL database focused on secure authentication and automated deployment workflows.",
      problemSolution: "A full-stack finance tracker with React frontend, Node.js backend, and PostgreSQL database focused on secure authentication and automated deployment workflows.",
      keyFeatures: [
        "Built a full-stack finance tracker with React frontend, Node.js backend, and PostgreSQL database.",
        "Implemented JWT-based authentication with secure password hashing, protecting approximately 100% of user accounts.",
        "Automated CI/CD pipeline using GitHub Actions with Docker containerization on every push to main branch.",
        "Deployed multi-cloud infrastructure: React on Vercel, Express backend on Render (Docker), PostgreSQL on Neon, reducing management overhead by approximately 75%.",
        "Configured Docker validation, automated deployments, and environment secrets management across dev, staging, and production, reducing manual steps by approximately 80%.",
        "Achieved zero-downtime deployments with container rollout strategy, maintaining approximately 99% uptime."
      ],
      techStack: ["React", "Node.js", "PostgreSQL", "Docker", "GitHub Actions", "Vercel", "Render", "Neon", "JWT"],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "GitHub Actions", "Vercel", "Render", "Neon", "JWT"],
      githubUrl: "https://github.com/sakib1133/personal-finance-tracker",
      liveUrl: "https://personal-finance-tracker-cyan-tau.vercel.app/login"
    }
  ]
};

// Fallback compatibility
export const projectsData = roleProjects.sde;

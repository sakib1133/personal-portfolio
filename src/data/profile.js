export const profileData = {
  name: "Mohd Sakib Malik",
  displayName: "Mohd Sakib Malik",
  logoName: "Sakib",
  primaryTitle: "Software Engineer",
  location: "Saharanpur, Uttar Pradesh, India – 247662",
  phone: "+91-7017759464",
  email: "sakibmalik5347@gmail.com",
  locationTag: "Saharanpur, Uttar Pradesh, India – 247662",
  heroDescription: "I build practical web applications with a focus on backend development, APIs, databases and deployment.",
  shortIntro: "I'm a recent computer science graduate interested in software engineering and building practical web applications.",
  aboutParagraphs: {
    sde: [
      "I'm a recent computer science graduate interested in software engineering. I enjoy solving problems and building practical applications using JavaScript, backend technologies, APIs, and databases. I'm looking for opportunities to learn, contribute, and grow as a software engineer.",
      "My technical work focuses on writing efficient algorithms, structuring modular backend APIs with Node.js and Express, designing relational schemas, and ensuring solid data integrity."
    ],
    fullstack: [
      "I'm a recent computer science graduate and full stack developer who enjoys building practical web applications. I work with frontend and backend technologies, REST APIs, and databases to create functional, user-friendly applications. I'm eager to contribute to real-world projects and continue growing as a developer.",
      "I build responsive, clean user interfaces with React and Tailwind CSS while developing secure, well-documented REST APIs and database layers on the backend."
    ],
    devops: [
      "I'm a recent computer science graduate interested in DevOps, automation, and deployment. I've explored tools and workflows for containerization, CI/CD, monitoring, and application deployment through hands-on projects. I'm looking for opportunities to strengthen my skills and contribute to reliable software delivery.",
      "My hands-on practice includes containerizing full-stack applications with Docker, building automated GitHub Actions CI/CD workflows, and managing deployment environments on Linux."
    ]
  },
  quickFacts: {
    sde: [
      { title: "Software Engineering", desc: "Problem solving, JavaScript, APIs & Data Structures" },
      { title: "Backend Systems", desc: "Node.js, Express.js & RESTful architecture" },
      { title: "Database Modeling", desc: "PostgreSQL, SQLite & Query optimization" }
    ],
    fullstack: [
      { title: "Frontend Architecture", desc: "React, Modern JavaScript, HTML5 & Tailwind CSS" },
      { title: "Backend & REST APIs", desc: "Node.js, Express.js & Authentication logic" },
      { title: "Database & ORM", desc: "PostgreSQL, SQLite & Prisma schema design" }
    ],
    devops: [
      { title: "Containerization", desc: "Docker, Docker Compose & Image optimization" },
      { title: "CI/CD Automation", desc: "GitHub Actions, automated test & build pipelines" },
      { title: "Systems & Linux", desc: "Linux environments, Bash scripting & Server management" }
    ]
  },
  links: {
    github: "https://github.com/sakib1133",
    linkedin: "https://www.linkedin.com/in/mohd-sakib-malik-97ab4a283/",
    leetcode: "https://leetcode.com/u/sakib_malik79/",
    email: "sakibmalik5347@gmail.com",
    phone: "+91-7017759464",
    location: "Saharanpur, Uttar Pradesh, India – 247662",
    sdeResume: "https://ap.wps.com/l/cbCaecHPOtOwKfq0",
    fullstackResume: "https://ap.wps.com/l/cbCaepVB2q3nhV6b",
    devopsResume: "https://ap.wps.com/l/cbCaet6vebjR7Z9L"
  }
};

profileData.aboutParagraphs.sde = [
  ...profileData.aboutParagraphs.sde,
  ...profileData.aboutParagraphs.fullstack
];
profileData.quickFacts.sde = [
  ...profileData.quickFacts.sde,
  ...profileData.quickFacts.fullstack.slice(1)
];

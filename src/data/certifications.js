export const roleCertifications = {
  sde: [
    {
      id: "hpe-software-engineering-job-simulation",
      title: "Hewlett Packard Enterprise – Software Engineering Job Simulation",
      issuer: "Forage",
      issuedDate: "June 2026",
      expiration: "No expiration",
      credentialId: "jv9DGg3KwAJzkciEG",
      skills: [
        "REST API & Web Services",
        "Quality Assurance Testing",
        "Cloud & Professional Skills",
        "Java & Spring Boot Development"
      ],
      credentialUrl: "https://www.theforage.com/completion-certificates/fgHAi6dLhpRsGKyyN/da2T3WZCbMAJD7bNB_fgHAi6dLhpRsGKyyN_6916d685f8a076de76ca00c5_1782376474036_completion_certificate.pdf"
    },
    {
      id: "jpmorganchase-software-engineering-job-simulation",
      title: "JPMorganChase – Software Engineering Job Simulation",
      issuer: "Forage",
      issuedDate: "June 2026",
      expiration: "No expiration",
      credentialId: "3XZ28a4tZtCX4Pkug",
      skills: [
        "Spring Framework",
        "REST APIs",
        "SQL Database",
        "Message Queuing"
      ],
      credentialUrl: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_6916d685f8a076de76ca00c5_1782208422805_completion_certificate.pdf"
    },
    {
      id: "tata-genai-powered-data-analytics-job-simulation",
      title: "Tata – GenAI Powered Data Analytics Job Simulation",
      issuer: "Forage",
      issuedDate: "November 2025",
      expiration: "No expiration",
      credentialId: "q72bCTevTAm7sX36q",
      skills: [
        "Predictive Analytics",
        "Exploratory Data Analysis",
        "Business Communications"
      ],
      credentialUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6916d685f8a076de76ca00c5_1763107815019_completion_certificate.pdf"
    }
  ],
  fullstack: [],
  devops: [
    {
      id: "datacom-cloud-job-simulation",
      title: "Datacom – Introduction to Cloud Job Simulation",
      issuer: "Forage",
      issuedDate: "July 2026",
      expiration: "No expiration",
      credentialId: "6a685012898071be9e1ef33f",
      skills: [
        "Cloud Computing",
        "Version Control (Git/GitHub)",
        "DevOps Fundamentals",
        "CI/CD Concepts"
      ],
      credentialUrl: "https://www.theforage.com/completion-certificates/gCW7Xki5Y3vNpBmnn/qsuRRyXDZ7Dj2QFx4_gCW7Xki5Y3vNpBmnn_6916d685f8a076de76ca00c5_1785221424113_completion_certificate.pdf"
    },
    {
      id: "cisco-introduction-to-cybersecurity",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      issuedDate: "September 2025",
      expiration: "No expiration",
      credentialId: "c7f22568-3064-4b28-94d8-5662358b621b",
      skills: [
        "Network Defense",
        "Cybersecurity Fundamentals",
        "Security Threat Analysis"
      ],
      credentialUrl: "https://drive.google.com/file/d/1uCrBL54VrTzKDqCNj97xgf-eGYPVHkmx/view"
    }
  ]
};

roleCertifications.fullstack = roleCertifications.sde;

// Fallback compatibility
export const certificationsData = roleCertifications.devops;

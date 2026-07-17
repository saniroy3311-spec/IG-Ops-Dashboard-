// InterviewSurge Ops Dashboard Controller

// ==========================================================================
// Seed Data Initialization
// ==========================================================================
const DEFAULT_CLIENTS = [
  {
    id: "client-1",
    name: "Saranya Krishnan",
    initials: "SK",
    color: "#f3f4f6",
    baseCvs: {
      "Sales Operations Manager": "saranya_salesops_v4_master.pdf",
      "Revenue Operations Director": "saranya_revops_v2_executive.pdf"
    },
    personas: ["Sales Operations Manager", "Revenue Operations Director"]
  },
  {
    id: "client-2",
    name: "Michael Chen",
    initials: "MC",
    color: "#f3f4f6",
    baseCvs: {
      "Staff Software Engineer": "mchen_backend_staff_2026.pdf",
      "Technical Product Manager": "mchen_tpm_v1.pdf"
    },
    personas: ["Staff Software Engineer", "Technical Product Manager"]
  },
  {
    id: "client-3",
    name: "Emily Rodriguez",
    initials: "ER",
    color: "#f3f4f6",
    baseCvs: {
      "Senior Product Designer": "erodriguez_ux_design.pdf",
      "Frontend Engineer": "erodriguez_frontend_v3.pdf"
    },
    personas: ["Senior Product Designer", "Frontend Engineer"]
  },
  {
    id: "client-4",
    name: "David Kojo",
    initials: "DK",
    color: "#f3f4f6",
    baseCvs: {
      "Growth Marketing Lead": "dkojo_growth_marketing.pdf",
      "Marketing Data Analyst": "dkojo_analytics.pdf"
    },
    personas: ["Growth Marketing Lead", "Marketing Data Analyst"]
  },
  {
    id: "client-5",
    name: "Sophia Al-Jamil",
    initials: "SA",
    color: "#f3f4f6",
    baseCvs: {
      "AI/ML Research Scientist": "saljamil_aiml_science.pdf",
      "Platform/DevOps Engineer": "saljamil_platform_devops.pdf"
    },
    personas: ["AI/ML Research Scientist", "Platform/DevOps Engineer"]
  }
];

const MOCK_JOBS_SEED = [
  // -------------------------------------------------------------
  // Client 1: Saranya Krishnan - Sales Operations Manager
  // -------------------------------------------------------------
  {
    id: "job-1-1",
    clientId: "client-1",
    persona: "Sales Operations Manager",
    company: "HackerOne",
    title: "Senior Sales Operations Manager",
    location: "Washington, DC",
    arrangement: "Remote",
    salaryMin: "$137k",
    salaryMax: "$175k",
    baseScore: 78,
    tailoredScore: 98,
    matchStrength: "Strong",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "Requires Greenhouse portal form filling.",
    keywords: ["low-latency", "Sales Operations", "Vendor Governance", "Cross-functional strategy"]
  },
  {
    id: "job-1-2",
    clientId: "client-1",
    persona: "Sales Operations Manager",
    company: "Capital One",
    title: "Business Manager, Sales Operations-International Acceptance",
    location: "Chicago, IL",
    arrangement: "Hybrid",
    salaryMin: "$150k",
    salaryMax: "$205k",
    baseScore: 72,
    tailoredScore: 96,
    matchStrength: "Strong",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "Top Company role. Client has high interest.",
    keywords: ["international payments", "Sales Ops", "Acceptance modeling"]
  },
  {
    id: "job-1-3",
    clientId: "client-1",
    persona: "Sales Operations Manager",
    company: "Tenstorrent",
    title: "Sr. Sales Operations Manager",
    location: "United States",
    arrangement: "Remote",
    salaryMin: "$100k",
    salaryMax: "$500k",
    baseScore: 67,
    tailoredScore: 92,
    matchStrength: "Possible",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "",
    keywords: ["AI Hardware", "Sales Pipeline Management", "Quota Settings"]
  },
  {
    id: "job-1-4",
    clientId: "client-1",
    persona: "Sales Operations Manager",
    company: "Ping Identity",
    title: "Sales Operations & Strategy Director",
    location: "United States",
    arrangement: "Remote",
    salaryMin: "$170k",
    salaryMax: "$220k",
    baseScore: 76,
    tailoredScore: 90,
    matchStrength: "Strong",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "Workday ATS portal.",
    keywords: ["SaaS Operations", "Annual Planning", "Commission Structures"]
  },
  {
    id: "job-1-5",
    clientId: "client-1",
    persona: "Sales Operations Manager",
    company: "Lockheed Martin",
    title: "Sales, Inventory, and Operations Planning (SIOP) Lead - Level 6",
    location: "Fort Worth, TX",
    arrangement: "On-site",
    salaryMin: "—",
    salaryMax: "—",
    baseScore: 68,
    tailoredScore: 86,
    matchStrength: "Possible",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "Requires security clearance questions validation.",
    keywords: ["SIOP", "Inventory forecasting", "Aviation programs"]
  },
  {
    id: "job-1-6",
    clientId: "client-1",
    persona: "Sales Operations Manager",
    company: "PetPlace",
    title: "Sales & Operations Leader",
    location: "New York, NY",
    arrangement: "Remote",
    salaryMin: "—",
    salaryMax: "—",
    baseScore: 63,
    tailoredScore: 85,
    matchStrength: "Possible",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "",
    keywords: ["e-commerce", "Sales analytics", "Team management"]
  },
  {
    id: "job-1-7",
    clientId: "client-1",
    persona: "Sales Operations Manager",
    company: "CyberForce Global",
    title: "Sales Operations Manager",
    location: "United States",
    arrangement: "Remote (hybrid if local)",
    salaryMin: "—",
    salaryMax: "—",
    baseScore: 56,
    tailoredScore: 84,
    matchStrength: "Possible",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "",
    keywords: ["Salesforce CRM", "Lead Routing", "Deal Desks"]
  },
  {
    id: "job-1-8",
    clientId: "client-1",
    persona: "Sales Operations Manager",
    company: "Cornerstone OnDemand",
    title: "Senior Director, Sales Operations",
    location: "United States",
    arrangement: "Remote",
    salaryMin: "$187k",
    salaryMax: "$299k",
    baseScore: 63,
    tailoredScore: 80,
    matchStrength: "Possible",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "High seniority role.",
    keywords: ["Sales Strategy", "SaaS Scaleup", "Compensation Plans"]
  },
  {
    id: "job-1-9",
    clientId: "client-1",
    persona: "Sales Operations Manager",
    company: "Hilton",
    title: "Director, Sales Strategy",
    location: "McLean, VA",
    arrangement: "Remote",
    salaryMin: "$120k",
    salaryMax: "$160k",
    baseScore: 76,
    tailoredScore: 93,
    matchStrength: "Strong",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "",
    keywords: ["Hospitality sales", "B2B partnerships", "Corporate pricing"]
  },
  {
    id: "job-1-10",
    clientId: "client-1",
    persona: "Sales Operations Manager",
    company: "Boston Scientific",
    title: "Senior Manager, Sales Compensation & Commercial Incentive Strategy, Urology",
    location: "Marlborough, MA",
    arrangement: "Hybrid",
    salaryMin: "$132k",
    salaryMax: "$250k",
    baseScore: 61,
    tailoredScore: 86,
    matchStrength: "Possible",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "",
    keywords: ["Commercial Incentives", "Medical Devices", "IC plans"]
  },
  {
    id: "job-1-11",
    clientId: "client-1",
    persona: "Sales Operations Manager",
    company: "Utz Brands, Inc.",
    title: "Sr. Manager, Sales Planning & Strategy",
    location: "Chicago, IL",
    arrangement: "Remote",
    salaryMin: "—",
    salaryMax: "—",
    baseScore: 72,
    tailoredScore: 85,
    matchStrength: "Strong",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "",
    keywords: ["Retail sales planning", "Distributor analytics", "Promotion models"]
  },
  {
    id: "job-1-12",
    clientId: "client-1",
    persona: "Sales Operations Manager",
    company: "SpaceX",
    title: "Sales Operations Manager (Enablement)",
    location: "Hawthorne, CA",
    arrangement: "On-site",
    salaryMin: "$120k",
    salaryMax: "$180k",
    baseScore: 70,
    tailoredScore: 90,
    matchStrength: "Strong",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "Requires SpaceX internal portal submission.",
    keywords: ["Commercial Space sales", "Enablement frameworks", "CRM migration"]
  },

  // -------------------------------------------------------------
  // Client 1: Saranya Krishnan - Revenue Operations Director
  // -------------------------------------------------------------
  {
    id: "job-1-13",
    clientId: "client-1",
    persona: "Revenue Operations Director",
    company: "Applied Systems",
    title: "Revenue Operations Director",
    location: "Chicago, IL",
    arrangement: "Hybrid",
    salaryMin: "$140k",
    salaryMax: "$190k",
    baseScore: 82,
    tailoredScore: 95,
    matchStrength: "Strong",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "",
    keywords: ["RevOps Engine", "Customer Lifecycle Data", "LTV optimization"]
  },
  {
    id: "job-1-14",
    clientId: "client-1",
    persona: "Revenue Operations Director",
    company: "Aircall",
    title: "Director, Revenue Operations",
    location: "New York, NY",
    arrangement: "Remote",
    salaryMin: "$160k",
    salaryMax: "$210k",
    baseScore: 80,
    tailoredScore: 94,
    matchStrength: "Strong",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "Lever ATS. Custom cover letter wanted.",
    keywords: ["GTM Tooling", "Intercom/Hubspot integrations", "SaaS pipeline"]
  },
  {
    id: "job-1-15",
    clientId: "client-1",
    persona: "Revenue Operations Director",
    company: "Mastercard",
    title: "Vice President, Revenue Operations",
    location: "New York, NY",
    arrangement: "On-site",
    salaryMin: "$220k",
    salaryMax: "$310k",
    baseScore: 78,
    tailoredScore: 95,
    matchStrength: "Strong",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "High importance enterprise account lead.",
    keywords: ["Global payment sales operations", "Strategic rev assurance"]
  },
  {
    id: "job-1-16",
    clientId: "client-1",
    persona: "Revenue Operations Director",
    company: "Level AI",
    title: "Revenue Operations Architect — GTM Systems Builder",
    location: "Mountain View, CA",
    arrangement: "Hybrid",
    salaryMin: "$130k",
    salaryMax: "$180k",
    baseScore: 79,
    tailoredScore: 91,
    matchStrength: "Strong",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "Early stage startup environment.",
    keywords: ["GTM Tech Stack", "Salesforce Apex", "API integrations"]
  },

  // -------------------------------------------------------------
  // Client 2: Michael Chen - Staff Software Engineer
  // -------------------------------------------------------------
  {
    id: "job-2-1",
    clientId: "client-2",
    persona: "Staff Software Engineer",
    company: "Anthropic",
    title: "Staff Software Engineer - Infrastructure",
    location: "San Francisco, CA",
    arrangement: "Hybrid",
    salaryMin: "$250k",
    salaryMax: "$380k",
    baseScore: 81,
    tailoredScore: 97,
    matchStrength: "Strong",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "Needs strong Distributed Systems background.",
    keywords: ["Kubernetes", "PyTorch infrastructure", "GPU scheduling"]
  },
  {
    id: "job-2-2",
    clientId: "client-2",
    persona: "Staff Software Engineer",
    company: "Ramp",
    title: "Staff Software Engineer (Backend)",
    location: "New York, NY",
    arrangement: "Hybrid",
    salaryMin: "$200k",
    salaryMax: "$290k",
    baseScore: 84,
    tailoredScore: 96,
    matchStrength: "Strong",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "Python / Elixir / PostgreSQL backend.",
    keywords: ["Microservices scalability", "Payment ledger consistency", "Idempotency keys"]
  },
  {
    id: "job-2-3",
    clientId: "client-2",
    persona: "Staff Software Engineer",
    company: "Stripe",
    title: "Staff Backend Engineer - Payments Core",
    location: "United States",
    arrangement: "Remote",
    salaryMin: "$220k",
    salaryMax: "$300k",
    baseScore: 78,
    tailoredScore: 93,
    matchStrength: "Strong",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "Stripe-specific CV tailored already.",
    keywords: ["Ruby on Rails", "Distributed ledgers", "SLA optimization"]
  },

  // -------------------------------------------------------------
  // Client 2: Michael Chen - Technical Product Manager
  // -------------------------------------------------------------
  {
    id: "job-2-4",
    clientId: "client-2",
    persona: "Technical Product Manager",
    company: "Square",
    title: "Technical Product Manager - Seller APIs",
    location: "San Francisco, CA",
    arrangement: "Hybrid",
    salaryMin: "$180k",
    salaryMax: "$240k",
    baseScore: 70,
    tailoredScore: 89,
    matchStrength: "Possible",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "Focus on API platform.",
    keywords: ["Developer platform strategy", "REST/GraphQL specifications"]
  },
  {
    id: "job-2-5",
    clientId: "client-2",
    persona: "Technical Product Manager",
    company: "Reputation",
    title: "Senior Technical Product Manager",
    location: "United States",
    arrangement: "Remote",
    salaryMin: "$150k",
    salaryMax: "$195k",
    baseScore: 68,
    tailoredScore: 88,
    matchStrength: "Possible",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "",
    keywords: ["Data pipelines", "B2B SaaS product specs", "NLP features"]
  },

  // -------------------------------------------------------------
  // Client 3: Emily Rodriguez - Senior Product Designer
  // -------------------------------------------------------------
  {
    id: "job-3-1",
    clientId: "client-3",
    persona: "Senior Product Designer",
    company: "Figma",
    title: "Senior Product Designer - Editor Core",
    location: "San Francisco, CA",
    arrangement: "Hybrid",
    salaryMin: "$190k",
    salaryMax: "$260k",
    baseScore: 88,
    tailoredScore: 98,
    matchStrength: "Strong",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "Figma portfolio link is crucial.",
    keywords: ["Vector rendering UX", "Design systems alignment", "Interactive prototypes"]
  },
  {
    id: "job-3-2",
    clientId: "client-3",
    persona: "Senior Product Designer",
    company: "Linear",
    title: "Senior Product Designer",
    location: "Europe / Remote",
    arrangement: "Remote",
    salaryMin: "$150k",
    salaryMax: "$220k",
    baseScore: 82,
    tailoredScore: 95,
    matchStrength: "Strong",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "Requires high-aesthetic attention.",
    keywords: ["Keyboard-driven UX", "Minimalist visual systems", "Dark-mode optimization"]
  },

  // -------------------------------------------------------------
  // Client 3: Emily Rodriguez - Frontend Engineer
  // -------------------------------------------------------------
  {
    id: "job-3-3",
    clientId: "client-3",
    persona: "Frontend Engineer",
    company: "Vercel",
    title: "Senior Frontend Engineer - Next.js DX",
    location: "United States",
    arrangement: "Remote",
    salaryMin: "$170k",
    salaryMax: "$230k",
    baseScore: 85,
    tailoredScore: 97,
    matchStrength: "Strong",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "",
    keywords: ["Next.js React Server Components", "DX benchmarking", "Web vitals"]
  },
  {
    id: "job-3-4",
    clientId: "client-3",
    persona: "Frontend Engineer",
    company: "Ramp",
    title: "Frontend Engineer - Growth Team",
    location: "New York, NY",
    arrangement: "Hybrid",
    salaryMin: "$150k",
    salaryMax: "$210k",
    baseScore: 78,
    tailoredScore: 91,
    matchStrength: "Strong",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "",
    keywords: ["Responsive dashboards", "Tailwind CSS", "A/B testing instrumentation"]
  },

  // -------------------------------------------------------------
  // Client 4: David Kojo - Growth Marketing Lead
  // -------------------------------------------------------------
  {
    id: "job-4-1",
    clientId: "client-4",
    persona: "Growth Marketing Lead",
    company: "Kuno Creative",
    title: "Senior Revenue Operations Strategist",
    location: "United States",
    arrangement: "Remote",
    salaryMin: "$90k",
    salaryMax: "$130k",
    baseScore: 64,
    tailoredScore: 84,
    matchStrength: "Possible",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "",
    keywords: ["Hubspot automation", "Inbound marketing", "Lead scoring"]
  },
  {
    id: "job-4-2",
    clientId: "client-4",
    persona: "Growth Marketing Lead",
    company: "GC AI",
    title: "Sales Operations Manager",
    location: "San Francisco, CA",
    arrangement: "Hybrid",
    salaryMin: "$110k",
    salaryMax: "$150k",
    baseScore: 78,
    tailoredScore: 92,
    matchStrength: "Strong",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "Fast growing AI tool vendor.",
    keywords: ["PLG growth funnel", "Subscription metrics", "Churn modeling"]
  },

  // -------------------------------------------------------------
  // Client 4: David Kojo - Marketing Data Analyst
  // -------------------------------------------------------------
  {
    id: "job-4-3",
    clientId: "client-4",
    persona: "Marketing Data Analyst",
    company: "UTTR",
    title: "Revenue Operations Manager",
    location: "Austin, TX",
    arrangement: "Hybrid",
    salaryMin: "$95k",
    salaryMax: "$140k",
    baseScore: 71,
    tailoredScore: 88,
    matchStrength: "Possible",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "",
    keywords: ["SQL Analytics", "Looker dashboards", "Attribution modelling"]
  },
  {
    id: "job-4-4",
    clientId: "client-4",
    persona: "Marketing Data Analyst",
    company: "3M",
    title: "CBG USAC Sales Operations Leader",
    location: "St. Paul, MN",
    arrangement: "Hybrid",
    salaryMin: "—",
    salaryMax: "—",
    baseScore: 68,
    tailoredScore: 81,
    matchStrength: "Possible",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "",
    keywords: ["ERP systems", "Pricing validation", "Distributor portals"]
  },

  // -------------------------------------------------------------
  // Client 5: Sophia Al-Jamil - AI/ML Research Scientist
  // -------------------------------------------------------------
  {
    id: "job-5-1",
    clientId: "client-5",
    persona: "AI/ML Research Scientist",
    company: "Anthropic",
    title: "ML Research Scientist - Alignment",
    location: "San Francisco, CA",
    arrangement: "Hybrid",
    salaryMin: "$280k",
    salaryMax: "$450k",
    baseScore: 85,
    tailoredScore: 98,
    matchStrength: "Strong",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "Requires deep neural networks research history.",
    keywords: ["RLHF", "Constitutional AI", "Transformer fine-tuning", "Python CUDA"]
  },
  {
    id: "job-5-2",
    clientId: "client-5",
    persona: "AI/ML Research Scientist",
    company: "GC AI",
    title: "Director, Workflow Strategy & GTM AI",
    location: "United States",
    arrangement: "Remote",
    salaryMin: "$200k",
    salaryMax: "$300k",
    baseScore: 74,
    tailoredScore: 89,
    matchStrength: "Possible",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "Combines technical ML knowledge with operational strategy.",
    keywords: ["Agentic workflows", "LLM APIs evaluation", "LLMOps metrics"]
  },

  // -------------------------------------------------------------
  // Client 5: Sophia Al-Jamil - Platform/DevOps Engineer
  // -------------------------------------------------------------
  {
    id: "job-5-3",
    clientId: "client-5",
    persona: "Platform/DevOps Engineer",
    company: "Datadog",
    title: "Staff Platform Engineer - Cloud Orchestration",
    location: "New York, NY",
    arrangement: "Hybrid",
    salaryMin: "$210k",
    salaryMax: "$285k",
    baseScore: 80,
    tailoredScore: 92,
    matchStrength: "Strong",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "",
    keywords: ["Terraform providers", "AWS EKS optimization", "Multi-region service mesh"]
  },
  {
    id: "job-5-4",
    clientId: "client-5",
    persona: "Platform/DevOps Engineer",
    company: "Snowflake",
    title: "Senior Infrastructure Engineer - Storage Engine",
    location: "Bellevue, WA",
    arrangement: "Hybrid",
    salaryMin: "$180k",
    salaryMax: "$260k",
    baseScore: 78,
    tailoredScore: 88,
    matchStrength: "Possible",
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "",
    keywords: ["C++ systems programming", "S3 object latency", "Concurrency control"]
  }
];

const MOCK_AUDIT_LOGS = [
  {
    timestamp: "2026-07-17 14:32:04",
    clientId: "client-1",
    clientName: "Saranya Krishnan",
    jobName: "Senior Sales Operations Manager @ HackerOne",
    agent: "System",
    action: "Customized CV generated and matched at 98% (uplift +20)",
    severity: "info"
  },
  {
    timestamp: "2026-07-17 14:28:11",
    clientId: "client-2",
    clientName: "Michael Chen",
    jobName: "Staff Software Engineer - Infrastructure @ Anthropic",
    agent: "System",
    action: "Client approved application target",
    severity: "info"
  },
  {
    timestamp: "2026-07-17 12:15:33",
    clientId: "client-3",
    clientName: "Emily Rodriguez",
    jobName: "Senior Product Designer @ Linear",
    agent: "Jordan",
    action: "Assigned job to self for manual ATS form input",
    severity: "info"
  },
  {
    timestamp: "2026-07-17 10:44:12",
    clientId: "client-1",
    clientName: "Saranya Krishnan",
    jobName: "Sales Operations Manager @ CyberForce Global",
    agent: "Alex",
    action: "Reported problem: Workday ATS login credentials expired for client profile",
    severity: "error"
  }
];

// ==========================================================================
// Application State
// ==========================================================================
let clients = [];
let jobs = [];
let logs = [];

let activeView = "dashboard";
let selectedClientId = null;
let selectedPersona = null;

// Current user active context
const CURRENT_AGENT = "Saranya";

// ==========================================================================
// Application Startup
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initDataStore();
  updateTimeDisplay();
  switchView("dashboard");
  
  // Set interval to refresh clock
  setInterval(updateTimeDisplay, 60000);
});

function initDataStore() {
  // Try loading from localStorage
  const savedClients = localStorage.getItem("is_ops_clients");
  const savedJobs = localStorage.getItem("is_ops_jobs");
  const savedLogs = localStorage.getItem("is_ops_logs");

  if (savedClients && savedJobs && savedLogs) {
    clients = JSON.parse(savedClients);
    clients.forEach(c => c.color = "#f3f4f6"); // Clean any old cached colors
    saveStateToLocalStorage(); // Commit monochrome colors to persistent storage
    jobs = JSON.parse(savedJobs);
    
    // Normalize status strings for any existing saved records
    jobs.forEach(j => {
      if (j.status === "Awaiting Apply" || j.status === "Applying") {
        j.status = "Pending Apply";
      } else if (j.status === "Paused") {
        j.status = "Previously Applied";
      }
    });
    saveStateToLocalStorage();
    
    logs = JSON.parse(savedLogs);
  } else {
    // Seed default data
    clients = [...DEFAULT_CLIENTS];
    jobs = [...MOCK_JOBS_SEED];
    jobs.forEach(j => {
      if (j.status === "Awaiting Apply" || j.status === "Applying") {
        j.status = "Pending Apply";
      } else if (j.status === "Paused") {
        j.status = "Previously Applied";
      }
    });
    logs = [...MOCK_AUDIT_LOGS];
    saveStateToLocalStorage();
  }

  // Initial UI Render
  renderClientList();
  renderOverview();
  renderLogs();
}

function saveStateToLocalStorage() {
  localStorage.setItem("is_ops_clients", JSON.stringify(clients));
  localStorage.setItem("is_ops_jobs", JSON.stringify(jobs));
  localStorage.setItem("is_ops_logs", JSON.stringify(logs));
}

function updateTimeDisplay() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
  const formatted = new Date().toLocaleDateString('en-US', options);
  document.getElementById("current-time-text").textContent = formatted;
}

// ==========================================================================
// Navigation & Views Switcher
// ==========================================================================
function switchView(viewName) {
  activeView = viewName;
  
  // Update nav buttons active classes
  document.getElementById("btn-nav-dashboard").classList.toggle("active", viewName === "dashboard");
  document.getElementById("btn-nav-clients").classList.toggle("active", viewName === "clients");

  // Show/Hide views
  document.getElementById("view-dashboard").style.display = viewName === "dashboard" ? "flex" : "none";
  document.getElementById("view-clients").style.display = viewName === "clients" ? "flex" : "none";

  if (viewName === "clients") {
    // Always ensure a client is selected (re-select even if already set)
    const toSelect = selectedClientId || (clients.length > 0 ? clients[0].id : null);
    if (toSelect) selectClient(toSelect);
  }

  // Refresh data rendering
  if (viewName === "dashboard") {
    renderOverview();
  }
}

// ==========================================================================
// Overview Dashboard Render
// ==========================================================================
function renderOverview() {
  // Calculate totals
  const awaiting = jobs.filter(j => j.status === "Pending Apply").length;
  const duplicateOrPrev = jobs.filter(j => j.status === "Duplicate Job" || j.status === "Previously Applied").length;
  const applied = jobs.filter(j => j.status === "Applied").length;
  const failedOrError = jobs.filter(j => j.status === "Failed" || j.status === "Error").length;

  document.getElementById("stats-awaiting").textContent = awaiting;
  document.getElementById("stats-submitting").textContent = duplicateOrPrev;
  document.getElementById("stats-applied").textContent = applied;
  document.getElementById("stats-failed").textContent = failedOrError;
  document.getElementById("sidebar-total-pending").textContent = awaiting;

  // Render client card items in Dashboard overview
  const clientsContainer = document.getElementById("dashboard-clients-list");
  clientsContainer.innerHTML = "";

  clients.forEach(client => {
    const clientJobs = jobs.filter(j => j.clientId === client.id);
    const clientAwaiting = clientJobs.filter(j => j.status === "Pending Apply").length;
    const clientApplied = clientJobs.filter(j => j.status === "Applied").length;
    const clientFailed = clientJobs.filter(j => j.status === "Failed" || j.status === "Error").length;

    const row = document.createElement("div");
    row.className = "db-client-row";
    row.onclick = () => {
      selectClient(client.id);
      switchView("clients");
    };

    row.innerHTML = `
      <div class="db-client-info">
        <div class="db-client-avatar" style="background:#f0f0f0; color:#333; border:1px solid #e0e0e0;">${client.initials}</div>
        <div class="db-client-meta">
          <h4>${client.name}</h4>
          <span>${client.personas.join(" &bull; ")}</span>
        </div>
      </div>
      <div class="db-client-stats">
        <span class="pill-stat pending">${clientAwaiting} pending</span>
        <span class="pill-stat applied">${clientApplied} applied</span>
        <span class="pill-stat failed">${clientFailed} failed</span>
      </div>
    `;
    clientsContainer.appendChild(row);
  });

  // Render Recent Logs Feed (Last 5 logs)
  const feedContainer = document.getElementById("dashboard-feed-list");
  feedContainer.innerHTML = "";

  const recentLogs = [...logs].reverse().slice(0, 5);
  recentLogs.forEach(log => {
    const dateObj = new Date(log.timestamp.replace(/-/g, "/"));
    const timeStr = isNaN(dateObj.getTime()) ? log.timestamp.split(" ")[1] : dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    
    const item = document.createElement("div");
    item.className = "feed-item";
    item.innerHTML = `
      <span class="feed-time">${timeStr}</span>
      <span class="feed-dot ${log.severity}"></span>
      <div class="feed-content">
        <strong>${log.clientName}</strong>: ${log.action} <span class="text-muted">(${log.agent})</span>
      </div>
    `;
    feedContainer.appendChild(item);
  });
}

// ==========================================================================
// Client Queue Workspace Render
// ==========================================================================
function selectClient(clientId) {
  selectedClientId = clientId;
  const client = clients.find(c => c.id === clientId);
  if (!client) return;

  // Set default active persona to client's first persona
  selectedPersona = client.personas[0];

  // Update left vertical client list selection classes
  renderClientList();

  // Render Header Details
  document.getElementById("no-client-selected").style.display = "none";
  document.getElementById("active-client-content").style.display = "flex";

  const avatar = document.getElementById("active-client-avatar");
  avatar.textContent = client.initials;
  avatar.style.backgroundColor = "#f0f0f0";
  avatar.style.color = "#333";
  avatar.style.border = "1px solid #e0e0e0";

  document.getElementById("active-client-name").textContent = client.name;
  
  // Set default CV text
  updateBaseCvLabel(client);

  // Render Persona Toggles
  const togglesContainer = document.getElementById("active-persona-toggles");
  togglesContainer.innerHTML = "";

  client.personas.forEach(pers => {
    const btn = document.createElement("button");
    btn.className = `persona-btn ${pers === selectedPersona ? "active" : ""}`;
    btn.textContent = pers;
    btn.onclick = () => {
      // Toggle Persona
      document.querySelectorAll(".persona-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedPersona = pers;
      updateBaseCvLabel(client);
      applyFilters();
    };
    togglesContainer.appendChild(btn);
  });

  // Apply filters and render jobs table
  applyFilters();
}

function updateBaseCvLabel(client) {
  const cvFile = client.baseCvs[selectedPersona] || "default_cv.pdf";
  document.getElementById("active-client-base-cv").textContent = cvFile;
}

function renderClientList() {
  // Populate the hidden vertical list (used for selection state)
  const verticalContainer = document.getElementById("clients-list-vertical");
  if (verticalContainer) verticalContainer.innerHTML = "";

  // Populate the visible switcher panel
  renderClientSwitcher();
}

// Renders the left client-switcher panel inside Client Queues view
function renderClientSwitcher() {
  const container = document.getElementById("client-switcher-list");
  if (!container) return;
  container.innerHTML = "";

  clients.forEach(client => {
    const clientJobs  = jobs.filter(j => j.clientId === client.id);
    const pendingCount = clientJobs.filter(j => j.status === "Awaiting Apply").length;

    const row = document.createElement("div");
    row.className = `client-switch-row ${client.id === selectedClientId ? "active" : ""}`;
    row.onclick = () => selectClient(client.id);

    row.innerHTML = `
      <div class="csw-avatar" style="background:#f0f0f0; color:#333; border:1px solid #e0e0e0;">${client.initials}</div>
      <div class="csw-info">
        <div class="csw-name">${client.name}</div>
        <div class="csw-count">${clientJobs.length} jobs</div>
      </div>
      ${pendingCount > 0 ? `<span class="csw-badge">${pendingCount}</span>` : ""}
    `;
    container.appendChild(row);
  });
}

function filterClientList() {
  const query = document.getElementById("client-search-input")?.value?.toLowerCase() || "";
  const rows = document.querySelectorAll(".client-switch-row");
  clients.forEach((client, idx) => {
    const row = rows[idx];
    if (!row) return;
    const matches = client.name.toLowerCase().includes(query) ||
                    client.personas.some(p => p.toLowerCase().includes(query));
    row.style.display = matches ? "flex" : "none";
  });
}

// ==========================================================================
// Filtering & Table Render
// ==========================================================================
function applyFilters() {
  if (!selectedClientId) return;

  const searchQuery = document.getElementById("job-search-input").value.toLowerCase();
  const filterStrength = document.getElementById("filter-strength").value;
  const filterStatus = document.getElementById("filter-status").value;
  const filterAgent = document.getElementById("filter-agent").value;

  // Filter jobs array
  const filtered = jobs.filter(job => {
    // Match client and persona
    if (job.clientId !== selectedClientId || job.persona !== selectedPersona) {
      return false;
    }

    // Match Search Query (Company, Title, Location, Keywords)
    if (searchQuery) {
      const matchText = `${job.company} ${job.title} ${job.location} ${(job.keywords || []).join(" ")}`.toLowerCase();
      if (!matchText.includes(searchQuery)) return false;
    }

    // Match Strength
    if (filterStrength !== "all" && job.matchStrength !== filterStrength) {
      return false;
    }

    // Match Status
    if (filterStatus !== "all" && job.status !== filterStatus) {
      return false;
    }

    // Match Agent
    if (filterAgent !== "all") {
      if (filterAgent === "unassigned") {
        if (job.assignedTo !== null) return false;
      } else {
        if (job.assignedTo !== filterAgent) return false;
      }
    }

    return true;
  });

  renderTable(filtered);
}

// Ops team members list (used in Assigned Ops dropdown)
const OPS_AGENTS = ["Saranya", "Alex", "Jordan", "Priya", "Marcus"];

// All available job statuses
const JOB_STATUSES = [
  "Pending Apply",
  "Applied",
  "Duplicate Job",
  "Previously Applied",
  "Error",
  "Failed"
];

// Map company names → real careers/jobs page URLs
const COMPANY_APPLY_URLS = {
  "HackerOne":           "https://www.hackerone.com/careers",
  "Capital One":         "https://www.capitalonecareers.com",
  "Tenstorrent":         "https://tenstorrent.com/careers",
  "Ping Identity":       "https://www.pingidentity.com/en/company/careers.html",
  "Lockheed Martin":     "https://www.lockheedmartinjobs.com",
  "PetPlace":            "https://jobs.lever.co/petplace",
  "CyberForce Global":   "https://www.linkedin.com/company/cyberforce-global/jobs",
  "Cornerstone OnDemand":"https://www.cornerstoneondemand.com/company/careers",
  "Hilton":              "https://jobs.hilton.com",
  "Boston Scientific":   "https://jobs.bostonscientific.com",
  "Utz Brands, Inc.":    "https://careers.utzsnacks.com",
  "SpaceX":              "https://www.spacex.com/careers",
  "Applied Systems":     "https://www.applied.com/careers",
  "Aircall":             "https://aircall.io/careers",
  "Mastercard":          "https://careers.mastercard.com",
  "Level AI":            "https://level.ai/careers",
  "Anthropic":           "https://www.anthropic.com/careers",
  "Ramp":                "https://ramp.com/careers",
  "Stripe":              "https://stripe.com/jobs",
  "Square":              "https://careers.squareup.com",
  "Reputation":          "https://reputation.com/about/careers",
  "Figma":               "https://www.figma.com/careers",
  "Linear":              "https://linear.app/careers",
  "Vercel":              "https://vercel.com/careers",
  "Salesforce":          "https://careers.salesforce.com",
  "Google":              "https://careers.google.com",
  "Meta":                "https://www.metacareers.com",
  "Notion":              "https://www.notion.so/careers",
  "Airtable":            "https://airtable.com/careers",
};

function getApplyUrl(company, title) {
  if (COMPANY_APPLY_URLS[company]) return COMPANY_APPLY_URLS[company];
  // Fallback: LinkedIn Jobs search
  const q = encodeURIComponent(`${title} ${company}`);
  return `https://www.linkedin.com/jobs/search/?keywords=${q}`;
}

function renderTable(dataList) {
  const tbody = document.getElementById("jobs-table-body");
  const emptyState = document.getElementById("table-empty-state");
  const table = document.getElementById("jobs-tracker-table");
  const countText = document.getElementById("showing-results-text");

  tbody.innerHTML = "";
  countText.textContent = `Showing ${dataList.length} of ${jobs.filter(j => j.clientId === selectedClientId && j.persona === selectedPersona).length} results`;

  if (dataList.length === 0) {
    table.style.display = "none";
    emptyState.style.display = "flex";
    return;
  }

  table.style.display = "table";
  emptyState.style.display = "none";

  dataList.forEach((job, index) => {
    const tr = document.createElement("tr");
    // No row-level click — interaction is per-cell

    // Match badge
    const badgeClass = job.matchStrength.toLowerCase() === "strong" ? "strong" : "possible";

    // ── Assigned Ops dropdown ──
    const agentOpts = OPS_AGENTS.map(a =>
      `<option value="${a}" ${job.assignedTo === a ? "selected" : ""}>${a}</option>`
    ).join("");

    // ── Status dropdown ──
    let statusClass = "awaiting";
    if (job.status === "Applied")            statusClass = "applied";
    else if (job.status === "Duplicate Job") statusClass = "paused";
    else if (job.status === "Previously Applied") statusClass = "paused";
    else if (job.status === "Error")         statusClass = "failed";
    else if (job.status === "Failed")        statusClass = "failed";

    const statusOpts = JOB_STATUSES.map(s =>
      `<option value="${s}" ${job.status === s ? "selected" : ""}>${s}</option>`
    ).join("");

    // ── Proof column ──
    const thumbHtml = job.screenshot
      ? `<img src="${job.screenshot}" class="proof-thumb" alt="proof"
             onclick="event.stopPropagation(); openProofLightbox('${job.id}')"
             title="Click to enlarge">`
      : `<label class="proof-upload-btn" title="Upload proof screenshot">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
           Upload
           <input type="file" accept="image/*" style="display:none"
             onchange="event.stopPropagation(); handleInlineProofUpload(event, '${job.id}')">
         </label>`;

    const noteHtml = `<input type="text" class="proof-note-input"
        placeholder="Add note…"
        value="${(job.notes || '').replace(/"/g, '&quot;')}"
        onclick="event.stopPropagation()"
        onchange="event.stopPropagation(); saveInlineNote(event, '${job.id}')"
        title="Note">`;

    tr.innerHTML = `
      <td style="font-weight:600; color:var(--gray-400);">${index + 1}</td>
      <td><strong style="font-size:12px;">${job.company}</strong></td>
      <td>
        <div class="job-title-link" onclick="openDetailDrawer('${job.id}')" style="font-weight:500; font-size:12px; cursor:pointer;" title="Open detail">${job.title}</div>
        <div style="font-size:11px; color:var(--gray-500); margin-top:2px;">${job.location}</div>
      </td>
      <td><span class="status-pill">${job.arrangement}</span></td>
      <td>
        <div style="display:flex; align-items:center; gap:6px;">
          <span class="match-badge ${badgeClass}">${job.tailoredScore}%</span>
          <span style="font-size:11px; color:var(--gray-400);">${job.baseScore}&rarr;${job.tailoredScore}</span>
        </div>
      </td>
      <td style="font-size:12px;">${job.salaryMin === "—" ? "—" : `${job.salaryMin} – ${job.salaryMax}`}</td>

      <!-- Apply Link — opens real careers page in new tab -->
      <td>
        <a class="btn-apply-inline"
          href="${getApplyUrl(job.company, job.title)}"
          target="_blank"
          rel="noopener noreferrer"
          onclick="event.stopPropagation()"
          title="Open ${job.company} careers page">
          Apply &rarr;
        </a>
      </td>

      <!-- Assigned Ops — inline dropdown -->
      <td onclick="event.stopPropagation()">
        <select class="inline-select agent-select"
          onchange="saveInlineAgent(event, '${job.id}')"
          title="Assign ops team member">
          <option value="">— Unassigned —</option>
          ${agentOpts}
        </select>
      </td>

      <!-- Status — inline dropdown -->
      <td onclick="event.stopPropagation()">
        <select class="inline-select status-select status-${statusClass}"
          onchange="saveInlineStatus(event, '${job.id}')"
          title="Update application status">
          ${statusOpts}
        </select>
      </td>

      <!-- Proof: thumbnail + note -->
      <td onclick="event.stopPropagation()" class="proof-cell">
        <div class="proof-cell-inner">
          ${thumbHtml}
          ${noteHtml}
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// ── Inline save helpers ──────────────────────────────────────────────────────

function saveInlineAgent(event, jobId) {
  const val = event.target.value || null;
  const job = jobs.find(j => j.id === jobId);
  if (!job) return;
  job.assignedTo = val;

  // Update select colour class
  event.target.className = `inline-select agent-select`;

  // Log it
  const client = clients.find(c => c.id === job.clientId);
  logs.push({
    timestamp: new Date().toISOString().replace("T"," ").slice(0,19),
    jobId: job.id,
    clientId: job.clientId,
    clientName: client ? client.name : "",
    jobName: `${job.title} @ ${job.company}`,
    agent: val || "Unassigned",
    action: val ? `Assigned to ${val}` : "Removed agent assignment",
    severity: "info"
  });
  saveStateToLocalStorage();
  renderOverview();
}

function saveInlineStatus(event, jobId) {
  const newStatus = event.target.value;
  const job = jobs.find(j => j.id === jobId);
  if (!job) return;
  const prevStatus = job.status;
  job.status = newStatus;
  if (newStatus === "Applied" && !job.appliedAt) job.appliedAt = new Date().toISOString();

  // Update colour class on select
  let sc = "awaiting";
  if (newStatus === "Applied")            sc = "applied";
  else if (newStatus === "Duplicate Job") sc = "paused";
  else if (newStatus === "Previously Applied") sc = "paused";
  else if (newStatus === "Error")         sc = "failed";
  else if (newStatus === "Failed")        sc = "failed";
  event.target.className = `inline-select status-select status-${sc}`;

  // Log it
  const client = clients.find(c => c.id === job.clientId);
  logs.push({
    timestamp: new Date().toISOString().replace("T"," ").slice(0,19),
    jobId: job.id,
    clientId: job.clientId,
    clientName: client ? client.name : "",
    jobName: `${job.title} @ ${job.company}`,
    agent: job.assignedTo || CURRENT_AGENT,
    action: `Status changed: '${prevStatus}' → '${newStatus}'`,
    severity: newStatus === "Failed" ? "error" : "info"
  });
  saveStateToLocalStorage();
  renderOverview();
  renderLogs();
}

function saveInlineNote(event, jobId) {
  const job = jobs.find(j => j.id === jobId);
  if (!job) return;
  job.notes = event.target.value;
  saveStateToLocalStorage();
}

function handleInlineProofUpload(event, jobId) {
  const file = event.target.files[0];
  if (!file) return;
  const job = jobs.find(j => j.id === jobId);
  if (!job) return;

  const reader = new FileReader();
  reader.onload = e => {
    job.screenshot = e.target.result;
    saveStateToLocalStorage();
    applyFilters(); // re-render to show thumbnail

    // Log proof upload
    const client = clients.find(c => c.id === job.clientId);
    logs.push({
      timestamp: new Date().toISOString().replace("T"," ").slice(0,19),
      jobId: job.id,
      clientId: job.clientId,
      clientName: client ? client.name : "",
      jobName: `${job.title} @ ${job.company}`,
      agent: job.assignedTo || CURRENT_AGENT,
      action: `Proof screenshot uploaded`,
      severity: "info"
    });
    saveStateToLocalStorage();
    renderLogs();
  };
  reader.readAsDataURL(file);
}



function resetFilters() {
  document.getElementById("job-search-input").value = "";
  document.getElementById("filter-strength").value = "all";
  document.getElementById("filter-status").value = "all";
  document.getElementById("filter-agent").value = "all";
  applyFilters();
}

// ==========================================================================
// Slide-Out Drawer Logic
// ==========================================================================
function openDetailDrawer(jobId) {
  const job = jobs.find(j => j.id === jobId);
  if (!job) return;

  const client = clients.find(c => c.id === job.clientId);

  // Set Drawer Content
  document.getElementById("form-job-id").value = job.id;
  document.getElementById("drawer-company-name").textContent = job.company;
  document.getElementById("drawer-job-title").textContent = job.title;
  document.getElementById("drawer-location").textContent = job.location;
  document.getElementById("drawer-arrangement").textContent = job.arrangement;
  document.getElementById("drawer-salary").textContent = job.salaryMin === "—" ? "Market Salary" : `${job.salaryMin} - ${job.salaryMax}`;
  document.getElementById("drawer-score-delta").innerHTML = `${job.baseScore} &rarr; <span class="value-green">${job.tailoredScore} (+${job.tailoredScore - job.baseScore})</span>`;

  // Score Bar graphics
  document.getElementById("drawer-bar-base").style.width = `${job.baseScore}%`;
  document.getElementById("drawer-bar-tailored").style.width = `${job.tailoredScore - job.baseScore}%`;
  document.getElementById("drawer-score-base").textContent = `${job.baseScore}%`;
  document.getElementById("drawer-score-final").textContent = `${job.tailoredScore}%`;

  // Keywords
  const keywordsList = document.getElementById("drawer-keywords");
  keywordsList.innerHTML = "";
  (job.keywords || ["tailored bullets", "skills framing"]).forEach(kw => {
    const li = document.createElement("li");
    li.textContent = `+ ${kw}`;
    keywordsList.appendChild(li);
  });

  // Populate Form Fields
  document.getElementById("form-status").value = job.status;
  document.getElementById("form-agent").value = job.assignedTo || "";
  
  // Notes
  document.getElementById("form-notes").value = job.notes || "";

  // Screenshot Upload State
  const previewContainer = document.getElementById("screenshot-preview-container");
  const previewImg = document.getElementById("screenshot-preview-img");
  const placeholder = document.getElementById("upload-placeholder");
  
  if (job.screenshot) {
    previewImg.src = job.screenshot;
    previewContainer.style.display = "block";
    placeholder.style.display = "none";
  } else {
    previewImg.src = "";
    previewContainer.style.display = "none";
    placeholder.style.display = "flex";
  }

  // Clear inputs
  document.getElementById("screenshot-input").value = "";

  // Problem logs
  const hasProblem = !!job.problemReport;
  document.getElementById("form-has-problem").checked = hasProblem;
  document.getElementById("form-problem-desc").value = job.problemReport || "";
  document.getElementById("problem-textarea-group").style.display = hasProblem ? "block" : "none";

  // Display Drawer & Overlay
  document.getElementById("detail-drawer").classList.add("active");
  document.getElementById("drawer-overlay").classList.add("active");
}

function closeDetailDrawer() {
  document.getElementById("detail-drawer").classList.remove("active");
  document.getElementById("drawer-overlay").classList.remove("active");
}

function toggleFormStatus(statusVal) {
  // If user sets to Applied, auto assign to current agent if empty
  const agentInput = document.getElementById("form-agent");
  if (statusVal === "Applied" && !agentInput.value) {
    agentInput.value = CURRENT_AGENT;
  }
  // If user sets to Failed, automatically check the problem block
  if (statusVal === "Failed") {
    document.getElementById("form-has-problem").checked = true;
    toggleProblemTextarea(true);
  }
}

function toggleProblemTextarea(checked) {
  document.getElementById("problem-textarea-group").style.display = checked ? "block" : "none";
  if (!checked) {
    document.getElementById("form-problem-desc").value = "";
  }
}

// ==========================================================================
// Screenshot Upload & Simulation
// ==========================================================================
function handleScreenshotUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    displayScreenshotPreview(dataUrl);
  };
  reader.readAsDataURL(file);
}

function displayScreenshotPreview(dataUrl) {
  const previewContainer = document.getElementById("screenshot-preview-container");
  const previewImg = document.getElementById("screenshot-preview-img");
  const placeholder = document.getElementById("upload-placeholder");

  previewImg.src = dataUrl;
  previewContainer.style.display = "block";
  placeholder.style.display = "none";
}

function removeUploadedScreenshot() {
  const previewContainer = document.getElementById("screenshot-preview-container");
  const previewImg = document.getElementById("screenshot-preview-img");
  const placeholder = document.getElementById("upload-placeholder");

  previewImg.src = "";
  previewContainer.style.display = "none";
  placeholder.style.display = "flex";
  document.getElementById("screenshot-input").value = "";
}

function simulateProofUpload() {
  // Generates a mock canvas screenshot proof of job application
  const company = document.getElementById("drawer-company-name").textContent;
  const title = document.getElementById("drawer-job-title").textContent;
  
  const canvas = document.createElement("canvas");
  canvas.width = 600;
  canvas.height = 400;
  const ctx = canvas.getContext("2d");

  // Web Browser Mockup Background
  ctx.fillStyle = "#f8fafc";
  ctx.fillRect(0, 0, 600, 400);

  // Header bar
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, 600, 45);
  ctx.fillStyle = "#e2e8f0";
  ctx.fillRect(0, 44, 600, 1);

  // Three red/yellow/green dots
  ctx.fillStyle = "#ef4444";
  ctx.beginPath(); ctx.arc(15, 22, 5, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#f59e0b";
  ctx.beginPath(); ctx.arc(30, 22, 5, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#10b981";
  ctx.beginPath(); ctx.arc(45, 22, 5, 0, Math.PI * 2); ctx.fill();

  // Address bar
  ctx.fillStyle = "#f1f5f9";
  ctx.fillRect(70, 8, 460, 28);
  ctx.fillStyle = "#64748b";
  ctx.font = "12px sans-serif";
  ctx.fillText(`https://jobs.lever.co/${company.toLowerCase().replace(/\s/g, '')}/apply/confirmation`, 85, 26);

  // Success Box Card
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(50, 80, 500, 270);
  ctx.strokeStyle = "#e2e8f0";
  ctx.strokeRect(50, 80, 500, 270);

  // Success indicator green ring
  ctx.strokeStyle = "#10b981";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(300, 150, 30, 0, Math.PI * 2);
  ctx.stroke();

  // Checkmark inside ring
  ctx.strokeStyle = "#10b981";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(290, 150);
  ctx.lineTo(297, 157);
  ctx.lineTo(312, 142);
  ctx.stroke();

  // Texts
  ctx.textAlign = "center";
  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 18px sans-serif";
  ctx.fillText("Application Submitted!", 300, 210);

  ctx.fillStyle = "#475569";
  ctx.font = "13px sans-serif";
  ctx.fillText(`Thank you for applying to ${company}.`, 300, 240);
  
  ctx.font = "italic 12px sans-serif";
  ctx.fillText(`Position: ${title}`, 300, 260);

  ctx.fillStyle = "#94a3b8";
  ctx.font = "11px sans-serif";
  ctx.fillText(`InterviewSurge Automated System Proof &bull; ${new Date().toLocaleString()}`, 300, 320);

  // Convert to DataURL
  const dataUrl = canvas.toDataURL("image/png");
  displayScreenshotPreview(dataUrl);
}

function viewFullScreenScreenshot() {
  const src = document.getElementById("screenshot-preview-img").src;
  if (!src) return;

  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox-overlay").classList.add("active");
}

function closeLightbox() {
  document.getElementById("lightbox-overlay").classList.remove("active");
}

// ==========================================================================
// Save Application details form
// ==========================================================================
function saveApplicationDetails(event) {
  event.preventDefault();
  
  const jobId = document.getElementById("form-job-id").value;
  const job = jobs.find(j => j.id === jobId);
  if (!job) return;

  const client = clients.find(c => c.id === job.clientId);
  
  // Read inputs
  const prevStatus = job.status;
  const newStatus = document.getElementById("form-status").value;
  const agent = document.getElementById("form-agent").value || null;
  const notes = document.getElementById("form-notes").value;
  const hasProblem = document.getElementById("form-has-problem").checked;
  const problemDesc = hasProblem ? document.getElementById("form-problem-desc").value : null;
  const previewImgSrc = document.getElementById("screenshot-preview-img").src;
  const screenshotData = previewImgSrc.startsWith("data:") ? previewImgSrc : null;

  // Validate: if applied, screenshot proof is recommended (but we won't strictly block in mock, just log warnings)
  if (newStatus === "Applied" && !screenshotData) {
    if (!confirm("Are you sure you want to save without uploading a screenshot proof of the application?")) {
      return;
    }
  }

  // Update State
  job.status = newStatus;
  job.assignedTo = agent;
  job.notes = notes;
  job.problemReport = problemDesc;
  job.screenshot = screenshotData;
  if (newStatus === "Applied") {
    job.appliedAt = new Date().toISOString();
  }

  // Generate Audit Log
  let logDetail = `Updated status from '${prevStatus}' to '${newStatus}'`;
  if (newStatus === "Applied") logDetail = `Successfully submitted application and uploaded screenshot proof`;
  if (problemDesc) logDetail = `FLAGGED ERROR: ${problemDesc}`;
  
  const newLog = {
    timestamp: new Date().toISOString().replace("T", " ").slice(0, 19),
    jobId: job.id,
    clientId: job.clientId,
    clientName: client.name,
    jobName: `${job.title} @ ${job.company}`,
    agent: agent || CURRENT_AGENT,
    action: logDetail,
    severity: problemDesc ? "error" : "info"
  };
  logs.push(newLog);

  // Sync to Storage
  saveStateToLocalStorage();

  // Close and Refilter
  closeDetailDrawer();
  applyFilters();
  renderClientList();
  renderOverview();
  renderLogs();
}

// ==========================================================================
// Audit Logs Controller
// ==========================================================================

// Helper: render a single log row's innerHTML (shared by renderLogs + filterLogs)
function buildLogRow(log) {
  // Agent avatar initial
  const agentInitial = (log.agent || "?")[0].toUpperCase();

  // Determine outcome badge
  let badgeClass = "info";
  let badgeLabel = "INFO";
  if (log.severity === "error") { badgeClass = "error"; badgeLabel = "BLOCKED"; }
  else if (log.action && log.action.toLowerCase().includes("applied")) { badgeClass = "success"; badgeLabel = "APPLIED"; }

  // Proof thumbnail — look up job by matching jobName
  let proofHtml = `<span class="proof-none">—</span>`;
  if (log.jobId) {
    const matchJob = jobs.find(j => j.id === log.jobId);
    if (matchJob && matchJob.screenshot) {
      proofHtml = `<img class="proof-thumb" src="${matchJob.screenshot}" alt="proof" onclick="openProofLightbox('${matchJob.id}')" title="View proof screenshot">`;
    }
  }

  // Human-readable timestamp
  const ts = log.timestamp || "";

  return `
    <td style="white-space:nowrap; color:var(--gray-400); font-size:11px;">${ts}</td>
    <td><strong style="font-size:12px;">${log.clientName || "—"}</strong></td>
    <td style="max-width:240px;">
      <div style="font-weight:500; font-size:12px; color:var(--gray-900);">${(log.jobName || "").split(" @ ")[0]}</div>
      <div style="font-size:11px; color:var(--gray-500);">${(log.jobName || "").split(" @ ")[1] || ""}</div>
    </td>
    <td>
      <div class="agent-cell">
        <div class="agent-avatar">${agentInitial}</div>
        <span class="agent-name">${log.agent || "—"}</span>
      </div>
    </td>
    <td style="font-size:12px; color:var(--gray-700); max-width:260px;">${log.action || "—"}</td>
    <td>${proofHtml}</td>
    <td><span class="audit-badge ${badgeClass}">${badgeLabel}</span></td>
  `;
}

function renderLogs() {
  const tbody = document.getElementById("audit-log-body");
  const emptyState = document.getElementById("logs-empty-state");
  const table = tbody.closest("table");

  tbody.innerHTML = "";

  if (logs.length === 0) {
    table.style.display = "none";
    emptyState.style.display = "block";
    return;
  }

  table.style.display = "table";
  emptyState.style.display = "none";

  const renderedLogs = [...logs].reverse();
  renderedLogs.forEach(log => {
    const tr = document.createElement("tr");
    tr.innerHTML = buildLogRow(log);
    tbody.appendChild(tr);
  });
}

function filterLogs() {
  const query = document.getElementById("log-search").value.toLowerCase();
  const severityFilter = document.getElementById("log-type-filter").value;

  const filtered = logs.filter(log => {
    if (query) {
      const matchText = `${log.clientName} ${log.jobName} ${log.action} ${log.agent}`.toLowerCase();
      if (!matchText.includes(query)) return false;
    }
    if (severityFilter !== "all") {
      if (severityFilter === "error" && log.severity !== "error") return false;
      if (severityFilter === "info"  && log.severity !== "info")  return false;
    }
    return true;
  });

  const tbody = document.getElementById("audit-log-body");
  tbody.innerHTML = "";

  const renderedLogs = [...filtered].reverse();
  renderedLogs.forEach(log => {
    const tr = document.createElement("tr");
    tr.innerHTML = buildLogRow(log);
    tbody.appendChild(tr);
  });
}

function clearLogs() {
  if (confirm("Are you sure you want to clear all operational audit history? This action cannot be undone.")) {
    logs = [];
    saveStateToLocalStorage();
    renderLogs();
    renderOverview();
  }
}

// Open proof screenshot from audit log row
function openProofLightbox(jobId) {
  const job = jobs.find(j => j.id === jobId);
  if (!job || !job.screenshot) return;
  document.getElementById("lightbox-img").src = job.screenshot;
  document.getElementById("lightbox-overlay").classList.add("active");
}

// ==========================================================================
// Simulation: Poll new approvals
// ==========================================================================
function simulateNewApprovals() {
  // Simulates client approving new jobs from their daily job board recommendation.
  const randomClient = clients[Math.floor(Math.random() * clients.length)];
  const randomPersona = randomClient.personas[Math.floor(Math.random() * randomClient.personas.length)];

  const poolCompanies = ["Stripe", "Platzi", "Mercury Bank", "Cloudflare", "OpenAI", "Duolingo", "Replit", "Braintree"];
  const poolLocations = ["San Francisco, CA", "Seattle, WA", "New York, NY", "Remote"];
  const company = poolCompanies[Math.floor(Math.random() * poolCompanies.length)];
  const location = poolLocations[Math.floor(Math.random() * poolLocations.length)];
  
  const baseScore = Math.floor(Math.random() * 20) + 50; // 50 to 70
  const tailoredScore = baseScore + Math.floor(Math.random() * 15) + 15; // + 15-30 uplift
  const strength = tailoredScore >= 90 ? "Strong" : "Possible";

  const newJob = {
    id: `job-sim-${Date.now()}`,
    clientId: randomClient.id,
    persona: randomPersona,
    company: company,
    title: `Lead ${randomPersona.replace(" Director", "").replace(" Lead", "").replace(" Manager", "")}`,
    location: location,
    arrangement: Math.random() > 0.5 ? "Remote" : "Hybrid",
    salaryMin: `$${Math.floor(Math.random() * 50) + 110}k`,
    salaryMax: `$${Math.floor(Math.random() * 60) + 170}k`,
    baseScore: baseScore,
    tailoredScore: tailoredScore,
    matchStrength: strength,
    status: "Awaiting Apply",
    assignedTo: null,
    appliedAt: null,
    screenshot: null,
    problemReport: null,
    notes: "Simulation generated new approval.",
    keywords: ["cross-functional", "performance metrics", "SaaS automation"]
  };

  jobs.push(newJob);

  // Add Log
  const newLog = {
    timestamp: new Date().toISOString().replace("T", " ").slice(0, 19),
    clientId: randomClient.id,
    clientName: randomClient.name,
    jobName: `${newJob.title} @ ${newJob.company}`,
    agent: "System Engine",
    action: `Client approved new role; added to '${randomPersona}' queue.`,
    severity: "info"
  };
  logs.push(newLog);

  saveStateToLocalStorage();
  
  // Refresh UI
  renderClientList();
  renderOverview();
  renderLogs();
  
  if (selectedClientId === randomClient.id) {
    applyFilters();
  }

  alert(`[SIMULATION] Client '${randomClient.name}' just approved a new job:\n"${newJob.title} @ ${newJob.company}". Added to their queue!`);
}

// ==========================================================================
// Data Export CSV
// ==========================================================================
function exportClientData() {
  if (!selectedClientId) return;
  const client = clients.find(c => c.id === selectedClientId);

  const clientJobs = jobs.filter(j => j.clientId === selectedClientId && j.persona === selectedPersona);
  
  // Build CSV
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Rank,Company,Job Title,Location,Arrangement,Tailored Score,Base Score,Status,Assigned Agent,Applied Time,Issue Blocked\n";

  clientJobs.forEach((j, index) => {
    const row = [
      index + 1,
      `"${j.company.replace(/"/g, '""')}"`,
      `"${j.title.replace(/"/g, '""')}"`,
      `"${j.location.replace(/"/g, '""')}"`,
      j.arrangement,
      `${j.tailoredScore}%`,
      `${j.baseScore}%`,
      j.status,
      j.assignedTo || "Unassigned",
      j.appliedAt || "N/A",
      j.problemReport ? `"${j.problemReport.replace(/"/g, '""')}"` : "None"
    ].join(",");
    csvContent += row + "\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `InterviewSurge_Ops_${client.name.replace(/\s+/g, "_")}_${selectedPersona.replace(/\s+/g, "_")}.csv`);
  document.body.appendChild(link); // Required for FF
  link.click();
  document.body.removeChild(link);
}

/**
 * AI ENGINEER 2026 - LEARNING PLATFORM & HOME PAGE ENGINE
 * Built with pride by CHANNU PATIL
 * Features:
 * - Home View with dynamic Resume button & motivational quotes
 * - Classroom View with auto-playing video player
 * - Strict Lesson Completion tracking (Part 1 + Part 2 must be completed before advancing)
 * - Auto-Advance on video end
 * - Mobile Drawer & Topic Checklist
 */

// 1. 16-WEEK MASTER CURRICULUM WITH VERIFIED HINDI VIDEO COURSES
const INITIAL_ROADMAP_DATA = [
  {
    id: 1,
    month: "Month 1 • Week 1",
    monthKey: "m1",
    title: "Python Fundamentals",
    courseChannel: "CampusX & Tech Mentors",
    parts: [
      {
        partNum: 1,
        title: "Part 1: Core Python Fundamentals Masterclass",
        url: "https://youtu.be/ERCMXc8x7mc?si=NbRiqlP93WXFD1p7",
        videoId: "ERCMXc8x7mc"
      },
      {
        partNum: 2,
        title: "Part 2: Python for AI & Data Science",
        url: "https://youtu.be/ygXn5nV5qFc?si=tma8DXWYmTOk31Yh",
        videoId: "ygXn5nV5qFc"
      }
    ],
    subtopics: [
      "Python Basics", "Variables & Data Types", "Conditions & Loops",
      "Functions", "Lists, Tuples, Sets, Dictionaries", "Strings",
      "File Handling", "Exception Handling", "OOP (Object-Oriented Programming)",
      "Modules & Packages", "Virtual Environments", "pip package manager",
      "Debugging", "Basic Problem Solving", "Python Practice Projects"
    ]
  },
  {
    id: 2,
    month: "Month 1 • Week 2",
    monthKey: "m1",
    title: "Git & GitHub",
    courseChannel: "Kunal Kushwaha & Industry Pros",
    parts: [
      {
        partNum: 1,
        title: "Part 1: Git & GitHub Essentials (init, add, commit, push)",
        url: "https://youtu.be/rYVoEgrH_So?si=Uq7e5xXMznjCmuZi",
        videoId: "rYVoEgrH_So"
      },
      {
        partNum: 2,
        title: "Part 2: Advanced GitHub, Branches, PRs & Team Workflow",
        url: "https://youtu.be/Q1m8ua2IOwQ?si=pFeVkI-bBJl2wp8K",
        videoId: "Q1m8ua2IOwQ"
      }
    ],
    subtopics: [
      "Git Basics", "Git init / clone", "add / commit / push",
      "Branches", "Merge", "Pull Requests",
      "GitHub repositories", "README writing", ".gitignore",
      "GitHub workflow", "Portfolio-quality repositories"
    ]
  },
  {
    id: 3,
    month: "Month 1 • Week 3",
    monthKey: "m1",
    title: "APIs & Backend Basics",
    courseChannel: "Hitesh Choudhary & Tech Mentors",
    parts: [
      {
        partNum: 1,
        title: "Complete Backend & REST API Masterclass in Hindi",
        url: "https://youtu.be/fxRCoEUmq8s?si=0yIX51C-sY3Ra6t1",
        videoId: "fxRCoEUmq8s"
      }
    ],
    subtopics: [
      "What is an API?", "HTTP / HTTPS protocols", "REST APIs design principles",
      "GET / POST / PUT / DELETE methods", "JSON data serialization",
      "Authentication mechanisms", "API Keys management", "Environment Variables (.env)",
      "Using APIs with Python", "requests library", "FastAPI basics & routing",
      "Build and consume APIs"
    ]
  },
  {
    id: 4,
    month: "Month 1 • Week 4",
    monthKey: "m1",
    title: "SQL & Databases",
    courseChannel: "CodeWithHarry",
    parts: [
      {
        partNum: 1,
        title: "Complete SQL Database Mastery in One Video",
        url: "https://youtu.be/hlGoQC332VM?si=vlqzVuSftXxNQVgE",
        videoId: "hlGoQC332VM"
      }
    ],
    subtopics: [
      "SQL Fundamentals", "SELECT queries", "WHERE filtering",
      "ORDER BY sorting", "GROUP BY aggregation", "JOINs (Inner, Left, Right)",
      "Subqueries", "Aggregations (SUM, AVG, COUNT)", "INSERT / UPDATE / DELETE",
      "Database design & normalization", "PostgreSQL / MySQL setup",
      "Connect Python with SQL (psycopg2/SQLAlchemy)", "Basic query optimization"
    ]
  },
  {
    id: 5,
    month: "Month 2 • Week 5",
    monthKey: "m2",
    title: "NumPy",
    courseChannel: "CampusX (Nitish Singh)",
    parts: [
      {
        partNum: 1,
        title: "NumPy Complete Masterclass for AI & Data Science",
        url: "https://youtu.be/9DhZ-JCWvDw?si=6dO5bkKkAh1dJOLK",
        videoId: "9DhZ-JCWvDw"
      }
    ],
    subtopics: [
      "Arrays creation & ndarrays", "Dimensions & Shapes", "Indexing & Slicing",
      "Vectorization concepts", "Broadcasting rules", "Mathematical operations",
      "Statistical functions", "Linear algebra basics (np.linalg)", "Matrix operations"
    ]
  },
  {
    id: 6,
    month: "Month 2 • Week 6",
    monthKey: "m2",
    title: "Pandas & Exploratory Data Analysis",
    courseChannel: "CampusX (Nitish Singh)",
    parts: [
      {
        partNum: 1,
        title: "Part 1: Pandas Fundamentals & Series/DataFrames",
        url: "https://youtu.be/qrMnoY8qBJM?si=cV0IGfztKdyGpu-m",
        videoId: "qrMnoY8qBJM"
      },
      {
        partNum: 2,
        title: "Part 2: Advanced Pandas Data Cleaning & Transformations",
        url: "https://youtu.be/0T9qhK5wBqI?si=HdiB42Ne-uXgjyZa",
        videoId: "0T9qhK5wBqI"
      }
    ],
    subtopics: [
      "Series & DataFrames", "Reading CSV / Excel / JSON", "Data cleaning workflows",
      "Handling missing values (fillna, dropna)", "Filtering & conditional selections",
      "Sorting & ranking", "GroupBy & aggregations", "Merge & Join operations",
      "Data transformation & apply()", "Feature preparation", "Exploratory Data Analysis (EDA)"
    ]
  },
  {
    id: 7,
    month: "Month 2 • Week 7",
    monthKey: "m2",
    title: "Mathematics for AI/ML",
    courseChannel: "CampusX & Krish Naik",
    parts: [
      {
        partNum: 1,
        title: "Part 1: Complete Statistics for Machine Learning & Data Science",
        url: "https://youtu.be/eF7HoC-cLRM?si=XT08T118O8M_3-7h",
        videoId: "eF7HoC-cLRM"
      },
      {
        partNum: 2,
        title: "Part 2: Essential Mathematics, Linear Algebra & Calculus for AI",
        url: "https://youtu.be/xs3YM5GoGcQ?si=38z5xqzb6MgaReFH",
        videoId: "xs3YM5GoGcQ"
      }
    ],
    subtopics: [
      "Linear Algebra fundamentals", "Vectors & vector spaces", "Matrices",
      "Matrix multiplication", "Dot product & cosine similarity", "Eigenvalues & Eigenvectors",
      "Probability theory", "Descriptive Statistics", "Mean / Median / Variance",
      "Standard Deviation", "Probability Distributions", "Conditional Probability",
      "Bayes Theorem", "Calculus basics", "Derivatives intuition",
      "Gradients & Vector Calculus", "Partial derivatives", "Gradient Descent optimization"
    ]
  },
  {
    id: 8,
    month: "Month 2 • Week 8",
    monthKey: "m2",
    title: "Data Visualization",
    courseChannel: "CampusX (Nitish Singh)",
    parts: [
      {
        partNum: 1,
        title: "Complete Data Visualization Masterclass (Matplotlib & Seaborn)",
        url: "https://youtu.be/UO98lJQ3QGI",
        videoId: "UO98lJQ3QGI"
      }
    ],
    subtopics: [
      "Matplotlib fundamentals", "Seaborn styling & statistical plots", "Plotly interactive charts",
      "Histograms & KDE plots", "Bar Charts & Count plots", "Line Charts & trends",
      "Scatter Plots & cluster visualization", "Correlation analysis", "Heatmaps",
      "Build comprehensive EDA reports", "Explain insights from data"
    ]
  },
  {
    id: 9,
    month: "Month 3 • Week 9",
    monthKey: "m3",
    title: "Machine Learning",
    courseChannel: "CampusX (Nitish Singh)",
    parts: [
      {
        partNum: 1,
        title: "Part 1: Machine Learning Foundations & Supervised Learning",
        url: "https://youtu.be/1L420xXpDTg?si=fptwCMXwLa54cwpt",
        videoId: "1L420xXpDTg"
      },
      {
        partNum: 2,
        title: "Part 2: Regression, Feature Engineering & Preprocessing",
        url: "https://youtu.be/Lb0JzFtTmBs?si=n4tNy8TjYtm6NZWR",
        videoId: "Lb0JzFtTmBs"
      },
      {
        partNum: 3,
        title: "Part 3: Classification Algorithms, Trees & Random Forest",
        url: "https://youtu.be/omGvjpmPDoY?si=QBS5C_RGmvTn4h_3",
        videoId: "omGvjpmPDoY"
      },
      {
        partNum: 4,
        title: "Part 4: XGBoost, Hyperparameter Tuning & Model Deployment",
        url: "https://youtu.be/UFAHXZW2hU8?si=4Ws9HcDYIVgj424o",
        videoId: "UFAHXZW2hU8"
      }
    ],
    subtopics: [
      "ML Fundamentals", "Supervised Learning", "Unsupervised Learning",
      "Train/Test Split & Data leakage", "Feature Engineering", "Data Preprocessing",
      "Regression (Linear, Ridge, Lasso)", "Classification (Logistic, KNN, SVM)",
      "Clustering (K-Means, DBSCAN)", "Decision Trees", "Random Forest ensembles",
      "XGBoost & Gradient Boosting", "Model Evaluation metrics", "Cross Validation (K-Fold)",
      "Precision / Recall / F1 Score", "ROC-AUC Curves", "Hyperparameter Tuning (GridSearch)",
      "Scikit-learn Pipelines"
    ]
  },
  {
    id: 10,
    month: "Month 3 • Week 10",
    monthKey: "m3",
    title: "Deep Learning & PyTorch",
    courseChannel: "CampusX & Krish Naik",
    parts: [
      {
        partNum: 1,
        title: "Complete Deep Learning & PyTorch Bootcamp in Hindi",
        url: "https://youtu.be/4b7_4sN0Wkg",
        videoId: "4b7_4sN0Wkg"
      }
    ],
    subtopics: [
      "Neural Networks intuition", "Perceptron & Multilayer Perceptron", "Activation Functions (ReLU, Sigmoid, Softmax)",
      "Forward Propagation", "Backpropagation & Chain Rule", "Loss Functions (Cross-Entropy, MSE)",
      "Optimizers (Adam, SGD, RMSprop)", "Gradient Descent variants", "Regularization (Dropout, Weight Decay)",
      "PyTorch fundamentals", "Tensors & Autograd", "Custom PyTorch Training Loops",
      "CNNs (Convolutional Neural Networks)", "RNNs / LSTMs — understand the basics",
      "Transformers — understand the architecture (Self-Attention, Multi-Head)"
    ]
  },
  {
    id: 11,
    month: "Month 3 • Week 11",
    monthKey: "m3",
    title: "LLM & Generative AI",
    courseChannel: "Krish Naik",
    parts: [
      {
        partNum: 1,
        title: "Part 1: Generative AI & Prompt Engineering Fundamentals",
        url: "https://youtu.be/vwncYfhxbR0?si=pS2mzKHPWUC77lDw",
        videoId: "vwncYfhxbR0"
      },
      {
        partNum: 2,
        title: "Part 2: Structured Outputs, Function & Tool Calling",
        url: "https://youtu.be/yodh-oEFnb4?si=G0DoaCGh-8swcH-z",
        videoId: "yodh-oEFnb4"
      },
      {
        partNum: 3,
        title: "Part 3: Advanced LLM APIs (OpenAI, Gemini, Claude)",
        url: "https://youtu.be/CUDT5E6jz84?si=kqi3k36iQPjr9-8F",
        videoId: "CUDT5E6jz84"
      }
    ],
    subtopics: [
      "LLM fundamentals", "Tokens & Tokenization (BPE)", "Context Windows & limits",
      "Embeddings models", "Temperature, Top-p, Top-k", "Prompt Engineering principles",
      "System / User / Assistant prompts", "Few-shot prompting techniques", "Structured outputs (JSON Schema / Pydantic)",
      "Function / Tool Calling protocols", "LLM APIs integration", "OpenAI API",
      "Gemini API (Google AI Studio)", "Claude API (Anthropic)", "Streaming responses (SSE)",
      "API cost & rate limits optimization", "Error handling & retry strategies"
    ]
  },
  {
    id: 12,
    month: "Month 3 • Week 12",
    monthKey: "m3",
    title: "RAG (Retrieval-Augmented Generation)",
    courseChannel: "Krish Naik",
    parts: [
      {
        partNum: 1,
        title: "End-to-End Production RAG with Vector DBs in Hindi",
        url: "https://youtu.be/mHxLXzYjQRE?si=3Q_WZBWlFVo8m_DG",
        videoId: "mHxLXzYjQRE"
      }
    ],
    subtopics: [
      "What is RAG? (Naive vs. Modular)", "Document ingestion pipelines", "Chunking strategies (Fixed, Recursive, Semantic)",
      "Embedding models & dimensionalities", "Vector databases (ChromaDB, Pinecone, Qdrant)", "Similarity search (Cosine, Euclidean)",
      "Metadata filtering & hybrid search", "Retrieval precision & recall", "Reranking basics (Cross-Encoders / Cohere)",
      "Context construction & prompt injection defense", "RAG evaluation (Ragas / TruLens triad)", "Hallucination reduction techniques",
      "Build a complete RAG application"
    ]
  },
  {
    id: 13,
    month: "Month 4 • Week 13",
    monthKey: "m4",
    title: "LangChain",
    courseChannel: "Krish Naik",
    parts: [
      {
        partNum: 1,
        title: "LangChain Complete Masterclass (Chains, Agents, LCEL)",
        url: "https://youtu.be/mQUVzpyfzng?si=xKNGlTtjO5eoJdbx",
        videoId: "mQUVzpyfzng"
      }
    ],
    subtopics: [
      "LangChain fundamentals & LCEL", "Chat Models & LLM wrappers", "Prompt Templates",
      "Chains (Sequential & Runnable)", "Retrievers & VectorStore integrations", "Tools & Custom Tool creation",
      "Agent Executors", "Structured outputs with PydanticOutputParser", "Memory concepts & buffer stores",
      "RAG with LangChain", "Build an end-to-end LLM application"
    ]
  },
  {
    id: 14,
    month: "Month 4 • Week 14",
    monthKey: "m4",
    title: "LangGraph (Agentic AI Workflows)",
    courseChannel: "Krish Naik",
    parts: [
      {
        partNum: 1,
        title: "LangGraph Masterclass: Multi-Agent Workflows & State Machines",
        url: "https://youtu.be/0kFpG06H4t8",
        videoId: "0kFpG06H4t8"
      }
    ],
    subtopics: [
      "Graph-based AI workflows", "Nodes (Functions & LLMs)", "Edges & Conditional routing",
      "State definitions & TypedDict / Pydantic", "Multi-step agent workflows", "Autonomous Agents loops",
      "Human-in-the-loop checkpoints & approvals", "Tool calling in graphs", "Agent memory & persistence (Checkpointers)",
      "Build a multi-agent self-correcting AI workflow"
    ]
  },
  {
    id: 15,
    month: "Month 4 • Week 15",
    monthKey: "m4",
    title: "AWS & AI Deployment",
    courseChannel: "Abhishek Veeramalla",
    parts: [
      {
        partNum: 1,
        title: "AWS Cloud for DevOps & AI Developers in Hindi",
        url: "https://youtu.be/KmsfUenqK4w?si=EBBicuqmltY7yZhz",
        videoId: "KmsfUenqK4w"
      }
    ],
    subtopics: [
      "AWS Fundamentals", "IAM (Roles & Policies)", "EC2 (Virtual Instances & Security Groups)",
      "S3 (Object Storage for Datasets)", "Lambda (Serverless Compute)", "API Gateway",
      "CloudWatch (Logs & Metrics)", "AWS networking basics (VPC, Subnets)", "Environment / secrets management",
      "Deploy Python APIs (FastAPI on EC2 / App Runner)", "Deploy AI applications",
      "Understand AWS AI/ML services (Bedrock, SageMaker)", "Cloud Cost awareness & budgets", "Production monitoring"
    ]
  },
  {
    id: 16,
    month: "Month 4 • Week 16",
    monthKey: "m4",
    title: "Production AI Engineering & LLMOps",
    courseChannel: "Krish Naik & CampusX",
    parts: [
      {
        partNum: 1,
        title: "LLMOps & Production AI Deployment Masterclass",
        url: "https://youtu.be/X9VvFD_NGYY?si=moxxIko2mUr5XSnq",
        videoId: "X9VvFD_NGYY"
      }
    ],
    subtopics: [
      "Project architecture & system design", "Authentication & API security (JWT / OAuth)", "Database integration & connection pooling",
      "Structured Logging (Loguru / OpenTelemetry)", "Production Error handling & fallbacks", "Automated Testing (pytest for AI)",
      "API Rate limiting & Token budgeting", "Semantic Caching (Redis / GPTCache)", "Docker basics & multi-stage containerization",
      "CI/CD pipelines with GitHub Actions", "Monitoring & Observability (Langfuse / Arize)", "Continuous Evaluation & Ground Truth",
      "Performance optimization & batching", "GitHub documentation & Architecture diagrams", "Production Deployment"
    ]
  }
];

// PROJECT REQUIREMENTS
const P1_REQUIREMENTS = [
  "Real Problem Defined", "Real Users / Use Case Addressed",
  "Clean Responsive UI", "FastAPI / Python Backend API",
  "SQL / Relational Database Integration", "LLM API Integration (OpenAI/Gemini/Claude)",
  "Custom RAG Pipeline with Vector DB", "LangChain Integration",
  "LangGraph Workflow", "Authentication & User Security",
  "Production Cloud Deployment", "GitHub Repository with Architecture README"
];

const P2_REQUIREMENTS = [
  "Advanced Multi-Step LLM Workflow", "State-of-the-Art RAG (Hybrid/Reranking)",
  "Autonomous Multi-Agent System (LangGraph)", "External Tool Calling (APIs, Code Sandbox, Search)",
  "Self-Correction & Human-in-the-Loop", "PostgreSQL / Vector Database Hybrid",
  "High-Throughput Python Backend", "AWS Cloud Deployment (EC2/Lambda/S3)",
  "Authentication & Rate Limiting", "Automated Evaluation Pipeline (Ragas/TruLens)",
  "Production Monitoring & Tracing (Langfuse)", "Full Portfolio-Grade Documentation & Live Demo"
];

// 21 FINAL AI CHECKLIST ITEMS
const FINAL_CHECKLIST = [
  { id: "chk_python", title: "Strong Python Core & OOP", category: "Core Software" },
  { id: "chk_git", title: "Git & Clean GitHub Portfolio", category: "Core Software" },
  { id: "chk_apis", title: "FastAPI, REST APIs & HTTP", category: "Core Software" },
  { id: "chk_sql", title: "SQL & Relational Databases", category: "Core Software" },
  { id: "chk_numpy", title: "NumPy Vectorization & Arrays", category: "Data & Math" },
  { id: "chk_pandas", title: "Pandas & Exploratory Data Analysis", category: "Data & Math" },
  { id: "chk_dataviz", title: "Data Visualization (Matplotlib/Seaborn)", category: "Data & Math" },
  { id: "chk_math", title: "Mathematics (Linear Algebra, Calculus, Stats)", category: "Data & Math" },
  { id: "chk_ml", title: "Machine Learning & Scikit-learn", category: "Machine Learning" },
  { id: "chk_dl", title: "Deep Learning & PyTorch Basics", category: "Machine Learning" },
  { id: "chk_prompt", title: "Prompt Engineering & Structured Outputs", category: "GenAI & LLMs" },
  { id: "chk_llm_apis", title: "LLM APIs (OpenAI, Gemini, Claude)", category: "GenAI & LLMs" },
  { id: "chk_rag", title: "Production RAG & Vector DBs", category: "GenAI & LLMs" },
  { id: "chk_langchain", title: "LangChain Fundamentals & LCEL", category: "Agentic AI" },
  { id: "chk_langgraph", title: "LangGraph Multi-Agent Workflows", category: "Agentic AI" },
  { id: "chk_aws", title: "AWS Cloud Deployment (EC2, S3, IAM)", category: "Cloud & LLMOps" },
  { id: "chk_prod_ai", title: "Production AI Engineering & Docker", category: "Cloud & LLMOps" },
  { id: "chk_proj1", title: "Project 1: Full-Stack AI Application Deployed", category: "Capstone Projects" },
  { id: "chk_proj2", title: "Project 2: Advanced Agentic AI System Deployed", category: "Capstone Projects" },
  { id: "chk_resume", title: "Targeted AI Engineer Resume Built", category: "Career Readiness" },
  { id: "chk_interview", title: "Technical Interview & System Design Prep", category: "Career Readiness" }
];

// 2. HELPER: EXTRACT YOUTUBE VIDEO ID
function extractYouTubeId(url) {
  if (!url) return "";
  let videoId = "";
  if (url.includes("youtu.be/")) {
    const match = url.match(/youtu\.be\/([^#&?]+)/);
    if (match) videoId = match[1];
  } else if (url.includes("watch?v=")) {
    const match = url.match(/[?&]v=([^#&?]+)/);
    if (match) videoId = match[1];
  } else if (url.includes("embed/")) {
    const match = url.match(/embed\/([^#&?]+)/);
    if (match) videoId = match[1];
  }
  return videoId || url;
}

// 3. STORAGE & STATE MANAGEMENT
const STORAGE_KEY = "ai_engineer_channu_patil_v6";

class LMSState {
  constructor() {
    this.activePhaseId = 1;
    this.activeMonthFilter = "all";
    this.searchQuery = "";
    this.currentView = "home"; // "home" or "classroom"
    this.data = this.loadState();
  }

  loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Storage parse error", e);
      }
    }
    return this.getDefaultState();
  }

  getDefaultState() {
    const phases = {};
    INITIAL_ROADMAP_DATA.forEach(phase => {
      phases[phase.id] = {
        activePartIndex: 0,
        customUrls: {},
        completedParts: [], // stores indices of watched lessons
        completedSubtopics: []
      };
    });

    return {
      version: 6,
      phases: phases,
      project1: {
        name: "Enterprise Legal Contract Analyzer with RAG",
        github: "https://github.com/username/project-1-ai",
        live: "https://ai-project-1.up.railway.app",
        notes: "FastAPI backend, ChromaDB vectors, PostgreSQL authentication, Gemini 1.5 Flash API.",
        checkedReqs: []
      },
      project2: {
        name: "Autonomous Competitive Intelligence Agent",
        github: "https://github.com/username/project-2-agents",
        live: "https://ai-agents.yourdomain.com",
        notes: "LangGraph multi-node graph, Tavily web search, code sandbox, Langfuse tracing on AWS EC2.",
        checkedReqs: []
      },
      finalChecklist: []
    };
  }

  save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
  }
}

const state = new LMSState();

// 4. SOUND CHIME SYNTHESIZER
function playChime(type = "success") {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === "success") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } else if (type === "complete") {
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g);
        g.connect(ctx.destination);
        o.type = "triangle";
        o.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.07);
        g.gain.setValueAtTime(0.1, ctx.currentTime + i * 0.07);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
        o.start(ctx.currentTime + i * 0.07);
        o.stop(ctx.currentTime + 0.55);
      });
    }
  } catch (e) {}
}

function showToast(message) {
  const toast = document.getElementById("app-toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

// 5. VIEW SWITCHING (HOME <-> CLASSROOM)
function pauseActiveVideo() {
  try {
    if (ytPlayer && typeof ytPlayer.pauseVideo === "function") {
      ytPlayer.pauseVideo();
    }
  } catch (e) {}

  try {
    const iframe = document.querySelector("#lms-yt-player-target iframe");
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
  } catch (e) {}
}

// 5.1 PASSWORD ACCESS LOCK SYSTEM (Password: "Channu@12345")
const COURSE_PASSWORD = "Channu@12345";
let pendingUnlockCallback = null;

function isCourseUnlocked() {
  return sessionStorage.getItem("ai_course_unlocked") === "true" ||
         localStorage.getItem("ai_course_unlocked") === "true";
}

function promptForPassword(onSuccess) {
  if (isCourseUnlocked()) {
    if (typeof onSuccess === "function") onSuccess();
    return;
  }

  pendingUnlockCallback = onSuccess;
  const modal = document.getElementById("password-modal");
  const pwdInput = document.getElementById("course-access-password");
  const errorMsg = document.getElementById("password-error-msg");

  if (modal) {
    if (errorMsg) errorMsg.style.display = "none";
    if (pwdInput) {
      pwdInput.value = "";
      setTimeout(() => pwdInput.focus(), 150);
    }
    modal.style.display = "flex";
  }
}

function closePasswordModal() {
  const modal = document.getElementById("password-modal");
  if (modal) modal.style.display = "none";
  pendingUnlockCallback = null;
}

function verifyCoursePassword() {
  const pwdInput = document.getElementById("course-access-password");
  const errorMsg = document.getElementById("password-error-msg");
  const entered = pwdInput ? pwdInput.value.trim() : "";

  if (entered === COURSE_PASSWORD) {
    sessionStorage.setItem("ai_course_unlocked", "true");
    localStorage.setItem("ai_course_unlocked", "true");
    if (errorMsg) errorMsg.style.display = "none";
    closePasswordModal();
    playChime("success");
    showToast("🔓 Access Granted! Welcome to the Classroom.");

    if (typeof pendingUnlockCallback === "function") {
      const cb = pendingUnlockCallback;
      pendingUnlockCallback = null;
      cb();
    } else {
      switchView("classroom");
    }
  } else {
    if (errorMsg) {
      errorMsg.style.display = "block";
    }
    if (pwdInput) {
      pwdInput.select();
    }
    showToast("⚠️ Incorrect password. Please try again.");
  }
}

function setupPasswordLock() {
  const form = document.getElementById("password-form");
  const submitBtn = document.getElementById("btn-submit-password");
  const cancelBtn = document.getElementById("btn-cancel-password");
  const toggleBtn = document.getElementById("btn-toggle-pwd");
  const pwdInput = document.getElementById("course-access-password");
  const modal = document.getElementById("password-modal");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      verifyCoursePassword();
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      verifyCoursePassword();
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", closePasswordModal);
  }

  if (toggleBtn && pwdInput) {
    toggleBtn.addEventListener("click", () => {
      if (pwdInput.type === "password") {
        pwdInput.type = "text";
        toggleBtn.innerHTML = `
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
          </svg>
        `;
      } else {
        pwdInput.type = "password";
        toggleBtn.innerHTML = `
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        `;
      }
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closePasswordModal();
    });
  }
}

function switchView(viewName) {
  state.currentView = viewName;

  const homeView = document.getElementById("view-home");
  const classroomView = document.getElementById("view-classroom");
  const homeBtn = document.getElementById("btn-nav-home");
  const classroomBtn = document.getElementById("btn-nav-classroom");
  const mobileToggle = document.getElementById("btn-toggle-sidebar");

  if (viewName === "home") {
    // AUTOMATICALLY STOP / PAUSE THE COURSE VIDEO WHEN COMING BACK TO HOME
    pauseActiveVideo();

    homeView.style.display = "block";
    homeView.classList.add("active");
    classroomView.style.display = "none";
    classroomView.classList.remove("active");

    homeBtn.classList.add("active");
    classroomBtn.classList.remove("active");
    mobileToggle.style.display = "none";
    updateHomeCTA();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    homeView.style.display = "none";
    homeView.classList.remove("active");
    classroomView.style.display = "block";
    classroomView.classList.add("active");

    classroomBtn.classList.add("active");
    homeBtn.classList.remove("active");
    if (mobileToggle) mobileToggle.style.display = "";

    if (!isPhaseUnlocked(state.activePhaseId)) {
      const next = getNextUnfinishedLesson();
      if (next && next.phaseId) {
        state.activePhaseId = next.phaseId;
        state.data.phases[next.phaseId].activePartIndex = next.partIndex;
      } else {
        state.activePhaseId = 1;
      }
    }

    loadPhaseInTheater(state.activePhaseId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// PROGRESSION & COMPLETION HELPER FUNCTIONS
function isPhaseCompleted(phaseId) {
  const phase = INITIAL_ROADMAP_DATA.find(p => p.id === phaseId);
  if (!phase) return false;
  const pState = state.data.phases[phaseId];
  if (!pState || !pState.completedParts) return false;
  return phase.parts.every((_, idx) => pState.completedParts.includes(idx));
}

function isPhaseUnlocked(phaseId) {
  if (phaseId <= 1) return true;
  for (let i = 1; i < phaseId; i++) {
    if (!isPhaseCompleted(i)) return false;
  }
  return true;
}

function isPartUnlocked(phaseId, partIndex) {
  if (!isPhaseUnlocked(phaseId)) return false;
  if (partIndex === 0) return true;
  const pState = state.data.phases[phaseId];
  if (!pState || !pState.completedParts) return false;
  for (let i = 0; i < partIndex; i++) {
    if (!pState.completedParts.includes(i)) return false;
  }
  return true;
}

function getNextUnfinishedLesson() {
  let hasStarted = false;
  
  for (let i = 1; i <= 16; i++) {
    const phase = INITIAL_ROADMAP_DATA.find(p => p.id === i);
    const pState = state.data.phases[i];
    
    if (pState && ((pState.completedParts && pState.completedParts.length > 0) || (pState.completedSubtopics && pState.completedSubtopics.length > 0))) {
      hasStarted = true;
    }
    
    for (let partIdx = 0; partIdx < phase.parts.length; partIdx++) {
      if (!pState || !pState.completedParts || !pState.completedParts.includes(partIdx)) {
        return {
          phaseId: i,
          phaseTitle: phase.title,
          partIndex: partIdx,
          partTitle: phase.parts[partIdx].title,
          hasStarted: hasStarted
        };
      }
    }
  }
  
  return { allCompleted: true, hasStarted: true };
}

// UPDATE HOME CTA WITH RESUME PROGRESS
function updateHomeCTA() {
  const ctaBtn = document.getElementById("btn-home-cta");
  const ctaText = document.getElementById("home-cta-text");
  const ctaSubtext = document.getElementById("home-cta-subtext");
  if (!ctaBtn || !ctaText) return;

  const next = getNextUnfinishedLesson();

  if (next.allCompleted) {
    ctaText.textContent = "🏆 All 16 Weeks Completed! Review Curriculum →";
    if (ctaSubtext) ctaSubtext.textContent = "You have completed the entire 4-month AI Engineering roadmap!";
    ctaBtn.onclick = () => {
      promptForPassword(() => {
        state.activePhaseId = 1;
        state.data.phases[1].activePartIndex = 0;
        state.save();
        switchView("classroom");
      });
    };
  } else if (!next.hasStarted) {
    ctaText.textContent = "Start Learning AI Engineer →";
    if (ctaSubtext) ctaSubtext.textContent = "Click to enter password & begin Week 1: Python Fundamentals";
    ctaBtn.onclick = () => {
      promptForPassword(() => {
        state.activePhaseId = 1;
        state.data.phases[1].activePartIndex = 0;
        state.save();
        switchView("classroom");
      });
    };
  } else {
    const partNum = next.partIndex + 1;
    ctaText.textContent = `Resume Week ${next.phaseId}: ${next.phaseTitle} (Part ${partNum}) →`;
    if (ctaSubtext) ctaSubtext.textContent = `Pick up right where you left off: ${next.partTitle}`;
    ctaBtn.onclick = () => {
      promptForPassword(() => {
        state.activePhaseId = next.phaseId;
        state.data.phases[next.phaseId].activePartIndex = next.partIndex;
        state.save();
        switchView("classroom");
      });
    };
  }
}

// 6. YOUTUBE IFRAME PLAYER API (AUTO-PLAY & STRICT AUTO-ADVANCE)
let ytPlayer = null;
let ytApiReady = false;
let pendingVideoId = null;

window.onYouTubeIframeAPIReady = function() {
  ytApiReady = true;
  if (pendingVideoId) {
    createYTPlayer(pendingVideoId);
  }
};

function createYTPlayer(videoId) {
  const container = document.getElementById("lms-yt-player-target");
  if (!container) return;
  container.innerHTML = "";

  try {
    ytPlayer = new YT.Player("lms-yt-player-target", {
      height: "100%",
      width: "100%",
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        rel: 0,
        modestbranding: 1,
        enablejsapi: 1
      },
      events: {
        onReady: (event) => {
          hideVideoError();
          try {
            event.target.playVideo();
          } catch (e) {}
        },
        onStateChange: onPlayerStateChange,
        onError: onPlayerError
      }
    });
  } catch (err) {
    renderIframeFallback(videoId);
  }
}

function renderIframeFallback(videoId) {
  const container = document.getElementById("lms-yt-player-target");
  if (!container) return;
  container.innerHTML = `
    <iframe 
      src="https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&rel=0" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen
      style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;">
    </iframe>
  `;
}

// Strict Video Finished Handler: Marks lesson complete & auto advances
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    playChime("complete");
    markCurrentLessonCompleted(true);
  }
}

function onPlayerError(event) {
  const phase = INITIAL_ROADMAP_DATA.find(p => p.id === state.activePhaseId);
  const pState = state.data.phases[state.activePhaseId];
  const currentPart = phase.parts[pState.activePartIndex] || phase.parts[0];
  const directUrl = pState.customUrls && pState.customUrls[pState.activePartIndex] 
    ? pState.customUrls[pState.activePartIndex] 
    : currentPart.url;

  showVideoError("This video requires watching directly on YouTube (content owner restriction).", directUrl);
}

function showVideoError(msg, directUrl) {
  const banner = document.getElementById("video-error-banner");
  const msgEl = document.getElementById("video-error-message");
  const linkEl = document.getElementById("btn-error-watch-yt");

  if (banner && msgEl && linkEl) {
    msgEl.textContent = msg;
    linkEl.href = directUrl;
    banner.style.display = "flex";
  }
}

function hideVideoError() {
  const banner = document.getElementById("video-error-banner");
  if (banner) banner.style.display = "none";
}

// 7. LESSON COMPLETION TRACKER (ENFORCE COMPLETION)
function markCurrentLessonCompleted(autoAdvance = false) {
  const phase = INITIAL_ROADMAP_DATA.find(p => p.id === state.activePhaseId);
  const pState = state.data.phases[state.activePhaseId];
  if (!pState.completedParts) pState.completedParts = [];
  const currentIdx = pState.activePartIndex;

  const wasAlreadyDone = pState.completedParts.includes(currentIdx);

  if (!wasAlreadyDone) {
    pState.completedParts.push(currentIdx);
    state.save();
    playChime("success");
    showToast(`✓ Marked Part ${currentIdx + 1} as Complete!`);
  }

  // Update UI components
  renderVideoPartsSelector(phase, pState);
  renderSidebarModules();
  updateNavigationButtons(phase, pState);
  updateActiveVideo(phase, pState);

  const hasNextPart = currentIdx + 1 < phase.parts.length;
  const allPhaseDone = isPhaseCompleted(phase.id);

  if (hasNextPart) {
    // If autoAdvance (video ended) or manual complete, auto transition to Part 2
    pState.activePartIndex = currentIdx + 1;
    state.save();
    showToast(`▶ Unlocked and now playing Part ${pState.activePartIndex + 1}...`);
    renderVideoPartsSelector(phase, pState);
    updateActiveVideo(phase, pState);
    updateNavigationButtons(phase, pState);
  } else if (allPhaseDone) {
    playChime("complete");
    if (state.activePhaseId < 16) {
      if (autoAdvance) {
        showToast(`🎉 Week ${state.activePhaseId} Finished! Advancing to Week ${state.activePhaseId + 1}...`);
        loadPhaseInTheater(state.activePhaseId + 1);
      } else {
        showToast(`🎉 All parts in Week ${state.activePhaseId} completed! Week ${state.activePhaseId + 1} is now unlocked.`);
      }
    } else {
      showToast("🏆 Congratulations! You have finished all 16 Weeks!");
    }
  }
}

// DYNAMIC NAVIGATION BUTTON UPDATE
function updateNavigationButtons(phase, pState) {
  const nextBtn = document.getElementById("btn-next-phase");
  const nextBtnText = document.getElementById("btn-next-phase-text");
  if (!nextBtn) return;

  const currentPartDone = pState.completedParts && pState.completedParts.includes(pState.activePartIndex);
  const hasNextPart = pState.activePartIndex + 1 < phase.parts.length;
  const allPartsDone = isPhaseCompleted(phase.id);

  if (!currentPartDone) {
    if (nextBtnText) nextBtnText.textContent = `Complete Part ${pState.activePartIndex + 1} to Advance 🔒`;
    nextBtn.className = "btn btn-secondary btn-sm";
    nextBtn.title = "Complete the current video before advancing";
  } else if (hasNextPart) {
    if (nextBtnText) nextBtnText.textContent = `Next: Part ${pState.activePartIndex + 2} →`;
    nextBtn.className = "btn btn-primary btn-sm";
    nextBtn.title = `Advance to Part ${pState.activePartIndex + 2}`;
  } else if (allPartsDone) {
    if (state.activePhaseId < 16) {
      if (nextBtnText) nextBtnText.textContent = `Next: Week ${state.activePhaseId + 1} →`;
      nextBtn.className = "btn btn-primary btn-sm";
      nextBtn.title = `Advance to Week ${state.activePhaseId + 1}`;
    } else {
      if (nextBtnText) nextBtnText.textContent = "Curriculum Complete 🏆";
      nextBtn.className = "btn btn-primary btn-sm";
    }
  }
}

// 8. RENDER LEFT SIDEBAR MODULES (WITH LOCK & COMPLETION BADGES)
function renderSidebarModules() {
  const container = document.getElementById("syllabus-modules-list");
  if (!container) return;
  container.innerHTML = "";

  const query = state.searchQuery.trim().toLowerCase();

  INITIAL_ROADMAP_DATA.forEach(phase => {
    if (state.activeMonthFilter !== "all" && phase.monthKey !== state.activeMonthFilter) {
      return;
    }

    if (query) {
      const matchTitle = phase.title.toLowerCase().includes(query);
      const matchSub = phase.subtopics.some(s => s.toLowerCase().includes(query));
      if (!matchTitle && !matchSub) return;
    }

    const pState = state.data.phases[phase.id] || { completedParts: [], completedSubtopics: [] };
    const totalParts = phase.parts.length;
    const doneParts = pState.completedParts ? pState.completedParts.length : 0;
    const isCompleted = isPhaseCompleted(phase.id);
    const isUnlocked = isPhaseUnlocked(phase.id);
    const isActive = phase.id === state.activePhaseId;

    const btn = document.createElement("button");
    btn.className = `module-item-btn ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""} ${!isUnlocked ? "locked" : ""}`;
    btn.id = `sidebar-mod-${phase.id}`;
    
    btn.innerHTML = `
      <div class="module-btn-content">
        <div class="mod-week-row">
          <span class="mod-num">WEEK ${phase.id < 10 ? '0' + phase.id : phase.id}</span>
          ${totalParts > 1 ? `<span class="mod-parts-tag">${doneParts}/${totalParts} Lessons</span>` : ''}
          ${!isUnlocked ? `<span class="mod-parts-tag" style="background:#fee2e2; color:#b91c1c;">Locked 🔒</span>` : ''}
        </div>
        <div class="mod-title">${phase.title}</div>
        <span class="mod-progress-text">${pState.completedSubtopics ? pState.completedSubtopics.length : 0}/${phase.subtopics.length} topics</span>
      </div>
      <div class="mod-check-status ${isCompleted ? "completed" : (!isUnlocked ? "locked" : "")}">
        ${!isUnlocked ? `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        ` : (isCompleted ? `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        ` : `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="9"/>
          </svg>
        `)}
      </div>
    `;

    btn.addEventListener("click", () => {
      if (!isUnlocked) {
        showToast(`🔒 Week ${phase.id} is locked! Complete all lessons (Part 1 & Part 2) in Week ${phase.id - 1} first.`);
        return;
      }
      loadPhaseInTheater(phase.id);
      closeMobileSidebar();
    });

    container.appendChild(btn);
  });
}

// 9. LOAD ACTIVE PHASE INTO THEATER
function loadPhaseInTheater(phaseId) {
  if (!isPhaseUnlocked(phaseId)) {
    showToast(`🔒 Week ${phaseId} is locked! Complete all previous lessons first.`);
    return;
  }

  state.activePhaseId = phaseId;
  const phase = INITIAL_ROADMAP_DATA.find(p => p.id === phaseId);
  const pState = state.data.phases[phaseId] || {
    activePartIndex: 0,
    customUrls: {},
    completedParts: [],
    completedSubtopics: []
  };

  if (pState.activePartIndex === undefined || pState.activePartIndex >= phase.parts.length) {
    pState.activePartIndex = 0;
  }

  // 1. Header Meta
  document.getElementById("active-month-pill").textContent = `${phase.month}`;
  document.getElementById("active-instructor-pill").textContent = `${phase.courseChannel} • Hindi Masterclass`;
  document.getElementById("active-module-title").textContent = `Phase ${phase.id}: ${phase.title}`;

  // 2. Video Parts Selector
  renderVideoPartsSelector(phase, pState);

  // 3. Update Video Player
  updateActiveVideo(phase, pState);

  // 4. Update Navigation Buttons
  updateNavigationButtons(phase, pState);

  // 5. Topic Checklist
  renderActiveSubtopics(phase, pState);

  // 6. Sidebar Active Item
  document.querySelectorAll(".module-item-btn").forEach(b => b.classList.remove("active"));
  const activeBtn = document.getElementById(`sidebar-mod-${phaseId}`);
  if (activeBtn) activeBtn.classList.add("active");
}

// RENDER VIDEO LESSON PILLS (WITH STRICT LOCK & COMPLETED CHECKS)
function renderVideoPartsSelector(phase, pState) {
  const partsContainer = document.getElementById("parts-buttons-container");
  const partsStrip = document.getElementById("video-parts-strip");
  if (!partsContainer || !partsStrip) return;
  partsContainer.innerHTML = "";

  if (!phase.parts || phase.parts.length <= 1) {
    partsStrip.style.display = "none";
    return;
  }

  partsStrip.style.display = "flex";

  phase.parts.forEach((part, index) => {
    const isDone = pState.completedParts && pState.completedParts.includes(index);
    const isUnlocked = isPartUnlocked(phase.id, index);
    const isActive = index === pState.activePartIndex;

    const btn = document.createElement("button");
    
    if (!isUnlocked) {
      btn.className = "part-pill-btn locked";
      btn.title = `Complete Part ${index} first to unlock this lesson`;
      btn.innerHTML = `
        <span class="part-pill-icon">🔒</span>
        <span>${part.title} (Locked)</span>
      `;
      btn.addEventListener("click", () => {
        showToast(`🔒 Lesson Locked! You must complete Part ${index} before unlocking Part ${index + 1}.`);
      });
    } else {
      btn.className = `part-pill-btn ${isActive ? "active" : ""} ${isDone ? "completed" : ""}`;
      btn.innerHTML = `
        <span class="part-pill-icon">${isDone ? "✓" : (isActive ? "🎬" : "○")}</span>
        <span>${part.title} ${isDone ? "(Completed)" : ""}</span>
      `;
      btn.addEventListener("click", () => {
        pState.activePartIndex = index;
        state.save();
        renderVideoPartsSelector(phase, pState);
        updateActiveVideo(phase, pState);
        updateNavigationButtons(phase, pState);
      });
    }

    partsContainer.appendChild(btn);
  });
}

// UPDATE ACTIVE VIDEO PLAYER WITH AUTOPLAY
function updateActiveVideo(phase, pState) {
  hideVideoError();
  const currentPart = phase.parts[pState.activePartIndex] || phase.parts[0];
  const customUrl = pState.customUrls ? pState.customUrls[pState.activePartIndex] : null;
  const targetUrl = customUrl || currentPart.url;
  const videoId = extractYouTubeId(targetUrl);
  const isDone = pState.completedParts && pState.completedParts.includes(pState.activePartIndex);

  document.getElementById("video-playing-part-badge").textContent = phase.parts.length > 1 
    ? `LESSON ${pState.activePartIndex + 1} OF ${phase.parts.length}` 
    : "NOW PLAYING:";
    
  document.getElementById("active-video-title").textContent = currentPart.title;
  document.getElementById("btn-open-yt-external").href = targetUrl;
  document.getElementById("custom-url-input").value = targetUrl;
  document.getElementById("custom-url-edit-panel").style.display = "none";

  // Update Mark Lesson Completed button state
  const markBtn = document.getElementById("btn-mark-lesson-complete");
  const markBtnText = document.getElementById("mark-lesson-btn-text");
  if (isDone) {
    if (markBtnText) markBtnText.textContent = `Part ${pState.activePartIndex + 1} Completed ✓`;
    if (markBtn) {
      markBtn.className = "btn btn-outline btn-sm";
      markBtn.title = "This lesson part is completed";
    }
  } else {
    if (markBtnText) markBtnText.textContent = `Mark Part ${pState.activePartIndex + 1} as Complete ✓`;
    if (markBtn) {
      markBtn.className = "btn btn-primary btn-sm";
      markBtn.title = "Mark this lesson watched and advance";
    }
  }

  if (ytPlayer && ytPlayer.loadVideoById) {
    try {
      ytPlayer.loadVideoById(videoId);
    } catch (e) {
      renderIframeFallback(videoId);
    }
  } else if (ytApiReady) {
    createYTPlayer(videoId);
  } else {
    pendingVideoId = videoId;
    renderIframeFallback(videoId);
  }
}

// RENDER ACTIVE SUBTOPICS CHECKLIST
function renderActiveSubtopics(phase, pState) {
  const container = document.getElementById("current-phase-subtopics");
  container.innerHTML = "";

  const total = phase.subtopics.length;
  const done = pState.completedSubtopics.length;
  const pct = Math.round((done / total) * 100);

  document.getElementById("checklist-card-badge").textContent = `${pct}% Completed`;

  phase.subtopics.forEach(topic => {
    const isChecked = pState.completedSubtopics.includes(topic);
    const label = document.createElement("label");
    label.className = "topic-item-label";
    label.innerHTML = `
      <input type="checkbox" ${isChecked ? "checked" : ""}>
      <span class="topic-item-text">${topic}</span>
    `;

    label.querySelector("input").addEventListener("change", (e) => {
      if (e.target.checked) {
        if (!pState.completedSubtopics.includes(topic)) {
          pState.completedSubtopics.push(topic);
          playChime("success");
        }
      } else {
        const i = pState.completedSubtopics.indexOf(topic);
        if (i > -1) pState.completedSubtopics.splice(i, 1);
      }
      state.save();
      renderActiveSubtopics(phase, pState);
      renderSidebarModules();
    });

    container.appendChild(label);
  });
}

// 10. MOBILE DRAWER HANDLING
function setupMobileSidebar() {
  const sidebar = document.getElementById("lms-sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");
  const toggleBtn = document.getElementById("btn-toggle-sidebar");
  const closeBtn = document.getElementById("btn-close-sidebar");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
    backdrop.classList.add("active");
  });

  closeBtn.addEventListener("click", closeMobileSidebar);
  backdrop.addEventListener("click", closeMobileSidebar);
}

function closeMobileSidebar() {
  const sidebar = document.getElementById("lms-sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");
  if (sidebar) sidebar.classList.remove("open");
  if (backdrop) backdrop.classList.remove("active");
}

// 11. VIDEO URL CUSTOMIZER
function setupVideoCustomizer() {
  const panel = document.getElementById("custom-url-edit-panel");
  const editBtn = document.getElementById("btn-edit-url");
  const saveBtn = document.getElementById("btn-save-custom-url");
  const cancelBtn = document.getElementById("btn-cancel-custom-url");
  const input = document.getElementById("custom-url-input");

  editBtn.addEventListener("click", () => {
    panel.style.display = panel.style.display === "none" ? "flex" : "none";
    if (panel.style.display === "flex") input.focus();
  });

  cancelBtn.addEventListener("click", () => {
    panel.style.display = "none";
  });

  saveBtn.addEventListener("click", () => {
    const newUrl = input.value.trim();
    if (!newUrl) return;

    const pState = state.data.phases[state.activePhaseId];
    if (!pState.customUrls) pState.customUrls = {};
    pState.customUrls[pState.activePartIndex] = newUrl;
    state.save();

    const videoId = extractYouTubeId(newUrl);
    if (ytPlayer && ytPlayer.loadVideoById) {
      ytPlayer.loadVideoById(videoId);
    } else {
      renderIframeFallback(videoId);
    }

    document.getElementById("btn-open-yt-external").href = newUrl;
    panel.style.display = "none";
    showToast("Updated video player with new lesson URL!");
  });
}

// 12. CAPSTONE PROJECTS & JOB READINESS MODALS
function setupModals() {
  const projModal = document.getElementById("projects-modal");
  document.getElementById("btn-open-projects-modal").addEventListener("click", () => {
    renderProjectsModal();
    projModal.style.display = "flex";
    closeMobileSidebar();
  });
  document.getElementById("btn-close-projects-modal").addEventListener("click", () => {
    projModal.style.display = "none";
  });

  const readModal = document.getElementById("readiness-modal");
  document.getElementById("btn-open-readiness-modal").addEventListener("click", () => {
    renderReadinessModal();
    readModal.style.display = "flex";
    closeMobileSidebar();
  });
  document.getElementById("btn-close-readiness-modal").addEventListener("click", () => {
    readModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === projModal) projModal.style.display = "none";
    if (e.target === readModal) readModal.style.display = "none";
  });
}

function renderProjectsModal() {
  const p1 = state.data.project1;
  document.getElementById("p1-name").value = p1.name || "";
  document.getElementById("p1-github").value = p1.github || "";
  document.getElementById("p1-live").value = p1.live || "";
  document.getElementById("p1-notes").value = p1.notes || "";

  const p1Box = document.getElementById("p1-checklist");
  p1Box.innerHTML = P1_REQUIREMENTS.map((req, idx) => {
    const isChecked = p1.checkedReqs && p1.checkedReqs.includes(idx);
    return `
      <label style="display:flex; align-items:center; gap:0.4rem; font-size:0.75rem;">
        <input type="checkbox" data-p1-req="${idx}" ${isChecked ? "checked" : ""}>
        <span>${req}</span>
      </label>
    `;
  }).join("");

  document.getElementById("p1-req-count").textContent = `${p1.checkedReqs ? p1.checkedReqs.length : 0}/${P1_REQUIREMENTS.length}`;

  const p2 = state.data.project2;
  document.getElementById("p2-name").value = p2.name || "";
  document.getElementById("p2-github").value = p2.github || "";
  document.getElementById("p2-live").value = p2.live || "";
  document.getElementById("p2-notes").value = p2.notes || "";

  const p2Box = document.getElementById("p2-checklist");
  p2Box.innerHTML = P2_REQUIREMENTS.map((req, idx) => {
    const isChecked = p2.checkedReqs && p2.checkedReqs.includes(idx);
    return `
      <label style="display:flex; align-items:center; gap:0.4rem; font-size:0.75rem;">
        <input type="checkbox" data-p2-req="${idx}" ${isChecked ? "checked" : ""}>
        <span>${req}</span>
      </label>
    `;
  }).join("");

  document.getElementById("p2-req-count").textContent = `${p2.checkedReqs ? p2.checkedReqs.length : 0}/${P2_REQUIREMENTS.length}`;

  p1Box.querySelectorAll("input[data-p1-req]").forEach(chk => {
    chk.addEventListener("change", (e) => {
      const idx = parseInt(e.target.getAttribute("data-p1-req"));
      if (!state.data.project1.checkedReqs) state.data.project1.checkedReqs = [];
      const list = state.data.project1.checkedReqs;
      if (e.target.checked) {
        if (!list.includes(idx)) list.push(idx);
      } else {
        const i = list.indexOf(idx);
        if (i > -1) list.splice(i, 1);
      }
      state.save();
      document.getElementById("p1-req-count").textContent = `${list.length}/${P1_REQUIREMENTS.length}`;
    });
  });

  p2Box.querySelectorAll("input[data-p2-req]").forEach(chk => {
    chk.addEventListener("change", (e) => {
      const idx = parseInt(e.target.getAttribute("data-p2-req"));
      if (!state.data.project2.checkedReqs) state.data.project2.checkedReqs = [];
      const list = state.data.project2.checkedReqs;
      if (e.target.checked) {
        if (!list.includes(idx)) list.push(idx);
      } else {
        const i = list.indexOf(idx);
        if (i > -1) list.splice(i, 1);
      }
      state.save();
      document.getElementById("p2-req-count").textContent = `${list.length}/${P2_REQUIREMENTS.length}`;
    });
  });

  document.getElementById("btn-save-p1").addEventListener("click", () => {
    state.data.project1.name = document.getElementById("p1-name").value.trim();
    state.data.project1.github = document.getElementById("p1-github").value.trim();
    state.data.project1.live = document.getElementById("p1-live").value.trim();
    state.data.project1.notes = document.getElementById("p1-notes").value.trim();
    state.save();
    showToast("Project 1 details saved!");
  });

  document.getElementById("btn-save-p2").addEventListener("click", () => {
    state.data.project2.name = document.getElementById("p2-name").value.trim();
    state.data.project2.github = document.getElementById("p2-github").value.trim();
    state.data.project2.live = document.getElementById("p2-live").value.trim();
    state.data.project2.notes = document.getElementById("p2-notes").value.trim();
    state.save();
    showToast("Project 2 details saved!");
  });
}

function renderReadinessModal() {
  const container = document.getElementById("final-checklist-container");
  container.innerHTML = "";

  const checked = state.data.finalChecklist || [];
  const pct = Math.round((checked.length / FINAL_CHECKLIST.length) * 100);

  document.getElementById("gauge-percent").textContent = `${pct}%`;
  const verdict = document.getElementById("gauge-verdict");
  if (pct >= 85) verdict.textContent = "Job Ready & Interview Primed 🚀";
  else if (pct >= 50) verdict.textContent = "Advanced / Capstone Stage";
  else verdict.textContent = "Foundations Stage";

  FINAL_CHECKLIST.forEach(item => {
    const isChecked = checked.includes(item.id);
    const row = document.createElement("div");
    row.className = `readiness-chk-row ${isChecked ? "completed" : ""}`;
    row.innerHTML = `
      <div class="chk-left">
        <input type="checkbox" ${isChecked ? "checked" : ""}>
        <span class="chk-title-text">${item.title}</span>
      </div>
      <span class="chk-tag">${item.category}</span>
    `;

    row.addEventListener("click", (e) => {
      if (e.target.tagName !== "INPUT") {
        const chk = row.querySelector("input");
        chk.checked = !chk.checked;
        toggleReadinessItem(item.id, chk.checked);
      }
    });

    row.querySelector("input").addEventListener("change", (e) => {
      toggleReadinessItem(item.id, e.target.checked);
    });

    container.appendChild(row);
  });
}

function toggleReadinessItem(id, isChecked) {
  if (!state.data.finalChecklist) state.data.finalChecklist = [];
  const list = state.data.finalChecklist;
  if (isChecked) {
    if (!list.includes(id)) list.push(id);
    playChime("success");
  } else {
    const i = list.indexOf(id);
    if (i > -1) list.splice(i, 1);
  }
  state.save();
  renderReadinessModal();
  document.getElementById("sidebar-readiness-pill").textContent = `${list.length}/${FINAL_CHECKLIST.length}`;
}

// 13. DOM READY INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  setupPasswordLock();
  renderSidebarModules();
  setupMobileSidebar();
  setupVideoCustomizer();
  setupModals();
  updateHomeCTA();

  // Navigation Links (Home <-> Classroom)
  document.getElementById("btn-nav-home").addEventListener("click", () => switchView("home"));
  document.getElementById("btn-nav-classroom").addEventListener("click", () => {
    promptForPassword(() => {
      switchView("classroom");
    });
  });
  document.getElementById("brand-logo-btn").addEventListener("click", (e) => {
    e.preventDefault();
    switchView("home");
  });

  // Mark Lesson Complete button
  document.getElementById("btn-mark-lesson-complete").addEventListener("click", () => {
    markCurrentLessonCompleted(false);
  });

  // Prev / Next Week navigation with multi-part sequential enforcement
  document.getElementById("btn-prev-phase").addEventListener("click", () => {
    const phase = INITIAL_ROADMAP_DATA.find(p => p.id === state.activePhaseId);
    const pState = state.data.phases[state.activePhaseId];

    if (pState.activePartIndex > 0) {
      pState.activePartIndex--;
      state.save();
      renderVideoPartsSelector(phase, pState);
      updateActiveVideo(phase, pState);
      updateNavigationButtons(phase, pState);
    } else if (state.activePhaseId > 1) {
      const prevPhaseId = state.activePhaseId - 1;
      const prevPhase = INITIAL_ROADMAP_DATA.find(p => p.id === prevPhaseId);
      const prevPState = state.data.phases[prevPhaseId];
      if (prevPState) {
        prevPState.activePartIndex = Math.max(0, prevPhase.parts.length - 1);
      }
      state.save();
      loadPhaseInTheater(prevPhaseId);
    }
  });

  document.getElementById("btn-next-phase").addEventListener("click", () => {
    const phase = INITIAL_ROADMAP_DATA.find(p => p.id === state.activePhaseId);
    const pState = state.data.phases[state.activePhaseId];
    const currentPartDone = pState.completedParts && pState.completedParts.includes(pState.activePartIndex);
    const hasNextPart = pState.activePartIndex + 1 < phase.parts.length;
    const allPartsDone = isPhaseCompleted(phase.id);

    if (!currentPartDone) {
      showToast(`🔒 Please complete Part ${pState.activePartIndex + 1} before advancing!`);
      return;
    }

    if (hasNextPart) {
      pState.activePartIndex++;
      state.save();
      renderVideoPartsSelector(phase, pState);
      updateActiveVideo(phase, pState);
      updateNavigationButtons(phase, pState);
      showToast(`▶ Advancing to Part ${pState.activePartIndex + 1}...`);
    } else if (allPartsDone) {
      if (state.activePhaseId < 16) {
        loadPhaseInTheater(state.activePhaseId + 1);
        showToast(`🎉 Welcome to Week ${state.activePhaseId}!`);
      } else {
        showToast("🏆 You have reached the final week!");
      }
    }
  });

  // Month filters
  document.querySelectorAll(".m-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".m-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.activeMonthFilter = tab.getAttribute("data-month");
      renderSidebarModules();
    });
  });

  // Search input
  document.getElementById("syllabus-search").addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderSidebarModules();
  });
});

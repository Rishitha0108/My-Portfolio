// ───────────────────────────────────────────────────────────────────────────
//  Single source of truth — every fact here is derived from Rishitha's resume.
//  Theme: "The Arcane Codex". Flavor lives in section rubrics; substance stays
//  factual and recruiter-legible.
// ───────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Rishitha Keshavareddy',
  firstName: 'Rishitha',
  lastName: 'Keshavareddy',
  role: 'AI / ML Engineer',
  epithet: 'Spellwright of Machine Intelligence',
  focus: 'Generative AI · LLMs · Agentic Systems',
  // Personal brand statement, distilled from the professional summary.
  tagline:
    'I bind frontier AI into governed, production-grade systems that the world’s most regulated enterprises can trust.',
  kicker:
    'Four years turning experimental models into intelligence that holds — under audit, at scale, in production.',
  intro:
    'Generative-AI engineer with 4+ years shipping LLM, NLP, and forecasting systems across banking, insurance, pharma, and higher-ed — where accuracy, compliance, and measurable impact are non-negotiable.',
  email: 'rishithareddy1108@gmail.com',
  phone: '+1 913-257-7944',
  location: 'United States',
  // BASE_URL keeps this correct on GitHub Pages (/My-Portfolio/) and in dev (/).
  resumeFile: `${import.meta.env.BASE_URL}Rishitha_Keshavareddy_Resume.docx`,
  links: {
    // Placeholders — swap in real URLs when available.
    linkedin: '#',
    github: '#',
  },
};

// Hero / About quick stats
export const stats = [
  { value: 4, suffix: '+', label: 'Years forging production AI' },
  { value: 5, suffix: '', label: 'Enterprises across 4 realms' },
  { value: 1200, suffix: '+', label: 'Service hours saved / month' },
  { value: 40, suffix: 'TB+', label: 'Sensor & research data woven' },
];

export const aboutHighlights = [
  {
    title: 'Frontier models, bound to production',
    body: 'GPT-4o, Claude, LLaMA 3, and Mistral — fine-tuned with LoRA/QLoRA and served behind FastAPI microservices with quantization, ONNX, and TensorRT.',
  },
  {
    title: 'Wards against failure',
    body: 'SHAP, LIME, and Fairlearn explainability, PII redaction, OAuth2, GDPR & SOC2 compliance — AI that passes the audit, not just the demo.',
  },
  {
    title: 'Measured by outcomes',
    body: 'Every system tied to a number: hours saved, latency cut, accuracy gained. Impact tracked from data ingestion to deployment.',
  },
];

// ── Skills, grouped into curated "schools" ─────────────────────────────────
export const skillGroups = [
  {
    key: 'genai',
    title: 'Generative AI & LLMs',
    rune: 'Conjuration',
    icon: 'Sparkles',
    accent: 'gold',
    skills: [
      'OpenAI API', 'Anthropic Claude', 'GPT-4o', 'Gemini', 'LLaMA 3', 'Mistral',
      'RAG', 'LoRA / QLoRA', 'PEFT', 'LangChain', 'LlamaIndex', 'Fine-tuning',
    ],
  },
  {
    key: 'agentic',
    title: 'Agentic AI Systems',
    rune: 'Summoning',
    icon: 'Network',
    accent: 'arcane',
    skills: [
      'LangGraph', 'AutoGen', 'CrewAI', 'Model Context Protocol (MCP)',
      'Multi-Agent Systems', 'Tool Use', 'Function Calling', 'ReAct', 'Prompt Chaining',
    ],
  },
  {
    key: 'ml',
    title: 'ML & Deep Learning',
    rune: 'Divination',
    icon: 'BrainCircuit',
    accent: 'emerald',
    skills: [
      'PyTorch', 'TensorFlow', 'Scikit-learn', 'Keras', 'JAX', 'XGBoost',
      'LightGBM', 'BERT / T5', 'CLIP', 'Diffusion · GANs · VAEs', 'LSTM / CNN', 'ARIMA · Prophet',
    ],
  },
  {
    key: 'mlops',
    title: 'MLOps & Deployment',
    rune: 'Enchantment',
    icon: 'Workflow',
    accent: 'ember',
    skills: [
      'MLflow', 'Weights & Biases', 'Triton', 'KServe', 'Docker', 'Kubernetes',
      'ONNX', 'TensorRT', 'FastAPI', 'Model Quantization', 'CI/CD', 'Drift Monitoring',
    ],
  },
  {
    key: 'data',
    title: 'Data, Cloud & Vector DBs',
    rune: 'Transmutation',
    icon: 'Database',
    accent: 'amethyst',
    skills: [
      'AWS SageMaker / Bedrock', 'Azure ML', 'GCP Vertex AI', 'Kafka', 'Spark',
      'Airflow', 'Snowflake', 'Databricks', 'Pinecone', 'FAISS', 'Weaviate', 'pgvector',
    ],
  },
  {
    key: 'responsible',
    title: 'Responsible AI & Security',
    rune: 'Abjuration',
    icon: 'ShieldCheck',
    accent: 'verdant',
    skills: [
      'SHAP', 'LIME', 'Fairlearn', 'RLHF', 'Differential Privacy', 'Federated Learning',
      'PII Redaction', 'OAuth2', 'GDPR', 'SOC2', 'Bias Detection', 'Model Explainability',
    ],
  },
];

// ── Experience chronicle ───────────────────────────────────────────────────
export const experience = [
  {
    company: 'Purdue University',
    role: 'Senior AI & Automation Engineer',
    period: 'Oct 2025 — Present',
    location: 'West Lafayette, IN',
    accent: 'gold',
    blurb:
      'Architecting multi-agent automation and RAG across university research-computing systems.',
    achievements: [
      { metric: '−52%', text: 'manual research-data processing, via LangGraph + AutoGen + MCP multi-agent pipelines.' },
      { metric: '+47%', text: 'grant-document retrieval accuracy with RAG over 2M+ records (LlamaIndex, Pinecone).' },
      { metric: '91%', text: 'forecasting accuracy fine-tuning LLaMA 3 & Mistral with LoRA / QLoRA.' },
      { metric: '−49%', text: 'inference latency & −30% cloud spend via Docker, K8s, ONNX & TensorRT.' },
    ],
  },
  {
    company: 'Commerce Bank',
    role: 'Generative AI Engineer',
    period: 'Oct 2024 — Present',
    location: 'Overland Park, KS',
    accent: 'arcane',
    blurb:
      'Deploying LLMs to automate customer-support workflows across core banking operations.',
    achievements: [
      { metric: '1,200+', text: 'service hours saved monthly by automating support workflows with LLMs.' },
      { metric: '+15%', text: 'customer-satisfaction scores via chatbots with memory & learning.' },
      { metric: '−42%', text: 'model latency through serverless Lambda + SageMaker + Terraform pipelines.' },
      { metric: 'RAG', text: 'LangChain + Pinecone pipelines that minimized hallucinations on banking knowledge.' },
    ],
  },
  {
    company: 'Liberty Mutual Insurance',
    role: 'Machine Learning Engineer',
    period: 'Oct 2023 — Sep 2024',
    location: 'Boston, MA',
    accent: 'emerald',
    blurb:
      'Building fraud-detection and forecasting models with enterprise-grade compliance.',
    achievements: [
      { metric: '+19%', text: 'fraud identification with XGBoost & LightGBM claim-forecasting models.' },
      { metric: '−60%', text: 'experimentation cycles via SageMaker Bayesian hyperparameter tuning.' },
      { metric: 'GDPR · SOC2', text: 'compliance through automated LLM testing frameworks & OAuth2 policies.' },
      { metric: 'CI/CD', text: 'automated pipelines with GitHub Actions & AWS CodePipeline.' },
    ],
  },
  {
    company: 'Wells Fargo',
    role: 'Data Scientist',
    period: 'May 2022 — Jun 2023',
    location: 'San Francisco, CA',
    accent: 'ember',
    blurb:
      'Analyzing millions of transactions to detect fraud and forecast demand.',
    achievements: [
      { metric: '82% → 90%', text: 'fraud-detection accuracy with ensemble classification models.' },
      { metric: 'Anomaly', text: 'detection via unsupervised Isolation Forest & DBSCAN models.' },
      { metric: 'ARIMA · LSTM', text: 'time-series forecasting for ATM cashout & resource planning.' },
      { metric: 'Spark', text: 'data transformation pipelines on Databricks for structured modeling.' },
    ],
  },
  {
    company: 'Merck Group',
    role: 'Data Scientist',
    period: 'Aug 2020 — Apr 2022',
    location: 'Rahway, NJ',
    accent: 'amethyst',
    blurb:
      'Powering pharmaceutical R&D analytics on multi-terabyte clinical datasets.',
    achievements: [
      { metric: 'Multi-TB', text: 'clinical-trial datasets processed with Apache Spark & Hadoop.' },
      { metric: 'Real-time', text: 'streaming analytics with Apache Flink & Pulsar for adverse-event detection.' },
      { metric: 'Deploy', text: 'scalable ML via Flask, Docker & Kubernetes, monitored with MLflow.' },
      { metric: 'ETL', text: 'Airflow pipelines into Snowflake enabling cross-functional analytics.' },
    ],
  },
];

// ── Flagship artifacts (case studies distilled from real achievements) ─────
export const projects = [
  {
    title: 'Agentic Research Automation Platform',
    org: 'Purdue University',
    featured: true,
    accent: 'gold',
    description:
      'Multi-agent pipelines that orchestrate research-data workflows end-to-end across university computing systems, cutting manual processing by more than half.',
    impact: '−52% manual workload',
    tech: ['LangGraph', 'AutoGen', 'MCP', 'Python', 'FastAPI'],
  },
  {
    title: 'Enterprise RAG Knowledge Engine',
    org: 'Purdue · Commerce Bank',
    featured: true,
    accent: 'arcane',
    description:
      'Retrieval-augmented generation over 2M+ academic and banking records — semantic search with strict grounding to crush hallucination rates.',
    impact: '+47% retrieval accuracy',
    tech: ['LlamaIndex', 'LangChain', 'Pinecone', 'FAISS', 'Sentence-Transformers'],
  },
  {
    title: 'Banking Support Copilot',
    org: 'Commerce Bank',
    featured: false,
    accent: 'emerald',
    description:
      'Intelligent chatbots with memory and learning that automate core support workflows while staying inside compliance guardrails.',
    impact: '1,200+ hrs saved / mo',
    tech: ['Anthropic Claude', 'OpenAI API', 'FastAPI', 'OAuth2'],
  },
  {
    title: 'Fraud Intelligence Suite',
    org: 'Liberty Mutual · Wells Fargo',
    featured: false,
    accent: 'ember',
    description:
      'Ensemble and unsupervised models surfacing suspicious patterns across millions of transactions and insurance claims in real time.',
    impact: '82% → 90% accuracy',
    tech: ['XGBoost', 'LightGBM', 'Isolation Forest', 'SageMaker'],
  },
  {
    title: 'Multimodal Lab-Telemetry Analyzer',
    org: 'Purdue University',
    featured: false,
    accent: 'amethyst',
    description:
      'Vision + language pipeline pairing CLIP with GPT-4o Vision to read sensor telemetry and imaging data, slashing equipment-fault detection time.',
    impact: '−38% fault detection time',
    tech: ['CLIP', 'GPT-4o Vision', 'PyTorch', 'Kafka', 'Spark'],
  },
  {
    title: 'Responsible-AI Governance Dashboards',
    org: 'Purdue · Liberty Mutual',
    featured: false,
    accent: 'verdant',
    description:
      'Explainability dashboards for grant-allocation and admissions models that keep every deployment audit-ready and fully transparent.',
    impact: '100% audit compliance',
    tech: ['SHAP', 'LIME', 'Fairlearn', 'MLflow', 'Streamlit'],
  },
];

// ── Education ──────────────────────────────────────────────────────────────
export const education = [
  {
    degree: 'M.S. in Computer Science',
    school: 'University of Central Missouri',
    detail: 'Graduate study focused on machine learning, distributed systems, and applied AI.',
    accent: 'gold',
  },
  {
    degree: 'B.Tech in Electronics & Communication Engineering',
    school: 'Sreenidhi Institute of Science and Technology',
    detail: 'Foundations in signal processing, mathematics, and computing that underpin modern ML.',
    accent: 'arcane',
  },
];

// Specialization "sigils" — honest focus areas, not certifications.
export const specializations = [
  'LLM Fine-tuning (LoRA · QLoRA · PEFT)',
  'Retrieval-Augmented Generation',
  'Agentic & Multi-Agent Systems',
  'MLOps & Model Governance',
  'Responsible & Explainable AI',
  'Time-Series Forecasting',
];

// ── Impact metrics (legendary feats) ───────────────────────────────────────
export const impactMetrics = [
  { value: 52, suffix: '%', prefix: '−', label: 'Manual research workload', accent: 'gold' },
  { value: 1200, suffix: '+', prefix: '', label: 'Hours saved every month', accent: 'arcane' },
  { value: 91, suffix: '%', prefix: '', label: 'Forecasting accuracy', accent: 'emerald' },
  { value: 65, suffix: '%', prefix: '−', label: 'Fewer model rollbacks', accent: 'ember' },
  { value: 49, suffix: '%', prefix: '−', label: 'Lower inference latency', accent: 'amethyst' },
  { value: 100, suffix: '%', prefix: '', label: 'Responsible-AI audit pass', accent: 'verdant' },
];

export const navItems = [
  { id: 'about', label: 'The Path' },
  { id: 'skills', label: 'Disciplines' },
  { id: 'experience', label: 'Chronicle' },
  { id: 'projects', label: 'Artifacts' },
  { id: 'education', label: 'Tomes' },
  { id: 'impact', label: 'Feats' },
  { id: 'contact', label: 'Summon' },
];

// Accent → hex map for inline glow / gradients (jewel-tone palette).
export const accentHex = {
  gold: '#d9b25f',
  arcane: '#a06bff',
  emerald: '#3fc99a',
  ember: '#e8688a',
  amethyst: '#c39bff',
  verdant: '#5fd6a8',
};

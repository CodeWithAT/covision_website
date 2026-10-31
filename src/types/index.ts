export interface ServiceItem {
  id: string
  number?: string
  title: string
  tagline: string
  category: 'Software Engineering' | 'App Development' | 'Data & AI' | 'Cloud & Edge' | 'UX/UI & CoVision Lattice™' | 'UX/UI & CoUI' | 'E-Commerce Suite'
  description: string
  detailedScope: string[]
  sla: string
  metrics: { label: string; value: string }[]
  techStack: string[]
  iconName: string
  badgeText: string
  image?: string
  subItems?: { title: string; desc: string }[]
  hrmsSystems?: { name: string; desc: string }[]
  payrollSystems?: { name: string; desc: string }[]
  erpPoints?: string[]
  mobileSolutions?: { title: string; desc: string; icon?: string }[]
  cloudRoadmap?: {
    strategyLead?: string
    strategyPoints?: { title: string; desc: string }[]
    migrationPoints?: string[]
    mediaCloudPoints?: { title: string; headline: string; desc: string }[]
  }
  analyticsArsenal?: {
    leadText?: string
    tools?: string[]
    dimensions?: { title: string; desc: string }[]
  }
  designSystem?: {
    leadQuote?: string
    cognitiveTitle?: string
    cognitiveText?: string
    systemName?: string
    systemText?: string
  }
}

export interface EcommerceOffering {
  id: string
  title: string
  subtitle: string
  description: string
  capabilities: string[]
  platforms?: string[]
  iconName: string
  badge: string
  image?: string
}

export interface TechSpectrumItem {
  category: 'Languages' | 'Frameworks' | 'Tools & Cloud'
  items: string[]
}

export interface ClientPartner {
  name: string
  category: string
  featuredProject: string
  logoText: string
}

export interface CaseStudyItem {
  id: string
  client: string
  industry: string
  headline: string
  summary: string
  challenge: string
  solution: string
  results: { metric: string; label: string }[]
  technologies: string[]
  accentColor: string
  bunnyCdnUsed: boolean
  image?: string
}

export interface TestimonialItem {
  quote: string
  author: string
  role: string
  company: string
  rating: number
  avatarUrl: string
  verifiedEnterprise: boolean
}

export interface FaqItem {
  question: string
  answer: string
  category: 'Engagement' | 'Security & NDA' | 'Architecture' | 'Pricing'
}

export interface ProjectEstimateConfig {
  serviceType: string
  projectScale: 'mvp' | 'growth' | 'enterprise'
  timeline: 'standard' | 'accelerated' | 'critical'
  includeBunnyCdn: boolean
  includeAiAgent: boolean
  includeSoc2Audit: boolean
  multiRegionDeploy: boolean
}

export interface ContactFormData {
  fullName: string
  email: string
  phoneNumber: string
  company: string
  inquiryType: string
  budgetRange: string
  timeline: string
  message: string
  ndaRequired: boolean
  estimatedBudget?: string
}

export interface BunnyRegionPing {
  region: string
  city: string
  country: string
  standardLatencyMs: number
  bunnyEdgeLatencyMs: number
  status: 'optimal' | 'good' | 'measuring'
}

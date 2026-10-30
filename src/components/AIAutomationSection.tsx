import React, { useState } from 'react'
import {
  Bot,
  Sparkles,
  Cpu,
  Workflow,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  Layers,
  Zap,
} from 'lucide-react'
import { SectionEyebrow } from './SectionEyebrow'

interface AIAutomationSectionProps {
  onRequestScope: (serviceTitle: string) => void
  sectionNumber?: string
}

export const AIAutomationSection: React.FC<AIAutomationSectionProps> = ({
  onRequestScope,
  sectionNumber = '01',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'operations' | 'solutions' | 'marketing' | 'engineering'>('all')

  return (
    <div id="ai-automation-practice" className="bg-paper text-ink font-inter-tight selection:bg-[#0052cb] selection:text-white">
      
      {/* =========================================================================
          HERO BANNER: Transform Intelligence into Business Impact.
          Exact text from Line 9: "write Transform Intelligence into Business Impact."
          Raw video/image container with high-tech enterprise styling.
         ========================================================================= */}
      <section className="relative overflow-hidden bg-[#07090E] text-white pt-24 pb-20 md:pt-32 md:pb-28 border-b border-slate-800">
        {/* Background Ambient Glow & Video/Visual Container */}
        <div className="absolute inset-0 bg-radial-gradient from-blue-900/25 via-slate-950/80 to-[#07090E] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,102,255,0.25),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            
            {/* Left Column: Core Headline & Vision */}
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold tracking-wider uppercase">
                <Sparkles className="size-3.5 text-blue-400 animate-pulse" />
                <span>AI & Automation Practice</span>
              </div>

              <h1 className="font-bricolage text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                Transform Intelligence into Business Impact.
              </h1>

              <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Unite Generative AI creativity with autonomous Agentic AI execution. Engineered to learn your organization's unique workflows, automate mission-critical operations, and deliver measurable enterprise value.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onRequestScope('AI & Automation Strategy Scoping')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0052cb] hover:bg-[#0041a3] text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer group"
                >
                  <span>Request AI Scoping Session</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#generative-ai"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-semibold transition-all"
                >
                  <span>Explore Capabilities</span>
                </a>
              </div>
            </div>

            {/* Right Column: High-Tech Attached Media / Video Frame */}
            <div className="lg:max-w-lg w-full">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/90 shadow-2xl shadow-black/80 group">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <video
                    muted
                    loop
                    playsInline
                    autoPlay
                    src="/globe.mp4"
                    poster="/globe_poster.webp"
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-blue-600/90 text-white font-mono text-[10px] font-bold tracking-wider uppercase border border-blue-400/30 backdrop-blur-md">
                      Autonomous Neural Core
                    </span>
                  </div>

                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Live AI Execution Mesh</div>
                      <div className="text-[11px] text-slate-400 font-mono">Agentic Task Orchestration</div>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-semibold">
                      <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          STRATEGIC LEAD OVERVIEW:
          Headline: The Next Frontier of Artificial Intelligence: Generative and Agentic AI
          Exact text from Lines 13-17 of instruction2.txt
         ========================================================================= */}
      <section className="py-20 md:py-28 bg-paper border-b border-ink-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionEyebrow number={sectionNumber} label="Strategic AI Transformation" tone="dark" className="mb-6" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <h2 className="font-bricolage text-3xl sm:text-5xl lg:text-[42px] font-bold text-ink tracking-tight leading-[1.08]">
                The Next Frontier of Artificial Intelligence: Generative and Agentic AI
              </h2>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                Generative AI and AI agents are the two foundational pillars of business-specific AI transformation. By learning and adapting to each organization’s unique processes, workflows, and customer needs, they enable personalized, context-aware solutions that preserve the human touch and distinctive value of every business.
              </p>

              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                Grounded in a strategic vision for transformation, this approach integrates technology, operations, and organizational culture to accelerate AI-driven value creation—transforming the way businesses operate today while building the capabilities they need for tomorrow.
              </p>

              {/* Guiding Transformation Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-ink-line">
                <div className="p-4 rounded-xl bg-white border border-ink-line shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#0052cb] mb-1">
                    <UserCheck className="size-3.5" />
                    <span>Human-in-the-Loop</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-normal">
                    Preserves human oversight and institutional domain expertise while maximizing throughput.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-ink-line shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#0052cb] mb-1">
                    <ShieldCheck className="size-3.5" />
                    <span>Enterprise Governance</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-normal">
                    Air-gapped data compliance, strict role-based access, and zero proprietary data leakage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: Generative AI for Creative Production, Business Communication & Digital Experiences
          Exact text from Lines 21-25 of instruction2.txt
          "Place the very first image of cognitive media services and 2 more images."
         ========================================================================= */}
      <section id="generative-ai" className="py-20 md:py-28 bg-paper-deep border-b border-ink-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0052cb] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 inline-flex items-center gap-1.5 mb-3">
              <Sparkles className="size-3" />
              01 • Generative Intelligence
            </span>
            <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-[1.05]">
              Generative AI for Creative Production, Business Communication & Digital Experiences
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              From AI-generated text, images, videos, and 3D visuals to animations, code, and multimedia content, we power creative production and engaging digital experiences.
            </p>
          </div>

          {/* 3 Curated Images Showcase as specifically instructed */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Image 1: The very first image of cognitive media services */}
            <div className="group rounded-2xl overflow-hidden bg-white border border-ink-line shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative w-full h-60 sm:h-64 overflow-hidden bg-neutral-900">
                  <img
                    src="/images/ai_automation/01_cognitive_media_creative_production.jpg"
                    alt="Cognitive Media Services Creative Production"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-white text-[11px] font-mono font-bold uppercase tracking-wider border border-white/20">
                    Cognitive Media • Image #1
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bricolage text-lg font-bold text-ink mb-1">
                    Creative Production & Generative Imagery
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    High-impact commercial visuals, photo-real text-to-image synthesis, and branded multimedia content produced at infinite scale.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-ink-line text-[11px] font-mono text-[#0052cb] font-semibold">
                  Cognitive Media Studio Asset
                </div>
              </div>
            </div>

            {/* Image 2: 3D Visuals & Photorealistic Simulation */}
            <div className="group rounded-2xl overflow-hidden bg-white border border-ink-line shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative w-full h-60 sm:h-64 overflow-hidden bg-neutral-900">
                  <img
                    src="/images/ai_automation/02_generative_3d_visuals_simulation.jpg"
                    alt="3D Visuals and Procedural Animations"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-white text-[11px] font-mono font-bold uppercase tracking-wider border border-white/20">
                    Visuals & Animation • Image #2
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bricolage text-lg font-bold text-ink mb-1">
                    3D Visuals, Simulation & Motion
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Interactive 3D asset generation, procedural particle motion, spatial environments, and dynamic video animations for brand storytelling.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-ink-line text-[11px] font-mono text-[#0052cb] font-semibold">
                  3D & Digital Simulation Core
                </div>
              </div>
            </div>

            {/* Image 3: Interactive Experiences & Code Generation */}
            <div className="group rounded-2xl overflow-hidden bg-white border border-ink-line shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative w-full h-60 sm:h-64 overflow-hidden bg-neutral-900">
                  <img
                    src="/images/ai_automation/03_digital_experiences_interfaces.jpg"
                    alt="Digital Experiences and Automated Interfaces"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-white text-[11px] font-mono font-bold uppercase tracking-wider border border-white/20">
                    Digital Experiences • Image #3
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bricolage text-lg font-bold text-ink mb-1">
                    Code, Interfaces & Multimedia
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    AI-powered frontend components, conversational digital interfaces, real-time localized copy, and rich multi-device user experiences.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-ink-line text-[11px] font-mono text-[#0052cb] font-semibold">
                  CoUI™ Digital Experience Mesh
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: AI Agents & Agentic AI
          Exact text from Lines 26-30 of instruction2.txt:
          "2. AI Agents & Agentic AI"
          "From Intelligent Assistance to Autonomous Action."
          "Here we will show some images"
         ========================================================================= */}
      <section className="py-20 md:py-28 bg-paper border-b border-ink-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0052cb] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 inline-flex items-center gap-1.5 mb-3">
              <Bot className="size-3" />
              02 • Autonomous Agents
            </span>
            <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-[1.05]">
              2. AI Agents & Agentic AI
            </h2>
            <p className="mt-3 text-xl sm:text-2xl font-bricolage font-semibold text-ink">
              From Intelligent Assistance to Autonomous Action.
            </p>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Move beyond passive chatbot prompts. Our agentic systems perceive context, formulate multi-step plans, invoke enterprise tools securely, and execute complex business goals autonomously with audited validation.
            </p>
          </div>

          {/* Agentic Images Showcase as instructed */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl overflow-hidden bg-white border border-ink-line shadow-sm group">
              <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden bg-slate-950">
                <img
                  src="/images/ai_automation/04_autonomous_agentic_workflow_mesh.jpg"
                  alt="Autonomous Multi-Agent Orchestration"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-mono font-bold uppercase text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800 mb-1 inline-block">
                    Multi-Agent Orchestration
                  </span>
                  <div className="text-white font-bricolage text-lg font-bold">
                    Autonomous Multi-Role Agent Swarms
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Specialized agents collaborate across discovery, verification, calculation, and database writes.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-ink-line shadow-sm group">
              <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden bg-slate-950">
                <img
                  src="/images/ai_automation/05_neural_knowledge_graph_context.jpg"
                  alt="Enterprise RAG and Knowledge Graph Routing"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-mono font-bold uppercase text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800 mb-1 inline-block">
                    Knowledge Graph & Context
                  </span>
                  <div className="text-white font-bricolage text-lg font-bold">
                    Private Grounded Domain Context
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Agents query real-time enterprise ERP, CRM, and SOPs with zero hallucination and mathematical precision.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Agentic Flow Capabilities */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-ink-line shadow-xs">
              <div className="size-10 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0052cb] mb-4">
                <Cpu className="size-5" />
              </div>
              <h3 className="font-bricolage text-base font-bold text-ink mb-2">
                1. Context Perception & Reasoning
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Agents analyze unstructured customer inputs, system alerts, and enterprise state to determine the optimal workflow path.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-ink-line shadow-xs">
              <div className="size-10 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0052cb] mb-4">
                <Workflow className="size-5" />
              </div>
              <h3 className="font-bricolage text-base font-bold text-ink mb-2">
                2. Autonomous Tool Calling
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Seamlessly interact with REST APIs, SQL databases, SAP, Salesforce, and microservices under strict permission controls.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-ink-line shadow-xs">
              <div className="size-10 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0052cb] mb-4">
                <ShieldCheck className="size-5" />
              </div>
              <h3 className="font-bricolage text-base font-bold text-ink mb-2">
                3. Verification & Human Oversight
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Every high-stakes financial or operational action triggers automated validation checkpoints with human sign-off escalation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: How Can We Help
          Exact text from Lines 32-40 of instruction2.txt:
          "3.How can we help"
          "AI powered business process operations a ,b & c"
          "AI powered  business solutions e & f"
          "AI powered marketing (lead generation, promotion)"
          "AI-Powered Software Engineering g"
         ========================================================================= */}
      <section className="py-20 md:py-28 bg-paper-deep border-b border-ink-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0052cb] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 inline-flex items-center gap-1.5 mb-3">
                <Layers className="size-3" />
                03 • Practical Implementation
              </span>
              <h2 className="font-bricolage text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-[1.05]">
                3. How can we help
              </h2>
              <p className="mt-3 text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
                Structured into 4 core pillars covering operations, business intelligence, customer acquisition, and software engineering:
              </p>
            </div>

            {/* Quick Filter Tabs matching instruction structure */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-200/60 rounded-xl">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-[#0052cb] text-white shadow-xs'
                    : 'text-neutral-700 hover:text-ink'
                }`}
              >
                All Areas
              </button>
              <button
                onClick={() => setSelectedCategory('operations')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === 'operations'
                    ? 'bg-[#0052cb] text-white shadow-xs'
                    : 'text-neutral-700 hover:text-ink'
                }`}
              >
                Business Operations (a, b, c)
              </button>
              <button
                onClick={() => setSelectedCategory('solutions')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === 'solutions'
                    ? 'bg-[#0052cb] text-white shadow-xs'
                    : 'text-neutral-700 hover:text-ink'
                }`}
              >
                Business Solutions (e, f)
              </button>
              <button
                onClick={() => setSelectedCategory('marketing')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === 'marketing'
                    ? 'bg-[#0052cb] text-white shadow-xs'
                    : 'text-neutral-700 hover:text-ink'
                }`}
              >
                Marketing
              </button>
              <button
                onClick={() => setSelectedCategory('engineering')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === 'engineering'
                    ? 'bg-[#0052cb] text-white shadow-xs'
                    : 'text-neutral-700 hover:text-ink'
                }`}
              >
                Software Engineering (g)
              </button>
            </div>
          </div>

          {/* =========================================================================
              DETAILED CAPABILITIES WITH IMAGES AND EXACT WRITINGS
              Lines 46-74 of instruction2.txt
             ========================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* (a) AI Integration with Business Software */}
            {(selectedCategory === 'all' || selectedCategory === 'operations') && (
              <div className="rounded-2xl overflow-hidden bg-white border border-ink-line shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-neutral-900">
                    <img
                      src="/images/ai_automation/06_ai_integration_business_software.jpg"
                      alt="AI Integration with Business Software"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-[10px] font-bold">
                      (a) Core Integration
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bricolage text-xl font-bold text-ink mb-2">
                      AI Integration with Business Software
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Connect AI agents with CRM, ERP, HRMS, ticketing systems, databases, and other business applications so they can retrieve information and perform authorised actions.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-ink-line flex items-center justify-between text-xs text-[#0052cb] font-semibold">
                    <span>SAP • Salesforce • ERP • SQL</span>
                    <CheckCircle2 className="size-4" />
                  </div>
                </div>
              </div>
            )}

            {/* (b) Intelligent Document Processing */}
            {(selectedCategory === 'all' || selectedCategory === 'operations') && (
              <div className="rounded-2xl overflow-hidden bg-white border border-ink-line shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-neutral-900">
                    <img
                      src="/images/ai_automation/07_intelligent_document_processing_ocr.jpg"
                      alt="Intelligent Document Processing"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-[10px] font-bold">
                      (b) OCR & Extraction
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bricolage text-xl font-bold text-ink mb-2">
                      Intelligent Document Processing
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Create agents that read forms, invoices, reports, and other documents, extract relevant information, validate records, and route items for further processing.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-ink-line flex items-center justify-between text-xs text-[#0052cb] font-semibold">
                    <span>Invoices • Forms • Reports</span>
                    <CheckCircle2 className="size-4" />
                  </div>
                </div>
              </div>
            )}

            {/* (c) Agentic Workflow Automation */}
            {(selectedCategory === 'all' || selectedCategory === 'operations') && (
              <div className="rounded-2xl overflow-hidden bg-white border border-ink-line shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-neutral-900">
                    <img
                      src="/images/ai_automation/08_agentic_workflow_automation_routing.jpg"
                      alt="Agentic Workflow Automation"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-[10px] font-bold">
                      (c) Multi-Step Process
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bricolage text-xl font-bold text-ink mb-2">
                      Agentic Workflow Automation
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Connect multiple tasks into a coordinated process. For example, when a customer raises a complaint, AI can classify it, retrieve relevant records, assign it to the right team, and track the next steps.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-ink-line flex items-center justify-between text-xs text-[#0052cb] font-semibold">
                    <span>Classification • Routing • Auto-Action</span>
                    <CheckCircle2 className="size-4" />
                  </div>
                </div>
              </div>
            )}

            {/* Custom AI Agents */}
            {(selectedCategory === 'all' || selectedCategory === 'operations' || selectedCategory === 'solutions') && (
              <div className="rounded-2xl overflow-hidden bg-white border border-ink-line shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-neutral-900">
                    <img
                      src="/images/ai_automation/09_custom_ai_agents_digital_assistants.jpg"
                      alt="Custom AI Agents"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-[10px] font-bold">
                      Digital Assistants
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bricolage text-xl font-bold text-ink mb-2">
                      Custom AI Agents
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Digital assistants designed to perform specific business tasks, such as answering enquiries, finding information, preparing documents, and updating records.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-ink-line flex items-center justify-between text-xs text-[#0052cb] font-semibold">
                    <span>Enquiries • Prep Documents • Update Records</span>
                    <CheckCircle2 className="size-4" />
                  </div>
                </div>
              </div>
            )}

            {/* (e) Predictive Intelligence */}
            {(selectedCategory === 'all' || selectedCategory === 'solutions') && (
              <div className="rounded-2xl overflow-hidden bg-white border border-ink-line shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-neutral-900">
                    <img
                      src="/images/ai_automation/10_predictive_intelligence_forecasting.jpg"
                      alt="Predictive Intelligence"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-[10px] font-bold">
                      (e) Forecasting
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bricolage text-xl font-bold text-ink mb-1">
                      Predictive Intelligence
                    </h3>
                    <div className="text-xs font-mono font-bold text-[#0052cb] mb-2 uppercase">
                      From Insight to Foresight.
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Anticipate customer behaviour, demand fluctuations, operational risks, and business trends using predictive models and data-driven forecasting.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-ink-line flex items-center justify-between text-xs text-[#0052cb] font-semibold">
                    <span>Demand • Risk • Trend Forecasting</span>
                    <CheckCircle2 className="size-4" />
                  </div>
                </div>
              </div>
            )}

            {/* (f) Personalisation & Recommendation Engines */}
            {(selectedCategory === 'all' || selectedCategory === 'solutions') && (
              <div className="rounded-2xl overflow-hidden bg-white border border-ink-line shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-neutral-900">
                    <img
                      src="/images/ai_automation/11_personalisation_recommendation_engines.jpg"
                      alt="Personalisation & Recommendation Engines"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-[10px] font-bold">
                      (f) Personalisation
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bricolage text-xl font-bold text-ink mb-1">
                      Personalisation & Recommendation Engines
                    </h3>
                    <div className="text-xs font-mono font-bold text-[#0052cb] mb-2 uppercase">
                      Make Every Experience More Relevant.
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Deliver personalised products, content, and service recommendations based on user preferences, behaviour, and contextual data.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-ink-line flex items-center justify-between text-xs text-[#0052cb] font-semibold">
                    <span>Relevant Products • Dynamic Content</span>
                    <CheckCircle2 className="size-4" />
                  </div>
                </div>
              </div>
            )}

            {/* AI-Powered Marketing (Lead Generation, Promotion) */}
            {(selectedCategory === 'all' || selectedCategory === 'marketing') && (
              <div className="rounded-2xl overflow-hidden bg-white border border-ink-line shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-neutral-900">
                    <img
                      src="/images/ai_automation/12_ai_powered_marketing_lead_generation.jpg"
                      alt="AI-Powered Marketing"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-[10px] font-bold">
                      Marketing Engine
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bricolage text-xl font-bold text-ink mb-1">
                      AI Powered Marketing
                    </h3>
                    <div className="text-xs font-mono font-bold text-[#0052cb] mb-2 uppercase">
                      Lead Generation & Promotion
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      AI powered marketing (lead generation, promotion) with algorithmic audience targeting, dynamic creative variation testing, automated outreach sequencing, and cross-channel conversion optimization.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-ink-line flex items-center justify-between text-xs text-[#0052cb] font-semibold">
                    <span>Lead Scoring • Campaign Automation</span>
                    <CheckCircle2 className="size-4" />
                  </div>
                </div>
              </div>
            )}

            {/* (g) AI-Powered Software Engineering */}
            {(selectedCategory === 'all' || selectedCategory === 'engineering') && (
              <div className="rounded-2xl overflow-hidden bg-white border border-ink-line shadow-xs hover:shadow-md transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2 border-l-4 border-l-[#0052cb]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                  <div className="md:col-span-5 relative h-64 sm:h-72 md:h-full min-h-[240px] overflow-hidden bg-neutral-900 rounded-xl m-4 md:m-0">
                    <img
                      src="/images/ai_automation/13_ai_powered_software_engineering.jpg"
                      alt="AI-Powered Software Engineering"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#0052cb] text-white font-mono text-[10px] font-bold">
                      (g) Engineering Excellence
                    </span>
                  </div>
                  <div className="md:col-span-7 p-6 md:pl-2 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bricolage text-2xl font-bold text-ink mb-1">
                        (g) AI-Powered Software Engineering
                      </h3>
                      <div className="text-xs font-mono font-bold text-[#0052cb] mb-3 uppercase tracking-wider">
                        Build Smarter. Develop Faster.
                      </div>
                      <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-4">
                        Use AI to support coding, documentation, testing, code analysis, and application modernisation while keeping engineering quality and human oversight central.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs text-neutral-600 font-medium">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3.5 text-[#0052cb]" />
                          <span>Automated Unit Testing</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3.5 text-[#0052cb]" />
                          <span>Legacy Modernisation</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3.5 text-[#0052cb]" />
                          <span>Code Analysis & Audits</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3.5 text-[#0052cb]" />
                          <span>Zero-Debt Architecture</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-ink-line flex items-center justify-between">
                      <span className="text-xs font-mono text-neutral-500">Human-In-The-Loop Quality Control</span>
                      <button
                        onClick={() => onRequestScope('AI-Powered Software Engineering')}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052cb] hover:underline cursor-pointer"
                      >
                        <span>Scope Engineering Engagement</span>
                        <ArrowRight className="size-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* =========================================================================
          CLOSING CONSULTATION BANNER
         ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#07090E] text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs uppercase tracking-wider">
            <Zap className="size-3 text-amber-400" />
            <span>Ready for AI-Driven Transformation</span>
          </div>

          <h2 className="font-bricolage text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
            Sit Down with Our Enterprise AI Architects
          </h2>

          <p className="text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Evaluate your organization's business processes, identify high-ROI agentic automation opportunities, and architect production-grade AI solutions tailored to your infrastructure.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onRequestScope('AI & Automation Strategy Scoping')}
              className="px-7 py-3.5 rounded-xl bg-[#0052cb] hover:bg-[#0041a3] text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Schedule Architecture Assessment</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

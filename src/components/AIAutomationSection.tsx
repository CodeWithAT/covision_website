import React, { useState } from 'react'
import { motion } from 'framer-motion'
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
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white border border-ink-line shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-60 sm:h-64 overflow-hidden bg-neutral-900">
                  <img
                    src="/images/ai_automation/01_cognitive_media_creative_production.jpg"
                    alt="Cognitive Media Services Creative Production"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
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
            </motion.div>

            {/* Image 2: 3D Visuals & Photorealistic Simulation */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group rounded-2xl overflow-hidden bg-white border border-ink-line shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-60 sm:h-64 overflow-hidden bg-neutral-900">
                  <img
                    src="/images/ai_automation/02_generative_3d_visuals_simulation.jpg"
                    alt="3D Visuals and Procedural Animations"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
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
            </motion.div>

            {/* Image 3: Interactive Experiences & Code Generation */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group rounded-2xl overflow-hidden bg-white border border-ink-line shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-60 sm:h-64 overflow-hidden bg-neutral-900">
                  <img
                    src="/images/ai_automation/03_digital_experiences_interfaces.jpg"
                    alt="Digital Experiences and Automated Interfaces"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
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
                  CoVision Lattice™ Digital Experience Mesh
                </div>
              </div>
            </motion.div>

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
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl overflow-hidden bg-white border border-ink-line shadow-sm group flex flex-col justify-between"
            >
              <div className="relative w-full h-60 sm:h-64 overflow-hidden bg-slate-950">
                <img
                  src="/images/ai_automation/04_autonomous_agentic_workflow_mesh.jpg"
                  alt="Autonomous Multi-Agent Orchestration"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-mono font-bold uppercase text-[#0052cb] bg-blue-50 px-2.5 py-1 rounded border border-blue-200 mb-2 inline-block">
                  Multi-Agent Orchestration
                </span>
                <div className="text-ink font-bricolage text-lg font-bold">
                  Autonomous Multi-Role Agent Swarms
                </div>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Specialized agents collaborate across discovery, verification, calculation, and database writes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden bg-white border border-ink-line shadow-sm group flex flex-col justify-between"
            >
              <div className="relative w-full h-60 sm:h-64 overflow-hidden bg-slate-950">
                <img
                  src="/images/ai_automation/05_neural_knowledge_graph_context.jpg"
                  alt="Enterprise RAG and Knowledge Graph Routing"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-mono font-bold uppercase text-[#0052cb] bg-blue-50 px-2.5 py-1 rounded border border-blue-200 mb-2 inline-block">
                  Knowledge Graph & Context
                </span>
                <div className="text-ink font-bricolage text-lg font-bold">
                  Private Grounded Domain Context
                </div>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Agents query real-time enterprise ERP, CRM, and SOPs with zero hallucination and mathematical precision.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Agentic Flow Capabilities */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-white border border-ink-line shadow-xs"
            >
              <div className="size-10 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0052cb] mb-4">
                <Cpu className="size-5" />
              </div>
              <h3 className="font-bricolage text-base font-bold text-ink mb-2">
                1. Context Perception & Reasoning
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Agents analyze unstructured customer inputs, system alerts, and enterprise state to determine the optimal workflow path.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-white border border-ink-line shadow-xs"
            >
              <div className="size-10 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0052cb] mb-4">
                <Workflow className="size-5" />
              </div>
              <h3 className="font-bricolage text-base font-bold text-ink mb-2">
                2. Autonomous Tool Calling
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Seamlessly interact with REST APIs, SQL databases, SAP, Salesforce, and microservices under strict permission controls.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-white border border-ink-line shadow-xs"
            >
              <div className="size-10 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0052cb] mb-4">
                <ShieldCheck className="size-5" />
              </div>
              <h3 className="font-bricolage text-base font-bold text-ink mb-2">
                3. Verification & Human Oversight
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Every high-stakes financial or operational action triggers automated validation checkpoints with human sign-off escalation.
              </p>
            </motion.div>
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
              DETAILED CAPABILITIES: PROFESSIONAL IT ARCHITECTURAL FORMAT
              Zero empty space, authentic senior IT catalog imagery, exact text
              Lines 46-74 of instruction2.txt
             ========================================================================= */}

          {/* 1. Core Operations & Solutions 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* (a) AI Integration with Business Software */}
            {(selectedCategory === 'all' || selectedCategory === 'operations') && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl overflow-hidden bg-white border border-ink-line shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full h-52 overflow-hidden bg-neutral-900">
                    <img
                      src="/senior_image_catalog/19_API_Gateways_and_Integration/04_bi-directional_sap_and_salesforc.jpg"
                      alt="AI Integration with Business Software"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-[11px] font-mono font-bold uppercase text-[#0052cb] mb-1.5 tracking-wider">
                      Operations • Capability (a)
                    </div>
                    <h3 className="font-bricolage text-xl font-bold text-ink mb-2 group-hover:text-[#0052cb] transition-colors">
                      AI Integration with Business Software
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                      Connect AI agents with CRM, ERP, HRMS, ticketing systems, databases, and other business applications so they can retrieve information and perform authorised actions.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="pt-3.5 border-t border-ink-line flex items-center justify-between text-xs text-[#0052cb] font-semibold">
                    <span>SAP • Salesforce • ERP • SQL</span>
                    <CheckCircle2 className="size-4" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* (b) Intelligent Document Processing */}
            {(selectedCategory === 'all' || selectedCategory === 'operations') && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="rounded-3xl overflow-hidden bg-white border border-ink-line shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full h-52 overflow-hidden bg-neutral-900">
                    <img
                      src="/senior_image_catalog/05_Enterprise_AI_and_Robotics/09_autonomous_document_intelligence.jpg"
                      alt="Intelligent Document Processing"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-[11px] font-mono font-bold uppercase text-[#0052cb] mb-1.5 tracking-wider">
                      Operations • Capability (b)
                    </div>
                    <h3 className="font-bricolage text-xl font-bold text-ink mb-2 group-hover:text-[#0052cb] transition-colors">
                      Intelligent Document Processing
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                      Create agents that read forms, invoices, reports, and other documents, extract relevant information, validate records, and route items for further processing.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="pt-3.5 border-t border-ink-line flex items-center justify-between text-xs text-[#0052cb] font-semibold">
                    <span>Invoices • Forms • Reports</span>
                    <CheckCircle2 className="size-4" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* (c) Agentic Workflow Automation */}
            {(selectedCategory === 'all' || selectedCategory === 'operations') && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="rounded-3xl overflow-hidden bg-white border border-ink-line shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full h-52 overflow-hidden bg-neutral-900">
                    <img
                      src="/senior_image_catalog/05_Enterprise_AI_and_Robotics/05_autonomous_workflow_robotic_stat.jpg"
                      alt="Agentic Workflow Automation"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-[11px] font-mono font-bold uppercase text-[#0052cb] mb-1.5 tracking-wider">
                      Operations • Capability (c)
                    </div>
                    <h3 className="font-bricolage text-xl font-bold text-ink mb-2 group-hover:text-[#0052cb] transition-colors">
                      Agentic Workflow Automation
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                      Connect multiple tasks into a coordinated process. For example, when a customer raises a complaint, AI can classify it, retrieve relevant records, assign it to the right team, and track the next steps.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="pt-3.5 border-t border-ink-line flex items-center justify-between text-xs text-[#0052cb] font-semibold">
                    <span>Classification • Routing • Auto-Action</span>
                    <CheckCircle2 className="size-4" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* (d) Custom AI Agents */}
            {(selectedCategory === 'all' || selectedCategory === 'solutions') && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl overflow-hidden bg-white border border-ink-line shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full h-52 overflow-hidden bg-neutral-900">
                    <img
                      src="/senior_image_catalog/05_Enterprise_AI_and_Robotics/04_synthetic_intelligence_core_proc.jpg"
                      alt="Custom AI Agents"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-[11px] font-mono font-bold uppercase text-[#0052cb] mb-1.5 tracking-wider">
                      Solutions • Capability (d)
                    </div>
                    <h3 className="font-bricolage text-xl font-bold text-ink mb-2 group-hover:text-[#0052cb] transition-colors">
                      Custom AI Agents
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                      Digital assistants designed to perform specific business tasks, such as answering enquiries, finding information, preparing documents, and updating records.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="pt-3.5 border-t border-ink-line flex items-center justify-between text-xs text-[#0052cb] font-semibold">
                    <span>Enquiries • Prep Documents • Update Records</span>
                    <CheckCircle2 className="size-4" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* (e) Predictive Intelligence */}
            {(selectedCategory === 'all' || selectedCategory === 'solutions') && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="rounded-3xl overflow-hidden bg-white border border-ink-line shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full h-52 overflow-hidden bg-neutral-900">
                    <img
                      src="/senior_image_catalog/07_Data_Analytics_and_BI/06_predictive_statistical_forecast_.jpg"
                      alt="Predictive Intelligence"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-[11px] font-mono font-bold uppercase text-[#0052cb] mb-1.5 tracking-wider">
                      Solutions • Capability (e)
                    </div>
                    <h3 className="font-bricolage text-xl font-bold text-ink mb-1 group-hover:text-[#0052cb] transition-colors">
                      Predictive Intelligence
                    </h3>
                    <div className="text-xs font-mono font-bold text-[#0052cb] mb-2 uppercase">
                      From Insight to Foresight.
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                      Anticipate customer behaviour, demand fluctuations, operational risks, and business trends using predictive models and data-driven forecasting.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="pt-3.5 border-t border-ink-line flex items-center justify-between text-xs text-[#0052cb] font-semibold">
                    <span>Demand • Risk • Trend Forecasting</span>
                    <CheckCircle2 className="size-4" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* (f) Personalisation & Recommendation Engines */}
            {(selectedCategory === 'all' || selectedCategory === 'solutions') && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="rounded-3xl overflow-hidden bg-white border border-ink-line shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full h-52 overflow-hidden bg-neutral-900">
                    <img
                      src="/senior_image_catalog/06_eCommerce_and_Retail/10_commerce_conversion_funnel_telem.jpg"
                      alt="Personalisation & Recommendation Engines"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-[11px] font-mono font-bold uppercase text-[#0052cb] mb-1.5 tracking-wider">
                      Solutions • Capability (f)
                    </div>
                    <h3 className="font-bricolage text-xl font-bold text-ink mb-1 group-hover:text-[#0052cb] transition-colors">
                      Personalisation & Recommendation Engines
                    </h3>
                    <div className="text-xs font-mono font-bold text-[#0052cb] mb-2 uppercase">
                      Make Every Experience More Relevant.
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                      Deliver personalised products, content, and service recommendations based on user preferences, behaviour, and contextual data.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="pt-3.5 border-t border-ink-line flex items-center justify-between text-xs text-[#0052cb] font-semibold">
                    <span>Relevant Products • Dynamic Content</span>
                    <CheckCircle2 className="size-4" />
                  </div>
                </div>
              </motion.div>
            )}

          </div>

          {/* 2. Executive Flagship Cards: Marketing & (g) Software Engineering */}
          {(selectedCategory === 'all' || selectedCategory === 'marketing' || selectedCategory === 'engineering') && (
            <div className={`mt-8 grid gap-8 ${
              selectedCategory === 'marketing' || selectedCategory === 'engineering'
                ? 'grid-cols-1 max-w-4xl mx-auto'
                : 'grid-cols-1 lg:grid-cols-2'
            }`}>

              {/* AI-Powered Marketing (Lead Generation, Promotion) */}
              {(selectedCategory === 'all' || selectedCategory === 'marketing') && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-3xl overflow-hidden bg-white border border-ink-line shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative w-full h-64 overflow-hidden bg-slate-950">
                      <img
                        src="/senior_image_catalog/07_Data_Analytics_and_BI/01_financial_bi_telemetry_hub.jpg"
                        alt="AI-Powered Marketing & Telemetry"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                      />
                    </div>

                    <div className="p-7 sm:p-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider mb-3">
                        <Sparkles className="size-3 text-[#0052cb]" />
                        <span>Growth & Acquisition Engine</span>
                      </div>

                      <h3 className="font-bricolage text-2xl sm:text-3xl font-bold text-ink mb-1 group-hover:text-[#0052cb] transition-colors">
                        AI Powered Marketing
                      </h3>
                      <div className="text-xs font-mono font-bold text-[#0052cb] mb-3 uppercase tracking-wider">
                        Lead Generation &amp; Promotion
                      </div>

                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal mb-6">
                        AI powered marketing (lead generation, promotion) with algorithmic audience targeting, dynamic creative variation testing, automated outreach sequencing, and cross-channel conversion optimization.
                      </p>

                      {/* Professional Enterprise Feature Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {[
                          'Predictive Lead Scoring & Routing',
                          'Algorithmic Audience Targeting',
                          'Dynamic Creative Variations Testing',
                          'Cross-Channel Conversion Optimization',
                        ].map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                            <CheckCircle2 className="size-4 text-[#0052cb] shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 pt-0 mt-auto">
                    <div className="pt-4 border-t border-ink-line flex items-center justify-between">
                      <span className="text-xs font-mono text-neutral-500 font-semibold">
                        Lead Scoring • Campaign Automation
                      </span>
                      <button
                        onClick={() => onRequestScope('AI Powered Marketing')}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052cb] hover:underline cursor-pointer group-hover:translate-x-1 transition-transform"
                      >
                        <span>Explore Marketing Intelligence</span>
                        <ArrowRight className="size-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* (g) AI-Powered Software Engineering */}
              {(selectedCategory === 'all' || selectedCategory === 'engineering') && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="rounded-3xl overflow-hidden bg-white border border-ink-line shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border-l-4 border-l-[#0052cb]"
                >
                  <div>
                    <div className="relative w-full h-64 overflow-hidden bg-slate-950">
                      <img
                        src="/images/disciplines/software_engineering.jpg"
                        alt="AI-Powered Software Engineering Workstation"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                      />
                    </div>

                    <div className="p-7 sm:p-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cb] text-xs font-mono font-bold uppercase tracking-wider mb-3">
                        <Cpu className="size-3 text-[#0052cb]" />
                        <span>Core Engineering • Capability (g)</span>
                      </div>

                      <h3 className="font-bricolage text-2xl sm:text-3xl font-bold text-ink mb-1 group-hover:text-[#0052cb] transition-colors">
                        (g) AI-Powered Software Engineering
                      </h3>
                      <div className="text-xs font-mono font-bold text-[#0052cb] mb-3 uppercase tracking-wider">
                        Build Smarter. Develop Faster.
                      </div>

                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal mb-6">
                        Use AI to support coding, documentation, testing, code analysis, and application modernisation while keeping engineering quality and human oversight central.
                      </p>

                      {/* Professional Enterprise Feature Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {[
                          'Automated Unit Testing & Coverage',
                          'Legacy System Modernisation',
                          'Static Code Security & Audits',
                          'Zero-Debt Architecture Standards',
                        ].map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                            <CheckCircle2 className="size-4 text-[#0052cb] shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 pt-0 mt-auto">
                    <div className="pt-4 border-t border-ink-line flex items-center justify-between">
                      <span className="text-xs font-mono text-neutral-500 font-semibold">
                        Human-In-The-Loop Quality Control
                      </span>
                      <button
                        onClick={() => onRequestScope('AI-Powered Software Engineering')}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052cb] hover:underline cursor-pointer group-hover:translate-x-1 transition-transform"
                      >
                        <span>Scope Engineering Engagement</span>
                        <ArrowRight className="size-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

            </div>
          )}

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

import React, { useState } from 'react'
import { SectionEyebrow } from './SectionEyebrow'
import { ChevronDown, ArrowRight } from 'lucide-react'

interface IndustryItem {
  id: string
  number: string
  title: string
  headline: string
  description: string
  specs: string[]
  metrics: { label: string; value: string }[]
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: 'ecommerce',
    number: '01',
    title: 'High-Velocity eCommerce & Retail',
    headline: 'Sub-second transactions during peak traffic surges',
    description:
      'Online shoppers decide in milliseconds, and catalog latency kills conversions. We engineer headless commerce engines, real-time OMS/ERP inventory synchronization, and AI-powered visual search for global brands like Puma, Fila, and Mango.\n\nEvery checkout pipeline is hardened against flash-sale concurrency spikes with distributed edge queues, Redis caching layers, and Anycast CDN routing, guaranteeing 99.99% availability during Black Friday events.',
    specs: ['Shopify Plus & Adobe Commerce (Magento)', 'Automated ERP & Warehouse Integration', 'Custom 3D Product Configurator Engine', 'Sub-15ms Anycast Asset Delivery via Bunny CDN'],
    metrics: [
      { label: 'Uptime on Flash Sales', value: '99.995%' },
      { label: 'p99 Checkout Latency', value: '<180ms' },
      { label: 'Annual GMV Processed', value: '$240M+' },
    ],
  },
  {
    id: 'fintech',
    number: '02',
    title: 'FinTech, Banking & Payments',
    headline: 'Military-grade encryption and deterministic ledger accuracy',
    description:
      'Financial applications demand uncompromising zero-defect engineering. We construct banking portals, payment orchestration gateways, and micro-lending algorithms adhering strictly to PCI-DSS Level 1, ISO 27001, and SOC-2 Type II standards.\n\nOur architectures utilize immutable event-sourcing ledgers and asynchronous message queues to prevent double-spend anomalies while settling thousands of financial events per second.',
    specs: ['PCI-DSS Level 1 & SOC-2 Compliance', 'Automated Fraud Detection & Risk Scoring', 'Multi-Rail Payment Gateway Integration', 'Bank-Grade AES-256 GCM Data Encryption'],
    metrics: [
      { label: 'Transactions/Sec', value: '15,000+' },
      { label: 'Dispute Automation', value: '94%' },
      { label: 'Audit Compliance', value: '100%' },
    ],
  },
  {
    id: 'healthcare',
    number: '03',
    title: 'Healthcare & Life Sciences',
    headline: 'HIPAA-compliant telemedicine and secure clinical data pipelines',
    description:
      'Digital healthcare demands total patient privacy combined with instantaneous clinical data accessibility. We build HIPAA-compliant telehealth portals, electronic health record (EHR) bridges, and medical imaging streaming systems.\n\nAll protected health information (PHI) is isolated within zero-trust enclaves with role-based cryptographic access logs and automated audit trails.',
    specs: ['HIPAA & HITECH Compliant Pipelines', 'HL7 / FHIR Standard Interoperability', 'Encrypted WebRTC Video Teleconsultations', 'Autonomous Medical Diagnostic Assistance'],
    metrics: [
      { label: 'Patient Records Secured', value: '2.5M+' },
      { label: 'EHR Sync Latency', value: '<50ms' },
      { label: 'HIPAA Compliance Score', value: '100%' },
    ],
  },
  {
    id: 'logistics',
    number: '04',
    title: 'Supply Chain, Logistics & Fleet',
    headline: 'Real-time telemetry, route optimization, and cold-chain tracking',
    description:
      'Modern logistics networks break down when data silos cause blind spots. We engineer live telematics ingest pipelines, automated warehouse picking systems, and predictive dispatch algorithms.\n\nFrom GPS sensor integration to automated cross-docking workflows, our systems give dispatchers full operational visibility and reduce fuel waste through dynamic routing.',
    specs: ['High-Throughput IoT Ingress via MQTT', 'Dynamic Real-Time Route Optimization', 'Automated Warehouse Barcode & RFID Sync', 'Cold-Chain Temperature Alert Engine'],
    metrics: [
      { label: 'Connected Fleet Units', value: '12,000+' },
      { label: 'Fuel Overhead Reduction', value: '18.4%' },
      { label: 'Event Ingestion Rate', value: '25k evt/s' },
    ],
  },
  {
    id: 'media',
    number: '05',
    title: 'Media, Streaming & Digital Assets',
    headline: 'Ultra-low latency video transcoding and cognitive asset catalogs',
    description:
      'Digital media enterprises produce massive libraries of 4K video, 3D assets, and interactive media. Working in close synergy with our sister studio Cognitive Media, we engineer high-performance transcoding pipelines, Anycast edge distribution, and AI asset tagging.\n\nCreators and global distributors access instantaneous render previews and automated format conversions without network congestion.',
    specs: ['Bunny CDN Global Anycast Edge Delivery', 'Distributed GPU Video Transcoding', 'Cognitive AI Auto-Tagging & Metadata', 'Multi-Bitrate HLS & DASH Adaptive Streams'],
    metrics: [
      { label: 'Monthly Petabytes Streamed', value: '4.8 PB' },
      { label: 'Global Video TTFB', value: '<22ms' },
      { label: 'Transcoding Acceleration', value: '8x Real-Time' },
    ],
  },
  {
    id: 'manufacturing',
    number: '06',
    title: 'Manufacturing & Industrial IoT',
    headline: 'Predictive maintenance, telemetry dashboards, and digital twins',
    description:
      'Factory downtime costs millions per hour. We architect industrial IoT monitoring suites that ingest thousands of vibration, temperature, and acoustic sensor readings per second.\n\nMachine learning anomaly detectors alert plant managers hours before mechanical failure, while 3D digital twins provide real-time spatial representations of the entire shop floor.',
    specs: ['OPC-UA & Modbus Protocol Bridges', 'Edge ML Inference for Anomaly Detection', '3D WebGL Digital Twin Visualizer', 'Automated Work-Order Generation'],
    metrics: [
      { label: 'Downtime Prevented', value: '34%' },
      { label: 'Sensors Managed', value: '85,000+' },
      { label: 'ROI Timeline', value: '<4.5 Mos' },
    ],
  },
]

interface IndustryFootprintSectionProps {
  onOpenContact: (prefillService?: string) => void
}

export const IndustryFootprintSection: React.FC<IndustryFootprintSectionProps> = ({
  onOpenContact,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [openMobileAccordion, setOpenMobileAccordion] = useState<number | null>(0)

  const active = INDUSTRIES[activeTab]

  return (
    <section id="industries" className="relative w-full scroll-mt-4 bg-ink text-white">
      <div className="relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-24 md:py-36">
          {/* Eyebrow */}
          <SectionEyebrow number="04" label="Next-Gen Architecture" tone="light" />

          {/* Section Headline */}
          <div className="relative mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2 className="max-w-4xl font-bricolage text-5xl md:text-7xl font-medium leading-[0.98] tracking-[-0.03em] text-white">
              Enterprise software built for your industry.
            </h2>
            <p className="max-w-md font-inter-tight text-base leading-relaxed text-white/65">
              Every vertical operates under distinct regulatory, performance, and operational constraints. We architect deterministic technology around how your market actually moves.
            </p>
          </div>

          {/* Desktop Two-Column Layout matching CogniMedia */}
          <div className="hidden md:grid w-full mt-20 grid-cols-12 gap-12 border-t border-white/15 pt-10">
            {/* Left Tabs */}
            <div className="col-span-5 flex flex-col">
              {INDUSTRIES.map((ind, idx) => {
                const isSelected = activeTab === idx
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveTab(idx)}
                    className="group relative flex items-baseline gap-5 border-b border-white/10 py-5 text-start cursor-pointer transition-colors"
                  >
                    {isSelected && (
                      <span className="absolute inset-y-0 -left-4 right-0 rounded-2xl bg-white/[0.07]" />
                    )}
                    <span
                      className={`relative font-inter-tight text-xs tabular-nums transition-colors duration-300 ${
                        isSelected ? 'text-[#38bdf8] font-bold' : 'text-white/35 group-hover:text-white/60'
                      }`}
                    >
                      {ind.number}
                    </span>
                    <span
                      className={`relative font-bricolage text-xl lg:text-2xl font-medium tracking-tight transition-all duration-300 ease-premium ${
                        isSelected
                          ? 'translate-x-2 text-white font-semibold'
                          : 'text-white/45 group-hover:text-white/80'
                      }`}
                    >
                      {ind.title}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Right Tab Content */}
            <div className="relative col-span-7 min-h-[520px] pt-4 font-inter-tight">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8]">
                    Industry Blueprint {active.number}
                  </span>
                  <h3 className="mt-2 font-bricolage text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-white">
                    {active.headline}
                  </h3>
                </div>

                <div className="text-base leading-relaxed text-white/70 whitespace-pre-line lg:columns-2 lg:gap-10">
                  {active.description}
                </div>

                {/* Specs List */}
                <div className="border-t border-white/10 pt-6">
                  <div className="text-xs uppercase tracking-wider text-white/50 mb-3 font-semibold">
                    Core Technical Specifications
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {active.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2.5 text-xs text-white/80">
                        <span className="size-1.5 rounded-full bg-[#0052cb] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metric Strip */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  {active.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="rounded-xl bg-white/[0.05] p-3 border border-white/10">
                      <div className="font-bricolage text-xl font-bold text-[#38bdf8]">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-white/55 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenContact(`${active.title} Architecture Consultation`)}
                    className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-ink text-xs font-semibold hover:bg-[#0052cb] hover:text-white transition-all cursor-pointer"
                  >
                    <span>Consult {active.title.split(' ')[0]} Specialist</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden w-full mt-14 border-t border-white/15">
            {INDUSTRIES.map((ind, idx) => {
              const isOpen = openMobileAccordion === idx
              return (
                <div key={ind.id} className="border-b border-white/15">
                  <button
                    type="button"
                    onClick={() => setOpenMobileAccordion(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between py-5 text-left font-bricolage text-lg font-medium text-white"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-inter-tight text-xs tabular-nums text-[#38bdf8]">
                        {ind.number}
                      </span>
                      <span>{ind.title}</span>
                    </span>
                    <ChevronDown
                      className={`size-4 text-white/60 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pb-6 font-inter-tight space-y-4 text-sm text-white/70">
                      <p className="font-bricolage text-base font-semibold text-white">
                        {ind.headline}
                      </p>
                      <p className="leading-relaxed whitespace-pre-line text-xs">{ind.description}</p>
                      <div className="space-y-1.5 pt-2">
                        {ind.specs.map((s, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2 text-xs text-white/80">
                            <span className="size-1 rounded-full bg-[#0052cb]" />
                            <span>{s}</span>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => onOpenContact(`${ind.title} Architecture`)}
                        className="mt-3 w-full py-2.5 rounded-xl bg-white text-ink text-xs font-semibold text-center"
                      >
                        Request Industry Scope
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Globe, HardDrive, RefreshCw, Check, Copy, Shield, Sliders } from 'lucide-react'
import { buildBunnyCdnUrl, measureEdgeLatencies, BUNNY_EDGE_ZONES } from '../services/bunnyCdnService'
import type { BunnyRegionPing } from '../types'


export const BunnyCdnShowcase: React.FC = () => {
  const [latencyData, setLatencyData] = useState<BunnyRegionPing[]>(
    BUNNY_EDGE_ZONES.map((z) => ({
      region: z.region,
      city: z.city,
      country: z.country,
      standardLatencyMs: z.standardLatencyMs,
      bunnyEdgeLatencyMs: z.bunnyEdgeLatencyMs,
      status: 'optimal',
    }))
  )
  const [isPinging, setIsPinging] = useState(false)
  const [copiedUrl, setCopiedUrl] = useState(false)

  // Interactive Optimizer Simulator State
  const [selectedFormat, setSelectedFormat] = useState<'webp' | 'avif' | 'origin'>('avif')
  const [quality, setQuality] = useState(82)
  const [sharpen, setSharpen] = useState(true)

  const handleRunPingTest = async () => {
    setIsPinging(true)
    const results = await measureEdgeLatencies()
    setLatencyData(results)
    setIsPinging(false)
  }

  // Calculate simulated asset compression savings
  const originalSizeKb = 1420
  let compressedSizeKb = originalSizeKb
  if (selectedFormat === 'webp') {
    compressedSizeKb = Math.round(originalSizeKb * (quality / 100) * 0.38)
  } else if (selectedFormat === 'avif') {
    compressedSizeKb = Math.round(originalSizeKb * (quality / 100) * 0.22)
  }
  const bandwidthSavingsPercent = Math.round(((originalSizeKb - compressedSizeKb) / originalSizeKb) * 100)

  const sampleUrl = buildBunnyCdnUrl('/enterprise/architecture-blueprint.png', {
    format: selectedFormat,
    quality,
    sharpen,
    autoOptimize: 'medium',
  })

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sampleUrl)
    setCopiedUrl(true)
    setTimeout(() => setCopiedUrl(false), 2500)
  }

  return (
    <section id="bunny-cdn" className="py-24 md:py-36 bg-paper relative border-t border-ink-line text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 font-inter-tight text-xs md:text-[13px] uppercase tracking-[0.22em] text-neutral-500 mb-6">
            <span className="tabular-nums font-bold text-[#0052cb]">(08)</span>
            <span className="h-px w-10 md:w-16 bg-neutral-300"></span>
            <span className="font-semibold text-neutral-700">Edge Infrastructure</span>
          </div>

          <h2 className="font-bricolage text-4xl sm:text-6xl font-medium text-ink tracking-tight leading-[1.02]">
            High-Velocity Edge Routing via{' '}
            <span className="text-[#0052cb]">Bunny CDN.</span>
          </h2>
          <p className="mt-4 font-inter-tight text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Tier-1 Anycast routing and NVMe edge storage eliminating international latency with sub-15ms median TTFB across 120+ global Points of Presence.
          </p>
        </motion.div>

        {/* Feature Highlights Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-[#0052cb] flex items-center justify-center mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">120+ Anycast PoPs</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Sub-20ms median latency across Europe, North America, and Asia with direct peering to major Tier 1 telecom providers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-600 flex items-center justify-center mb-4">
              <HardDrive className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Geo-Replicated Storage</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Automatic edge file distribution with hot replicas in Frankfurt, New York, and Singapore for instant asset availability.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-sky-100/70 text-sky-600 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Origin Shielding & DDoS</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Absorbs massive traffic surges up to 80 Gbps while protecting backend servers from origin exhaustion.
            </p>
          </div>
        </div>

        {/* Interactive Dual Workbench: Global Latency Ping & Image Optimizer */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Global Edge Latency Live Benchmarking */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-blue-200 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0052cb]">
                  Real-Time Edge Network Test
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-0.5">
                  Global Edge PoP Roundtrip Ping
                </h4>
              </div>

              <button
                onClick={handleRunPingTest}
                disabled={isPinging}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0052cb] text-white font-semibold text-xs shadow-md hover:bg-[#003da8] active:scale-95 transition-all"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isPinging ? 'animate-spin' : ''}`} />
                <span>{isPinging ? 'Testing PoPs...' : 'Run Live PoP Benchmark'}</span>
              </button>
            </div>

            {/* Region Latency Table */}
            <div className="mt-6 space-y-3">
              {latencyData.map((node) => {
                const diff = node.standardLatencyMs - node.bunnyEdgeLatencyMs
                return (
                  <div
                    key={node.region}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xs font-mono font-bold text-[#0052cb]">
                        {node.region.substring(3).toUpperCase()}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          {node.city}, {node.country}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Standard Cloud: <span className="line-through">{node.standardLatencyMs}ms</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm font-black text-emerald-600 flex items-center justify-end gap-1 font-mono">
                        <Zap className="w-3.5 h-3.5" />
                        <span>{node.bunnyEdgeLatencyMs}ms</span>
                      </div>
                      <div className="text-[10px] font-bold text-[#0052cb]">
                        {diff}ms faster ({Math.round((diff / node.standardLatencyMs) * 100)}% drop)
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Interactive Bunny CDN Optimizer Simulator */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#071330] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                  <Sliders className="w-4 h-4" />
                  Bunny Optimizer Control
                </span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                  Live Preview
                </span>
              </div>

              <h4 className="text-lg font-bold text-white">
                Edge Image Transcoder & Bandwidth Engine
              </h4>
              <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                Adjust compression algorithms to see how Bunny CDN cuts client load times on high-resolution assets.
              </p>

              {/* Format Switcher */}
              <div className="mt-6">
                <label className="text-xs font-semibold text-slate-300 block mb-2">
                  Target Next-Gen Format
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['avif', 'webp', 'origin'] as const).map((fmt) => (
                    <button
                      key={fmt}
                      onClick={() => setSelectedFormat(fmt)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold uppercase transition-all ${
                        selectedFormat === fmt
                          ? 'bg-[#0052cb] text-white shadow-md'
                          : 'bg-white/10 text-slate-300 hover:bg-white/15'
                      }`}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quality Slider */}
              <div className="mt-5">
                <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                  <span>Compression Quality</span>
                  <span className="text-sky-400 font-mono font-bold">{quality}%</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="95"
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  className="w-full accent-[#0052cb] cursor-pointer"
                />
              </div>

              {/* Edge Sharpening Toggle */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
                <span>Edge Micro-Sharpening</span>
                <button
                  type="button"
                  onClick={() => setSharpen(!sharpen)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors ${
                    sharpen ? 'bg-sky-500 text-white' : 'bg-white/10 text-slate-400'
                  }`}
                >
                  {sharpen ? 'Enabled' : 'Disabled'}
                </button>
              </div>


              {/* Real-time Calculation Card */}
              <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-400">Original Payload:</span>
                  <span className="font-mono text-slate-300">{originalSizeKb} KB</span>
                </div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-400">Bunny Edge Output:</span>
                  <span className="font-mono text-sky-300 font-bold">{compressedSizeKb} KB</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-sm">
                  <span className="font-bold text-white">Bandwidth Saved:</span>
                  <span className="font-black text-emerald-400 text-base">
                    +{bandwidthSavingsPercent}%
                  </span>
                </div>
              </div>
            </div>

            {/* Generated URL & Copy */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <div className="text-[11px] font-semibold text-slate-400 uppercase mb-2">
                Production Edge Query URL
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-black/40 border border-white/10 font-mono text-[11px] text-sky-200">
                <span className="truncate flex-1">{sampleUrl}</span>
                <button
                  onClick={copyToClipboard}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white shrink-0 transition-colors"
                  title="Copy URL"
                >
                  {copiedUrl ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

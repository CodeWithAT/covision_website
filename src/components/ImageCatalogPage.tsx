import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Check,
  Copy,
  ExternalLink,
  Eye,
  Sparkles,
  Share2,
  BookmarkCheck,
  X,
  Layers,
  Cloud,
  Code2,
  LayoutGrid,
  Smartphone,
  Bot,
  ShoppingBag,
  BarChart3,
  Palette,
  Users2,
  DollarSign,
  ShieldAlert,
  GitBranch,
  Cpu,
  Briefcase,
  HeartPulse,
  Truck,
  CheckSquare,
  Network,
  Building2,
  Search,
  RotateCcw
} from 'lucide-react'
import { CATALOG_CATEGORIES, type CatalogImageItem } from '../data/imageCatalogData'

interface ImageCatalogPageProps {
  onBackToHome: () => void
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  cloud: Cloud,
  software: Code2,
  saas: LayoutGrid,
  mobile: Smartphone,
  ai: Bot,
  ecommerce: ShoppingBag,
  data: BarChart3,
  ux: Palette,
  synergy: Users2,
  fintech: DollarSign,
  cybersecurity: ShieldAlert,
  devops: GitBranch,
  iot: Cpu,
  consulting: Briefcase,
  healthcare: HeartPulse,
  supplychain: Truck,
  immersive: Eye,
  qa: CheckSquare,
  integration: Network,
  culture: Building2,
}

export const ImageCatalogPage: React.FC<ImageCatalogPageProps> = ({ onBackToHome }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [failedImages, setFailedImages] = useState<Record<string, number>>({})
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    new Set(CATALOG_CATEGORIES.map((c) => c.items[0]?.id).filter(Boolean))
  )
  const [activeModalItem, setActiveModalItem] = useState<{
    item: CatalogImageItem
    categoryName: string
  } | null>(null)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev))
    }, 2500)
  }

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label} copied!`)
    }).catch(() => {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      showToast(`${label} copied!`)
    })
  }

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const selectAllTopPicks = () => {
    const topIds = new Set<string>()
    CATALOG_CATEGORIES.forEach((cat) => {
      const top = cat.items.find((i) => i.rank === 1)
      if (top) topIds.add(top.id)
    })
    setSelectedIds(topIds)
    showToast(`Selected all 20 #1 Recommended Top Picks!`)
  }

  const clearSelection = () => {
    setSelectedIds(new Set())
    showToast('Selection cleared.')
  }

  const handleImageError = (itemId: string) => {
    setFailedImages((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }))
  }

  const retryImage = (itemId: string) => {
    setFailedImages((prev) => {
      const next = { ...prev }
      delete next[itemId]
      return next
    })
  }

  const copySelectedSummary = () => {
    if (selectedIds.size === 0) {
      showToast('No photos selected yet. Please select photos first.')
      return
    }

    const lines: string[] = ['# CoVision Technologies — Senior Leadership Approved Photos:\n']
    CATALOG_CATEGORIES.forEach((cat) => {
      const matches = cat.items.filter((i) => selectedIds.has(i.id))
      if (matches.length > 0) {
        lines.push(`## ${cat.name} (${matches.length} selected)`)
        matches.forEach((m) => {
          lines.push(`- Rank #${m.rank} [${m.title}]: ${m.photoId} -> https://images.unsplash.com/${m.photoId}`)
        })
        lines.push('')
      }
    })

    copyToClipboard(lines.join('\n'), `Export list of ${selectedIds.size} approved photos`)
  }

  const copyShareableLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#catalog`
    copyToClipboard(url, 'Shareable Review Portal link')
  }

  const totalPhotosCount = useMemo(() => {
    return CATALOG_CATEGORIES.reduce((acc, c) => acc + c.items.length, 0)
  }, [])

  const filteredCategories = useMemo(() => {
    let cats = selectedCategory === 'all'
      ? CATALOG_CATEGORIES
      : CATALOG_CATEGORIES.filter((c) => c.id === selectedCategory)

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      cats = cats.map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.title.toLowerCase().includes(q) ||
            item.angleDescription.toLowerCase().includes(q) ||
            item.photoId.toLowerCase().includes(q) ||
            cat.name.toLowerCase().includes(q) ||
            cat.focus.toLowerCase().includes(q)
        ),
      })).filter((c) => c.items.length > 0)
    }

    return cats
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 font-sans selection:bg-[#0066FF] selection:text-white pb-36">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[200] bg-slate-900/95 border border-blue-500/50 shadow-2xl shadow-blue-500/30 backdrop-blur-xl px-5 py-3 rounded-full flex items-center gap-2.5 text-xs font-medium text-white pointer-events-none"
          >
            <div className="size-2 rounded-full bg-blue-400 animate-pulse" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Executive Header */}
      <header className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-blue-950/20 via-slate-950 to-[#07090E] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,102,255,0.22),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumbs & Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer group"
            >
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5 text-blue-400" />
              <span>Back to Main Website</span>
            </button>

            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-[11px] font-mono font-bold tracking-wider text-blue-400 uppercase">
                <span className="size-1.5 rounded-full bg-blue-400 animate-ping" />
                Live Senior Review Portal
              </span>
              <button
                onClick={copyShareableLink}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-xs font-semibold text-blue-300 hover:text-white transition-all cursor-pointer"
                title="Copy shareable link for senior"
              >
                <Share2 className="size-3.5" />
                <span>Copy Shareable Link</span>
              </button>
            </div>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 uppercase tracking-widest mb-4">
              <Sparkles className="size-3 text-amber-400" />
              20 Enterprise IT Domains • 10 Curated Angles Each • 200 Total Assets
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-bricolage">
              Senior Leadership Image Selection Board
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl font-normal">
              Senior ke feedback ke mutabiq top IT companies (TCS, Infosys, Accenture, Stripe, Cognizant) ke benchmark ke mutabiq total <strong className="text-white font-semibold">200 enterprise-grade photographs</strong> curate kiye gaye hain. Har category ke 10 top angles live preview me available hain.
            </p>
          </div>

          {/* Quick Search & Filter Bar */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search across all 200 photos (e.g. cloud, trading, robotics, docker)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Selection Toolbar */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Approved:
                </span>
                <span className="px-2.5 py-1 rounded-md bg-blue-500/20 border border-blue-500/30 font-mono text-xs font-bold text-blue-400">
                  {selectedIds.size} / {totalPhotosCount} Selected
                </span>
              </div>

              <button
                onClick={selectAllTopPicks}
                className="text-xs font-semibold text-slate-300 hover:text-blue-400 underline underline-offset-4 cursor-pointer transition-colors"
              >
                Select All 20 Top Picks (#1)
              </button>
              {selectedIds.size > 0 && (
                <button
                  onClick={clearSelection}
                  className="text-xs text-slate-500 hover:text-red-400 cursor-pointer transition-colors"
                >
                  Clear
                </button>
              )}

              <button
                onClick={copySelectedSummary}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-wide shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
              >
                <BookmarkCheck className="size-3.5" />
                <span>Export Selected List ({selectedIds.size})</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky 20-Domain Filter Tabs */}
      <div className="sticky top-0 z-40 bg-[#07090E]/95 backdrop-blur-xl border-b border-slate-800/80 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap cursor-pointer transition-all flex items-center gap-1.5 ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Layers className="size-3.5" />
            <span>All 20 Domains</span>
            <span className="text-[10px] font-mono opacity-80 px-1.5 py-0.2 rounded-full bg-black/30">
              {totalPhotosCount}
            </span>
          </button>

          {CATALOG_CATEGORIES.map((cat, idx) => {
            const Icon = CATEGORY_ICONS[cat.id] || Layers
            const isActive = selectedCategory === cat.id
            const countInCat = cat.items.filter((i) => selectedIds.has(i.id)).length
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap cursor-pointer transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Icon className="size-3.5" />
                <span>
                  {idx < 9 ? `0${idx + 1}` : idx + 1}. {cat.shortName}
                </span>
                {countInCat > 0 && (
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-blue-400/20 text-blue-300 font-bold">
                    {countInCat}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="space-y-16">
          {filteredCategories.map((cat, catIdx) => {
            const Icon = CATEGORY_ICONS[cat.id] || Layers
            return (
              <section key={cat.id} id={`category-${cat.id}`} className="scroll-mt-28">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-800 mb-8">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
                        <Icon className="size-4" />
                      </span>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                        Domain {catIdx < 9 ? `0${catIdx + 1}` : catIdx + 1} • {cat.items.length} Curated Options
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-bricolage">
                      {cat.name}
                    </h2>
                    <p className="mt-1 text-sm text-slate-400 max-w-3xl leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0">
                    Focus: <span className="text-slate-200">{cat.focus}</span>
                  </div>
                </div>

                {/* 10 Photos Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {cat.items.map((item) => {
                    const isSelected = selectedIds.has(item.id)
                    const isTopPick = item.rank === 1
                    const hasError = !!failedImages[item.id]

                    return (
                      <div
                        key={item.id}
                        className={`group relative rounded-xl overflow-hidden bg-slate-900/60 border transition-all duration-300 flex flex-col justify-between ${
                          isSelected
                            ? 'border-blue-500 ring-2 ring-blue-500/30 bg-blue-950/20 shadow-xl shadow-blue-500/10'
                            : 'border-slate-800/80 hover:border-slate-700 hover:bg-slate-900'
                        }`}
                      >
                        {/* Top Image Preview Container */}
                        <div
                          className="relative aspect-video w-full bg-slate-950 overflow-hidden cursor-pointer"
                          onClick={() => setActiveModalItem({ item, categoryName: cat.name })}
                        >
                          {!hasError ? (
                            <img
                              src={item.previewUrl}
                              alt={item.title}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              crossOrigin="anonymous"
                              onError={() => handleImageError(item.id)}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-slate-900 text-center">
                              <Icon className="size-6 text-slate-600 mb-2" />
                              <span className="text-xs text-slate-400 font-mono mb-2">Network preview issue</span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  retryImage(item.id)
                                }}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] text-blue-400 border border-slate-700 cursor-pointer"
                              >
                                <RotateCcw className="size-3" />
                                <span>Retry Load</span>
                              </button>
                            </div>
                          )}

                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 pointer-events-none" />

                          {/* Rank Badge */}
                          <div className="absolute top-3 left-3 flex items-center gap-1.5 pointer-events-none">
                            {isTopPick ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-600 text-white font-mono text-[10px] font-extrabold uppercase tracking-wider shadow-lg shadow-blue-600/50 border border-blue-400/40">
                                <Sparkles className="size-3" />
                                ★ #1 TOP RECOMMENDATION
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded-md bg-slate-900/90 text-slate-300 border border-slate-700 font-mono text-[10px] font-bold">
                                #{item.rank} Option
                              </span>
                            )}
                          </div>

                          {/* Hover Zoom Prompt */}
                          <div className="absolute inset-0 bg-blue-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 pointer-events-none">
                            <span className="px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-semibold flex items-center gap-1.5 border border-white/20">
                              <Eye className="size-3.5" />
                              Inspect Full Res
                            </span>
                          </div>

                          {/* Checkbox Button */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleSelect(item.id)
                            }}
                            className={`absolute top-3 right-3 size-7 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/50 ring-2 ring-white/50'
                                : 'bg-black/60 text-slate-400 hover:text-white border border-white/20 hover:bg-black/80'
                            }`}
                            title={isSelected ? 'Deselect this photo' : 'Select / Approve this photo'}
                          >
                            <Check className={`size-4 ${isSelected ? 'stroke-[3]' : 'opacity-40'}`} />
                          </button>
                        </div>

                        {/* Card Meta & Details */}
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                              {item.title}
                            </h3>
                            <p className="mt-1.5 text-xs text-slate-400 leading-relaxed font-normal">
                              {item.angleDescription}
                            </p>
                          </div>

                          {/* Actions / Photo ID */}
                          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                            <button
                              onClick={() => copyToClipboard(item.photoId, `Unsplash ID (${item.photoId})`)}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-950 hover:bg-slate-800 border border-slate-800 text-[11px] font-mono text-slate-400 hover:text-blue-300 transition-all cursor-pointer max-w-[150px] truncate"
                              title="Click to copy Unsplash ID"
                            >
                              <Copy className="size-3 shrink-0" />
                              <span className="truncate">{item.photoId}</span>
                            </button>

                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => setActiveModalItem({ item, categoryName: cat.name })}
                                className="p-1.5 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                                title="Zoom preview"
                              >
                                <Eye className="size-3.5" />
                              </button>
                              <a
                                href={`https://unsplash.com/photos/${item.photoId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                                title="Open on Unsplash.com"
                              >
                                <ExternalLink className="size-3.5" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>
      </main>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 px-6 border-b border-slate-800 bg-slate-900/60">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-400 font-mono text-xs font-bold">
                    Rank #{activeModalItem.item.rank}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {activeModalItem.item.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {activeModalItem.categoryName} • ID: {activeModalItem.item.photoId}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleSelect(activeModalItem.item.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedIds.has(activeModalItem.item.id)
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                    }`}
                  >
                    <Check className="size-3.5" />
                    <span>
                      {selectedIds.has(activeModalItem.item.id) ? 'Selected (Approved)' : 'Select for Senior'}
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white cursor-pointer"
                  >
                    <X className="size-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body / Full Image */}
              <div className="flex-1 overflow-auto bg-black flex items-center justify-center p-4">
                <img
                  src={activeModalItem.item.fullUrl}
                  alt={activeModalItem.item.title}
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Modal Footer Description */}
              <div className="p-4 px-6 border-t border-slate-800 bg-slate-900/60 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  <strong className="text-white font-semibold">Aesthetic Angle:</strong> {activeModalItem.item.angleDescription}
                </p>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => copyToClipboard(activeModalItem.item.photoId, 'Unsplash ID')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 cursor-pointer"
                  >
                    <Copy className="size-3.5" />
                    <span>Copy ID</span>
                  </button>
                  <a
                    href={`https://unsplash.com/photos/${activeModalItem.item.photoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white cursor-pointer"
                  >
                    <ExternalLink className="size-3.5" />
                    <span>View on Unsplash</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

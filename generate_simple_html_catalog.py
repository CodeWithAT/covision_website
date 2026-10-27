import os, json, re

# Read data from imageCatalogData.ts
with open('src/data/imageCatalogData.ts', 'r', encoding='utf-8') as f:
    ts_code = f.read()

# Extract CATALOG_CATEGORIES json-like structure
match = re.search(r'export const CATALOG_CATEGORIES: CatalogCategory\[\] = (\[.*?\]);', ts_code, re.DOTALL)
if not match:
    print("Could not find CATALOG_CATEGORIES in TS file")
    exit(1)

categories_json_str = match.group(1)
categories = json.loads(categories_json_str)

print(f"Loaded {len(categories)} categories, total items: {sum(len(c['items']) for c in categories)}")

# Build standalone HTML
html_content = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="referrer" content="no-referrer">
  <title>CoVision — Senior Executive Image Selection Catalog (200 Curated Options)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #090D16;
      --card-bg: #111726;
      --card-border: #1E293B;
      --accent: #2563EB;
      --accent-hover: #1D4ED8;
      --accent-glow: rgba(37, 99, 235, 0.35);
      --text: #F8FAFC;
      --text-muted: #94A3B8;
      --badge-rec: #10B981;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: 'Plus Jakarta Sans', sans-serif;
      line-height: 1.5;
      padding-bottom: 120px;
    }
    /* Sticky Header */
    header {
      background: rgba(9, 13, 22, 0.95);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--card-border);
      position: sticky;
      top: 0;
      z-index: 50;
      padding: 16px 24px;
    }
    .header-content {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    .title-group h1 {
      font-size: 22px;
      font-weight: 800;
      color: #FFFFFF;
      letter-spacing: -0.02em;
    }
    .title-group p {
      font-size: 13px;
      color: var(--text-muted);
    }
    .instruction-box {
      background: rgba(37, 99, 235, 0.1);
      border: 1px solid rgba(37, 99, 235, 0.3);
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 12px;
      color: #93C5FD;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    /* Quick Jump Nav */
    .jump-nav {
      background: #0D1322;
      border-bottom: 1px solid var(--card-border);
      padding: 10px 24px;
      position: sticky;
      top: 69px;
      z-index: 40;
    }
    .jump-nav-inner {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      gap: 8px;
      overflow-x: auto;
      scrollbar-width: thin;
      scrollbar-color: #334155 transparent;
      padding-bottom: 4px;
    }
    .jump-pill {
      background: #172033;
      color: #CBD5E1;
      text-decoration: none;
      font-size: 11px;
      font-weight: 600;
      padding: 6px 12px;
      border-radius: 6px;
      white-space: nowrap;
      border: 1px solid #1E293B;
      transition: all 0.2s;
    }
    .jump-pill:hover {
      background: var(--accent);
      color: #FFFFFF;
      border-color: var(--accent);
    }
    /* Main Layout */
    main {
      max-width: 1400px;
      margin: 32px auto 0;
      padding: 0 24px;
    }
    .section-wrap {
      margin-bottom: 56px;
      scroll-margin-top: 140px;
    }
    .section-head {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-bottom: 2px solid #1E293B;
      padding-bottom: 12px;
      margin-bottom: 20px;
    }
    .sec-title {
      font-size: 20px;
      font-weight: 800;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .sec-num {
      background: var(--accent);
      color: white;
      font-size: 12px;
      font-family: 'JetBrains Mono', monospace;
      padding: 2px 8px;
      border-radius: 4px;
    }
    .sec-meta {
      font-size: 13px;
      color: var(--text-muted);
      margin-top: 4px;
    }
    .sec-count {
      font-size: 12px;
      font-weight: 700;
      color: #38BDF8;
      background: rgba(56, 189, 248, 0.1);
      padding: 4px 10px;
      border-radius: 9999px;
      border: 1px solid rgba(56, 189, 248, 0.2);
    }
    /* Grid & Cards */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 18px;
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
    }
    .card:hover {
      transform: translateY(-3px);
      border-color: #3B82F6;
      box-shadow: 0 10px 24px -6px rgba(0, 0, 0, 0.6);
    }
    .card.selected {
      border-color: #10B981;
      box-shadow: 0 0 0 2px #10B981;
    }
    .img-box {
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 10;
      background: #0B0F19;
      overflow: hidden;
      cursor: zoom-in;
    }
    .img-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.4s;
    }
    .card:hover .img-box img {
      transform: scale(1.05);
    }
    .opt-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 700;
      font-family: 'JetBrains Mono', monospace;
      z-index: 2;
    }
    .badge-primary {
      background: #059669;
      color: #FFFFFF;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    }
    .badge-regular {
      background: rgba(15, 23, 42, 0.85);
      color: #F1F5F9;
      border: 1px solid rgba(255, 255, 255, 0.15);
    }
    .zoom-hint {
      position: absolute;
      bottom: 8px;
      right: 8px;
      background: rgba(0, 0, 0, 0.65);
      color: white;
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 4px;
      opacity: 0;
      transition: opacity 0.2s;
    }
    .card:hover .zoom-hint {
      opacity: 1;
    }
    .card-body {
      padding: 12px 14px 14px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .card-title {
      font-size: 13px;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 4px;
      line-height: 1.3;
    }
    .card-desc {
      font-size: 11px;
      color: var(--text-muted);
      line-height: 1.4;
      margin-bottom: 12px;
      flex: 1;
    }
    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 10px;
      border-top: 1px solid #1E293B;
      gap: 6px;
    }
    .check-label {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      font-weight: 600;
      color: #CBD5E1;
      cursor: pointer;
      user-select: none;
    }
    .check-label input {
      accent-color: #10B981;
      width: 15px;
      height: 15px;
      cursor: pointer;
    }
    .copy-btn {
      background: #1E293B;
      color: #93C5FD;
      border: none;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 10px;
      font-family: 'JetBrains Mono', monospace;
      cursor: pointer;
      transition: background 0.2s;
    }
    .copy-btn:hover {
      background: var(--accent);
      color: #FFFFFF;
    }
    /* Sticky Bottom Selection Bar */
    .selection-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(15, 23, 42, 0.95);
      border-top: 1px solid #334155;
      backdrop-filter: blur(16px);
      padding: 12px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
      box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.5);
    }
    .bar-summary {
      font-size: 13px;
      font-weight: 600;
      color: #F8FAFC;
    }
    .bar-summary span {
      color: #10B981;
      font-weight: 800;
      font-size: 15px;
    }
    .bar-actions {
      display: flex;
      gap: 12px;
    }
    .bar-btn-primary {
      background: #10B981;
      color: #FFFFFF;
      font-weight: 700;
      font-size: 12px;
      padding: 8px 16px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      transition: background 0.2s;
    }
    .bar-btn-primary:hover {
      background: #059669;
    }
    .bar-btn-secondary {
      background: #334155;
      color: #F8FAFC;
      font-weight: 600;
      font-size: 12px;
      padding: 8px 14px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
    }
    .bar-btn-secondary:hover {
      background: #475569;
    }
    /* Lightbox Modal */
    .lightbox {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.92);
      backdrop-filter: blur(12px);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 24px;
    }
    .lightbox-inner {
      max-width: 90vw;
      max-height: 85vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .lightbox img {
      max-width: 100%;
      max-height: 80vh;
      border-radius: 10px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.15);
    }
    .lightbox-caption {
      margin-top: 12px;
      font-size: 14px;
      color: #CBD5E1;
      text-align: center;
    }
    .lightbox-close {
      position: absolute;
      top: 24px;
      right: 24px;
      color: white;
      font-size: 32px;
      cursor: pointer;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      width: 44px;
      height: 44px;
      display: grid;
      place-items: center;
      border: none;
    }
    .lightbox-close:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    /* Toast */
    .toast {
      position: fixed;
      top: 24px;
      right: 24px;
      background: #10B981;
      color: white;
      font-weight: 600;
      font-size: 12px;
      padding: 10px 18px;
      border-radius: 8px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
      display: none;
      z-index: 10000;
    }
  </style>
</head>
<body>

  <header>
    <div class="header-content">
      <div class="title-group">
        <h1>CoVision Technologies — Executive Image Selection</h1>
        <p>20 Technical Domains • 10 Curated Formal Corporate Options Each • Total 200 Unique Photos</p>
      </div>
      <div class="instruction-box">
        💡 <span><strong>Tip for Senior:</strong> Click image to zoom • Check boxes to select your favorites • Click "Copy Selected List" at bottom to send.</span>
      </div>
    </div>
  </header>

  <nav class="jump-nav">
    <div class="jump-nav-inner">
"""

# Add jump pills
for i, cat in enumerate(categories, 1):
    html_content += f'      <a class="jump-pill" href="#{cat["id"]}">{i}. {cat["shortName"]}</a>\n'

html_content += """    </div>
  </nav>

  <main>
"""

# Add each category section
for i, cat in enumerate(categories, 1):
    html_content += f"""
    <section class="section-wrap" id="{cat['id']}">
      <div class="section-head">
        <div>
          <div class="sec-title">
            <span class="sec-num">{i:02d}</span>
            <span>{cat['name']}</span>
          </div>
          <div class="sec-meta">{cat['focus']}</div>
        </div>
        <div class="sec-count">10 Curated Options</div>
      </div>
      <div class="grid">
"""
    for item in cat['items']:
        is_rec = (item['rank'] == 1)
        badge_cls = "badge-primary" if is_rec else "badge-regular"
        badge_text = f"★ Option #{item['rank']} (Recommended)" if is_rec else f"Option #{item['rank']}"
        opt_code = f"{cat['shortName']} - Option {item['rank']}"
        
        # relative path works both when served from server root and locally
        img_src = f".{item['localPath']}"

        html_content += f"""        <div class="card" data-cat="{cat['name']}" data-opt="Option {item['rank']}" data-title="{item['title']}">
          <div class="img-box" onclick="openLightbox('{img_src}', '{cat['name']} — Option #{item['rank']}: {item['title']}')">
            <span class="opt-badge {badge_cls}">{badge_text}</span>
            <img src="{img_src}" alt="{item['title']}" loading="lazy" onerror="this.onerror=null; this.src='{item['localPath']}';">
            <span class="zoom-hint">🔍 Zoom</span>
          </div>
          <div class="card-body">
            <div class="card-title">{item['title']}</div>
            <div class="card-desc">{item['angleDescription']}</div>
            <div class="card-footer">
              <label class="check-label">
                <input type="checkbox" onchange="toggleSelect(this, '{cat['name']}', 'Option {item['rank']}', '{item['title']}')">
                <span>Select</span>
              </label>
              <button class="copy-btn" onclick="copyText('{opt_code}', 'Copied: {opt_code}')">Copy ID</button>
            </div>
          </div>
        </div>
"""
    html_content += """      </div>
    </section>
"""

html_content += """  </main>

  <!-- Sticky Bottom Selection Bar -->
  <div class="selection-bar">
    <div class="bar-summary">
      Selected for Website: <span id="selectedCount">0</span> of 20 categories
    </div>
    <div class="bar-actions">
      <button class="bar-btn-secondary" onclick="clearAllSelections()">Clear All</button>
      <button class="bar-btn-primary" onclick="copyFinalList()">📋 Copy Selected List to Clipboard</button>
    </div>
  </div>

  <!-- Lightbox -->
  <div class="lightbox" id="lightbox" onclick="closeLightbox()">
    <button class="lightbox-close" onclick="closeLightbox()">×</button>
    <div class="lightbox-inner" onclick="event.stopPropagation()">
      <img id="lightboxImg" src="" alt="Full Preview">
      <div class="lightbox-caption" id="lightboxCaption"></div>
    </div>
  </div>

  <!-- Toast -->
  <div class="toast" id="toast">Copied to clipboard!</div>

  <script>
    const selectedOptions = {};

    function toggleSelect(checkbox, catName, optName, title) {
      const card = checkbox.closest('.card');
      if (checkbox.checked) {
        card.classList.add('selected');
        if (!selectedOptions[catName]) selectedOptions[catName] = [];
        selectedOptions[catName].push({ opt: optName, title: title });
      } else {
        card.classList.remove('selected');
        if (selectedOptions[catName]) {
          selectedOptions[catName] = selectedOptions[catName].filter(x => x.opt !== optName);
          if (selectedOptions[catName].length === 0) delete selectedOptions[catName];
        }
      }
      updateSummary();
    }

    function updateSummary() {
      const count = Object.keys(selectedOptions).length;
      document.getElementById('selectedCount').innerText = count;
    }

    function clearAllSelections() {
      document.querySelectorAll('.card input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
        cb.closest('.card').classList.remove('selected');
      });
      for (const k in selectedOptions) delete selectedOptions[k];
      updateSummary();
      showToast('All selections cleared');
    }

    function copyFinalList() {
      const cats = Object.keys(selectedOptions);
      if (cats.length === 0) {
        showToast('Please select at least 1 image first!');
        return;
      }
      let text = "Selected Website Images:\\n";
      cats.forEach(cat => {
        const items = selectedOptions[cat].map(x => `${x.opt} (${x.title})`).join(', ');
        text += `• ${cat}: ${items}\\n`;
      });
      navigator.clipboard.writeText(text).then(() => {
        showToast('Selection list copied! Ready to paste into WhatsApp / Email.');
      });
    }

    function copyText(val, msg) {
      navigator.clipboard.writeText(val).then(() => {
        showToast(msg || 'Copied!');
      });
    }

    function showToast(msg) {
      const toast = document.getElementById('toast');
      toast.innerText = msg;
      toast.style.display = 'block';
      setTimeout(() => {
        toast.style.display = 'none';
      }, 2500);
    }

    function openLightbox(src, caption) {
      const lb = document.getElementById('lightbox');
      const img = document.getElementById('lightboxImg');
      const cap = document.getElementById('lightboxCaption');
      img.src = src;
      cap.innerText = caption;
      lb.style.display = 'flex';
    }

    function closeLightbox() {
      document.getElementById('lightbox').style.display = 'none';
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  </script>
</body>
</html>
"""

# Write to public/image-catalog.html AND public/catalog.html
with open('public/image-catalog.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

with open('public/catalog.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("Successfully written public/image-catalog.html and public/catalog.html!")

import re
import os
from PIL import Image

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

pages = sorted(list(set(re.findall(r"activePage === '([^']+)'", text))))
print('Active pages in App.tsx:', pages)

banners = re.findall(r"<PageHeaderBanner\s+([\s\S]*?)\/>", text)
print(f'Total PageHeaderBanner components: {len(banners)}')

for i, b in enumerate(banners):
    img_m = re.search(r"image=[\"{]([^\"}]+)[\"}]", b)
    title_m = re.search(r"pageName=[\"{]([^\"}]+)[\"}]", b)
    img_val = img_m.group(1) if img_m else "N/A"
    title_val = title_m.group(1) if title_m else "N/A"
    print(f"Banner {i+1}: Page='{title_val}' | Image='{img_val}'")

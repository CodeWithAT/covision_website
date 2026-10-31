import os
import io
import ssl
import urllib.request
import numpy as np
from PIL import Image
import cv2

# Ensure target directory exists
OUT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'public', 'images', 'banners'))
os.makedirs(OUT_DIR, exist_ok=True)

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
}

TARGET_W, TARGET_H = 3840, 2160

def process_and_save(img: Image.Image, base_name: str, sharpen_strength: float = 1.3):
    # Center crop / fit to 16:9
    w, h = img.size
    target_aspect = TARGET_W / TARGET_H
    current_aspect = w / h

    if current_aspect > target_aspect:
        # Image is wider -> crop sides
        new_w = int(h * target_aspect)
        left = (w - new_w) // 2
        img = img.crop((left, 0, left + new_w, h))
    elif current_aspect < target_aspect:
        # Image is taller -> crop top/bottom (prefer slight bias towards top 40% for banners)
        new_h = int(w / target_aspect)
        top = max(0, int((h - new_h) * 0.35))
        img = img.crop((0, top, w, top + new_h))

    # Resize to exact 3840x2160 with Lanczos
    img_4k = img.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)

    # Perceptual unsharp masking in LAB color space
    img_cv = np.array(img_4k.convert('RGB'))
    lab = cv2.cvtColor(img_cv, cv2.COLOR_RGB2LAB)
    l, a, b = cv2.split(lab)
    blurred = cv2.GaussianBlur(l, (0, 0), 2.0)
    unsharp_l = cv2.addWeighted(l, sharpen_strength, blurred, -(sharpen_strength - 1.0), 0)
    lab_sharp = cv2.merge((unsharp_l, a, b))
    res_rgb = cv2.cvtColor(lab_sharp, cv2.COLOR_LAB2RGB)
    final_img = Image.fromarray(res_rgb)

    webp_path = os.path.join(OUT_DIR, f"{base_name}.webp")
    jpg_path = os.path.join(OUT_DIR, f"{base_name}.jpg")

    final_img.save(webp_path, 'WEBP', quality=95, method=6)
    final_img.save(jpg_path, 'JPEG', quality=95, optimize=True)

    webp_mb = os.path.getsize(webp_path) / (1024 * 1024)
    jpg_mb = os.path.getsize(jpg_path) / (1024 * 1024)

    gray = cv2.cvtColor(res_rgb, cv2.COLOR_RGB2GRAY)
    lap_var = cv2.Laplacian(gray, cv2.CV_64F).var()

    print(f"[{base_name:20}] Saved: {webp_mb:.2f}MB (webp) | {jpg_mb:.2f}MB (jpg) | Sharpness: {lap_var:.1f}")

def download_pexels(photo_id: str) -> Image.Image:
    url = f"https://images.pexels.com/photos/{photo_id}/pexels-photo-{photo_id}.jpeg?auto=compress&cs=tinysrgb&w=3840"
    print(f"Fetching Pexels {photo_id} from {url}...")
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=20, context=ctx) as r:
        data = r.read()
        return Image.open(io.BytesIO(data))

def main():
    print("=== Upgrading All Website Banners to Native 4K UHD (3840x2160) ===\n")

    # 1. Services & Cloud Fabric (from pristine technology_banner_blue.png)
    local_services = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'public', 'images', 'services', 'technology_banner_blue.png'))
    print("Processing 1/7: Services & Cloud Fabric...")
    img_services = Image.open(local_services)
    process_and_save(img_services, "services_banner_4k", sharpen_strength=1.35)

    # 2. SaaS Platforms Suite (Pexels 590022 - Executive SaaS Performance Dashboard)
    print("\nProcessing 2/7: SaaS Platforms Suite...")
    img_saas = download_pexels("590022")
    process_and_save(img_saas, "saas_banner_4k", sharpen_strength=1.3)

    # 3. AI & Automation Practice (Already generated from ComfyUI lossless 4K master)
    print("\nProcessing 3/7: AI & Automation Practice...")
    local_ai = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'public', 'images', 'ai_banner_hero_4k.webp'))
    img_ai = Image.open(local_ai)
    # Save a direct banner copy for consistency
    img_ai.save(os.path.join(OUT_DIR, "ai_banner_4k.webp"), 'WEBP', quality=95)
    img_ai.convert('RGB').save(os.path.join(OUT_DIR, "ai_banner_4k.jpg"), 'JPEG', quality=95)
    print(f"[{'ai_banner_4k':20}] Synced from master 4K asset")

    # 4. Living Technology Philosophy (Pexels 1181671 - Vertical Code Architecture)
    print("\nProcessing 4/7: Living Technology Philosophy...")
    img_living = download_pexels("1181671")
    process_and_save(img_living, "living_tech_banner_4k", sharpen_strength=1.35)

    # 5. Client Ecosystem & Case Studies (Pexels 2422290 - Executive Boardroom Capital Strategy)
    print("\nProcessing 5/7: Client Ecosystem & Case Studies...")
    img_cases = download_pexels("2422290")
    process_and_save(img_cases, "case_studies_banner_4k", sharpen_strength=1.25)

    # 6. About CoVision (Pexels 1181397 - Silicon Valley Style Open Tech Campus)
    print("\nProcessing 6/7: About CoVision...")
    img_about = download_pexels("1181397")
    process_and_save(img_about, "about_banner_4k", sharpen_strength=1.3)

    # 7. Enterprise Scoping (Pexels 3184306 - Cross-Functional Pod Synergy Desk)
    print("\nProcessing 7/7: Enterprise Scoping...")
    img_contact = download_pexels("3184306")
    process_and_save(img_contact, "contact_banner_4k", sharpen_strength=1.25)

    print("\n=== All 7 Banners Successfully Upgraded to 4K UHD! ===")

if __name__ == '__main__':
    main()

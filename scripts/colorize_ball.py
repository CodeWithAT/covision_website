import cv2
import numpy as np

# Load full-resolution original banner
orig = cv2.imread('public/images/services/technology_banner_original.png')
if orig is None:
    raise FileNotFoundError("Could not find public/images/services/technology_banner_original.png")

h, w, _ = orig.shape
cx, cy, r = 1282.2, 669.5, 112.6

y_coords, x_coords = np.ogrid[:h, :w]
dist = np.sqrt((x_coords - cx)**2 + (y_coords - cy)**2)

# Anti-aliased feather mask (sub-pixel edge transition)
mask = np.clip((r - dist + 0.5) / 1.5, 0.0, 1.0)[:, :, np.newaxis]
in_sphere = (dist <= r)[:, :, np.newaxis]

orig_f = orig.astype(np.float32) / 255.0

# Extract original luminance
lum = (0.0722 * orig_f[:, :, 0] + 0.7152 * orig_f[:, :, 1] + 0.2126 * orig_f[:, :, 2])[:, :, np.newaxis]

# Normal vector approximation on the 3D sphere:
nx = np.where(in_sphere, (x_coords[:, :, np.newaxis] - cx) / r, 0.0)
ny = np.where(in_sphere, (y_coords[:, :, np.newaxis] - cy) / r, 0.0)
nz = np.where(in_sphere, np.sqrt(np.maximum(0.0, 1.0 - nx**2 - ny**2)), 0.0)

# Fresnel rim lighting
fresnel = np.clip(1.0 - nz, 0.0, 1.0) ** 2.0

# Golden specular glint from sunrise
specular = np.clip((lum - 0.55) / 0.45, 0.0, 1.0) ** 2.2
sun_color_bgr = np.array([0.96, 0.98, 1.0], dtype=np.float32)

# CoVision Theme Blue Palette (BGR):
# Shadow: deep royal sapphire blue (RGB: 5, 92, 224)
# Midtone: vibrant electric cobalt blue #0052cb / #0066ff (RGB: 10, 143, 255)
# Bright highlight: luminous cyan-blue tint (RGB: 64, 204, 255)
blue_shadow = np.array([0.88, 0.36, 0.02], dtype=np.float32)
blue_mid = np.array([1.00, 0.56, 0.04], dtype=np.float32)
blue_bright = np.array([1.00, 0.80, 0.25], dtype=np.float32)

t = np.clip((lum - 0.10) / 0.45, 0.0, 1.0)
base_blue = blue_shadow * (1.0 - t) + blue_mid * t
t2 = np.clip((lum - 0.45) / 0.35, 0.0, 1.0)
base_blue = base_blue * (1.0 - t2) + blue_bright * t2

# Dynamic luminous curve ensuring rich saturation in midtones and shadows
luminous_curve = 0.48 + 0.85 * (lum ** 0.80)
metallic = base_blue * luminous_curve
metallic = np.clip(metallic, 0.0, 1.0)

# Subtle electric rim glow
rim_color = np.array([1.0, 0.70, 0.30], dtype=np.float32)
metallic = np.clip(metallic + fresnel * 0.24 * rim_color, 0.0, 1.0)

# Blend specular highlight
final_sphere = metallic * (1.0 - specular * 0.85) + sun_color_bgr * (specular * 0.85)
final_sphere = np.clip(final_sphere, 0.0, 1.0)

# Final blend: 100% exact original background outside sphere + metallic blue sphere
result = orig_f * (1.0 - mask) + final_sphere * mask
result_uint8 = np.clip(result * 255.0, 0, 255).astype(np.uint8)

# Save both PNG and JPG formats for deployment
cv2.imwrite('public/images/services/technology_banner.png', result_uint8)
cv2.imwrite('public/images/services/technology_banner.jpg', result_uint8)

# Save preview crop for visual inspection
crop = result_uint8[550:790, 1160:1400]
cv2.imwrite('blue_ball_preview.png', crop)

print("Successfully generated Technology banner with vibrant CoVision Theme Blue metallic sphere!")

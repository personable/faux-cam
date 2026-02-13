# Elevation (Depth) Tokens

Elevation tokens define shadow levels to create visual depth. Shadows use a dark, semi-transparent color with varying blur and offset values.

---

## Depth Levels

| Level | Y Offset | Blur | Shadow Color CSS Variable | Usage |
|-------|----------|------|--------------------------|-------|
| **1** | 1px | 3px | `--cc_color_depth_1` (`rgba(20,35,52,0.13)`) | Tooltips |
| **2** | 2px | 6px | `--cc_color_depth_2` (`rgba(20,35,52,0.13)`) | Cards, Popovers |
| **3** | 4px | 12px | `--cc_color_depth_3` (`rgba(20,35,52,0.20)`) | Modals, floating action bars |

---

## CSS Construction

Shadows are constructed using the depth tokens as:

```css
box-shadow: 0 {y}px {blur}px {color};
```

**Size token CSS variables:**

| Property | CSS Variable |
|----------|-------------|
| Depth 1 blur | `--cc_size_depth_1_blur` (3) |
| Depth 1 Y | `--cc_size_depth_1_y` (1) |
| Depth 2 blur | `--cc_size_depth_2_blur` (6) |
| Depth 2 Y | `--cc_size_depth_2_y` (2) |
| Depth 3 blur | `--cc_size_depth_3_blur` (12) |
| Depth 3 Y | `--cc_size_depth_3_y` (4) |

---

## Component Mapping

| Depth Level | Components |
|-------------|-----------|
| 1 (Low) | Tooltip |
| 2 (Medium) | Card, Popover, Drawer |
| 3 (High) | Modal, floating action bars, Toast |

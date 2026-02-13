# Token System Overview

Slab's design tokens define the visual language shared across all platforms. Tokens ensure consistency in color, spacing, typography, borders, and elevation.

---

## Two-Tier Architecture

| Tier | Description | Example | Used In |
|------|-------------|---------|---------|
| **1 — Primitives** | Raw values (hex colors, pixel sizes) | `color.stone.800` → `#292622` | Only inside semantic token definitions |
| **2 — Semantic** | Purpose-driven tokens referencing primitives | `color.action.primary.base` → stone-800 | Components and layouts |

> **Rule:** Always use semantic tokens. Never reference primitives directly in component code or design files.

---

## Token Categories

| Category | CSS Variable Pattern | Detail File |
|----------|---------------------|-------------|
| **Semantic Colors** | `--cc_color_*` | [colors-semantic.md](./design-tokens/colors-semantic.md) |
| **Primitive Colors** | *(reference only)* | [colors-primitives.md](./design-tokens/colors-primitives.md) |
| **Spacing** | `--cc_size_spacing_*` | [spacing.md](./design-tokens/spacing.md) |
| **Typography** | `--cc_size_text_*` | [typography.md](./design-tokens/typography.md) |
| **Borders** | `--cc_size_border_width_*`, `--cc_size_border_radius_*` | [borders.md](./design-tokens/borders.md) |
| **Elevation** | `--cc_size_depth_*`, `--cc_color_depth_*` | [elevation.md](./design-tokens/elevation.md) |

---

## CSS Variable Naming

All generated CSS variables follow the `--cc_` prefix convention:

```
--cc_{domain}_{category}_{name}
```

Examples:
- `--cc_color_utility_success` — semantic color
- `--cc_size_spacing_m` — spacing size
- `--cc_size_border_radius_l` — border radius
- `--cc_size_text_m` — font size

Variables are generated into `light_environment.css` and applied via `:root` or `.light-environment`.

---

## Quick Reference

### Neutrals
Slab uses the **stone** scale for all neutral colors (not gray, slate, or zinc). Surfaces, text, borders, and disabled states all derive from stone.

### Default Web Radius
The default border radius for web components is **`l` (8px)**. Use `--cc_size_border_radius_l` unless a component specifically requires a different radius.

### Spacing via ccMargin
Most components accept a `ccMargin` prop for external spacing. See [Spacing & Layout patterns](./patterns/spacing-layout.md).

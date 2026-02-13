# Semantic Colors

Semantic colors are purpose-driven tokens that reference [primitive color values](./colors-primitives.md). Always use semantic tokens — never reference primitives directly in components.

---

## Two Systems

Slab has **two color systems** in active use:

1. **New semantic model** — structured tokens defined in `semantic.json` using the `color.[category].[prominence].[role].[theme].[surface].[mode]` pattern
2. **Legacy CSS variables** — the `--cc_*` variables components actually consume today, generated in `light_environment.css`

Both are documented below. When building new components, prefer the new semantic model where available. For existing components, continue using the legacy variables they already reference.

---

## New Semantic Model

### Token Path Structure

```
color.[category].[prominence].[state].[role].[theme].[surface].[mode]
```

| Segment | Required | Values |
|---------|----------|--------|
| category | Yes | `action`, `category`, `border`, `surface`, `text` |
| prominence | Sometimes | `primary`, `secondary`, `tertiary` |
| state | No | `disabled`, `pressed`, `focused` |
| role | Sometimes | `base`, `accent`, `contrast` |
| theme | Yes | `companycam` |
| surface | No | `element`, `screen` |
| mode | Yes | `light`, `dark` |

### Action Colors

Actions are for interactive elements (buttons, links).

| Token Path | Light Value | Purpose |
|-----------|-------------|---------|
| `action.primary.base` | stone-800 (`#292622`) | Primary button fill |
| `action.primary.accent` | stone-800 (`#292622`) | Primary button border |
| `action.primary.contrast` | white (`#FFFFFF`) | Primary button text/icon |
| `action.primary.disabled.base` | stone-400 (`#B5B5B2`) | Disabled primary fill |
| `action.primary.disabled.accent` | stone-400 (`#B5B5B2`) | Disabled primary border |
| `action.primary.disabled.contrast` | white (`#FFFFFF`) | Disabled primary text |
| `action.secondary.base.element` | stone-100 (`#F6F5F3`) | Secondary button fill (on element) |
| `action.secondary.base.screen` | white (`#FFFFFF`) | Secondary button fill (on screen) |
| `action.secondary.accent.element` | stone-100 (`#F6F5F3`) | Secondary button border (element) |
| `action.secondary.accent.screen` | stone-200 (`#E7E6E2`) | Secondary button border (screen) |
| `action.secondary.contrast` | stone-800 (`#292622`) | Secondary button text |
| `action.secondary.disabled.base.element` | stone-50 (`#FAFAF9`) | Disabled secondary fill (element) |
| `action.secondary.disabled.base.screen` | white (`#FFFFFF`) | Disabled secondary fill (screen) |
| `action.secondary.disabled.contrast` | stone-400 (`#B5B5B2`) | Disabled secondary text |

### Category Colors

Categories represent status and classification. Each has three roles: `primary` (background), `secondary` (accent/border), `contrast` (text).

> Note: Category tokens use `primary`/`secondary`/`contrast` instead of `base`/`accent`/`contrast`. This is a legacy naming inconsistency.

| Category | Primary (bg) | Secondary (accent) | Contrast (text) | Primitive Source |
|----------|-------------|-------------------|----------------|-----------------|
| **success** | green-50 `#F6FDF4` | green-300 `#A3E396` | green-800 `#2B5C25` | Green scale |
| **error** | red-50 `#FEF2F4` | red-200 `#FCCCD4` | red-800 `#850017` | Red scale (alias of destroy) |
| **destroy** | red-50 `#FEF2F4` | red-200 `#FCCCD4` | red-800 `#850017` | Red scale |
| **caution** | yellow-50 `#FEFCE8` | yellow-300 `#FCEA76` | yellow-800 `#7F4805` | Yellow scale |
| **pending** | yellow-50 `#FEFCE8` | yellow-300 `#FCEA76` | yellow-800 `#7F4805` | Yellow scale (alias of caution) |
| **assigned** | orange-50 `#FFF7ED` | orange-200 `#FFD39E` | orange-800 `#7E310A` | Orange scale |
| **info** | stone-50 `#FAFAF9` | stone-300 `#D6D5D2` | stone-600 `#57534D` | Stone scale |
| **promotion** | sky-50 `#F6FBFF` | sky-200 `#DBEEFF` | sky-800 `#2A5E8C` | Sky scale |
| **upgrade** | cyan-50 `#F3FBFB` | cyan-200 `#CAF6F3` | cyan-800 `#0E6C64` | Cyan scale |

### Border Colors

| Token Path | Light Value |
|-----------|-------------|
| `border.default` | stone-200 (`#E7E6E2`) |

### Surface Colors

| Token Path | Light Value | Purpose |
|-----------|-------------|---------|
| `surface.element` | white (`#FFFFFF`) | Cards, modals, popovers — raised elements |
| `surface.screen` | stone-100 (`#F6F5F3`) | Page backgrounds |

### Text Colors

| Token Path | Light Value | Purpose |
|-----------|-------------|---------|
| `text.primary` | stone-800 (`#292622`) | Default body and heading text |
| `text.secondary` | stone-500 (`#747371`) | Supporting text, metadata, captions |

---

## Legacy CSS Variables (Currently in Use)

These are the `--cc_*` CSS custom properties components reference today. They are generated from a separate legacy token pipeline.

### Utility Colors

| Variable | Value | Purpose |
|----------|-------|---------|
| `--cc_color_utility_destroy` | `#ef4e4e` | Destructive actions, error states |
| `--cc_color_utility_caution` | `#ffd000` | Warning states |
| `--cc_color_utility_success` | `#12a537` | Success states |
| `--cc_color_utility_info` | `#42608a` | Informational states |
| `--cc_color_utility_assigned` | `#e76119` | Assigned/pending status |
| `--cc_color_utility_upgrade` | `#0ce8d6` | Upgrade prompts |
| `--cc_color_utility_add_on` | `#7949d1` | Add-on/premium features |

Each utility color has auto-generated variants: `_lighten_10`, `_lighten_15`, `_lighten_85`, `_lighten_90`, `_lighten_95`, `_darken_10`, `_darken_15`, and `_alpha_10` through `_alpha_90`.

### Background Colors

| Variable | Value | Purpose |
|----------|-------|---------|
| `--cc_color_background_1` | `#ffffff` | Primary background (white) |
| `--cc_color_background_2` | `#f5f7fa` | Secondary background (light gray) |
| `--cc_color_background_3` | `#ebeff5` | Tertiary background (medium gray) |

### Text Colors

| Variable | Value | Purpose |
|----------|-------|---------|
| `--cc_color_text_default` | `#142334` | Default body text |
| `--cc_color_text_subtle` | `#4d5a68` | Secondary/subtle text |
| `--cc_color_text_nonessential` | `#8191a2` | Placeholder, disabled text |

### Button Colors

| Variable | Value | Purpose |
|----------|-------|---------|
| `--cc_color_button_background_primary` | `#0967d2` | Primary button fill |
| `--cc_color_button_background_secondary` | `#1f3751` | Secondary button fill |
| `--cc_color_button_background_subtle` | `#ebeff5` | Subtle/ghost button fill |
| `--cc_color_button_background_destroy` | `#ef4e4e` | Destructive button fill |
| `--cc_color_button_background_success` | `#12a537` | Success button fill |
| `--cc_color_button_background_tint` | `#e5f1ff` | Tint button fill |
| `--cc_color_button_text_primary` | `#ffffff` | Text on primary buttons |
| `--cc_color_button_text_secondary` | `#ffffff` | Text on secondary buttons |
| `--cc_color_button_text_subtle` | `#4d5a68` | Text on subtle buttons |
| `--cc_color_button_text_destroy` | `#ffffff` | Text on destroy buttons |
| `--cc_color_button_text_success` | `#ffffff` | Text on success buttons |

### Link Colors

| Variable | Value |
|----------|-------|
| `--cc_color_link_primary` | `#0967d2` |
| `--cc_color_link_secondary` | `#142334` |
| `--cc_color_link_subtle` | `#4d5a68` |

### Border Colors

| Variable | Value | Purpose |
|----------|-------|---------|
| `--cc_color_border_default` | `rgba(20,35,52,0.12)` | Default borders |
| `--cc_color_border_input_inactive` | `rgba(20,35,52,0.2)` | Inactive input borders |
| `--cc_color_border_input_active` | `#0967d2` | Focused input borders |

### Depth (Shadow) Colors

| Variable | Value |
|----------|-------|
| `--cc_color_depth_1` | `rgba(20,35,52,0.13)` |
| `--cc_color_depth_2` | `rgba(20,35,52,0.13)` |
| `--cc_color_depth_3` | `rgba(20,35,52,0.20)` |

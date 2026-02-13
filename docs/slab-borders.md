# Border Tokens

Border tokens cover both widths and radii. They are used for component outlines, dividers, focus indicators, and corner rounding.

---

## Border Widths

**CSS variable pattern:** `--cc_size_border_width_{size}`

| Token | Value | CSS Variable | Usage |
|-------|-------|-------------|-------|
| `s` | 1px | `--cc_size_border_width_s` | Default borders, dividers, card outlines |
| `m` | 2px | `--cc_size_border_width_m` | Focus outlines, outline-style buttons |
| `l` | 4px | `--cc_size_border_width_l` | Active tab indicators, emphasis borders |
| `xl` | 8px | `--cc_size_border_width_xl` | Accent side borders on Toasts and Notices |

---

## Border Radii

**CSS variable pattern:** `--cc_size_border_radius_{size}`

| Token | Value | CSS Variable | Usage |
|-------|-------|-------------|-------|
| `s` | 2px | `--cc_size_border_radius_s` | Slight rounding on very small elements (tiny components) |
| `m` | 4px | `--cc_size_border_radius_m` | Mobile default for buttons, labels on both platforms |
| `l` | 8px | `--cc_size_border_radius_l` | **Web default** — buttons, inputs, cards, modals |
| `xl` | 16px | `--cc_size_border_radius_xl` | Currently unused |
| `xxl` | 24px | `--cc_size_border_radius_xxl` | Mobile modals |
| `pill` | 1000px | `--cc_size_border_radius_pill` | Pill shapes — chips, rounded badges |

> **Default web radius:** Use `l` (8px) unless there is a specific reason to deviate. This is the standard corner radius for most web components.

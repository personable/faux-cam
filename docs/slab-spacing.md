# Spacing Tokens

Spacing tokens define consistent distances for padding, margins, and gaps. Always use these tokens instead of arbitrary pixel values.

**CSS variable pattern:** `--cc_size_spacing_{size}`

---

## Scale

| Token | Value | CSS Variable | Common Use |
|-------|-------|-------------|------------|
| `xxs` | 2px | `--cc_size_spacing_xxs` | Hairline gaps, icon-to-text nudges |
| `xs` | 4px | `--cc_size_spacing_xs` | Tight internal padding, inline spacing |
| `s` | 8px | `--cc_size_spacing_s` | Default internal padding, form gaps |
| `m` | 16px | `--cc_size_spacing_m` | Standard component spacing, card padding |
| `l` | 24px | `--cc_size_spacing_l` | Section spacing, larger padding |
| `xl` | 32px | `--cc_size_spacing_xl` | Page-level spacing |
| `xxl` | 48px | `--cc_size_spacing_xxl` | Large section breaks |

---

## ccMargin Shorthand

Most Slab components accept a `ccMargin` prop that converts spacing token names into CSS margin values. It follows CSS shorthand syntax using token names instead of pixel values.

```
ccMargin="m"           → margin: 16px (all sides)
ccMargin="m l"         → margin: 16px 24px (vertical horizontal)
ccMargin="s m l"       → margin: 8px 16px 24px (top horizontal bottom)
ccMargin="xs s m l"    → margin: 4px 8px 16px 24px (top right bottom left)
```

**Special values:**
- `auto` — passes through as `auto` (useful for centering)
- `0` — passes through as `0`
- Any unrecognized value — treated as `0`

**Valid token names in ccMargin:** `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`

See [Spacing & Layout patterns](../patterns/spacing-layout.md) for usage guidelines.

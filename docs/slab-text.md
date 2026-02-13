# Text

The `Text` component renders all text in the application. It enforces typographic consistency by mapping each `size` to a default font family, weight, and line-height. Import from `@companycam/slab-web`.

---

## When to Use

- Use `Text` for **all** visible text: headings, paragraphs, labels, captions, metadata.
- Do **not** use raw HTML elements (`<p>`, `<h1>`, `<span>`) or ad-hoc CSS for typography. Always use `Text`.

---

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `as` | `keyof HTMLElementTagNameMap` | -- | **Yes** | The HTML element to render (e.g. `"h1"`, `"p"`, `"span"`, `"label"`) |
| `size` | `"xxxl"` \| `"xxl"` \| `"xl"` \| `"l"` \| `"m"` \| `"s"` \| `"xs"` \| `"xxs"` | `"s"` | No | Controls font-size and sets default family, weight, and line-height |
| `color` | `"default"` \| `"subtle"` \| `"nonessential"` \| `"inherit"` | `"default"` | No | Text color token. Use `"inherit"` to pick up a parent's color |
| `family` | `"heading"` \| `"system"` | Per size default | No | Override the font family. Normally determined by `size` |
| `weight` | `string` \| `number` | Per size default | No | Override the font weight |
| `display` | `"inline"` \| `"block"` | `"block"` | No | CSS display value |
| `ccMargin` | `string` | -- | No | External spacing using spacing token shorthand (see below) |
| `className` | `string` | -- | No | Passed through for styled-component extension |
| `style` | `CSSProperties` | -- | No | Inline styles (use sparingly) |

---

## Size Defaults

Each `size` value sets a default font family, weight, and line-height. You can override `family` and `weight` with their respective props when needed, but the defaults cover the vast majority of cases.

| Size | CSS Variable | Default Family | Default Weight | Line-Height |
|------|-------------|----------------|---------------|-------------|
| `xxxl` | `--cc_size_text_xxxl` | Averta (`heading`) | 800 | 1.1 |
| `xxl` | `--cc_size_text_xxl` | Averta (`heading`) | 800 | 1.1 |
| `xl` | `--cc_size_text_xl` | Averta (`heading`) | 700 | 1.1 |
| `l` | `--cc_size_text_l` | System (`system`) | 700 | 1.2 |
| `m` | `--cc_size_text_m` | System (`system`) | 400 (none set) | 1.4 |
| `s` | `--cc_size_text_s` | System (`system`) | 400 (none set) | 1.4 |
| `xs` | `--cc_size_text_xs` | System (`system`) | 400 (none set) | 1.4 |
| `xxs` | `--cc_size_text_xxs` | System (`system`) | 400 (none set) | 1.4 |

**Key rule:** Averta (the `heading` family) is used for larger sizes (`xl`, `xxl`, `xxxl`). The system font stack is used for body sizes (`xxs`, `xs`, `s`, `m`). Size `l` uses the system font stack but with bold weight (700) by default.

When the `heading` font family is active, the component automatically adds `1px` to the computed font-size to compensate for Averta rendering slightly smaller than the system font at the same size.

---

## Color Options

| Value | CSS Variable | Use |
|-------|-------------|-----|
| `"default"` | `--cc_color_text_default` | Primary text content |
| `"subtle"` | `--cc_color_text_subtle` | Secondary information, supporting copy |
| `"nonessential"` | `--cc_color_text_nonessential` | Tertiary information, placeholders |
| `"inherit"` | Inherits from parent element | When text must match a colored parent container |

---

## The ccMargin Prop

Use `ccMargin` to add external spacing. It accepts spacing token names in CSS shorthand order. See [Spacing tokens](../design-tokens/spacing.md) for the full token list.

```
ccMargin="m"           -> all sides 16px
ccMargin="0 0 m"       -> bottom only 16px
ccMargin="s 0"         -> top/bottom 8px, left/right 0
ccMargin="xs s m l"    -> top 4px, right 8px, bottom 16px, left 24px
```

Valid token names: `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, `auto`, `0`.

---

## Usage Examples

### Correct

```tsx
// Page heading
<Text as="h1" size="xxl">Projects</Text>

// Body paragraph
<Text as="p" size="m">Upload photos directly from the job site.</Text>

// Small metadata
<Text as="span" size="xs" color="subtle" display="inline">Updated 3 hours ago</Text>

// Heading with bottom margin
<Text as="h2" size="xl" ccMargin="0 0 m">Section Title</Text>

// Inheriting color from a themed parent
<Text as="p" size="s" color="inherit">Text inside a colored banner</Text>

// Overriding weight for emphasis in body text
<Text as="strong" size="s" weight={600}>Important note</Text>

// Inline text within a sentence
<Text as="span" size="s" display="inline">inline fragment</Text>
```

### Incorrect

```tsx
// Missing required `as` prop
<Text size="m">This will not compile</Text>

// Using a raw HTML element instead of Text
<h1>Page Title</h1>

// Using heading family on small body text (violates Averta rule)
<Text as="span" size="xs" family="heading">Tiny Averta text</Text>

// Using arbitrary CSS margin instead of ccMargin
<Text as="p" size="m" style={{ margin: '16px 0' }}>Wrong approach</Text>

// Setting display="inline" on a block-level heading
<Text as="h1" size="xxl" display="inline">This is semantically odd</Text>
```

---

## Accessibility Notes

1. **Use semantic HTML elements via `as`.** Render headings as `h1`-`h6`, paragraphs as `p`, labels as `label`. The `as` prop is required specifically to enforce semantic markup.

2. **Maintain heading hierarchy.** Do not skip heading levels (e.g. `h1` then `h3`). Use sizes to visually differentiate while keeping the heading tree logical.

3. **Color contrast.** The `default`, `subtle`, and `nonessential` color tokens are designed to meet WCAG 2.1 AA contrast requirements against their intended backgrounds. If you use `color="inherit"`, verify contrast manually.

4. **Do not rely on color alone.** If a piece of text conveys status or meaning, pair the color with an icon, label, or other non-color indicator.

5. **Minimum text size.** Avoid `xxs` (10px) for essential content. Reserve it for tight spaces on mobile. Prefer `xs` (12px) or larger for readable metadata.

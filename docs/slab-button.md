# Buttons

Slab provides five button variants. Each is a React component exported from `@companycam/slab-web`. Pick the variant that matches the content and context described in the decision matrix below.

---

## Decision Matrix

| Scenario | Variant | Why |
|----------|---------|-----|
| Standard action with a text label (and optional icon) | **Button** | Full-size button with padding, supports all three designs |
| Action inside a tight space (table cell, inline text) with a text label | **ButtonCondensed** | Minimal padding, no border, inherits line-height |
| Icon-only action (no visible text) | **ButtonIcon** | Equal width/height, requires `accessibilityLabel` |
| Icon-only action inside a tight space | **ButtonIconCondensed** | Smaller hit target, minimal design only |
| Opening a filter dropdown (used with Popover) | **ButtonFilter** | Shows normal/open/active states and an optional count badge |

---

## 1. Button

The primary button component. Supports text labels, optional icons, three visual designs, five colors, and three sizes.

### When to Use

- Any standard call-to-action: submit, save, cancel, navigate.
- When the button needs a visible text label.

### Props

| Prop | Type | Default | Allowed Values |
|------|------|---------|----------------|
| `color` | string | `"subtle"` | `"primary"` \| `"secondary"` \| `"subtle"` \| `"destroy"` \| `"success"` |
| `design` | string | `"solid"` | `"solid"` \| `"outline"` \| `"minimal"` |
| `size` | string | `"medium"` | `"small"` \| `"medium"` \| `"large"` |
| `icon` | object | `{ position: "before" }` | `{ name?: string; component?: ReactElement; position?: "before" \| "after" }` |
| `loading` | boolean | `false` | `true` \| `false` |
| `disabled` | boolean | `false` | `true` \| `false` |
| `component` | ElementType | `"button"` | Any HTML tag or React component (see Polymorphic Rendering) |
| `ccMargin` | string | none | Spacing tokens, e.g. `"xl l m"` |
| `children` | ReactNode | -- | The visible text label |

### Example

```tsx
<Button color="primary" design="solid" size="medium" icon={{ name: "pencil", position: "before" }}>
  Edit Project
</Button>
```

---

## 2. ButtonCondensed

A minimal Button with no padding and no border, designed for tight spaces such as table cells.

### When to Use

- Inside table cells, list items, or inline alongside text.
- When you need a clickable action but cannot afford the padding of a full Button.
- For inline links within UI (for in-paragraph links, use the `Link` component instead).

### Props

Accepts all Button props **except** `design` (locked to `"minimal"`).

| Prop | Type | Default | Allowed Values |
|------|------|---------|----------------|
| `color` | string | `"subtle"` | `"primary"` \| `"secondary"` \| `"subtle"` \| `"destroy"` \| `"success"` |
| `size` | string | `"medium"` | `"small"` \| `"medium"` \| `"large"` |
| `icon` | object | `{ position: "before" }` | Same as Button |
| `loading` | boolean | `false` | `true` \| `false` |
| `disabled` | boolean | `false` | `true` \| `false` |
| `component` | ElementType | `"button"` | Any HTML tag or React component |
| `ccMargin` | string | none | Spacing tokens |

### Example

```tsx
<ButtonCondensed color="primary">View Details</ButtonCondensed>
```

---

## 3. ButtonIcon

A square-dimensioned button that displays only an icon. Requires an `accessibilityLabel` so screen readers can announce the button's purpose.

### When to Use

- Toolbars, page headers, card actions -- anywhere the icon alone communicates the action.
- Prefer solid (filled) icons over outline icons inside ButtonIcon.

### Props

| Prop | Type | Default | Allowed Values |
|------|------|---------|----------------|
| `iconName` | string | -- | Any MDI icon name in kebab-case (e.g. `"pencil"`, `"trash-can"`) |
| `iconComponent` | ReactElement | -- | Custom SVG element; overrides `iconName` if both are set |
| `accessibilityLabel` | string | **required** | Descriptive text for screen readers |
| `color` | string | `"subtle"` | `"primary"` \| `"secondary"` \| `"subtle"` \| `"destroy"` \| `"success"` |
| `design` | string | `"solid"` | `"solid"` \| `"minimal"` (no `"outline"`) |
| `size` | string | `"medium"` | `"small"` \| `"medium"` \| `"large"` |
| `shape` | string | `"circle"` | `"circle"` \| `"square"` |
| `loading` | boolean | `false` | `true` \| `false` |
| `disabled` | boolean | `false` | `true` \| `false` |
| `component` | ElementType | `"button"` | Any HTML tag or React component |
| `ccMargin` | string | none | Spacing tokens |

### Shape Guidance

- **circle** (default) -- use when the icon button stands alone.
- **square** -- use when the icon button sits alongside a standard Button, such as in a page header, to visually align the border radii.

### Example

```tsx
<ButtonIcon
  iconName="trash-can"
  accessibilityLabel="Delete photo"
  color="destroy"
  design="solid"
  shape="circle"
/>
```

---

## 4. ButtonIconCondensed

A smaller icon-only button for tight spaces. Always renders as `design="minimal"`.

### When to Use

- Inside table cells, inline with text, or any constrained layout where a full ButtonIcon would be too large.

### Props

Accepts all ButtonIcon props **except** `design` (locked to `"minimal"`).

| Prop | Type | Default | Allowed Values |
|------|------|---------|----------------|
| `iconName` | string | -- | MDI icon name |
| `iconComponent` | ReactElement | -- | Custom SVG element |
| `accessibilityLabel` | string | **required** | Screen reader text |
| `color` | string | `"subtle"` | `"primary"` \| `"secondary"` \| `"subtle"` \| `"destroy"` \| `"success"` |
| `size` | string | `"medium"` | `"small"` (23px) \| `"medium"` (25px) \| `"large"` (27px) |
| `shape` | string | `"circle"` | `"circle"` \| `"square"` |
| `loading` | boolean | `false` | `true` \| `false` |
| `disabled` | boolean | `false` | `true` \| `false` |
| `component` | ElementType | `"button"` | Any HTML tag or React component |

### Example

```tsx
<Text as="p" color="subtle">
  More info <ButtonIconCondensed iconName="information-outline" accessibilityLabel="More information" size="small" />
</Text>
```

---

## 5. ButtonFilter

A specialized button for opening filter dropdowns. Used exclusively with Popover. Not polymorphic. Fixed at `medium` size.

### When to Use

- Filter bars where each button opens a Popover containing filter controls.
- Toggle between `normal`, `open`, and `active` status based on user interaction and applied filters.

### Props

| Prop | Type | Default | Allowed Values |
|------|------|---------|----------------|
| `status` | string | `"normal"` | `"normal"` \| `"open"` \| `"active"` |
| `count` | number | -- | Number of active filters; badge shows only when `status="active"` and `count >= 1` |
| `icon` | object | -- | `{ name?: string; component?: ReactElement; position?: "before" \| "after" }` |
| `loading` | boolean | `false` | `true` \| `false` |
| `disabled` | boolean | `false` | `true` \| `false` |
| `children` | ReactNode | -- | Button text label (use title case, e.g. "Start Date") |

### Status Behavior

| Status | Background | Border | Text Color |
|--------|-----------|--------|-----------|
| `normal` | transparent | subtle border | subtle link color; border darkens on hover |
| `open` | transparent | secondary color + inset shadow | secondary link color |
| `active` | secondary background (filled) | secondary color | secondary button text |

When `status="active"` and `count >= 1`, a pill-shaped count badge replaces any `position: "after"` icon.

### Example

```tsx
<ButtonFilter
  status="active"
  count={3}
  icon={{ name: "calendar", position: "before" }}
>
  Start Date
</ButtonFilter>
```

---

## Color x Design x Size Matrix

The full Button supports all combinations. Other variants restrict which designs are available.

### Available Designs per Variant

| Variant | solid | outline | minimal |
|---------|:-----:|:-------:|:-------:|
| Button | yes | yes | yes |
| ButtonCondensed | -- | -- | yes (locked) |
| ButtonIcon | yes | -- | yes |
| ButtonIconCondensed | -- | -- | yes (locked) |
| ButtonFilter | n/a (uses status-based styling) | -- | -- |

### Colors (All Variants Except ButtonFilter)

| Color | Solid Appearance | Outline / Minimal Appearance |
|-------|-----------------|------------------------------|
| `primary` | Brand blue background, white text | Transparent background, blue text |
| `secondary` | Dark background, white text | Transparent background, dark text |
| `subtle` | Gray background, dark text | Transparent background, gray text |
| `destroy` | Red background, white text | Transparent background, red text |
| `success` | Green background, white text | Transparent background, green text |

### Sizes (Button and ButtonIcon)

| Size | Height | Font Size | Padding (Button) | Hit Target (ButtonIcon) |
|------|--------|-----------|-------------------|------------------------|
| `small` | `var(--cc_size_avatar_m)` | `calc(var(--cc_size_text_xs) + 1px)` | `0 calc(var(--cc_size_spacing_s) * 1.25)` | same as height |
| `medium` | `var(--cc_size_avatar_l)` | `calc(var(--cc_size_text_s) + 1px)` | `0 var(--cc_size_spacing_m)` | same as height |
| `large` | `48px` | `calc(var(--cc_size_text_m) + 1px)` | `0 var(--cc_size_spacing_l)` | same as height |

---

## Polymorphic Rendering

Button, ButtonCondensed, ButtonIcon, and ButtonIconCondensed are all polymorphic. Use the `component` prop to change the rendered HTML element or wrap with a custom React component.

### Render as an anchor

```tsx
<Button component="a" href="https://companycam.com" target="_blank" color="primary">
  Visit Site
</Button>
```

### Render as a custom component

```tsx
<Button component={MyRouterLink} to="/dashboard" color="secondary">
  Dashboard
</Button>
```

**Automatic element inference:** If you pass `href` without setting `component`, the Button renders as an `<a>` tag automatically. Otherwise it defaults to `<button type="button">`.

> ButtonFilter is **not** polymorphic. It always renders as a `<button>`.

---

## Loading State

All five variants support `loading={true}`. When loading:

- A spinner appears inside the button.
- The text and icon become invisible (but remain in the DOM to preserve the button's width).
- The button remains the same size -- no layout shift.

```tsx
<Button loading color="primary">Saving...</Button>
<ButtonIcon loading iconName="check" accessibilityLabel="Confirm" />
<ButtonFilter loading icon={{ name: "chevron-down", position: "after" }}>Projects</ButtonFilter>
```

---

## Icon Positioning

Button and ButtonFilter use the `icon` object prop to place an icon before or after the text label.

| Key | Type | Description |
|-----|------|-------------|
| `icon.name` | string | MDI icon name in kebab-case |
| `icon.component` | ReactElement | Custom SVG; overrides `icon.name` if both provided |
| `icon.position` | `"before"` \| `"after"` | Where the icon renders relative to the text |

```tsx
// Icon before text (default)
<Button icon={{ name: "plus", position: "before" }}>Add Photo</Button>

// Icon after text (common for dropdowns)
<Button icon={{ name: "chevron-down", position: "after" }}>Options</Button>

// Custom SVG icon
<Button icon={{ component: <MySvg />, position: "before" }}>Custom</Button>
```

ButtonIcon and ButtonIconCondensed use flat props instead:

| Prop | Description |
|------|-------------|
| `iconName` | MDI icon name |
| `iconComponent` | Custom SVG element |

---

## Accessibility

### Icon-Only Buttons Require an Accessible Label

ButtonIcon and ButtonIconCondensed both require the `accessibilityLabel` prop. This renders as visually hidden text via `ScreenReaderContent` so screen readers announce the button's purpose.

```tsx
<ButtonIcon iconName="close" accessibilityLabel="Close dialog" />
```

Never omit `accessibilityLabel` -- it is a required prop and TypeScript will enforce this.

### Button Type Defaults

All button variants default to `type="button"` (not `type="submit"`) to prevent accidental form submissions. If you need a submit button, set `type="submit"` explicitly.

### Focus Indicators

All button variants use the shared Slab focus ring (`outline-color: var(--cc_color_border_input_active)` with offset) on `:focus-visible`. Never suppress this.

### Disabled State

Pass `disabled={true}` to disable any button variant. Disabled buttons receive `pointer-events: none` and reduced opacity. Per WCAG 2.1, disabled elements are exempt from contrast requirements.

---

## ccMargin Prop

Button, ButtonCondensed, ButtonIcon, and ButtonIconCondensed accept `ccMargin` to apply margin using Slab spacing tokens. The value is a space-separated string following CSS shorthand order (top, right, bottom, left).

```tsx
<Button ccMargin="m">Equal margin on all sides</Button>
<Button ccMargin="xl l m s">Top xl, right l, bottom m, left s</Button>
```

Available token sizes: `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`.

---

## Quick Reference

```tsx
import {
  Button,
  ButtonCondensed,
  ButtonIcon,
  ButtonIconCondensed,
  ButtonFilter,
} from '@companycam/slab-web';
```

| Variant | Has Text | Has Icon | Polymorphic | Designs | Sizes |
|---------|:--------:|:--------:|:-----------:|---------|-------|
| Button | yes | optional | yes | solid, outline, minimal | small, medium, large |
| ButtonCondensed | yes | optional | yes | minimal (locked) | small, medium, large |
| ButtonIcon | no | required | yes | solid, minimal | small, medium, large |
| ButtonIconCondensed | no | required | yes | minimal (locked) | small, medium, large |
| ButtonFilter | yes | optional | no | status-based | medium (locked) |

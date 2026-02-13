# Chips

Chips are compact, pill-shaped elements used to display or interact with discrete values such as filters, tags, or selections. Import `ChipFilter` or `ChipToggle` from `@companycam/slab-web`.

---

## Decision Matrix: ChipFilter vs ChipToggle

| Criteria | ChipFilter | ChipToggle |
|----------|-----------|------------|
| **Purpose** | Displays an active filter; optionally removable | Binary on/off toggle (like selecting a tag) |
| **HTML element** | `<span>` (container) with optional `<button>` (close) | `<button>` |
| **Interactive?** | Read-only display; interaction is via optional close button | Fully interactive toggle button |
| **State prop** | None (always appears "active" because it represents an applied filter) | `pressed` (`true` / `false`) |
| **Handler** | `closeAction.onClick` (removes the filter) | `onClick` (toggles the pressed state) |
| **Controlled?** | N/A | Yes -- you must manage `pressed` and provide `onClick` |
| **contentAfter slot** | Reserved for close button; `contentAfter` is omitted from props | Available via `contentAfter` prop |
| **Use when...** | Showing applied faceted-search filters (e.g. "Tag: Painting 2024 x") | Toggling a value on/off (e.g. selecting tags in a tag picker) |

**Rule of thumb:** If the chip can be dismissed, use `ChipFilter`. If the chip can be toggled on and off, use `ChipToggle`.

---

## Props

### Shared Props (via `GetChipProps`)

These props are available on both `ChipFilter` and `ChipToggle`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | -- | Text label displayed inside the chip. Truncates with ellipsis when the chip has a constrained width. |
| `iconName` | `string \| null` | -- | Material Design icon name (without `mdi-` prefix). Rendered before the text label. Example: `"tag-outline"`, `"account-outline"`. |
| `contentBefore` | `ReactNode` | -- | Arbitrary content rendered before the icon/text. Typical use: an `<Avatar>` for user or group chips. |
| `size` | `"small" \| "medium"` | `"medium"` | Controls chip height, font size, and internal spacing. |

### ChipFilter-Only Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `closeAction` | `{ onClick, accessibilityLabel, disabled?, "data-testid"? }` | -- | When provided, renders a close button in the `contentAfter` slot. `accessibilityLabel` is **required** so screen readers can announce the button. |

`ChipFilter` does **not** accept `contentAfter` because that slot is reserved for the close button.

### ChipToggle-Only Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `pressed` | `boolean` | `false` | Whether the toggle is currently active. Maps to `aria-pressed`. |
| `onClick` | `(event: MouseEvent<HTMLButtonElement>) => void` | -- | **Required.** Handler to update the `pressed` state. |
| `disabled` | `boolean` | `false` | Disables the button (opacity 0.5, cursor not-allowed). |
| `contentAfter` | `ReactNode` | -- | Arbitrary content rendered after the text label (e.g. a count badge). |

---

## Visual Specs

### Pill Shape

All chips use a fully rounded border radius via the `--cc_size_border_radius_pill` token. This produces a pill/capsule shape. Do not override the border radius.

### Size Details

| Size | Height | Font Size | Font Weight |
|------|--------|-----------|-------------|
| `medium` (default) | 28px | `--cc_size_text_s` | 500 |
| `small` | 22px | `--cc_size_text_xs` | 400 |

Use `medium` in most cases. Use `small` only when space is at a premium.

### Colors

| State | Background | Border | Text |
|-------|-----------|--------|------|
| Default | `--cc_color_background_1` | `--cc_color_border_default` | `--cc_color_text_subtle` |
| Pressed (ChipToggle only) | `--cc_color_button_background_secondary` | (inherited) | `--cc_color_button_text_secondary` |
| Disabled | Same as default, opacity 0.5 | Same | Same |

### Close Button (ChipFilter)

The close button renders an `mdi-close` icon inside a circular hit area (18px, derived from `--cc_size_spacing_m * 1.125`). On hover it shows `--cc_color_button_background_subtle_alpha_70`.

---

## Usage Examples

### ChipFilter -- Applied filter with close action

```tsx
<ChipFilter
  iconName="tag-outline"
  closeAction={{
    onClick: () => removeFilter('painting-2024'),
    accessibilityLabel: 'Remove Painting 2024 filter',
  }}
>
  Painting 2024
</ChipFilter>
```

### ChipFilter -- Read-only (no close action)

Omitting `closeAction` gives you a read-only chip, useful for displaying tags in a viewer.

```tsx
<ChipFilter iconName="tag-outline">Before and After</ChipFilter>
```

### ChipFilter -- With Avatar

```tsx
<ChipFilter
  contentBefore={<Avatar fullName="Jean-Ralphio Saperstein" size="xsmall" />}
  closeAction={{
    onClick: () => removeUser('jean-ralphio'),
    accessibilityLabel: 'Remove Jean-Ralphio Saperstein',
  }}
>
  Jean-Ralphio Saperstein
</ChipFilter>
```

### ChipFilter -- Small size

```tsx
<ChipFilter
  size="small"
  iconName="tag-outline"
  closeAction={{
    onClick: () => removeFilter('roofing'),
    accessibilityLabel: 'Remove Roofing filter',
  }}
>
  Roofing
</ChipFilter>
```

### ChipFilter -- Max width with truncation

Set a `maxWidth` via a styled-component or the `style` prop. Text will truncate with an ellipsis.

```tsx
const StyledChipFilter = styled(ChipFilter)`
  max-width: 160px;
`;

<StyledChipFilter
  iconName="account-outline"
  closeAction={{
    onClick: handleRemove,
    accessibilityLabel: 'Remove filter',
  }}
>
  Very long filter name that will truncate
</StyledChipFilter>
```

### ChipToggle -- Basic toggle

```tsx
const [pressed, setPressed] = useState(false);

<ChipToggle
  pressed={pressed}
  onClick={() => setPressed(!pressed)}
  iconName="tag-outline"
>
  Painting
</ChipToggle>
```

### ChipToggle -- With contentBefore and contentAfter

```tsx
<ChipToggle
  pressed={isSelected}
  onClick={() => toggleUser(userId)}
  contentBefore={<Avatar fullName="Jane Doe" size="xsmall" />}
  contentAfter={<Badge count={3} />}
>
  Jane Doe
</ChipToggle>
```

### ChipToggle -- Disabled

```tsx
<ChipToggle
  pressed={false}
  onClick={() => {}}
  iconName="tag-outline"
  disabled
>
  Unavailable Tag
</ChipToggle>
```

### Incorrect Usage

```tsx
// WRONG: Using ChipToggle when the chip should be removable (use ChipFilter)
<ChipToggle pressed={true} onClick={removeFilter}>Painting 2024</ChipToggle>

// WRONG: Passing contentAfter to ChipFilter (slot is reserved for closeAction)
<ChipFilter contentAfter={<Badge />}>Label</ChipFilter>

// WRONG: Using ChipToggle without onClick (it is a controlled component)
<ChipToggle pressed={false}>Tag</ChipToggle>

// WRONG: Overriding border-radius (pill shape is intentional)
<ChipToggle pressed={false} onClick={fn} style={{ borderRadius: 4 }}>Tag</ChipToggle>
```

---

## ccMargin

Chip components do not have a built-in `ccMargin` prop. To add external spacing around chips, wrap them in a layout container or use a styled-component:

```tsx
const SpacedChip = styled(ChipFilter)`
  margin-bottom: var(--cc_size_spacing_s);
`;
```

When arranging multiple chips in a row, use a flex container with a `gap` value from the spacing token scale:

```tsx
const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--cc_size_spacing_xs);
`;

<ChipRow>
  <ChipToggle pressed={false} onClick={fn}>Tag A</ChipToggle>
  <ChipToggle pressed={true} onClick={fn}>Tag B</ChipToggle>
  <ChipToggle pressed={false} onClick={fn}>Tag C</ChipToggle>
</ChipRow>
```

---

## Accessibility

1. **ChipToggle uses `aria-pressed`.** The component automatically sets `aria-pressed` to match the `pressed` prop. Screen readers will announce the toggle state (e.g. "Painting, toggle button, pressed").

2. **ChipFilter close button requires `accessibilityLabel`.** The close icon is decorative (`aria-hidden="true"`). The label text is rendered inside `<ScreenReaderContent>` so assistive technology can announce what the button does. Write specific labels like "Remove Painting 2024 filter" rather than generic "Close".

3. **ChipToggle renders as a `<button>`.** It is keyboard-focusable by default and can be activated with Enter or Space.

4. **ChipFilter renders as a `<span>`.** The chip itself is not interactive. Only the close button inside it (when present) is focusable.

5. **Focus indicators.** Both components inherit `focus-visible` styles from the shared button reset: a solid outline using `--cc_color_border_input_active` with an `--cc_size_spacing_xxs` offset.

6. **Disabled state.** Disabled chips use `opacity: 0.5` and `cursor: not-allowed`. Per WCAG 2.1 SC 1.4.3, disabled/inactive UI components are exempt from color contrast requirements, but they should remain perceivable.

7. **Text truncation.** When a chip has a `max-width`, its label truncates with an ellipsis. The full text remains accessible to screen readers because only the visual rendering is clipped.

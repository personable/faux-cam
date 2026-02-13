# Card

Card summarizes a single entity (project, report, page, etc.) in a list. Use it to group related content into a visually distinct, scannable container.

---

## When to Use

- Displaying an item in a list of similar entities (e.g., a list of projects or reports).
- Grouping a title, description, metadata, and actions that all relate to one object.
- Providing a clickable surface that navigates to a detail view or triggers an action.

Do **not** use Card for purely decorative containers or full-page layout sections. It is designed for individual, repeatable content units.

---

## Anatomy & Slots

Card uses a slot-based composition pattern. Every slot is optional; render only what you need.

```
+-------------------------------------------------------+
|  contentAction (absolute, top-right, above card)       |
|-------------------------------------------------------|
| contentThumbnail | contentBefore                       |
|                  | title                               |
|                  | children (main body)                |
|                  | contentAfter                        |
+-------------------------------------------------------+
```

| Slot | Purpose | Typical Content |
|------|---------|-----------------|
| `title` | Card heading. Accepts a string (auto-wrapped in an `<h2>`) or custom ReactNode. | Plain text or a custom element with an icon |
| `children` | Main body content below the title. | `<Text>` paragraphs, descriptions |
| `contentBefore` | Content rendered above the title. | Category label, metadata line |
| `contentAfter` | Content rendered below children. | `<Badge>`, status indicators, timestamps |
| `contentThumbnail` | Left-side media slot, outside the main content column. | `<img>`, avatar, icon container |
| `contentAction` | Positioned absolutely in the top-right corner, layered above the card surface. | `<ButtonIcon>` (e.g., three-dot menu), `<Menu>` |

### Slot Layout Details

- `contentThumbnail` is flex-shrunk to its intrinsic size and sits to the left of all other content.
- The remaining slots (`contentBefore`, `title`, `children`, `contentAfter`) stack vertically inside a flex-growing main column.
- `contentAction` uses absolute positioning (`inset-inline-end`, `inset-block-start`) and floats over the card. It is the only slot where nested interactive elements (buttons, links) are valid when the card itself is interactive.

---

## Key Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string \| ReactNode` | Card heading. Strings render as `<Text as="h2" size="m" family="heading" weight={700}>`. |
| `children` | `ReactNode` | Main body content. |
| `contentBefore` | `ReactNode` | Slot above the title. |
| `contentAfter` | `ReactNode` | Slot below children. |
| `contentThumbnail` | `ReactNode` | Left-side media slot. Consumer controls sizing. |
| `contentAction` | `ReactNode` | Top-right overlay slot for actions. |
| `href` | `string` | Makes the card render as an `<a>` link. |
| `onClick` | `() => void` | Makes the card render as a `<button>`. |
| `containerStyle` | `CSSProperties` | Style hook for the interior card container (border, background, etc.). |

---

## Interactive Cards

Card polymorphically renders as one of three HTML elements depending on the props provided:

| Props Supplied | Rendered Element | Behavior |
|----------------|-----------------|----------|
| Neither `href` nor `onClick` | `<div>` | Static, non-interactive container |
| `href` | `<a>` | Navigational link |
| `onClick` | `<button>` | Clickable action (takes precedence if both are provided) |

Interactive cards (`href` or `onClick`) automatically receive:

- `cursor: pointer`
- Hover state: border color changes to `--cc_color_button_background_secondary`
- Active state: `transform: scale(0.99)` press effect
- Focus-visible: outline using `--cc_color_border_input_active` with `xxs` offset

### Nesting Interactive Elements

It is invalid HTML to nest `<button>` or `<a>` elements inside another `<button>` or `<a>`. When the card itself is interactive, the **only** valid place for another button or link is the `contentAction` slot, because it is positioned outside the card element in the DOM.

---

## Visual Styling

### Border Radius

Card uses `--cc_size_border_radius_l` (8px), the standard web default radius.

### Border

A `1px` solid border using `--cc_color_border_default`.

### Background

`--cc_color_background_1`.

### Elevation

Card sits at **depth level 2** in the elevation system (`--cc_color_depth_2`). See the [elevation tokens](../design-tokens/elevation.md) for shadow construction details:

- Y offset: 2px (`--cc_size_depth_2_y`)
- Blur: 6px (`--cc_size_depth_2_blur`)
- Shadow color: `rgba(20,35,52,0.13)`

> Note: The Card component itself does not apply a `box-shadow` in code; elevation is applied at the Figma design level or by the consuming application context. The depth-2 level is the intended design spec for cards.

### Internal Spacing

- Gap between thumbnail and main content: `--cc_size_spacing_m` (16px)
- Padding: `m` top/bottom (16px), `m` left (16px), `xl` right (32px) to accommodate the `contentAction` overlay

---

## Spacing Between Content Slots (ccMargin)

Card does **not** enforce spacing between its content slots. This is intentional to maximize flexibility. Use the `ccMargin` prop on child `<Text>` components to add spacing between slots.

```tsx
<Card title="Bryson Doors, Inc.">
  <Text as="div" color="subtle" size="s" ccMargin="none none s">
    We specialize in installing any and all kinds of doors.
  </Text>
</Card>
```

See the [spacing & layout patterns](../patterns/spacing-layout.md) guide for the full `ccMargin` syntax and token reference.

---

## Examples

### Basic Card with All Slots

```tsx
<Card
  title="Project Alpha"
  contentBefore={<Text as="div" color="subtle" size="xs" weight={600}>COMMERCIAL</Text>}
  contentAfter={<Badge color="success">Active</Badge>}
  contentThumbnail={<img src="thumbnail.jpg" alt="" width={64} height={64} />}
  contentAction={
    <ButtonIcon
      accessibilityLabel="More options"
      size="small"
      iconName="dots-horizontal"
      design="minimal"
    />
  }
>
  <Text as="p" color="subtle" size="s">
    Main project description goes here.
  </Text>
</Card>
```

### Clickable Card (Link)

```tsx
<Card
  title="CompanyCam.com"
  href="https://www.companycam.com"
>
  <Text as="span" color="subtle">
    The leading app for job site documentation
  </Text>
</Card>
```

### Clickable Card (Button)

```tsx
<Card
  title="This Card Is a Button"
  onClick={() => handleCardClick()}
>
  <Text as="div" color="subtle" size="s">
    Click to perform an action.
  </Text>
</Card>
```

### Custom Title with Icon

```tsx
<Card
  title={
    <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--cc_size_spacing_xs)' }}>
      <Icon name="lock" />
      <Text as="h3" family="heading" weight="700" size="m">Private Project</Text>
    </span>
  }
>
  <Text as="div" color="subtle" size="s">Card body content.</Text>
</Card>
```

---

## Figma Reference

Figma component library node: [Slab Web Components Library -- Card](https://www.figma.com/file/9hQAoQhd8UuW8M8ZHs9RfP/Slab-Web-Components-Library?type=design&node-id=2740-265672)

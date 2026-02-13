# Drawer

The `Drawer` component renders a panel that slides in from an edge of the viewport, overlaying page content. It is built on [Floating UI](https://floating-ui.com/docs/usefloating) and behaves as a controlled dialog. Import from `@companycam/slab-web`.

---

## When to Use

- **Side panels** -- settings forms, filters, or configuration that the user can open without leaving the current page.
- **Secondary navigation** -- an off-canvas menu anchored to the left or right.
- **Detail views** -- inspecting a selected item (photo details, project info) while keeping the list visible behind the drawer.
- **Multi-step flows** -- a contained area for wizards or step-by-step tasks that don't warrant a full page.

Do **not** use Drawer for small, transient actions (use a Popover or Tooltip instead) or for critical confirmations (use a Modal/Dialog).

---

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `isOpen` | `boolean` | -- | **Yes** | Whether the drawer is currently visible. The component is fully controlled. |
| `onOpenChange` | `() => void` | -- | **Yes** | Callback fired when the open state should change (trigger click, backdrop click, ESC key). |
| `placement` | `"top"` \| `"bottom"` \| `"left"` \| `"right"` | `"right"` | No | Edge of the viewport the drawer slides in from. |
| `shouldShowBackdrop` | `boolean` | `true` | No | When `true`, renders a semi-transparent backdrop, traps focus inside the drawer, locks page scroll, and enables dismiss on backdrop click or ESC. When `false`, the drawer floats without a backdrop and the user can interact with the page behind it. |
| `offset` | `"xxl"` \| `"xl"` \| `"l"` \| `"m"` \| `"s"` \| `"xs"` \| `"xxs"` | -- | No | Equal inset spacing between the drawer and the viewport edge, using spacing design tokens. |
| `triggerButton` | `ReactNode` | -- | No | A button element that toggles the drawer. The component clones this element and attaches the necessary `ref`, `type="button"`, and click handler. |
| `as` | `keyof HTMLElementTagNameMap` | `"div"` | No | HTML element rendered for the inner content container. |
| `containerStyle` | `CSSProperties` | -- | No | Inline styles applied to the inner content container (background, padding, max-width, etc.). |
| `backDropStyle` | `CSSProperties` | -- | No | Inline styles applied to the backdrop overlay (e.g. `zIndex`). |
| `mountNodeId` | `string` | -- | No | DOM id where the Floating UI portal is mounted. Defaults to a generated portal container. |
| `children` | `ReactNode` | -- | No | Content rendered inside the drawer. |

---

## Placement

`placement` determines which viewport edge the drawer anchors to and which direction it animates from.

| Value | Anchored Edge | Slide Direction | Typical Width/Height Constraint |
|-------|--------------|-----------------|-------------------------------|
| `"right"` | Right | Slides in from the right | Set `maxWidth` via `containerStyle` |
| `"left"` | Left | Slides in from the left | Set `maxWidth` via `containerStyle` |
| `"top"` | Top | Slides down from the top | Set `maxHeight` via `containerStyle` |
| `"bottom"` | Bottom | Slides up from the bottom | Set `maxHeight` via `containerStyle` |

---

## Backdrop Modes

### With Backdrop (default)

When `shouldShowBackdrop` is `true`:

- A semi-transparent backdrop covers the page behind the drawer.
- Page scrolling is locked.
- Focus is trapped inside the drawer via `FloatingFocusManager`.
- Clicking the backdrop or pressing **ESC** fires `onOpenChange` to close.

Use this mode for tasks that require the user's full attention before returning to the page.

### Without Backdrop

When `shouldShowBackdrop` is `false`:

- No backdrop is rendered.
- Page scrolling remains enabled.
- Focus is **not** trapped -- the user can interact with both the drawer and the page.
- ESC and click-outside dismiss are disabled.

Use this mode for supplementary panels the user may reference while still working on the page.

---

## Offset

The `offset` prop adds equal spacing between the drawer and the viewport edges, using spacing design tokens. This creates a "floating" visual treatment.

```tsx
<Drawer isOpen={isOpen} onOpenChange={toggle} offset="m">
  Content with 16px inset from viewport edges
</Drawer>
```

The offset is applied to all relevant edges for the given placement. For example, a `"right"` drawer with `offset="m"` gets 16px of spacing on the top, right, and bottom.

---

## Trigger Button Pattern

Pass a button element to `triggerButton`. The Drawer component clones the element and attaches the Floating UI reference ref and click interaction automatically.

```tsx
<Drawer
  isOpen={isOpen}
  onOpenChange={toggleIsOpen}
  triggerButton={<Button onClick={toggleIsOpen}>Open Drawer</Button>}
>
  Drawer content
</Drawer>
```

The `triggerButton` must be a valid React element (not a string or fragment). The component sets `type="button"` on the cloned element to prevent accidental form submissions.

If you manage the trigger externally (e.g. from a toolbar or menu), omit `triggerButton` and control `isOpen` / `onOpenChange` from your own state.

---

## Content Composition

The Drawer does not prescribe internal layout. Compose content freely using other Slab components.

```tsx
<Drawer
  isOpen={isOpen}
  onOpenChange={toggleIsOpen}
  placement="right"
  containerStyle={{ maxWidth: 400 }}
>
  <Text as="h2" size="xl" ccMargin="0 0 m">Drawer Title</Text>
  <Text as="p" size="s" color="subtle" ccMargin="0 0 l">
    Description or instructions.
  </Text>
  {/* form fields, lists, or any other content */}
  <Button onClick={handleClose}>Close</Button>
</Drawer>
```

**Always include a visible close action** inside the drawer (a Button or icon button) so the user has an obvious way to dismiss it, even when the backdrop provides click-to-dismiss.

### Sizing

The inner container stretches to fill the drawer's axis (full height for left/right, full width for top/bottom). Constrain the cross-axis dimension using `containerStyle`:

- Left/right drawers: set `maxWidth` (e.g. `maxWidth: 300`).
- Top/bottom drawers: set `maxHeight` (e.g. `maxHeight: 250`).

The container scrolls vertically with `overflow-y: auto` when content exceeds the available space.

---

## The ccMargin Prop

The Drawer component itself does not support `ccMargin`. Use `ccMargin` on child components inside the drawer for internal spacing. See [Spacing tokens](../design-tokens/spacing.md) for the full token list.

```tsx
<Drawer isOpen={isOpen} onOpenChange={toggle}>
  <Text as="h2" size="xl" ccMargin="0 0 m">Title</Text>
  <Text as="p" size="s" color="subtle" ccMargin="0 0 m">Body text</Text>
</Drawer>
```

---

## Accessibility Notes

1. **Dialog role.** The drawer is assigned `role="dialog"` via Floating UI's `useRole` hook, ensuring assistive technologies announce it as a dialog.

2. **Focus trap.** When `shouldShowBackdrop` is `true`, focus is trapped inside the drawer using `FloatingFocusManager` in modal mode. Focus moves into the drawer when it opens and returns to the trigger button when it closes.

3. **ESC to close.** When backdrop mode is enabled, pressing the **Escape** key fires `onOpenChange`, allowing the user to close the drawer from the keyboard.

4. **Trigger button semantics.** The `triggerButton` element is automatically given `type="button"` and wired to Floating UI's click interaction. Always pass an actual `<button>` or `<Button>` component, never a `<div>` or `<span>`.

5. **Reduced motion.** The slide and fade animations respect `prefers-reduced-motion`. When the user has reduced motion enabled, the drawer and backdrop appear instantly without animation.

6. **Scroll lock.** When backdrop mode is active, `FloatingOverlay` with `lockScroll` prevents the page behind the drawer from scrolling, avoiding disorienting scroll behavior.

---

## Usage Examples

### Correct

```tsx
// Basic right-side drawer with backdrop
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen((prev) => !prev);

<Drawer
  isOpen={isOpen}
  onOpenChange={toggle}
  placement="right"
  triggerButton={<Button onClick={toggle}>Open</Button>}
  containerStyle={{ maxWidth: 360 }}
>
  <Text as="h2" size="xl" ccMargin="0 0 m">Details</Text>
  <Text as="p" size="s" color="subtle">Panel content here.</Text>
  <Button onClick={() => setIsOpen(false)}>Close</Button>
</Drawer>
```

```tsx
// Left drawer without backdrop for persistent side navigation
<Drawer
  isOpen={navOpen}
  onOpenChange={toggleNav}
  placement="left"
  shouldShowBackdrop={false}
  containerStyle={{ maxWidth: 240 }}
>
  <nav>
    <Text as="span" size="s">Navigation links</Text>
  </nav>
</Drawer>
```

```tsx
// Drawer with offset for floating appearance
<Drawer
  isOpen={isOpen}
  onOpenChange={toggle}
  placement="right"
  offset="m"
  containerStyle={{ maxWidth: 300 }}
>
  <Text as="p" size="s">Floating drawer with 16px viewport inset.</Text>
</Drawer>
```

### Incorrect

```tsx
// Missing required isOpen and onOpenChange (will not work)
<Drawer>Content</Drawer>

// Using a non-button element as triggerButton
<Drawer triggerButton={<div>Open</div>} isOpen={isOpen} onOpenChange={toggle}>
  Content
</Drawer>

// No close action inside the drawer when backdrop is disabled
<Drawer isOpen={isOpen} onOpenChange={toggle} shouldShowBackdrop={false}>
  <Text as="p" size="s">User has no way to close this.</Text>
</Drawer>

// Using raw CSS margin instead of ccMargin on child components
<Drawer isOpen={isOpen} onOpenChange={toggle}>
  <Text as="h2" size="xl" style={{ marginBottom: '16px' }}>Title</Text>
</Drawer>
```

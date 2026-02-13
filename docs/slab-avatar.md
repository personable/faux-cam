# Avatar

A circular visual that represents a user or entity. Avatar displays a profile image, icon, or initials and is the primary way to identify people throughout the UI.

---

## When to Use

- **User identification** -- Show who created, owns, or is assigned to content (photos, projects, comments).
- **People lists** -- Display team members on a project or collaborators on a task.
- **Navigation** -- Link to a user's profile when Avatar is rendered as a clickable element.
- **Grouped context** -- Use AvatarGroup to show multiple people associated with a single item.

---

## Display Priority

Avatar renders content in this priority order. Only one is shown at a time:

| Priority | Prop | What Renders |
|----------|------|--------------|
| 1 (highest) | `imageSrc` | Profile photo, displayed as a circular image |
| 2 | `iconName` | An icon from the Material Design Icons set (e.g., `"account-plus"`) |
| 3 (default) | `initials` or `fullName` | One or two letter initials. If `initials` is not provided, they are auto-calculated from `fullName` |

> If none of `imageSrc`, `iconName`, or `initials` are provided, Avatar falls back to extracting the first and last initials from `fullName`.

---

## Sizes

| Size name | Pixel value | Token |
|-----------|-------------|-------|
| `xsmall` | 16px | `size_avatar_xs` |
| `small` | 24px | `size_avatar_s` |
| `medium` (default) | 32px | `size_avatar_m` |
| `large` | 40px | `size_avatar_l` |

A custom numeric pixel value can also be passed to `size` for edge cases, but prefer the named sizes for consistency.

---

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fullName` | `string` | **(required)** | The person's full name. Used for accessibility text and as a fallback to generate initials. |
| `imageSrc` | `string` | -- | URL for the profile image. When provided, the image takes priority over icon and initials. |
| `iconName` | `string` | -- | Material Design Icon name (without the `mdi-` prefix). Renders when no `imageSrc` is provided. |
| `initials` | `string` | -- | Explicit initials to display. If omitted, initials are derived from `fullName`. |
| `size` | `"xsmall"` \| `"small"` \| `"medium"` \| `"large"` \| `number` | `"medium"` | Controls the diameter of the avatar circle. |
| `borderColor` | `string` | -- | Adds a colored border ring around the avatar (e.g., to indicate online status). |
| `href` | `string` | -- | Renders the avatar as a link (`<a>`). |
| `onClick` | `() => void` | -- | Renders the avatar as a button (`<button>`). |
| `tooltip` | `{ shouldShow?: boolean; placement?: string }` | `{ shouldShow: false, placement: "top" }` | Wraps the avatar in a Tooltip that displays `fullName` on hover. |
| `design` | `"normal"` \| `"group"` | `"normal"` | `"group"` adds a box-shadow ring so avatars visually separate when overlapping in an AvatarGroup. |
| `ccMargin` | `string` | -- | External spacing using Slab spacing tokens (e.g., `"0 0 m"`). See the [Spacing & Layout guide](../patterns/spacing-layout.md). |

---

## AvatarGroup

AvatarGroup renders a horizontal row of overlapping Avatars. It is responsive -- it measures its container and only shows as many avatars as will fit.

### How It Works

1. Pass an array of avatar data to the `avatars` prop. Each entry uses the same props as Avatar (minus `design`, `size`, and `tooltip`, which AvatarGroup controls).
2. AvatarGroup automatically overlaps avatars by 25% of the avatar diameter.
3. Each visible avatar gets `design="group"` (box-shadow separator) and a tooltip showing `fullName`.
4. On window resize, AvatarGroup recalculates how many avatars fit.

### Showing "+N" Overflow

Use the `renderListFooter` prop to display overflow UI. It receives an array of hidden avatar objects.

```tsx
<AvatarGroup
  avatars={avatarList}
  size="medium"
  renderListFooter={(hiddenAvatars) =>
    hiddenAvatars.length > 0 ? (
      <Text as="span" color="subtle" family="heading" size="xs" style={{ paddingLeft: 8 }}>
        +{hiddenAvatars.length}
      </Text>
    ) : null
  }
/>
```

For a richer overflow indicator, render the count inside another Avatar with a Tooltip listing the hidden names:

```tsx
renderListFooter={(hiddenAvatars) => {
  if (hiddenAvatars.length > 0) {
    const names = hiddenAvatars.map((a) => a.fullName).join(", ");
    return (
      <Tooltip title={names} placement="right">
        <Avatar
          fullName="Hidden users"
          initials={`+${hiddenAvatars.length}`}
          design="group"
          style={{ marginLeft: -8 }}
        />
      </Tooltip>
    );
  }
  return null;
}}
```

### AvatarGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `avatars` | `AvatarProps[]` (without `design`, `size`, `tooltip`) | **(required)** | Array of avatar data objects. |
| `size` | Same as Avatar `size` | `"medium"` | Uniform size applied to all avatars in the group. |
| `renderListFooter` | `(hiddenAvatars) => ReactNode` | -- | Callback that receives the hidden avatar objects and returns overflow UI. |

---

## Accessibility

- **`fullName` is required.** It provides the accessible name for every avatar. For image avatars, `fullName` is used as the `alt` attribute. For initials and icon avatars, `fullName` is rendered as screen-reader-only text.
- **Icons are decorative.** When an icon is rendered, it is marked `aria-hidden="true"` because the screen reader already announces `fullName`.
- **Initials are decorative.** The initials `<span>` is also `aria-hidden="true"` for the same reason.
- **Interactive avatars get focus styles.** When `onClick` or `href` is provided, the avatar renders as a `<button>` or `<a>` with visible `focus-visible` outlines.
- **Tooltips in AvatarGroup.** Each avatar in a group automatically shows a tooltip with the user's full name on hover, aiding sighted users in identifying people.

---

## Figma-to-Code Mapping

When translating Figma designs to code, use these mappings:

| Figma Property | Code Prop |
|----------------|-----------|
| Avatar image layer | `imageSrc` |
| Icon inside avatar | `iconName` |
| Text initials inside avatar | `initials` (or let `fullName` auto-generate) |
| Size variant (XS / S / M / L) | `size="xsmall"` \| `"small"` \| `"medium"` \| `"large"` |
| Border color ring | `borderColor` |
| Grouped / overlapping avatars | Use `AvatarGroup` with `design="group"` applied automatically |
| "+N" overflow label | `renderListFooter` on AvatarGroup |
| External spacing | `ccMargin` |

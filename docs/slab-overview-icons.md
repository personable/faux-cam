# Icons

Slab uses **Material Design Icons (MDI)** for its icon system. Icons are referenced by name throughout Slab components.

---

## Usage in Components

Many Slab components accept icon props:

| Prop | Type | Description |
|------|------|-------------|
| `iconName` | `string` | MDI icon name (kebab-case). The component renders the icon internally. |
| `iconComponent` | `ReactNode` | A custom icon element. Overrides `iconName` when both are provided. |

```tsx
// Using iconName (preferred for MDI icons)
<Button iconName="plus" design="filled">Add Item</Button>

// Using iconComponent (for custom/non-MDI icons)
<Button iconComponent={<CustomIcon />} design="filled">Custom</Button>
```

---

## Naming Convention

MDI icons use **kebab-case** names. Common icons used in Slab:

### Actions
| Icon Name | Use |
|-----------|-----|
| `plus` | Add/create |
| `pencil` | Edit |
| `delete` | Delete/remove |
| `close` | Close/dismiss |
| `check` | Confirm/complete |
| `magnify` | Search |
| `download` | Download |
| `upload` | Upload |
| `share-variant` | Share |
| `content-copy` | Copy |

### Navigation
| Icon Name | Use |
|-----------|-----|
| `chevron-left` | Back/previous |
| `chevron-right` | Forward/next |
| `chevron-down` | Expand/dropdown |
| `chevron-up` | Collapse |
| `menu` | Hamburger menu |
| `arrow-left` | Navigate back |
| `dots-vertical` | More options |
| `dots-horizontal` | More options (horizontal) |

### Status
| Icon Name | Use |
|-----------|-----|
| `check-circle-outline` | Success |
| `alert-circle-outline` | Error |
| `information-outline` | Info |
| `alert-outline` | Warning/caution |

### Media
| Icon Name | Use |
|-----------|-----|
| `camera` | Camera/photo |
| `image` | Image/gallery |
| `video` | Video |
| `file-document-outline` | Document |
| `folder` | Folder |

---

## Icon-Only Buttons

When using icons without visible text labels, always provide an accessible name:

```tsx
<ButtonIcon iconName="close">
  <ScreenReaderContent>Close dialog</ScreenReaderContent>
</ButtonIcon>
```

See [Button component](./components/button.md) for `ButtonIcon` and `ButtonIconCondensed` documentation.

---

## Finding Icons

Browse the full MDI library at [materialdesignicons.com](https://materialdesignicons.com). Use the kebab-case version of the icon name in Slab components.

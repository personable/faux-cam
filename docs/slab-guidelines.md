# Slab Design System

Slab is CompanyCam's design system. It provides design tokens (`@companycam/slab-tokens`) and React components (`@companycam/slab-web`) for building consistent, accessible UIs.

---

## Before Writing Code

Follow these steps in order:

1. **Read the relevant overview file** to understand the token system or icon conventions.
2. **Read the component guideline** for every component you plan to use. Note that many of the components have required properties, marked in the docs with an asterisk.
3. **Read the pattern files** that apply to your task (forms, spacing, accessibility).
4. **Use semantic tokens only.** Never reference primitive color values directly.
5. **Use Slab components.** Do not recreate functionality that a Slab component already provides.
6. **When using the Text component** Always set the `family` property to "heading".
7. \*\*When performing any kind of styling, use styled-components

---

## Packages

| Package                   | Purpose                                                                                            | Import Example                                  |
| ------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `@companycam/slab-tokens` | Design tokens (colors, spacing, typography, borders, elevation) delivered as CSS custom properties | `var(--cc_color_action_primary_base)`           |
| `@companycam/slab-web`    | React components built on the token system                                                         | `import { Button } from '@companycam/slab-web'` |

---

## Guideline Files

### Overviews

Read these first to understand foundational concepts.

| File                                          | When to Read                                             |
| --------------------------------------------- | -------------------------------------------------------- |
| [Token System Overview](./overview-tokens.md) | Before using any CSS custom property or design token     |
| [Icons Overview](./overview-icons.md)         | Before using any icon prop (`iconName`, `iconComponent`) |

### Design Tokens

Read the specific token file when you need to choose a value for color, spacing, type, borders, or elevation.

| File                                                     | Covers                                                              |
| -------------------------------------------------------- | ------------------------------------------------------------------- |
| [Semantic Colors](./design-tokens/colors-semantic.md)    | `--cc_color_*` tokens — backgrounds, text, borders, actions, status |
| [Primitive Colors](./design-tokens/colors-primitives.md) | Raw color scales (reference only — do not use directly)             |
| [Spacing](./design-tokens/spacing.md)                    | `--cc_size_spacing_*` tokens and the `ccMargin` prop                |
| [Typography](./design-tokens/typography.md)              | `--cc_size_text_*` tokens, font families, font weights              |
| [Borders](./design-tokens/borders.md)                    | `--cc_size_border_width_*` and `--cc_size_border_radius_*` tokens   |
| [Elevation](./design-tokens/elevation.md)                | `--cc_size_depth_*` and `--cc_color_depth_*` shadow tokens          |

### Components

Read the guideline for each component before using it. Files are grouped by related components.

| File                                                        | Components Covered                                                                                       |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [Button](./components/button.md)                            | `Button`, `ButtonCondensed`, `ButtonFilter`, `ButtonIcon`, `ButtonIconCondensed`                         |
| [Text](./components/text.md)                                | `Text`                                                                                                   |
| [Avatar](./components/avatar.md)                            | `Avatar`, `AvatarGroup`                                                                                  |
| [Card](./components/card.md)                                | `Card`                                                                                                   |
| [Inputs](./components/inputs.md)                            | `InputText`, `InputTextArea`, `InputPassword`, `InputDate`, `InputSelectHTML`, `InputRange`, `InputFile` |
| [Selection Inputs](./components/inputs-selection.md)        | `InputCheckbox`, `InputCheckboxGroup`, `InputRadio`, `InputRadioGroup`, `Switch`                         |
| [Modal](./components/modal.md)                              | `Modal`                                                                                                  |
| [Drawer](./components/drawer.md)                            | `Drawer`                                                                                                 |
| [Popover & Tooltip](./components/popover-tooltip.md)        | `Popover`, `Tooltip`                                                                                     |
| [Navigation Menu](./components/navigation.md)               | `Menu`, `MenuHeading`, `MenuItem`                                                                        |
| [Table](./components/table.md)                              | `Table` (with TanStack React Table)                                                                      |
| [Notice, Toast & Badge](./components/notice-toast-badge.md) | `Notice`, `Toast`, `Badge`                                                                               |
| [Progress](./components/progress.md)                        | `ProgressBar`, `ProgressCircle`, `Spinner`                                                               |
| [Chips](./components/chips.md)                              | `ChipFilter`, `ChipToggle`                                                                               |

### Patterns

Read these for cross-cutting concerns that apply across multiple components.

| File                                             | When to Read                                                                                        |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| [Spacing & Layout](./patterns/spacing-layout.md) | When arranging components in a layout, applying margins, or building grids                          |
| [Forms](./patterns/forms.md)                     | When building any form — covers layout, validation, controlled vs. uncontrolled, and error handling |
| [Accessibility](./patterns/accessibility.md)     | Always — covers WCAG 2.1 AA requirements, focus management, and ARIA patterns                       |

---

## Quick Rules

- **Tokens:** Use `--cc_color_*`, `--cc_size_spacing_*`, and `--cc_size_text_*` semantic tokens. Never hard-code hex colors, pixel sizes, or font stacks.
- **Radius:** The default web border radius is `--cc_size_border_radius_l` (8px).
- **Spacing:** Use the `ccMargin` prop on components that support it. For layout gaps, prefer CSS `gap` on flex/grid containers with spacing tokens.
- **Icons:** Use Material Design Icons by kebab-case name (e.g. `iconName="pencil-outline"`). Prefer outline variants.
- **Accessibility:** Every interactive element needs a visible or screen-reader-accessible label. Every form input needs an `id` linking it to its `<label>`.
- **Imports:** Import all components from `@companycam/slab-web`. Import tokens via CSS custom properties (they are globally available).
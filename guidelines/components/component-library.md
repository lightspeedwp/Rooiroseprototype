# Component Library

**Last updated**: 2026-03-02
**Version**: 1.0

This directory contains detailed documentation for the React components used in "Die Papier".

## Structure
The documentation is split into logical categories:

*   [**Layout Components**](./layout-components.md): Structural elements like Headers, Footers, and Grids.
*   [**Content Components**](./content-components.md): Components that display news and content (Cards, Heroes, Listings).
*   [**Interactive Components**](./interactive-components.md): Forms, Modals, Newsletters, and Checkout elements.

## Core UI (ShadCN)
We use a customized version of ShadCN UI located in `/src/app/components/ui`. These are "atomic" components used to build larger business components.

### Common Primitives
| Component | Description | Props Highlights |
|:---|:---|:---|
| `Button` | Standard button with variants. | `variant="default|outline|ghost|link"`, `size="sm|lg"` |
| `Badge` | Small status indicators (e.g., Categories). | `variant="default|secondary|outline"` |
| `Sheet` | Side drawers (used for Mobile Menu & Cart). | `SheetContent`, `SheetTrigger` |
| `Tabs` | Tabbed content switching. | `TabsList`, `TabsContent` |
| `Dialog` | Modal windows. | `DialogContent`, `DialogTrigger` |
| `Input` | Text fields. | Standard HTML input props. |
| `Select` | Dropdown menus. | `SelectContent`, `SelectItem` |
| `Skeleton` | Loading states. | `className` for sizing. |

### Usage Rule
**Do not modify** the files in `components/ui` directly unless updating the global design system. All business logic should reside in the custom components documented in the other files.
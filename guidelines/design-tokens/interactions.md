# Interactions

**Last updated**: 2026-03-02
**Version**: 1.0

This document defines the standard behaviors for user interactions, transitions, and animations across "Die Papier".

## Micro-Interactions (Hover & Focus)

### 1. Cards (Article & Product)
*   **Trigger**: Hover over the entire card area.
*   **Behavior**:
    *   **Scale**: The card container (or inner image) scales up by **5%** (`scale-105`).
    *   **Shadow**: Increases from `shadow-sm` to `shadow-md` (or `md` to `lg`).
    *   **Duration**: `300ms` for standard cards, `500ms` or `700ms` for large hero images.
    *   **Easing**: `ease-out` (default).
    *   **Image Handling**: Images inside cards should have `overflow-hidden` on the parent to contain the zoom effect.

### 2. Buttons
*   **Primary (`#D70025`)**:
    *   **Hover**: Background darkens to `#9E0918` (`--custom-primary-2`).
    *   **Transition**: `transition-colors duration-200`.
*   **Ghost / Outline**:
    *   **Hover**: Background becomes light gray (`#f1f5f9` / `bg-accent`).
    *   **Text**: Remains dark or switches to accent color.

### 3. Links
*   **Text Links**:
    *   **Initial**: Navy `#142135` or Gray `#2c2c2c`.
    *   **Hover**: Primary Red `#D70025`.
    *   **Decoration**: Underline persists or appears on hover (context dependent).

## Transitions

### Standard Timing
We use a consistent set of durations to maintain a cohesive feel.

| Token | Duration | Usage |
|:---|:---|:---|
| `duration-200` | 200ms | **Micro-UI**: Colors, Border colors, Opacity changes. |
| `duration-300` | 300ms | **Movement**: Small scaling, Slide-ins, Dropdowns. |
| `duration-500` | 500ms | **Emphasis**: Large Hero image zooms, Complex layout shifts. |
| `duration-700` | 700ms+ | **Cinematic**: Full-screen hero effects. |

### Easing
*   **Default**: `ease-in-out` (Tailwind default) for most UI.
*   **Enter**: `ease-out` (Decelerate) for modals/drawers entering.
*   **Exit**: `ease-in` (Accelerate) for modals/drawers leaving.

## Component Animations

### Mobile Menu (Sheet)
*   **Entrance**: Slide in from left (`slide-in-from-left`).
*   **Overlay**: Fade in (`fade-in`).
*   **Exit**: Slide out to left (`slide-out-to-left`).

### Modals & Dialogs
*   **Entrance**: Fade in + slight Zoom in (`zoom-in-95`).
*   **Exit**: Fade out + slight Zoom out (`zoom-out-95`).

## WordPress Implementation Guide

Since `theme.json` has limited support for complex animations (mostly restricted to link colors), these effects must be implemented via **Custom CSS** in the Block Theme.

### Recommended CSS Strategy
Create a `src/assets/css/animations.css` file in your WordPress theme and enqueue it.

```css
/* Card Hover Effect */
.wp-block-post-template {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.wp-block-post-template:hover {
    transform: translateY(-4px); /* or scale(1.02) */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Image Zoom inside Post */
.wp-block-post-featured-image img {
    transition: transform 0.5s ease;
}

.wp-block-post-template:hover .wp-block-post-featured-image img {
    transform: scale(1.05);
}

/* Button Hover */
.wp-block-button__link {
    transition: background-color 0.2s ease;
}
```
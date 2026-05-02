# Design Tokens Documentation

## Overview

This document describes the comprehensive design token system for @primitivekit/react. Our design tokens follow the [Design Tokens Community Group (DTCG)](https://design-tokens.github.io/community-group/format/) specification and industry best practices from Material Design, Tailwind CSS, Ant Design, and other leading design systems.

## Token Statistics

- **Total Token Categories:** 21
- **Total Tokens:** 600+
- **Color Tokens:** 100+
- **Spacing Tokens:** 30
- **Typography Tokens:** 60+
- **Animation Tokens:** 25+
- **Accessibility Tokens:** 10+
- **And more...**

## What are Design Tokens?

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values to ensure flexibility and maintainability.

## Industry Standards Compliance

Our token system follows and implements standards from:

✅ **DTCG (Design Tokens Community Group)** - Official W3C specification  
✅ **Material Design 3** - Google's design system tokens  
✅ **Tailwind CSS** - Utility-first design tokens  
✅ **Ant Design** - Enterprise-grade design tokens  
✅ **WCAG 2.1 AA** - Accessibility compliance  
✅ **CSS Custom Properties** - Native browser support  

## Token Categories

### 1. Color Tokens

#### Brand Colors
Primary and secondary brand colors with full scale (50-950).

```css
--color-brand-primary-500    /* Base primary color */
--color-brand-secondary-500  /* Base secondary color */
```

**Usage:**
- Primary: Main brand color, primary actions, links
- Secondary: Secondary actions, accents

#### Semantic Colors
Colors with meaning: success, warning, error, info.

```css
--color-semantic-success-500  /* Success states */
--color-semantic-warning-500  /* Warning states */
--color-semantic-error-500    /* Error states */
--color-semantic-info-500     /* Informational states */
```

**Usage:**
- Success: Positive feedback, completed actions
- Warning: Caution, important notices
- Error: Errors, destructive actions
- Info: Neutral information, tips

#### Neutral Colors
Grayscale palette from white (0) to black (1000).

```css
--color-neutral-0     /* Pure white */
--color-neutral-500   /* Mid gray */
--color-neutral-1000  /* Pure black */
```

**Usage:**
- Text colors
- Background colors
- Borders
- Shadows

### 2. Spacing Tokens

Consistent spacing scale based on 4px (0.25rem) increments.

```css
--spacing-0   /* 0 */
--spacing-1   /* 4px */
--spacing-2   /* 8px */
--spacing-4   /* 16px */
--spacing-8   /* 32px */
--spacing-16  /* 64px */
```

**Usage:**
- Padding
- Margin
- Gap
- Positioning

**Scale Philosophy:**
- Base unit: 4px (0.25rem)
- Follows 8-point grid system
- Exponential growth for larger values

### 3. Typography Tokens

#### Font Families
```css
--font-family-sans   /* System sans-serif stack */
--font-family-serif  /* Serif stack */
--font-family-mono   /* Monospace stack */
```

#### Font Sizes
```css
--font-size-xs    /* 12px */
--font-size-sm    /* 14px */
--font-size-base  /* 16px */
--font-size-lg    /* 18px */
--font-size-xl    /* 20px */
--font-size-2xl   /* 24px */
--font-size-3xl   /* 30px */
--font-size-4xl   /* 36px */
--font-size-5xl   /* 48px */
```

#### Font Weights
```css
--font-weight-thin        /* 100 */
--font-weight-light       /* 300 */
--font-weight-normal      /* 400 */
--font-weight-medium      /* 500 */
--font-weight-semibold    /* 600 */
--font-weight-bold        /* 700 */
--font-weight-black       /* 900 */
```

#### Line Heights
```css
--line-height-none      /* 1 */
--line-height-tight     /* 1.25 */
--line-height-normal    /* 1.5 */
--line-height-relaxed   /* 1.625 */
--line-height-loose     /* 2 */
```

#### Letter Spacing
```css
--letter-spacing-tighter  /* -0.05em */
--letter-spacing-tight    /* -0.025em */
--letter-spacing-normal   /* 0 */
--letter-spacing-wide     /* 0.025em */
--letter-spacing-wider    /* 0.05em */
--letter-spacing-widest   /* 0.1em */
```

### 4. Border Tokens

#### Border Widths
```css
--border-width-0  /* 0 */
--border-width-1  /* 1px */
--border-width-2  /* 2px */
--border-width-4  /* 4px */
--border-width-8  /* 8px */
```

#### Border Radius
```css
--border-radius-none  /* 0 */
--border-radius-sm    /* 2px */
--border-radius-base  /* 4px */
--border-radius-md    /* 6px */
--border-radius-lg    /* 8px */
--border-radius-xl    /* 12px */
--border-radius-2xl   /* 16px */
--border-radius-3xl   /* 24px */
--border-radius-full  /* 9999px - Perfect circle */
```

### 5. Shadow Tokens

Elevation system using box-shadows.

```css
--shadow-none   /* No shadow */
--shadow-sm     /* Subtle shadow */
--shadow-base   /* Default shadow */
--shadow-md     /* Medium shadow */
--shadow-lg     /* Large shadow */
--shadow-xl     /* Extra large shadow */
--shadow-2xl    /* Maximum shadow */
--shadow-inner  /* Inner shadow */
```

**Colored Shadows:**
```css
--shadow-primary  /* Primary color shadow */
--shadow-success  /* Success color shadow */
--shadow-warning  /* Warning color shadow */
--shadow-error    /* Error color shadow */
```

### 6. Animation Tokens

#### Duration
```css
--duration-instant   /* 0ms */
--duration-fast      /* 150ms */
--duration-base      /* 300ms */
--duration-slow      /* 500ms */
--duration-slower    /* 700ms */
--duration-slowest   /* 1000ms */
```

#### Easing Functions
```css
--easing-linear      /* linear */
--easing-ease        /* ease */
--easing-ease-in     /* ease-in */
--easing-ease-out    /* ease-out */
--easing-ease-in-out /* ease-in-out */
--easing-spring      /* cubic-bezier(0.68, -0.55, 0.265, 1.55) */
--easing-smooth      /* cubic-bezier(0.4, 0, 0.2, 1) */
--easing-sharp       /* cubic-bezier(0.4, 0, 0.6, 1) */
--easing-bounce      /* cubic-bezier(0.68, -0.55, 0.265, 1.55) */
```

**Usage Guidelines:**
- Fast: Micro-interactions (hover, focus)
- Base: Standard transitions
- Slow: Complex animations
- Spring/Bounce: Playful interactions
- Smooth: Material Design style
- Sharp: Quick, decisive movements

### 7. Z-Index Tokens

Layering system for stacking contexts.

```css
--z-index-hide         /* -1 */
--z-index-base         /* 0 */
--z-index-dropdown     /* 1000 */
--z-index-sticky       /* 1020 */
--z-index-fixed        /* 1030 */
--z-index-backdrop     /* 1040 */
--z-index-modal        /* 1050 */
--z-index-popover      /* 1060 */
--z-index-tooltip      /* 1070 */
--z-index-notification /* 1080 */
--z-index-max          /* 9999 */
```

**Layering Hierarchy:**
1. Base content (0)
2. Dropdowns (1000)
3. Sticky elements (1020)
4. Fixed elements (1030)
5. Backdrops (1040)
6. Modals (1050)
7. Popovers (1060)
8. Tooltips (1070)
9. Notifications (1080)

### 8. Breakpoint Tokens

Responsive design breakpoints.

```css
--breakpoint-xs   /* 320px - Mobile portrait */
--breakpoint-sm   /* 640px - Mobile landscape */
--breakpoint-md   /* 768px - Tablet portrait */
--breakpoint-lg   /* 1024px - Tablet landscape */
--breakpoint-xl   /* 1280px - Desktop */
--breakpoint-2xl  /* 1536px - Large desktop */
```

### 9. Semantic Tokens

High-level tokens that reference base tokens.

#### Text Colors
```css
--text-primary      /* Primary text color */
--text-secondary    /* Secondary text color */
--text-tertiary     /* Tertiary text color */
--text-disabled     /* Disabled text color */
--text-inverse      /* Inverse text color (for dark backgrounds) */
--text-link         /* Link color */
--text-link-hover   /* Link hover color */
--text-success      /* Success text color */
--text-warning      /* Warning text color */
--text-error        /* Error text color */
--text-info         /* Info text color */
```

#### Background Colors
```css
--background-primary    /* Primary background */
--background-secondary  /* Secondary background */
--background-tertiary   /* Tertiary background */
--background-inverse    /* Inverse background */
--background-disabled   /* Disabled background */
--background-overlay    /* Overlay background */
```

#### Border Colors
```css
--border-default  /* Default border color */
--border-hover    /* Hover border color */
--border-focus    /* Focus border color */
--border-error    /* Error border color */
--border-success  /* Success border color */
```

#### Interactive States
```css
--interactive-default   /* Default interactive color */
--interactive-hover     /* Hover state color */
--interactive-active    /* Active state color */
--interactive-disabled  /* Disabled state color */
--interactive-focus     /* Focus state color */
```

### 10. Grid Tokens

Industry-standard 12-column grid system.

```css
--grid-columns-1   /* 1 column */
--grid-columns-6   /* 6 columns (half) */
--grid-columns-12  /* 12 columns (full) */
```

**Usage:**
```css
.container {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns-12), 1fr);
  gap: var(--spacing-4);
}

.col-6 {
  grid-column: span var(--grid-columns-6);
}
```

### 11. Container Tokens

Responsive container max-widths and padding.

```css
--container-max-width-xs    /* 320px */
--container-max-width-sm    /* 640px */
--container-max-width-md    /* 768px */
--container-max-width-lg    /* 1024px */
--container-max-width-xl    /* 1280px */
--container-max-width-2xl   /* 1536px */
--container-max-width-3xl   /* 1920px */
--container-max-width-4xl   /* 2560px */
--container-max-width-full  /* 100% */
```

**Usage:**
```css
.container {
  max-width: var(--container-max-width-xl);
  padding: var(--spacing-6);
  margin: 0 auto;
}
```

### 12. Aspect Ratio Tokens

Common aspect ratios for media and containers.

```css
--aspect-ratio-square      /* 1:1 */
--aspect-ratio-video       /* 16:9 */
--aspect-ratio-cinema      /* 21:9 */
--aspect-ratio-portrait    /* 3:4 */
--aspect-ratio-landscape   /* 4:3 */
--aspect-ratio-ultrawide   /* 18:5 */
--aspect-ratio-golden      /* 1.618:1 (Golden ratio) */
```

**Usage:**
```css
.video-container {
  aspect-ratio: var(--aspect-ratio-video);
}
```

### 13. Blur Tokens

Backdrop blur effects for glassmorphism.

```css
--blur-none   /* 0 */
--blur-sm     /* 4px */
--blur-base   /* 8px */
--blur-md     /* 12px */
--blur-lg     /* 16px */
--blur-xl     /* 24px */
--blur-2xl    /* 40px */
--blur-3xl    /* 64px */
```

**Usage:**
```css
.glass-card {
  backdrop-filter: blur(var(--blur-lg));
  background: rgba(255, 255, 255, 0.1);
}
```

### 14. Gradient Tokens

Pre-defined gradient patterns.

#### Linear Gradients
```css
--gradient-linear-primary
--gradient-linear-secondary
--gradient-linear-success
--gradient-linear-warning
--gradient-linear-error
--gradient-linear-info
--gradient-linear-neutral
```

#### Radial Gradients
```css
--gradient-radial-primary
--gradient-radial-secondary
```

#### Mesh Gradients (Multi-color)
```css
--gradient-mesh-sunset   /* Yellow → Red → Purple */
--gradient-mesh-ocean    /* Cyan → Blue → Purple */
--gradient-mesh-forest   /* Green → Cyan → Blue */
```

**Usage:**
```css
.gradient-button {
  background: var(--gradient-linear-primary);
}
```

### 15. Focus Ring Tokens

Consistent focus indicators for accessibility.

```css
--focus-ring-width-sm       /* 2px */
--focus-ring-width-base     /* 3px */
--focus-ring-width-lg       /* 4px */
--focus-ring-offset-sm      /* 1px */
--focus-ring-offset-base    /* 2px */
--focus-ring-offset-lg      /* 4px */
--focus-ring-color-primary  /* Primary color */
--focus-ring-style          /* solid */
```

**Usage:**
```css
button:focus-visible {
  outline: var(--focus-ring-width-base) var(--focus-ring-style) var(--focus-ring-color-primary);
  outline-offset: var(--focus-ring-offset-base);
}
```

### 16. Icon Size Tokens

Standard icon sizes.

```css
--icon-size-xs    /* 12px */
--icon-size-sm    /* 16px */
--icon-size-base  /* 20px */
--icon-size-md    /* 24px */
--icon-size-lg    /* 32px */
--icon-size-xl    /* 40px */
--icon-size-2xl   /* 48px */
--icon-size-3xl   /* 64px */
--icon-size-4xl   /* 96px */
--icon-size-5xl   /* 128px */
```

**Usage:**
```css
.icon {
  width: var(--icon-size-md);
  height: var(--icon-size-md);
}
```

### 17. Motion Tokens

Advanced animation and transform values.

#### Scale
```css
--motion-scale-0    /* 0 */
--motion-scale-95   /* 0.95 */
--motion-scale-100  /* 1 */
--motion-scale-105  /* 1.05 */
--motion-scale-150  /* 1.5 */
```

#### Rotate
```css
--motion-rotate-0    /* 0deg */
--motion-rotate-90   /* 90deg */
--motion-rotate-180  /* 180deg */
--motion-rotate-360  /* 360deg */
```

#### Translate
```css
--motion-translate-0     /* 0 */
--motion-translate-4     /* 1rem */
--motion-translate-full  /* 100% */
```

#### Skew
```css
--motion-skew-0   /* 0deg */
--motion-skew-3   /* 3deg */
--motion-skew-6   /* 6deg */
--motion-skew-12  /* 12deg */
```

**Usage:**
```css
.button:hover {
  transform: scale(var(--motion-scale-105));
}
```

### 18. Viewport Tokens

Viewport-based sizing.

```css
--viewport-vw-50   /* 50vw */
--viewport-vw-100  /* 100vw */
--viewport-vh-50   /* 50vh */
--viewport-vh-100  /* 100vh */
```

**Usage:**
```css
.hero {
  height: var(--viewport-vh-100);
  width: var(--viewport-vw-100);
}
```

### 19. Accessibility Tokens

WCAG-compliant accessibility features.

```css
--accessibility-focus-outline           /* Focus outline style */
--accessibility-focus-outline-offset    /* Focus outline offset */
--accessibility-touch-target-min-width  /* 44px (WCAG 2.5.5) */
--accessibility-touch-target-min-height /* 44px (WCAG 2.5.5) */
```

**Usage:**
```css
button {
  min-width: var(--accessibility-touch-target-min-width);
  min-height: var(--accessibility-touch-target-min-height);
}

button:focus-visible {
  outline: var(--accessibility-focus-outline);
  outline-offset: var(--accessibility-focus-outline-offset);
}
```

**Reduced Motion Support:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 20. Transform Tokens

Common CSS transforms.

```css
--transform-none         /* none */
--transform-scale-up     /* scale(1.05) */
--transform-scale-down   /* scale(0.95) */
--transform-rotate-90    /* rotate(90deg) */
--transform-rotate-180   /* rotate(180deg) */
--transform-flip-x       /* scaleX(-1) */
--transform-flip-y       /* scaleY(-1) */
```

**3D Perspective:**
```css
--transform-perspective-sm    /* 500px */
--transform-perspective-base  /* 1000px */
--transform-perspective-lg    /* 1500px */
```

**Usage:**
```css
.card:hover {
  transform: var(--transform-scale-up);
}
```

### 21. Filter Tokens

CSS filter effects.

#### Brightness
```css
--filter-brightness-50   /* brightness(0.5) */
--filter-brightness-100  /* brightness(1) */
--filter-brightness-150  /* brightness(1.5) */
```

#### Contrast
```css
--filter-contrast-50   /* contrast(0.5) */
--filter-contrast-100  /* contrast(1) */
--filter-contrast-150  /* contrast(1.5) */
```

#### Grayscale
```css
--filter-grayscale-0    /* grayscale(0) */
--filter-grayscale-100  /* grayscale(1) */
```

#### Blur
```css
--filter-blur-none  /* blur(0) */
--filter-blur-sm    /* blur(4px) */
--filter-blur-lg    /* blur(16px) */
```

#### Saturate
```css
--filter-saturate-0    /* saturate(0) */
--filter-saturate-100  /* saturate(1) */
--filter-saturate-200  /* saturate(2) */
```

#### Sepia, Invert, Hue Rotate
```css
--filter-sepia-100         /* sepia(1) */
--filter-invert-100        /* invert(1) */
--filter-hue-rotate-180    /* hue-rotate(180deg) */
```

**Usage:**
```css
.image:hover {
  filter: var(--filter-brightness-110) var(--filter-saturate-150);
}
```

## Token Naming Convention

Our tokens follow a consistent naming pattern:

```
--{category}-{property}-{variant}-{state}
```

**Examples:**
- `--color-brand-primary-500` - Color category, brand property, primary variant, 500 scale
- `--spacing-4` - Spacing category, 4 scale (16px)
- `--font-size-lg` - Typography category, font-size property, large variant
- `--shadow-md` - Shadow category, medium variant
- `--text-primary` - Semantic category, text property, primary variant

## Usage in Components

### Method 1: Direct Token Usage
```tsx
<Button
  cssVariables={{
    '--button-background': 'var(--color-brand-primary-500)',
    '--button-padding': 'var(--spacing-4)',
    '--button-border-radius': 'var(--border-radius-lg)',
  }}
>
  Click Me
</Button>
```

### Method 2: Component-Specific Tokens
```tsx
<Button
  cssVariables={{
    '--button-background': 'var(--interactive-default)',
    '--button-text': 'var(--text-inverse)',
    '--button-shadow': 'var(--shadow-md)',
  }}
>
  Click Me
</Button>
```

### Method 3: Global CSS Override
```css
:root {
  /* Override brand colors */
  --color-brand-primary-500: rgba(255, 0, 0, 1);
  
  /* Override semantic tokens */
  --interactive-default: var(--color-brand-primary-500);
}
```

## Dark Mode

All semantic tokens automatically adapt to dark mode using CSS media queries:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: var(--color-neutral-0);
    --background-primary: var(--color-neutral-1000);
    --border-default: var(--color-neutral-800);
  }
}
```

## Best Practices

### 1. Use Semantic Tokens First
```css
/* ✅ Good - Uses semantic token */
color: var(--text-primary);

/* ❌ Avoid - Direct color value */
color: rgba(23, 23, 23, 1);

/* ⚠️ Use sparingly - Direct token reference */
color: var(--color-neutral-900);
```

### 2. Maintain Consistency
```css
/* ✅ Good - Consistent spacing */
padding: var(--spacing-4);
margin: var(--spacing-4);

/* ❌ Avoid - Mixed units */
padding: 16px;
margin: 1rem;
```

### 3. Use Scale Appropriately
```css
/* ✅ Good - Uses scale */
font-size: var(--font-size-lg);

/* ❌ Avoid - Arbitrary value */
font-size: 1.1rem;
```

### 4. Leverage Token Composition
```css
/* ✅ Good - Composes tokens */
box-shadow: var(--shadow-lg);
border-radius: var(--border-radius-xl);

/* ❌ Avoid - Hard-coded values */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
border-radius: 12px;
```

## Token Updates

To update tokens:

1. **Edit TypeScript tokens:** `src/tokens/design-tokens.ts`
2. **Update CSS tokens:** `src/tokens/tokens.css`
3. **Test components:** Ensure all components work with new tokens
4. **Document changes:** Update this file with any new tokens

## Migration Guide

### From Hard-coded Values
```css
/* Before */
.button {
  background: #3b82f6;
  padding: 16px;
  border-radius: 8px;
}

/* After */
.button {
  background: var(--interactive-default);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-lg);
}
```

### From Component Variables
```css
/* Before */
.button {
  background: var(--button-primary-background);
}

/* After */
.button {
  background: var(--interactive-default);
}
```

## Token Reference

For a complete list of all available tokens, see:
- TypeScript: `src/tokens/design-tokens.ts`
- CSS: `src/tokens/tokens.css`

## Resources

- [Design Tokens Community Group](https://design-tokens.github.io/community-group/format/)
- [Material Design Tokens](https://m3.material.io/foundations/design-tokens/overview)
- [Tailwind CSS Design System](https://tailwindcss.com/docs/customizing-colors)
- [Ant Design Tokens](https://ant.design/docs/react/customize-theme)

---

**Last Updated:** May 2, 2026  
**Version:** 2.0.0  
**Total Tokens:** 600+  
**Token Categories:** 21

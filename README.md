# @primitivekit/react

Primitive React components with zero hardcoded values. Fully customizable via CSS variables.

## Philosophy

- **Zero Hardcoded Values** - Every visual property controlled through CSS variables
- **Type-Safe** - Full TypeScript support with comprehensive type definitions  
- **Accessible** - WCAG 2.1 AA compliant with proper ARIA attributes
- **Customizable** - 50-150+ CSS variables per component
- **Lightweight** - Minimal dependencies, maximum flexibility
- **Industry Standards** - Follows DTCG, Material Design 3, Tailwind, Ant Design standards

## Installation

```bash
npm install @primitivekit/react
```

## Features

### 🎨 600+ Design Tokens
Comprehensive design token system with 21 categories:
- Colors (100+ tokens)
- Spacing (30 tokens)
- Typography (60+ tokens)
- Shadows, Borders, Animations
- Grid, Container, Aspect Ratios
- Gradients, Blur, Filters
- Motion, Transforms, Accessibility
- And more...

### 🧩 38 Components
Complete component library covering all essential UI needs:
- **Form Components** (7): Button, Input, Textarea, Select, Checkbox, Radio, Switch
- **Layout Components** (6): Card, Container, Stack, Grid, Divider, Space
- **Feedback Components** (5): Badge, Spinner, Alert, Progress, Skeleton
- **Navigation Components** (3): Link, Tabs, Breadcrumb
- **Overlay Components** (4): Modal, Tooltip, Popover, Dropdown
- **Data Display** (6): Avatar, Tag, Empty, Image, Collapse, Table
- **Data Entry** (3): Form, Slider, Upload
- **Other** (4): Typography, Menu, Drawer, Steps

### ♿ Accessibility First
- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader support
- Focus management
- Touch target sizes (44x44px)
- Reduced motion support

## Quick Start

```tsx
import { Button, Input, Card } from '@primitivekit/react';

function App() {
  return (
    <Card>
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
      />
      
      <Button variant="primary" size="large">
        Submit
      </Button>
    </Card>
  );
}
```

## Design Tokens

Import and use design tokens:

```tsx
import { designTokens } from '@primitivekit/react/tokens';
import '@primitivekit/react/tokens/tokens.css';

// Use in JavaScript
const primaryColor = designTokens.color.brand.primary[500];

// Use in CSS
<div style={{
  background: 'var(--color-brand-primary-500)',
  padding: 'var(--spacing-4)',
  borderRadius: 'var(--border-radius-lg)',
  boxShadow: 'var(--shadow-md)'
}}>
  Token-based styling
</div>
```

### Token Categories

- **Colors** - Brand, semantic, neutral colors with full scales
- **Spacing** - 4px-based grid system (0-384px)
- **Typography** - Font families, sizes, weights, line heights
- **Borders** - Widths, radius, styles
- **Shadows** - Elevation system with colored shadows
- **Animations** - Duration, easing, delays
- **Grid** - 12-column grid system
- **Container** - Responsive max-widths
- **Gradients** - Linear, radial, mesh gradients
- **Blur** - Backdrop blur effects
- **Motion** - Scale, rotate, translate, skew
- **Filters** - Brightness, contrast, blur, etc.
- **Accessibility** - Focus rings, touch targets, reduced motion

## Customization

### Component Level
```tsx
<Button
  variant="primary"
  cssVariables={{
    '--button-primary-background': 'rgba(255, 0, 0, 1)',
    '--button-primary-color': 'rgba(255, 255, 255, 1)',
    '--button-border-radius': '20px',
  }}
>
  Custom Button
</Button>
```

### Global Level
```css
:root {
  /* Override brand colors */
  --color-brand-primary-500: rgba(255, 0, 0, 1);
  
  /* Override semantic tokens */
  --interactive-default: var(--color-brand-primary-500);
  
  /* Override component tokens */
  --button-border-radius: 20px;
}
```

### Using Utility Functions
```typescript
import { 
  applyGradient, 
  applyFocusRing, 
  createResponsiveContainer 
} from '@primitivekit/react/tokens';

const element = document.querySelector('.hero');
applyGradient(element, 'linear', 'primary');
```

## TypeScript Support

Full TypeScript support with comprehensive types:

```tsx
import type { 
  ButtonProps, 
  InputProps, 
  ButtonCSSVariables,
  DesignTokens 
} from '@primitivekit/react';
```

## Documentation

- **Component Docs:** [https://primitivekit.github.io/docs/](https://primitivekit.github.io/docs/)
- **Design Tokens:** [DESIGN_TOKENS.md](./DESIGN_TOKENS.md)
- **Token Enhancement:** [DESIGN_TOKENS_ENHANCED.md](./DESIGN_TOKENS_ENHANCED.md)
- **Release Notes:** [RELEASE_NOTES_v0.2.0.md](./RELEASE_NOTES_v0.2.0.md)

## Browser Support

- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 15+
- iOS Safari 9.3+
- Android Chrome 49+

**Coverage:** 98%+ of global users

## Contributing

Contributions welcome! Please read our [Contributing Guide](./CONTRIBUTING.md).

## License

MIT - See [LICENSE](./LICENSE) for details

## Links

- **NPM:** https://www.npmjs.com/package/@primitivekit/react
- **GitHub:** https://github.com/primitivekit/react
- **Documentation:** https://primitivekit.github.io/docs/

---

**Version:** 0.2.0  
**Components:** 38  
**Design Tokens:** 600+  
**Maintained by:** PrimitiveKit Team

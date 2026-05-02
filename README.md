# @primitivekit/react

Primitive React components with zero hardcoded values. Fully customizable via CSS variables.

## Philosophy

- **Zero Hardcoded Values** - Every visual property controlled through CSS variables
- **Type-Safe** - Full TypeScript support with comprehensive type definitions  
- **Accessible** - WCAG 2.1 AA compliant with proper ARIA attributes
- **Customizable** - 150+ CSS variables per component
- **Lightweight** - Minimal dependencies, maximum flexibility

## Installation

```bash
npm install @primitivekit/react
```

## Components

### ✅ Available Now

#### Form Components
- **Button** - 6 variants, 3 sizes, loading states, icons
- **Input** - Text input with labels, helpers, states, left/right elements
- **Textarea** - Multi-line text input with resize control

### 🚧 Coming Soon

- Select, Checkbox, Radio, Switch
- Card, Container, Stack, Grid, Divider
- Badge, Alert, Spinner, Progress, Skeleton
- Link, Tabs, Breadcrumb
- Modal, Tooltip, Popover, Dropdown

## Usage

```tsx
import { Button, Input, Textarea } from '@primitivekit/react';

function App() {
  return (
    <div>
      <Button variant="primary" size="large">
        Click me
      </Button>
      
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
      />
      
      <Textarea
        label="Message"
        rows={5}
      />
    </div>
  );
}
```

## Customization

Every component supports 150+ CSS variables:

```tsx
<Button style={{
  '--btn-bg-color': '#8b5cf6',
  '--btn-border-radius': '2rem',
  '--btn-padding-x': '2.5rem'
}}>
  Custom Button
</Button>
```

Or globally:

```css
:root {
  --btn-primary-bg: #8b5cf6;
  --btn-border-radius: 0.75rem;
  --input-border-color-focus: #8b5cf6;
}
```

## TypeScript Support

Full TypeScript support included:

```tsx
import type { ButtonProps, InputProps, ButtonCSSVariables } from '@primitivekit/react';
```

## Documentation

Visit [https://primitivekit.github.io/docs/](https://primitivekit.github.io/docs/)

## License

MIT

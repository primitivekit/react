# PrimitiveKit Components

## ✅ Completed Components (7)

### Form Components
1. **Button** - 6 variants, 3 sizes, loading states, icons
2. **Input** - Text input with labels, helpers, states, left/right elements  
3. **Textarea** - Multi-line text input with resize control
4. **Select** - Dropdown with options, variants, states
5. **Checkbox** - With indeterminate state support
6. **Radio** - Radio button with proper grouping
7. **Switch** - Toggle switch with smooth animation

## 🚧 In Progress

### Layout Components
- Card
- Container
- Stack
- Grid
- Divider

### Feedback Components
- Badge
- Alert
- Spinner
- Progress
- Skeleton

### Navigation Components
- Link
- Tabs
- Breadcrumb

### Overlay Components
- Modal
- Tooltip
- Popover
- Dropdown

## Component Features

Every component includes:
- **Zero Hardcoded Values** - 50-150+ CSS variables
- **TypeScript** - Full type safety with comprehensive interfaces
- **Accessible** - WCAG 2.1 AA compliant
- **Customizable** - Every visual property via CSS variables
- **Responsive** - Mobile-first design
- **Dark Mode Ready** - Theme-aware styling
- **Size Variants** - Small, medium, large
- **State Management** - Error, success, warning states
- **Disabled States** - Proper disabled styling and behavior
- **ARIA Attributes** - Screen reader support
- **Keyboard Navigation** - Full keyboard accessibility
- **Focus Management** - Visible focus indicators
- **High Contrast** - Supports high contrast mode
- **Reduced Motion** - Respects prefers-reduced-motion

## Usage Example

```tsx
import {
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch
} from '@primitivekit/react';

function Form() {
  return (
    <form>
      <Input
        label="Email"
        type="email"
        required
        helperText="We'll never share your email"
      />
      
      <Textarea
        label="Message"
        rows={5}
        placeholder="Enter your message"
      />
      
      <Select
        label="Country"
        options={[
          { value: 'us', label: 'United States' },
          { value: 'uk', label: 'United Kingdom' }
        ]}
      />
      
      <Checkbox label="Subscribe to newsletter" />
      
      <Radio name="plan" value="free" label="Free Plan" />
      <Radio name="plan" value="pro" label="Pro Plan" />
      
      <Switch label="Enable notifications" />
      
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
}
```

## Customization

```tsx
// Inline customization
<Button style={{
  '--btn-bg-color': '#8b5cf6',
  '--btn-border-radius': '2rem'
}}>
  Custom Button
</Button>

// Global customization
:root {
  --btn-primary-bg: #8b5cf6;
  --input-border-color-focus: #8b5cf6;
  --checkbox-bg-color-checked: #8b5cf6;
}
```

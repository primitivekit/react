/**
 * Design Tokens
 * Following Design Tokens Community Group (DTCG) specification
 * https://design-tokens.github.io/community-group/format/
 */

// ============================================================================
// COLOR TOKENS
// ============================================================================

export const colorTokens = {
  // Brand Colors
  brand: {
    primary: {
      50: 'rgba(239, 246, 255, 1)',
      100: 'rgba(219, 234, 254, 1)',
      200: 'rgba(191, 219, 254, 1)',
      300: 'rgba(147, 197, 253, 1)',
      400: 'rgba(96, 165, 250, 1)',
      500: 'rgba(59, 130, 246, 1)',  // Base
      600: 'rgba(37, 99, 235, 1)',
      700: 'rgba(29, 78, 216, 1)',
      800: 'rgba(30, 64, 175, 1)',
      900: 'rgba(30, 58, 138, 1)',
      950: 'rgba(23, 37, 84, 1)',
    },
    secondary: {
      50: 'rgba(250, 245, 255, 1)',
      100: 'rgba(243, 232, 255, 1)',
      200: 'rgba(233, 213, 255, 1)',
      300: 'rgba(216, 180, 254, 1)',
      400: 'rgba(192, 132, 252, 1)',
      500: 'rgba(168, 85, 247, 1)',  // Base
      600: 'rgba(147, 51, 234, 1)',
      700: 'rgba(126, 34, 206, 1)',
      800: 'rgba(107, 33, 168, 1)',
      900: 'rgba(88, 28, 135, 1)',
      950: 'rgba(59, 7, 100, 1)',
    },
  },

  // Semantic Colors
  semantic: {
    success: {
      50: 'rgba(240, 253, 244, 1)',
      100: 'rgba(220, 252, 231, 1)',
      200: 'rgba(187, 247, 208, 1)',
      300: 'rgba(134, 239, 172, 1)',
      400: 'rgba(74, 222, 128, 1)',
      500: 'rgba(34, 197, 94, 1)',   // Base
      600: 'rgba(22, 163, 74, 1)',
      700: 'rgba(21, 128, 61, 1)',
      800: 'rgba(22, 101, 52, 1)',
      900: 'rgba(20, 83, 45, 1)',
      950: 'rgba(5, 46, 22, 1)',
    },
    warning: {
      50: 'rgba(255, 251, 235, 1)',
      100: 'rgba(254, 243, 199, 1)',
      200: 'rgba(253, 230, 138, 1)',
      300: 'rgba(252, 211, 77, 1)',
      400: 'rgba(251, 191, 36, 1)',
      500: 'rgba(245, 158, 11, 1)',  // Base
      600: 'rgba(217, 119, 6, 1)',
      700: 'rgba(180, 83, 9, 1)',
      800: 'rgba(146, 64, 14, 1)',
      900: 'rgba(120, 53, 15, 1)',
      950: 'rgba(69, 26, 3, 1)',
    },
    error: {
      50: 'rgba(254, 242, 242, 1)',
      100: 'rgba(254, 226, 226, 1)',
      200: 'rgba(254, 202, 202, 1)',
      300: 'rgba(252, 165, 165, 1)',
      400: 'rgba(248, 113, 113, 1)',
      500: 'rgba(239, 68, 68, 1)',    // Base
      600: 'rgba(220, 38, 38, 1)',
      700: 'rgba(185, 28, 28, 1)',
      800: 'rgba(153, 27, 27, 1)',
      900: 'rgba(127, 29, 29, 1)',
      950: 'rgba(69, 10, 10, 1)',
    },
    info: {
      50: 'rgba(240, 249, 255, 1)',
      100: 'rgba(224, 242, 254, 1)',
      200: 'rgba(186, 230, 253, 1)',
      300: 'rgba(125, 211, 252, 1)',
      400: 'rgba(56, 189, 248, 1)',
      500: 'rgba(14, 165, 233, 1)',   // Base
      600: 'rgba(2, 132, 199, 1)',
      700: 'rgba(3, 105, 161, 1)',
      800: 'rgba(7, 89, 133, 1)',
      900: 'rgba(12, 74, 110, 1)',
      950: 'rgba(8, 47, 73, 1)',
    },
  },

  // Neutral Colors (Grayscale)
  neutral: {
    0: 'rgba(255, 255, 255, 1)',     // White
    50: 'rgba(250, 250, 250, 1)',
    100: 'rgba(245, 245, 245, 1)',
    200: 'rgba(229, 229, 229, 1)',
    300: 'rgba(212, 212, 212, 1)',
    400: 'rgba(163, 163, 163, 1)',
    500: 'rgba(115, 115, 115, 1)',   // Base
    600: 'rgba(82, 82, 82, 1)',
    700: 'rgba(64, 64, 64, 1)',
    800: 'rgba(38, 38, 38, 1)',
    900: 'rgba(23, 23, 23, 1)',
    950: 'rgba(10, 10, 10, 1)',
    1000: 'rgba(0, 0, 0, 1)',        // Black
  },

  // Opacity Tokens
  opacity: {
    0: '0',
    5: '0.05',
    10: '0.1',
    15: '0.15',
    20: '0.2',
    25: '0.25',
    30: '0.3',
    40: '0.4',
    45: '0.45',
    50: '0.5',
    60: '0.6',
    65: '0.65',
    70: '0.7',
    75: '0.75',
    80: '0.8',
    85: '0.85',
    90: '0.9',
    95: '0.95',
    100: '1',
  },
} as const;

// ============================================================================
// SPACING TOKENS
// ============================================================================

export const spacingTokens = {
  0: '0',
  1: '0.25rem',    // 4px
  2: '0.5rem',     // 8px
  3: '0.75rem',    // 12px
  4: '1rem',       // 16px
  5: '1.25rem',    // 20px
  6: '1.5rem',     // 24px
  7: '1.75rem',    // 28px
  8: '2rem',       // 32px
  9: '2.25rem',    // 36px
  10: '2.5rem',    // 40px
  11: '2.75rem',   // 44px
  12: '3rem',      // 48px
  14: '3.5rem',    // 56px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
  28: '7rem',      // 112px
  32: '8rem',      // 128px
  36: '9rem',      // 144px
  40: '10rem',     // 160px
  44: '11rem',     // 176px
  48: '12rem',     // 192px
  52: '13rem',     // 208px
  56: '14rem',     // 224px
  60: '15rem',     // 240px
  64: '16rem',     // 256px
  72: '18rem',     // 288px
  80: '20rem',     // 320px
  96: '24rem',     // 384px
} as const;

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

export const typographyTokens = {
  // Font Families
  fontFamily: {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },

  // Font Sizes
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
    '8xl': '6rem',      // 96px
    '9xl': '8rem',      // 128px
  },

  // Font Weights
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  // Line Heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// ============================================================================
// BORDER TOKENS
// ============================================================================

export const borderTokens = {
  // Border Widths
  width: {
    0: '0',
    1: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
  },

  // Border Radius
  radius: {
    none: '0',
    sm: '0.125rem',    // 2px
    base: '0.25rem',   // 4px
    md: '0.375rem',    // 6px
    lg: '0.5rem',      // 8px
    xl: '0.75rem',     // 12px
    '2xl': '1rem',     // 16px
    '3xl': '1.5rem',   // 24px
    full: '9999px',
  },

  // Border Styles
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
    double: 'double',
    none: 'none',
  },
} as const;

// ============================================================================
// SHADOW TOKENS
// ============================================================================

export const shadowTokens = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  
  // Colored Shadows
  primary: '0 4px 14px 0 rgba(59, 130, 246, 0.39)',
  success: '0 4px 14px 0 rgba(34, 197, 94, 0.39)',
  warning: '0 4px 14px 0 rgba(245, 158, 11, 0.39)',
  error: '0 4px 14px 0 rgba(239, 68, 68, 0.39)',
} as const;

// ============================================================================
// ANIMATION TOKENS
// ============================================================================

export const animationTokens = {
  // Duration
  duration: {
    instant: '0ms',
    fast: '150ms',
    base: '300ms',
    slow: '500ms',
    slower: '700ms',
    slowest: '1000ms',
  },

  // Timing Functions (Easing)
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    
    // Custom cubic-bezier curves
    spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },

  // Delays
  delay: {
    none: '0ms',
    short: '100ms',
    base: '200ms',
    long: '300ms',
  },
} as const;

// ============================================================================
// Z-INDEX TOKENS
// ============================================================================

export const zIndexTokens = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  backdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  notification: 1080,
  max: 9999,
} as const;

// ============================================================================
// BREAKPOINT TOKENS
// ============================================================================

export const breakpointTokens = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================================================
// GRID TOKENS
// ============================================================================

export const gridTokens = {
  // Grid Columns
  columns: {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: '11',
    12: '12',
  },

  // Grid Gap
  gap: {
    0: '0',
    1: spacingTokens[1],
    2: spacingTokens[2],
    3: spacingTokens[3],
    4: spacingTokens[4],
    5: spacingTokens[5],
    6: spacingTokens[6],
    8: spacingTokens[8],
    10: spacingTokens[10],
    12: spacingTokens[12],
  },
} as const;

// ============================================================================
// CONTAINER TOKENS
// ============================================================================

export const containerTokens = {
  // Max Width
  maxWidth: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    '3xl': '1920px',
    '4xl': '2560px',
    full: '100%',
  },

  // Padding
  padding: {
    sm: spacingTokens[4],
    md: spacingTokens[6],
    lg: spacingTokens[8],
  },
} as const;

// ============================================================================
// ASPECT RATIO TOKENS
// ============================================================================

export const aspectRatioTokens = {
  square: '1 / 1',
  video: '16 / 9',
  cinema: '21 / 9',
  portrait: '3 / 4',
  landscape: '4 / 3',
  ultrawide: '18 / 5',
  golden: '1.618 / 1',
} as const;

// ============================================================================
// BLUR TOKENS
// ============================================================================

export const blurTokens = {
  none: '0',
  sm: '4px',
  base: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '40px',
  '3xl': '64px',
} as const;

// ============================================================================
// GRADIENT TOKENS
// ============================================================================

export const gradientTokens = {
  // Linear Gradients
  linear: {
    primary: `linear-gradient(135deg, rgba(59, 130, 246, 1) 0%, rgba(37, 99, 235, 1) 100%)`,
    secondary: `linear-gradient(135deg, rgba(168, 85, 247, 1) 0%, rgba(147, 51, 234, 1) 100%)`,
    success: `linear-gradient(135deg, rgba(34, 197, 94, 1) 0%, rgba(22, 163, 74, 1) 100%)`,
    warning: `linear-gradient(135deg, rgba(245, 158, 11, 1) 0%, rgba(217, 119, 6, 1) 100%)`,
    error: `linear-gradient(135deg, rgba(239, 68, 68, 1) 0%, rgba(220, 38, 38, 1) 100%)`,
    info: `linear-gradient(135deg, rgba(14, 165, 233, 1) 0%, rgba(2, 132, 199, 1) 100%)`,
    neutral: `linear-gradient(135deg, rgba(115, 115, 115, 1) 0%, rgba(64, 64, 64, 1) 100%)`,
  },

  // Radial Gradients
  radial: {
    primary: `radial-gradient(circle, rgba(59, 130, 246, 1) 0%, rgba(37, 99, 235, 1) 100%)`,
    secondary: `radial-gradient(circle, rgba(168, 85, 247, 1) 0%, rgba(147, 51, 234, 1) 100%)`,
  },

  // Mesh Gradients (Multi-color)
  mesh: {
    sunset: `linear-gradient(135deg, rgba(251, 191, 36, 1) 0%, rgba(239, 68, 68, 1) 50%, rgba(168, 85, 247, 1) 100%)`,
    ocean: `linear-gradient(135deg, rgba(14, 165, 233, 1) 0%, rgba(59, 130, 246, 1) 50%, rgba(168, 85, 247, 1) 100%)`,
    forest: `linear-gradient(135deg, rgba(34, 197, 94, 1) 0%, rgba(14, 165, 233, 1) 50%, rgba(59, 130, 246, 1) 100%)`,
  },
} as const;

// ============================================================================
// FOCUS RING TOKENS
// ============================================================================

export const focusRingTokens = {
  width: {
    sm: '2px',
    base: '3px',
    lg: '4px',
  },
  offset: {
    sm: '1px',
    base: '2px',
    lg: '4px',
  },
  color: {
    primary: colorTokens.brand.primary[500],
    secondary: colorTokens.brand.secondary[500],
    success: colorTokens.semantic.success[500],
    warning: colorTokens.semantic.warning[500],
    error: colorTokens.semantic.error[500],
    info: colorTokens.semantic.info[500],
  },
  style: 'solid',
} as const;

// ============================================================================
// ICON SIZE TOKENS
// ============================================================================

export const iconSizeTokens = {
  xs: '12px',
  sm: '16px',
  base: '20px',
  md: '24px',
  lg: '32px',
  xl: '40px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
  '5xl': '128px',
} as const;

// ============================================================================
// MOTION TOKENS (Advanced Animation)
// ============================================================================

export const motionTokens = {
  // Scale
  scale: {
    0: '0',
    50: '0.5',
    75: '0.75',
    90: '0.9',
    95: '0.95',
    100: '1',
    105: '1.05',
    110: '1.1',
    125: '1.25',
    150: '1.5',
  },

  // Rotate
  rotate: {
    0: '0deg',
    45: '45deg',
    90: '90deg',
    180: '180deg',
    270: '270deg',
    360: '360deg',
  },

  // Translate
  translate: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    full: '100%',
  },

  // Skew
  skew: {
    0: '0deg',
    3: '3deg',
    6: '6deg',
    12: '12deg',
  },
} as const;

// ============================================================================
// VIEWPORT TOKENS
// ============================================================================

export const viewportTokens = {
  // Viewport Width
  vw: {
    10: '10vw',
    20: '20vw',
    25: '25vw',
    30: '30vw',
    40: '40vw',
    50: '50vw',
    60: '60vw',
    70: '70vw',
    75: '75vw',
    80: '80vw',
    90: '90vw',
    100: '100vw',
  },

  // Viewport Height
  vh: {
    10: '10vh',
    20: '20vh',
    25: '25vh',
    30: '30vh',
    40: '40vh',
    50: '50vh',
    60: '60vh',
    70: '70vh',
    75: '75vh',
    80: '80vh',
    90: '90vh',
    100: '100vh',
  },

  // Viewport Min/Max
  vmin: {
    50: '50vmin',
    100: '100vmin',
  },
  vmax: {
    50: '50vmax',
    100: '100vmax',
  },
} as const;

// ============================================================================
// ACCESSIBILITY TOKENS
// ============================================================================

export const accessibilityTokens = {
  // Focus Visible
  focusVisible: {
    outline: `${focusRingTokens.width.base} ${focusRingTokens.style} ${focusRingTokens.color.primary}`,
    outlineOffset: focusRingTokens.offset.base,
  },

  // Reduced Motion
  reducedMotion: {
    duration: '0.01ms',
    easing: 'linear',
  },

  // Screen Reader Only
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: '0',
  },

  // Touch Target Size (WCAG 2.5.5)
  touchTarget: {
    minWidth: '44px',
    minHeight: '44px',
  },
} as const;

// ============================================================================
// TRANSFORM TOKENS
// ============================================================================

export const transformTokens = {
  // Common Transforms
  none: 'none',
  scaleUp: 'scale(1.05)',
  scaleDown: 'scale(0.95)',
  rotate90: 'rotate(90deg)',
  rotate180: 'rotate(180deg)',
  rotate270: 'rotate(270deg)',
  flipX: 'scaleX(-1)',
  flipY: 'scaleY(-1)',
  
  // 3D Transforms
  perspective: {
    sm: '500px',
    base: '1000px',
    lg: '1500px',
  },
} as const;

// ============================================================================
// FILTER TOKENS
// ============================================================================

export const filterTokens = {
  // Brightness
  brightness: {
    50: 'brightness(0.5)',
    75: 'brightness(0.75)',
    90: 'brightness(0.9)',
    100: 'brightness(1)',
    110: 'brightness(1.1)',
    125: 'brightness(1.25)',
    150: 'brightness(1.5)',
  },

  // Contrast
  contrast: {
    50: 'contrast(0.5)',
    75: 'contrast(0.75)',
    100: 'contrast(1)',
    125: 'contrast(1.25)',
    150: 'contrast(1.5)',
  },

  // Grayscale
  grayscale: {
    0: 'grayscale(0)',
    50: 'grayscale(0.5)',
    100: 'grayscale(1)',
  },

  // Blur
  blur: {
    none: 'blur(0)',
    sm: 'blur(4px)',
    base: 'blur(8px)',
    md: 'blur(12px)',
    lg: 'blur(16px)',
    xl: 'blur(24px)',
  },

  // Saturate
  saturate: {
    0: 'saturate(0)',
    50: 'saturate(0.5)',
    100: 'saturate(1)',
    150: 'saturate(1.5)',
    200: 'saturate(2)',
  },

  // Sepia
  sepia: {
    0: 'sepia(0)',
    50: 'sepia(0.5)',
    100: 'sepia(1)',
  },

  // Invert
  invert: {
    0: 'invert(0)',
    50: 'invert(0.5)',
    100: 'invert(1)',
  },

  // Hue Rotate
  hueRotate: {
    0: 'hue-rotate(0deg)',
    90: 'hue-rotate(90deg)',
    180: 'hue-rotate(180deg)',
    270: 'hue-rotate(270deg)',
  },
} as const;

// ============================================================================
// COMPONENT-SPECIFIC TOKENS
// ============================================================================

export const componentTokens = {
  // Button
  button: {
    height: {
      sm: '32px',
      md: '40px',
      lg: '48px',
    },
    padding: {
      sm: '0 12px',
      md: '0 16px',
      lg: '0 24px',
    },
    fontSize: {
      sm: typographyTokens.fontSize.sm,
      md: typographyTokens.fontSize.base,
      lg: typographyTokens.fontSize.lg,
    },
  },

  // Input
  input: {
    height: {
      sm: '32px',
      md: '40px',
      lg: '48px',
    },
    padding: {
      sm: '0 12px',
      md: '0 16px',
      lg: '0 20px',
    },
    fontSize: {
      sm: typographyTokens.fontSize.sm,
      md: typographyTokens.fontSize.base,
      lg: typographyTokens.fontSize.lg,
    },
  },

  // Card
  card: {
    padding: {
      sm: spacingTokens[4],
      md: spacingTokens[6],
      lg: spacingTokens[8],
    },
    borderRadius: {
      sm: borderTokens.radius.base,
      md: borderTokens.radius.lg,
      lg: borderTokens.radius.xl,
    },
  },

  // Modal
  modal: {
    width: {
      sm: '400px',
      md: '600px',
      lg: '800px',
      xl: '1000px',
      full: '100%',
    },
    maxWidth: {
      sm: '90vw',
      md: '90vw',
      lg: '90vw',
      xl: '90vw',
    },
  },
} as const;

// ============================================================================
// SEMANTIC TOKEN MAPPINGS
// ============================================================================

export const semanticTokens = {
  // Text Colors
  text: {
    primary: colorTokens.neutral[900],
    secondary: colorTokens.neutral[600],
    tertiary: colorTokens.neutral[500],
    disabled: colorTokens.neutral[400],
    inverse: colorTokens.neutral[0],
    link: colorTokens.brand.primary[600],
    linkHover: colorTokens.brand.primary[700],
    success: colorTokens.semantic.success[600],
    warning: colorTokens.semantic.warning[600],
    error: colorTokens.semantic.error[600],
    info: colorTokens.semantic.info[600],
  },

  // Background Colors
  background: {
    primary: colorTokens.neutral[0],
    secondary: colorTokens.neutral[50],
    tertiary: colorTokens.neutral[100],
    inverse: colorTokens.neutral[900],
    disabled: colorTokens.neutral[100],
    overlay: `rgba(0, 0, 0, ${colorTokens.opacity[50]})`,
  },

  // Border Colors
  border: {
    default: colorTokens.neutral[200],
    hover: colorTokens.neutral[300],
    focus: colorTokens.brand.primary[500],
    error: colorTokens.semantic.error[500],
    success: colorTokens.semantic.success[500],
  },

  // Interactive States
  interactive: {
    default: colorTokens.brand.primary[500],
    hover: colorTokens.brand.primary[600],
    active: colorTokens.brand.primary[700],
    disabled: colorTokens.neutral[300],
    focus: colorTokens.brand.primary[500],
  },
} as const;

// ============================================================================
// EXPORT ALL TOKENS
// ============================================================================

export const designTokens = {
  color: colorTokens,
  spacing: spacingTokens,
  typography: typographyTokens,
  border: borderTokens,
  shadow: shadowTokens,
  animation: animationTokens,
  zIndex: zIndexTokens,
  breakpoint: breakpointTokens,
  component: componentTokens,
  semantic: semanticTokens,
  grid: gridTokens,
  container: containerTokens,
  aspectRatio: aspectRatioTokens,
  blur: blurTokens,
  gradient: gradientTokens,
  focusRing: focusRingTokens,
  iconSize: iconSizeTokens,
  motion: motionTokens,
  viewport: viewportTokens,
  accessibility: accessibilityTokens,
  transform: transformTokens,
  filter: filterTokens,
} as const;

export type DesignTokens = typeof designTokens;

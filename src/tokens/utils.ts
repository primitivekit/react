/**
 * Token Utility Functions
 * Helper functions for working with design tokens
 */

import { designTokens } from './design-tokens';

/**
 * Get a color token with custom opacity
 * @param color - RGBA color string
 * @param opacity - Opacity value (0-1)
 * @returns RGBA color string with new opacity
 */
export function withOpacity(color: string, opacity: number): string {
  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
  if (!match) return color;
  
  const [, r, g, b] = match;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * Get spacing value in pixels
 * @param scale - Spacing scale (0-96)
 * @returns Spacing value in pixels
 */
export function getSpacing(scale: keyof typeof designTokens.spacing): number {
  const value = designTokens.spacing[scale];
  if (value === '0') return 0;
  return parseFloat(value) * 16; // Convert rem to px
}

/**
 * Get responsive breakpoint
 * @param breakpoint - Breakpoint name
 * @returns Breakpoint value in pixels
 */
export function getBreakpoint(breakpoint: keyof typeof designTokens.breakpoint): number {
  return parseInt(designTokens.breakpoint[breakpoint]);
}

/**
 * Create CSS variable reference
 * @param tokenPath - Dot-notation path to token (e.g., 'color.brand.primary.500')
 * @returns CSS variable reference string
 */
export function cssVar(tokenPath: string): string {
  const path = tokenPath.replace(/\./g, '-');
  return `var(--${path})`;
}

/**
 * Generate CSS custom properties object from tokens
 * @param tokens - Token object
 * @param prefix - CSS variable prefix
 * @returns Object with CSS custom properties
 */
export function generateCSSVars(
  tokens: Record<string, any>,
  prefix: string = ''
): Record<string, string> {
  const result: Record<string, string> = {};

  function traverse(obj: any, path: string[] = []) {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = [...path, key];
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        traverse(value, currentPath);
      } else {
        const varName = `--${prefix}${currentPath.join('-')}`;
        result[varName] = String(value);
      }
    }
  }

  traverse(tokens);
  return result;
}

/**
 * Get color scale
 * @param colorFamily - Color family (e.g., 'brand.primary', 'semantic.success')
 * @returns Array of color values from 50 to 950
 */
export function getColorScale(colorFamily: string): string[] {
  const [category, name] = colorFamily.split('.');
  const colors = (designTokens.color as any)[category]?.[name];
  
  if (!colors) return [];
  
  return Object.values(colors) as string[];
}

/**
 * Calculate contrast ratio between two colors
 * @param color1 - First color (RGBA string)
 * @param color2 - Second color (RGBA string)
 * @returns Contrast ratio (1-21)
 */
export function getContrastRatio(color1: string, color2: string): number {
  const getLuminance = (color: string): number => {
    const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (!match) return 0;
    
    const [, r, g, b] = match.map(Number);
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check if color combination meets WCAG AA standards
 * @param foreground - Foreground color (RGBA string)
 * @param background - Background color (RGBA string)
 * @param level - WCAG level ('AA' or 'AAA')
 * @param size - Text size ('normal' or 'large')
 * @returns Whether the combination meets the standard
 */
export function meetsWCAG(
  foreground: string,
  background: string,
  level: 'AA' | 'AAA' = 'AA',
  size: 'normal' | 'large' = 'normal'
): boolean {
  const ratio = getContrastRatio(foreground, background);
  
  const requirements = {
    AA: { normal: 4.5, large: 3 },
    AAA: { normal: 7, large: 4.5 },
  };
  
  return ratio >= requirements[level][size];
}

/**
 * Get recommended text color for a background
 * @param background - Background color (RGBA string)
 * @returns Recommended text color ('light' or 'dark')
 */
export function getTextColor(background: string): 'light' | 'dark' {
  const whiteContrast = getContrastRatio(background, designTokens.color.neutral[0]);
  const blackContrast = getContrastRatio(background, designTokens.color.neutral[1000]);
  
  return whiteContrast > blackContrast ? 'light' : 'dark';
}

/**
 * Convert token value to pixels
 * @param value - Token value (e.g., '1rem', '16px', '1em')
 * @param baseFontSize - Base font size in pixels (default: 16)
 * @returns Value in pixels
 */
export function toPixels(value: string, baseFontSize: number = 16): number {
  if (value.endsWith('px')) {
    return parseFloat(value);
  }
  if (value.endsWith('rem')) {
    return parseFloat(value) * baseFontSize;
  }
  if (value.endsWith('em')) {
    return parseFloat(value) * baseFontSize;
  }
  return parseFloat(value);
}

/**
 * Create a custom theme by overriding tokens
 * @param overrides - Token overrides
 * @returns CSS custom properties object
 */
export function createTheme(overrides: Record<string, string>): Record<string, string> {
  return Object.entries(overrides).reduce((acc, [key, value]) => {
    const varName = key.startsWith('--') ? key : `--${key}`;
    acc[varName] = value;
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Apply theme to an element
 * @param element - HTML element
 * @param theme - Theme object (CSS custom properties)
 */
export function applyTheme(element: HTMLElement, theme: Record<string, string>): void {
  Object.entries(theme).forEach(([key, value]) => {
    element.style.setProperty(key, value);
  });
}

/**
 * Remove theme from an element
 * @param element - HTML element
 * @param theme - Theme object (CSS custom properties)
 */
export function removeTheme(element: HTMLElement, theme: Record<string, string>): void {
  Object.keys(theme).forEach(key => {
    element.style.removeProperty(key);
  });
}

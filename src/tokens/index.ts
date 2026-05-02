/**
 * Design Tokens Export
 * 
 * Import tokens in your application:
 * 
 * ```tsx
 * import { designTokens } from '@primitivekit/react/tokens';
 * 
 * // Use in JavaScript/TypeScript
 * const primaryColor = designTokens.color.brand.primary[500];
 * 
 * // Or import CSS tokens
 * import '@primitivekit/react/tokens/tokens.css';
 * ```
 */

export * from './design-tokens';
export * from './utils';
export { designTokens as tokens } from './design-tokens';

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import { copyFileSync, mkdirSync, writeFileSync } from 'fs';

// Plugin to copy TypeScript definitions
const copyTypes = () => ({
  name: 'copy-types',
  writeBundle() {
    try {
      mkdirSync('dist', { recursive: true });
      mkdirSync('dist/components/Button', { recursive: true });
      
      // Copy type definitions
      copyFileSync('src/components/Button/Button.d.ts', 'dist/components/Button/Button.d.ts');
      
      // Create main index.d.ts
      const indexDts = `export { Button } from './components/Button/Button';
export type { ButtonProps, ButtonSize, ButtonVariant, ButtonCSSVariables } from './components/Button/Button.d';
`;
      writeFileSync('dist/index.d.ts', indexDts);
      
      console.log('✓ TypeScript definitions copied');
    } catch (error) {
      console.error('Error copying type definitions:', error);
    }
  }
});

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
      exports: 'named'
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.js', '.jsx']
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx']
    }),
    commonjs(),
    postcss({
      extract: false,
      modules: false,
      inject: true,
      minimize: true
    }),
    terser(),
    copyTypes()
  ],
  external: ['react', 'react-dom']
};

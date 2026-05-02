import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import { copyFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

// Plugin to copy tokens.css to dist
const copyTokensCSS = {
  name: 'copy-tokens-css',
  writeBundle() {
    try {
      mkdirSync('dist/tokens', { recursive: true });
      copyFileSync('src/tokens/tokens.css', 'dist/tokens/tokens.css');
      console.log('✓ Copied tokens.css to dist/tokens/');
    } catch (err) {
      console.error('Error copying tokens.css:', err);
    }
  }
};

export default {
  input: 'src/index.ts',
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
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    }),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
      exclude: ['**/*.test.ts', '**/*.test.tsx']
    }),
    commonjs(),
    postcss({
      extract: false,
      modules: false,
      inject: true,
      minimize: true
    }),
    terser(),
    copyTokensCSS
  ],
  external: ['react', 'react-dom']
};

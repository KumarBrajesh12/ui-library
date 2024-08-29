const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const { babel } = require('@rollup/plugin-babel');
const postcss = require('rollup-plugin-postcss');
const { terser } = require('rollup-plugin-terser');
const dts = require('rollup-plugin-dts').default;
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

const packageJson = require('./package.json');

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      babel({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      postcss({
        extensions: ['.css'],
        minimize: true,
        extract: 'index.css',
      }),
      terser(),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'dist/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];

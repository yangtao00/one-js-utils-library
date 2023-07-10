import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  external: ['dayjs'],
  output: [
    {
      file: 'dist/bundle.esm.js',
      format: 'es',
    },
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'one-uitls',
      globals: {
        dayjs: 'dayjs',
      },
    },
  ],
  plugins: [typescript(), terser()],
};

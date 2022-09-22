import { RollupOptions } from 'rollup';
import ts from '@rollup/plugin-typescript';
import path from 'path';

const config: RollupOptions = {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    ts({
      tsconfig: path.resolve(__dirname, "tsconfig.base.json"),
      include: ["src/**/*"],
      declaration: true,
      outDir: "lib"
    })
  ]
};

export default config;
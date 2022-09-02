import { babel } from '@rollup/plugin-babel';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [babel({ extensions: ['.ts'], babelHelpers: 'bundled' }), react()],
});

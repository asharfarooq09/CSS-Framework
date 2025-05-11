import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssCustomProperties from 'postcss-custom-properties';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssCustomProperties({
          preserve: true,
        }),
      ],
    },
  },
}); 
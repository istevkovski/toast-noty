import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import libCss from 'vite-plugin-libcss';

export default defineConfig({
  plugins: [react(), dts({exclude: "src/examples"}), libCss()],
  resolve: {
    alias: {
      "components": path.resolve(__dirname, 'src/components'),
      "hooks": path.resolve(__dirname, 'src/hooks'),
      "types": path.resolve(__dirname, 'src/types'),
    }
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ["cjs", "es", 'umd'],
      name: 'toast-noty',
      fileName: 'index',
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['react', 'react-dom'], // Specify external dependencies
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
});

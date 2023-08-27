import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	server: {
		open: '/src/examples/index.html',
	},
	build: {
		outDir: 'src/examples/build',
		rollupOptions: {
			input: {
				main: '/src/examples/index.tsx',
			},
		},
	},
	resolve: {
		alias: {
			components: '/src/components',
			hooks: '/src/hooks',
			types: '/src/types',
		},
	},
});

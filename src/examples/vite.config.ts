import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	base: 'https://github.com/istevkovski/toast-noty',
	plugins: [react()],
	root: 'src/examples/',
	server: {
		open: 'index.html',
	},
	build: {
		outDir: 'build',
		rollupOptions: {
			input: '/index.html',
		},
		assetsDir: '.',
	},
	resolve: {
		alias: {
			components: path.resolve(__dirname, '../components'),
			hooks: path.resolve(__dirname, '../hooks'),
			types: path.resolve(__dirname, '../types'),
		},
	},
});

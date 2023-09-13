import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		outDir: 'build',
	},
	server: {
		open: true,
		host: true,
		port: 5365,
	},
	plugins: [
		react(),
		eslint(),
		svgr({
			include: 'src/assets/**/*.svg',
		}),
		viteTsconfigPaths(),
	],
	resolve: {
		alias: {
			src: path.resolve(__dirname, 'src'),
		},
	},
});

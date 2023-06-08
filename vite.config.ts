import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		host: true,
		port: 5005,
	},
	plugins: [react(), eslint(), viteTsconfigPaths()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, 'src'),
		},
	},
});

import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		host: true,
		port: 5005
	},
	plugins: [react(), eslint()],
	resolve: {
		alias: {
			"src": path.resolve(__dirname, "src")
		},
	},
});

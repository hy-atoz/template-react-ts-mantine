/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
	corePlugins: {
		preflight: false,
	},
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			// Add custom font here
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [require('tailwindcss-touch')()],
};

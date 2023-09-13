module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['@typescript-eslint', 'react', 'prettier'],
	rules: {
		'import/no-absolute-path': 0,
		'import/no-extraneous-dependencies': 0,
		'import/no-unresolved': 0,
		'import/prefer-default-export': 0,
		'no-underscore-dangle': 0,
		'react/forbid-prop-types': 1,
		'react/function-component-definition': 0,
		'react/jsx-props-no-spreading': 1,
		'react/react-in-jsx-scope': 0,
		'react-hooks/exhaustive-deps': 0,
		'react/no-unstable-nested-components': [
			0,
			{
				allowAsProps: true,
			},
		],
		'@typescript-eslint/no-use-before-define': 1,
		'@typescript-eslint/ban-ts-comment': 1,
	},
};

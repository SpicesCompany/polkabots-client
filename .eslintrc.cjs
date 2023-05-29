// eslint-disable-next-line no-undef
module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		'@feature-sliced/eslint-config/rules/public-api',
		'@feature-sliced/eslint-config/rules/layers-slices',
		'eslint:recommended',
		'eslint-config-prettier',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
		'plugin:astro/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		'no-undef': 'error',
		'no-multiple-empty-lines': 'error',
	},
	plugins: ['eslint-plugin-prettier'],
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
		},
		{
			files: '**/*.+(ts|tsx)',
			plugins: ['@typescript-eslint/eslint-plugin'],
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:react-hooks/recommended',
			],
			parser: '@typescript-eslint/parser',
			rules: {
				'@typescript-eslint/no-empty-interface': 'error',
			},
			parserOptions: {
				project: './tsconfig.json',
			},
		},
	],
};

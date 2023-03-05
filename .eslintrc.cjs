module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'only-warn'],
	rules: {
		indent: ['warn', 'tab'],
		'linebreak-style': ['warn', 'windows'],
		quotes: ['warn', 'single'],
		semi: ['warn', 'always'],
		'object-curly-spacing': ['warn', 'always'],
	},
}

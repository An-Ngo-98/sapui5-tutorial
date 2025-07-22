import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
	{
		files: [ '**/*.{js,ts,jsx,tsx}' ],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module'
		},
		plugins: { prettier: prettierPlugin },
		rules: {
		// ✅ ESLint-controlled spacing rules
			'array-bracket-spacing': [
				'error',
				'always' 
			],
			'object-curly-spacing': [
				'error',
				'always' 
			],
			'space-in-parens': [
				'error',
				'always' 
			],
			'space-before-function-paren': [
				'error',
				'always' 
			],
		
			// ✅ Indentation rules
			"indent": [
				"error",
				"tab",
				{ 
					"SwitchCase": 1,
					"VariableDeclarator": 1,
					"outerIIFEBody": 1,
					"FunctionDeclaration": {
						"parameters": 1,
						"body": 1 
					},
					"FunctionExpression": {
						"parameters": 1,
						"body": 1 
					},
					"CallExpression": { "arguments": 1 },
					"ArrayExpression": 1,
					"ObjectExpression": 1
				} 
			],
		
			// ✅ Line break rules for multiple values
			"array-element-newline": [
				"error",
				{
					"multiline": true,
					"minItems": 2 
				} 
			],
			"array-bracket-newline": [
				"error",
				{
					"multiline": true,
					"minItems": 2 
				} 
			],
			"object-property-newline": [
				"error",
				{ "allowMultiplePropertiesPerLine": false } 
			],
			"object-curly-newline": [
				"error",
				{
					"multiline": true,
					"minProperties": 2 
				} 
			],
			"function-paren-newline": [
				"error",
				{ "minItems": 2 } 
			],
			"function-call-argument-newline": [
				"error",
				"always" 
			],

			// 🚫 Disable Prettier lint rule
			'prettier/prettier': 'off'
		}
	},

	// 🚨 Manually disable Prettier-conflicting rules (mimicking eslint-config-prettier)
	{
		rules: {
			'arrow-body-style': 'off',
			'prefer-arrow-callback': 'off'
		}
	}
];

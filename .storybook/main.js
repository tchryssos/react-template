const path = require('path');
const customFunc = require('../webpack.config.js');

module.exports = {
	stories: ['../src/stories/*.stories.tsx'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-links',
		'@storybook/addon-viewport/register',
	],
	typescript: {
		check: false,
		checkOptions: {},
	},
	webpackFinal: async (config) => {
		const custom = customFunc();

		return {
			...config,
			module: {
				...config.module,
				rules: [...custom.module.rules],
			},
			resolve: {
				...config.resolve,
				...custom.resolve,
				alias: {
					components: path.join(__dirname, '../src/components'),
					static: path.join(__dirname, '../src/static'),
					pages: path.join(__dirname, '../src/pages'),
					styles: path.join(__dirname, '../src/styles'),
					constants: path.join(__dirname, '../src/constants'),
					routes: path.join(__dirname, '../src/routes'),
					theme: path.join(__dirname, '../src/theme'),
					logic: path.join(__dirname, '../src/logic'),
				},
			},
		};
	},
};

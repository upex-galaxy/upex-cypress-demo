const {defineConfig} = require('cypress')

module.exports = defineConfig({
	projectId: "atyyam",
	watchForFileChanges: false,
	chromeWebSecurity: false,
	retries: 0,
	reporter: '../node_modules/mochawesome/src/mochawesome.js',
	
	e2e: {
		// We've imported your old cypress plugins here.
		// You may want to clean this up later by importing these.
		setupNodeEvents(on, config) {
			return require('./cypress/plugins/index.js')(on, config)
		},
		specPattern: ['**/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
		baseUrl: 'https://www.saucedemo.com/',
	},
})

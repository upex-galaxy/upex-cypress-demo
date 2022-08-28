const {defineConfig} = require('cypress')

module.exports = defineConfig({
	projectId: 'te925i',
	watchForFileChanges: false,
	chromeWebSecurity: false,
	// reporter: 'mochawesome',
	reporter: 'mocha-junit-reporter',
	reporterOptions: {
		mochaFile: 'reports/test-results.xml',
		toConsole: true,
		outputs: true,
        testCaseSwitchClassnameAndName: true
    },
	retries: 0,
	video: false,
	e2e: {
		// We've imported your old cypress plugins here.
		// You may want to clean this up later by importing these.
		setupNodeEvents(on, config) {
			return require('./cypress/plugins/index.js')(on, config)
		},
		specPattern: ['**/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
		baseUrl: 'https://demoqa.com/',
	},
})

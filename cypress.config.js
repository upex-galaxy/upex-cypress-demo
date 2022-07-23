const {defineConfig} = require('cypress')

module.exports = defineConfig({
	projectId: 'atyyam',
	watchForFileChanges: false,
	chromeWebSecurity: false,
	reporter: 'mochawesome',
	retries: 0,
	videoCompression: false,
	e2e: {
		// We've imported your old cypress plugins here.
		// You may want to clean this up later by importing these.
		setupNodeEvents(on, config) {
			return require('./cypress/plugins/index.js')(on, config)
		},
		setupNodeEvents(on, config) {
			on('after:spec', (spec, results) => {
				if (results && results.video) {
					// Do we have failures for any retry attempts?
					const failures = _.some(results.tests, (test) => {
						return _.some(test.attempts, {state: 'failed'})
					})
					if (!failures) {
						// delete the video if the spec passed and no tests retried
						return del(results.video)
					}
				}
			})
		},
		specPattern: ['**/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
		baseUrl: 'https://www.saucedemo.com/',
	},
})

const {defineConfig} = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const { verifyDownloadTasks } = require('cy-verify-downloads');

module.exports = defineConfig({
	// @Ely: AHORA TENEMOS NUESTRO PROPIO CYPRESS DASHBOARD PARA VER NUESTRAS EJECUCIONES EN LA WEB:
	projectId: '2pw67q',
	// 1280×720 is considered to be the most suitable screen resolution for the desktop website version:
	viewportWidth: 1280,
	viewportHeight: 720,
	// Whether Cypress will watch and restart tests on test file changes:
	watchForFileChanges: false,
	// En Caso de hacer testing en SUT con seguridad web:
	chromeWebSecurity: false,
	// reporter: 'mochawesome',
	reporter: 'mocha-junit-reporter',
	reporterOptions: {
		mochaFile: 'reports/test-results.xml',
		toConsole: true,
		outputs: true,
		testCaseSwitchClassnameAndName: true,
	},
	// Number of times to retry a failed test. If a number is set, tests will retry in both runMode and openMode:
	retries: 0,
	// Whether Cypress will record a video of the test run when running on headless:
	video: true,
	// E2E Testing runner
	e2e: {
		// Enables cross-origin and improved session support, including the cy.origin and cy.session commands:
		experimentalSessionAndOrigin: true,
		// Use Cypress plugins:
		setupNodeEvents(on, config) {
			on('task', {downloadFile})
			on('task', verifyDownloadTasks);
			return require('./cypress/plugins/index.js')(on, config)
		},
		// Glob pattern to determine what test files to load:
		specPattern: ['**/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
		// Url used as prefix for cy.visit() or cy.request() command's url
		// (NO USAR BASEURL SI SE EJECUTA UN INDEX.HTML):
		baseUrl: 'https://demoqa.com/',
	},
})

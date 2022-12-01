/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
@type {Cypress.PluginConfig}
 */

// Record Videos only on failed tests.
module.exports = (on, config) => {
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
}

//For connecting to SQL Server
//Removed

// Modules
module.exports = (on, config) => {
	on('file:preprocessor', selectTestsWithGrep(config)) //Adding Tags to Tests
	on('task', {
		queryDb: (query) => {
			return queryTestDb(query, config)
		},
	}) //For running sql query
	require('cypress-grep/src/plugin')(config)
	return config //For cypress-grep to add tags to test
}

//For Cucumber Integration
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const nodePolyfills = require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
module.exports = async (on, config) => {
	await addCucumberPreprocessorPlugin(on, config) // to allow json to be produced
	// To use esBuild for the bundler when preprocessing
	on(
		'file:preprocessor',
		createBundler({
			plugins: [nodePolyfills(), createEsbuildPlugin(config)],
		})
	)
	return config
}

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import '@shelex/cypress-allure-plugin';
/**
@type {Cypress.PluginConfig}
 */

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = (on, config) => {
	on('after:spec', (spec, results) => {
		return allureWriter(on, config);
	});
};

// Record Videos only on failed tests.
module.exports = (on, config) => {
	on('after:spec', (spec, results) => {
		if (results && results.video) {
			// Do we have failures for any retry attempts?
			const failures = _.some(results.tests, test => {
				return _.some(test.attempts, { state: 'failed' });
			});
			if (!failures) {
				// delete the video if the spec passed and no tests retried
				return del(results.video);
			}
		}
	});
};

//For connecting to SQL Server:
// Modules
module.exports = (on, config) => {
	on('task', {
		queryDb: query => {
			return queryTestDb(query, config);
		},
	}); //For running sql query
};

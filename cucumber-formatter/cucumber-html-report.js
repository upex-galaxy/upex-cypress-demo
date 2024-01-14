import { generate } from 'multiple-cucumber-html-reporter';

generate({
	jsonDir: 'reports',
	reportPath: './reports/cucumber-html-report',
	metadata: {
		browser: {
			name: 'chrome',
			version: '60',
		},
		device: 'Local test machine',
		platform: {
			name: 'ubuntu',
			version: '16.04',
		},
	},
	customData: {
		title: 'UPEX GALAXY: CYPEX Cucumber HTML Reporter',
		data: [
			{ label: 'Project', value: 'CYPRESS-CUCUMBER' },
			{ label: 'Release', value: '12' },
			{ label: 'Cycle', value: 'Release-2023' },
		],
	},
});

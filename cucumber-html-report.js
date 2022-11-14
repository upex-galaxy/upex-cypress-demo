const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'reports',
	reportPath: './reports/cucumber-report.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    }
});
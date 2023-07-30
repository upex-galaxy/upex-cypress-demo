describe('US GX-25130 | TS: ✅ToolsQA | Elements | Upload and Download', () => {
	beforeEach('user must be logged into DemoQA', () => {
		cy.visit('https://demoqa.com/upload-download');
	});

	it('25131|TC1: Validate downloading a file to your computer folder with the “download” button', () => {
		cy.get('#downloadButton').click();
		cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist');
	});

	it('25131|TC2: Validate uploading a file from your computer with the “select file” button and the right message', () => {
		cy.get('#uploadFile').selectFile('cypress/fixtures/images/upexgalaxy.gif');
		cy.get('#uploadFile').click;
		cy.contains('upexgalaxy.gif').should('be.visible');
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

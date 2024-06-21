import { uploadDownloadPage } from '@pages/GX3-3875-uploadDownload.page.js';
describe('GX-3 3875 | ToolsQA | Elements | Upload and Download', () => {
	beforeEach('PRC:',() => {
			cy.visit('https://demoqa.com/upload-download');
		});
	it('1', () => {
		uploadDownloadPage.clickDownloadButton();
	});

	it('2', () => {
		cy.get('#uploadFile').selectFile('cypress/fixtures/images/upexlogo.png')
	});
});

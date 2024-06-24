import { uploadDownloadPage } from '@pages/GX3-3875-uploadDownload.page.js';
describe('GX-3 3875 | ToolsQA | Elements | Upload and Download', () => {
	beforeEach('PRC: El usuario debe estar situado en la pagina de Demo QA',() => {
			cy.visit('https://demoqa.com/upload-download');
			cy.url().should('contain','upload-download')
		});
	it('3876 | TC1: Validar descargar un archivo cuando se hace click sobre el button "Download"', () => {
		uploadDownloadPage.clickDownloadButton();
	});

	it('3876 | TC2: Validar elejir un archivo cuando se hace click sobre el button "Choose file"', () => {
		uploadDownloadPage.selectFileInput();
	});
});

import { upDownloadPage } from '@pages/GX3-4258-UploadDownload.Page';
describe('GX3-4258 | ToolsQA | Elements | Upload and Download', () => {
	beforeEach('PRC: El Usuario debe estar situado en  DemoQA', () => {
		cy.visit('https://demoqa.com/upload-download');
		cy.url().should('contain','upload-download');
	});
	it ('4259 | TC1: Validar que se visualice la descarga de un archivo cuando de presione el boton DOWNLOAD', () => {
		upDownloadPage.clickDownloadButton();
		//cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist');
		cy.readFile('cypress/downloads/sampleFile.jpeg').should('have.length.greaterThan',2000);
	});
	it ('4259 | TC2: Validar que se pueda cargar un archivo cuando se presione el boton elegir archivo', () => {
		upDownloadPage.subirArcxhivo();
		upDownloadPage.get.uploadedFilePath().should('contain.text','upexlogo.png');
	});
});
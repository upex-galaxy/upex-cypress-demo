import { selectPage } from '../../../support/pages/GX3-2803-UploadAndDowload.Page';

describe('', () => {

	beforeEach('', () => {
		cy.visit('/upload-download');
		cy.url().should('contain','upload-download');
	});

	it('TC1 | Validar que se descargue de archivo', () => {
		uploadDownload.get.downloadButton().should('have.text','Download');
		uploadDownload.clickDownload();
		cy.readFile('cypress/downloads/sampleFile.jpeg', 'binary').should((buffer) => {
			expect(buffer.length).to.be.gt(1000);
		});
	});
	it('TC2 | Validar que se suba una imagen', () => {
		uploadDownload.get.uploadButton().should('have.text','Seleccionar archivo');
		uploadDownload.clickUpload();
		uploadDownload.get.uploadPathElement().should('contain','upex');
	});

});
import { selectPage } from '../../../support/pages/GX3-2803-UploadAndDowload.Page';

describe('', () => {

	beforeEach('', () => {
		cy.visit('/upload-download');
		cy.url().should('contain','upload-download');
	});

	it('TC1 | Validar que se descargue de archivo', () => {
		selectPage.get.selectDowload().should('have.text','Download');
		selectPage.BtnSelectDowload();
		cy.readFile('cypress/downloads/sampleFile.jpeg', 'binary').should((buffer) => {
			expect(buffer.length).to.be.gt(1000);
		});
	});
	it('TC2 | Validar que se suba una imagen', () => {
		selectPage.get.uploadFile().should('have.text','Seleccionar archivo');
		selectPage.BtnSelectFile();
		selectPage.get.uploadPathElement().should('contain','upex');
	});

});
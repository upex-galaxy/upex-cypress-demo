import { uploadDownload } from'../../../support/pages/GX3-3290-UploadDownload.Page';
import data from'../../../fixtures/data/Elements/GX3-3290-UploadDownload.json';

describe('ToolsQA | Elements | Upload and Download', () => {
	beforeEach('Precondition',() => {
		cy.visit('/upload-download');
		cy.url().should('contain','upload-download');
	});

	it('TC01: Validate download files successfully',() =>
	{
		uploadDownload.get.downloadButton().should('have.text','Download');
		uploadDownload.clickDownload();

		cy.readFile('cypress/downloads/sampleFile.jpeg', 'binary').should((buffer) => {
			expect(buffer.length).to.be.gt(1000);
		});

	});
	it.only('TC02: Validate upload files successfully',() =>
	{
		//uploadDownload.get.uploadButton().should('have.text','Seleccionar archivo');
		uploadDownload.clickUpload();
		//añadir archivo
		uploadDownload.PathUpload();
		uploadDownload.get.uploadPathElement().should('contain','upex');
	});

});
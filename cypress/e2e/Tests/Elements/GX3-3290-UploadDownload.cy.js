import { uploadDownload } from'../../../support/pages/GX3-3290-UploadDownload.Page';
import data from'../../../fixtures/data/Elements/GX3-3290-UploadDownload.json';

describe('GX3-3290 | ToolsQA | Elements | Upload and Download',() => {
	beforeEach('Precondition',() =>
	{
		cy.visit('/upload-download');
		cy.url().should('contain','upload and download');

	});

	it.only('TC01: Validate download files successfully',() =>
	{
		uploadDownload.get.downloadButton().should('have.text','download');
		uploadDownload.clickDownload();

		// cy.verifyDownload('small-file-10MB.zip');
		//cy.verifyDownload('sampleFile.jpeg');
		cy.verifyDownload('sampleFile.jpeg');
	});
	it.only('TC02: Validate upload files successfully',() =>
	{
		uploadDownload.get.downloadButton().should('have.text','download');
		uploadDownload.clickDownload();

		// cy.verifyDownload('small-file-10MB.zip');
		//cy.verifyDownload('sampleFile.jpeg');
		cy.verifyDownload('sampleFile.jpeg');
	});

});
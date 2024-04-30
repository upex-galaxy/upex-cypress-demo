import {uploadDownload} from'../../../support/pages/GX3-3290-UploadDownload.Page';
import data from'../../../fixtures/data/Elements/GX3-3290-UploadDownload.json;

describe('GX3-3290 | ToolsQA | Elements | Upload and Download',()=>{
	beforeEach('Precondition',() => 
	{
		cy.visit('/upload-download');
		cy.url().should('contain','upload and download');
		
	});
	
	it('TC01: Validate upload files successfully',()=>
	{
uploadDownload.get.downloadButton();
uploadDownload.clickDownload();
	});
});
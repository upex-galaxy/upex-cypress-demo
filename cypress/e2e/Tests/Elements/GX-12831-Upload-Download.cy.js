import { removeLogs } from '@helper/RemoveLogs';
import { uploadAndDownload } from '@pages/UploadAndDownload.Page';

describe('✅ToolsQA | Elements | Upload and Download', () => {
	before('Precondition: be located in upload-download', () => {
		cy.visit('https://demoqa.com/upload-download');
		cy.url().should('contain', 'upload-download');
	});

	it('12832 | TC1: Validate the file is automatically downloaded into the "download" PC folder if the "download" button is selected', () => {
		cy.fixture('data/downloadUpload').then(the => {
			uploadAndDownload.clickDownload();
			cy.readFile(the.relativePathDownloadFile).should('exist');

			//cy.task('deleteFolder', 'cypress/downloads');
		});
	});

	it('12832 | TC2: Validate the PC File Explorer is open in order to select and upload a file if the "choose file" button is selected', () => {
		cy.fixture('data/downloadUpload').then(the => {
			uploadAndDownload.clickUpload();
			cy.wait(1000);
			uploadAndDownload.selectUploadFile(the.relativePathUploadFile);
			uploadAndDownload.get.uploadedLabel().should('exist');
		});
	});

	it('12832 | TC3: Validate no file information is displayed on the screen if select the "Choose File" button and then cancel the selection', () => {
		cy.get('#uploadFile').click();
		cy.get('.modal-content > .modal-header > .close').click();
		cy.get('#uploadedFilePath').should('be.empty');
	});
});

removeLogs();

import { removeLogs } from '@helper/RemoveLogs';
import { uploadDownloadPage } from '@pages/Elements/GX-39424-Upload-Download.Page';

describe('ToolsQA | Elements | Upload and Download', () => {
	beforeEach('Preconditions', () => {
		cy.visit('https://demoqa.com/upload-download');
		cy.url().should('contain', 'upload-download');
	});

	it('TC01: Validate the download of an image into the "download" PC folder', () => {
		uploadDownloadPage.downloadFile();
		expect(uploadDownloadPage.isdownloadButtonClicked()).to.be.true;
	});

	it('TC2: Validate the upload of an image from a local file', () => {
		uploadDownloadPage.selectUploadFile();
		uploadDownloadPage.get.uploadedFilePath().contains('upexgalaxy.gif');
	});
});

removeLogs();

class DownloadAndUpload {
	get = {
		mainTitle: () => cy.get('.main-header'),
		downloadButton: () => cy.get('#downloadButton'),
		uploadButton: () => cy.get('#uploadFile'),
		uploadButtonText: () => cy.get('#uploadedFilePath'),
	};

	downloadButton() {
		this.get.downloadButton().click();
	}

	uploadButton() {
		this.get.uploadButton().selectFile('cypress/fixtures/images/upexlogo.png');
	}
}

export const DaU = new DownloadAndUpload();

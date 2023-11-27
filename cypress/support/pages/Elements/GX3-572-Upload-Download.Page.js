class DownloadUpload {
	get = {
		headerTitle: () => cy.get('.main-header'),
		downloadButton: () => cy.get('#downloadButton'),
		selectFileTitle: () => cy.get('.form-file-label'),
		uploadFile1Button: () => cy.get('#uploadFile'),
		uploadFile2Button: () => cy.get('#uploadFile'),
		uploadFileButtonText: () => cy.get('#uploadedFilePath'),
	};

	downloadButton() {
		this.get.downloadButton().click();
	}

	selectFile1Title() {
		this.get.uploadFile1Button().attachFile('images/upexgalaxy.gif');
	}

	selectFile2Title() {
		this.get.uploadFile2Button().attachFile('images/upexlogo.png');
	}
}

export const DownUp = new DownloadUpload();

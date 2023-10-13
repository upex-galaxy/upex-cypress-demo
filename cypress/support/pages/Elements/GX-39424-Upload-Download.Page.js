class uploadDownloadFile {
	constructor() {
		this.downloadButtonClicked = false;
	}

	get = {
		chooseFileBttn: () => cy.get('#uploadFile'),
		uploadedFilePath: () => cy.get('#uploadedFilePath'),
		downloadBttn: () => cy.get('#downloadButton'),
	};

	downloadFile() {
		this.get.downloadBttn().click();
		this.downloadButtonClicked = true;
	}

	isdownloadButtonClicked() {
		return this.downloadButtonClicked;
	}

	selectUploadFile() {
		this.get.chooseFileBttn().click();
		this.get.chooseFileBttn().selectFile('cypress/fixtures/images/upexgalaxy.gif');
	}
}

export const uploadDownloadPage = new uploadDownloadFile();

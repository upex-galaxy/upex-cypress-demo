class uploadDownloadFile {
	constructor() {
		this.isDownloadButtonClicked = false;
	}

	get = {
		chooseFileBttn: () => cy.get('#uploadFile'),
		uploadedFilePath: () => cy.get('#uploadedFilePath'),
		downloadBttn: () => cy.get('#downloadButton'),
	};

	downloadFile() {
		this.get.downloadBttn().click();
		this.isDownloadButtonClicked = true;
	}
	isdownloadButtonClicked() {
		return this.isDownloadButtonClicked;
	}

	selectUploadFile() {
		this.get.chooseFileBttn().click();
		this.get.chooseFileBttn().selectFile('cypress/fixtures/images/upexgalaxy.gif');
	}
}

export const uploadDownloadPage = new uploadDownloadFile();

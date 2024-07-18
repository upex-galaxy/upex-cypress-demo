class UpDownload {
	get ={
		downloadButton: () => cy.get('#downloadButton'),
		uploadFile:() => cy.get('#uploadFile'),
		uploadedFilePath:() => cy.get('#uploadedFilePath')
	};
	clickDownloadButton() {
		this.get.downloadButton().click();
	}
	subirArcxhivo() {
		this.get.uploadFile().selectFile('cypress/fixtures/images/upexlogo.png');
	}
}

export const upDownloadPage = new UpDownload();
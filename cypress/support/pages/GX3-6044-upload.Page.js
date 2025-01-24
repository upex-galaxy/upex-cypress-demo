class Upload {
	element = {
		download: () => cy.get('#downloadButton'),
		uploadFile: () => cy.get('#uploadFile'),
		uploadedFilePath: () => cy.get('#uploadedFilePath')
	};
	clickDownload() {
		this.element.download().click();
	}
	clickUploadFile() {
		this.element.uploadFile().click();
	}
	subirArcxhivo() {
		this.element.uploadFile().selectFile('cypress/fixtures/images/upexlogo.png');
	}
}

export const uploadPage = new Upload();

class Download {
	get = {
		downloadBtn: () => cy.get('#downloadButton'),
		unploadBtn: () => cy.get('#uploadFile'),
		uploadedFilePath: () => cy.get('#uploadedFilePath'),
	};

	clickDownLoadButton() {
		this.get.downloadBtn().click();
	}

	clickChooseFile() {
		this.get.unploadBtn().click();
	}
}

export const download = new Download();

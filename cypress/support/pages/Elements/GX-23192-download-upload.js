class DownloadAndUpload {
	get = {
		mainTitle: () => cy.get('.main-header'),
		downloadButton: () => cy.get('#downloadButton'),
	};

	downloadButton() {
		this.get.downloadButton().click();
	}
}

export const DaU = new DownloadAndUpload();

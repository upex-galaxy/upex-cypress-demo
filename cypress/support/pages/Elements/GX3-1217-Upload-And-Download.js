class Download{
	get = {
		downloadButton: () => cy.get('.btn.btn-primary')
	};
	downloadButton() {
		this.get.downloadButton().click();
	}
}
class LoadAFile{
	get = {
		selectFile: () => cy.get('#uploadFile')
	};
	loadFile() {
		this.get.selectFile().click();
	}
}
export const Down = new Download();
export const load = new LoadAFile();
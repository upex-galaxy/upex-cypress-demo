/* eslint-disable @typescript-eslint/naming-convention */
class Select {
	get = {
		selectDowload: () => cy.get('#downloadButton'),
		uploadFile: () => cy.get('#uploadFile'),
		confirmFilePath: () => cy.get('#uploadedFilePath')

	};

	BtnSelectDowload() {
		this.get.selectDowload().click();
	}

	BtnSelectFile() {
		this.get.uploadFile().selectFile('cypress/fixtures/images/upexlogo.png');
	};
}

export const selectPage = new Select;
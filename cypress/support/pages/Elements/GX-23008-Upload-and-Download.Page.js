class ElementsToolQA {
	get = {
		ButtonDownload: () => cy.get('#downloadButton'),
		ButtonChooseFile: () => cy.get('input[id ="uploadFile"]'),
		ValidationFile: () => cy.get('#uploadedFilePath'),
	};

	UploadFile(type) {
		this.get.ButtonChooseFile().attachFile(type);
	}
}

export const Elements = new ElementsToolQA();

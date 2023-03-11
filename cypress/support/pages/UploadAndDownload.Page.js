class UploadAndDownload {
	get = {
		downloadButton:()=> cy.get('#downloadButton'),
		uploadButton:()=> cy.get('#uploadFile'),
		uploadedLabel:()=> cy.get('#uploadedFilePath')
	};

	clickDownload(){ 
		this.get.downloadButton().click();
	}
	clickUpload(){ 
		this.get.uploadButton().click();
	}
	selectUploadFile(n){
		this.get.uploadButton().selectFile(n);
	}
}

export const uploadAndDownload = new UploadAndDownload();
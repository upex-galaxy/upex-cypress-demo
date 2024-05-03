class UploadDownload{
get = {
	downloadButton: ()=> cy.get("#downloadButton"),
	uploadButton: ()=> cy.get("#uploadFile"),
	uploadPathElement: ()=> cy.get("#uploadedFilePath")
}
clickDownload(){
	this.get.downloadButton().click();
}
	clickUpload(){
	this.get.uploadButton().click();
	}
	PathUpload(){
	this.get.uploadPathElement().selectFile("../../fixtures/images/upexlogo.png");
	}
}

Export const uploadDownload = new UploadDownload
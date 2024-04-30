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
}

Export const uploadDownload = new UploadDownload
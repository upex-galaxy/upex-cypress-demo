class UploadDownload {
	get = {
		downloadButton: ()=> cy.get ('#downloadButton'),
		uploadFile: ()=> cy.get('#uploadFile')
	}
	
	clickDownloadButton (){
		this.get.downloadButton().click()
	}

	selectFileInput (){
		this.get.uploadFile().selectFile('cypress/fixtures/images/upexlogo.png')
	}
}

//class DownloadFile

export const uploadDownloadPage = new UploadDownload();
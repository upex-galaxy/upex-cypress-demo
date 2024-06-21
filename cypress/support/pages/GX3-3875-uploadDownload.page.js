class UploadDownload {
	get = {
		downloadButton: ()=> cy.get ('#downloadButton')
	}
	
	clickDownloadButton (){
		this.get.downloadButton().click()
	}
}

export const uploadDownloadPage = new UploadDownload();
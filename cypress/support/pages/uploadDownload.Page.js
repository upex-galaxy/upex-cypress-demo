class LoadPage {
    get = {
        buttonDownload: ()=> cy.get('#downloadButton'),
        buttonUploadedFile: ()=> cy.get('#uploadFile'),
        generatedFilePath: ()=> cy.get('#uploadedFilePath')
    }

	getDownloadFileName(){
		return this.get.buttonDownload().invoke('attr', 'download')
	}
    clickDownload(){
        this.get.buttonDownload().click()
    }

    clickUploaded(){
        this.get.buttonUploadedFile().click()
    }


    selectUploadedFile(pathR){
        this.get.buttonUploadedFile().selectFile(pathR);
    }
}
export const loadPage = new LoadPage();
//exportarmos para import
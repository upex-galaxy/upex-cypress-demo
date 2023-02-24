class Elements {
    get = {
        buttonDownload: ()=> cy.get('#downloadButton'),
        buttonUploadedFile: ()=> cy.get('#uploadFile'),
        generatedFilePath: ()=> cy.get('#uploadedFilePath')
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
export const elements = new Elements();
//exportarmos para import
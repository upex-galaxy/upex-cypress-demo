class Elements {
    get = {
        buttonDownload: ()=> cy.get('#downloadButton'),
        inputUploadedFile: ()=> cy.get('#uploadFile')
    }
    clickDownload(){
        this.get.buttonDownload().click()
    }
    clickUploadedFile(){
        this.get.inputUploadedFile().click()
    }
}
export const elements = new Elements();
//exportarmos para import
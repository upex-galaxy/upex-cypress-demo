class Download {
    get = {
        endpoint: () => cy.visit("/upload-download"),
        downloadButton: () => cy.get('#downloadButton'),
        uploadButton: () => cy.get('#uploadFile')
    };

    downloadBttn() {
        this.get.downloadButton().click()
    };
    upload() {
        this.get.uploadButton().click()
    }
}

export const download = new Download;
class download {
    get = {
        endpoint: () => cy.visit("/upload-download"),
        downloadButton: () => cy.get('#downloadButton'),
        uploadButton: () => cy.get('#uploadFile')
    };

    download() {
        this.get.downloadButton().click()
    };
    upload() {
        this.get.uploadButton().click()
    }
}

export const download = new download;
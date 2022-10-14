describe("ToolsQA | Elements | Upload and Download", () =>
{
    let the;

    before("cargar data", () =>
    {
        cy.fixture("DOM/toolsqa/Elements/DownloadAndUpload.Page.json").then((data) =>
            {
                the = data
            })
    })
        
    beforeEach("Precondición: El usuario debe estar situado en la página web", () =>
    {
        cy.getUrl(the.url, the.contain)
    })
    it("US-1019 | TS-1026 | TC1: Validate the download of a file in the PC download folder, when we select the 'download' button", () =>
    {
        cy.get(the.downloadButton).click({ force: true })
            cy.verifyDownload(the.nameFile)    
    })
    it("US-1019 | TS-1026 | TC2: Validate loading a file in the pc explorer when the 'choose file' button is selected", () => 
    {
        cy.get(the.uploadFile)
            .selectFile(the.nameUploadfile)
        cy.get("[download='sampleFile.jpeg']")
            .should("be.visible")
    })
})

// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
    Cypress.log = function (opts, ...other) {
        if (opts.displayName === 'xhr' || opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
            return
        }
        return origLog(opts, ...other)
    }


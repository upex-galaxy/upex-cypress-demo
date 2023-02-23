//importar el Page
import { elements } from '@pages/uploadDownload.Page.js';

const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

describe("ToolsQA | Elements | Upload and Download", ()=>{
    beforeEach("Precondition: Be located in Upload and Download", ()=>{
        cy.visit('https://demoqa.com/upload-download');
        cy.url().should("contain", "download");
    })
    it("9629 | TC1: Validar download in tho download PC folder.", ()=>{
        elements.clickDownload();
        cy.verifyDownload('sampleFile.jpeg');
        //cy.downloadFile('downloads', 'sampleFile.jpeg');

    })
    xit("9629 | TC2: Validar uploaded from PC File Explorer.", ()=>{

    })
})
Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return
	}
	return origLog(opts, ...other)
}
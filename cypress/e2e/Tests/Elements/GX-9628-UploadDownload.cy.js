//importar el Page
import { elements } from '@pages/uploadDownload.Page.js'

describe('ToolsQA | Elements | Upload and Download', () => {
	beforeEach('Precondition: Be located in Upload and Download', () => {
		cy.visit('https://demoqa.com/upload-download')
		cy.url().should('contain', 'download')
	})
	it('9629 | TC1: Validar download in tho download PC folder.', () => {
        //Modificado con POM y Feature(Data para los relative Path):
		cy.fixture('data/downloadUpload').then((the) => {
			elements.clickDownload()
			cy.should('have.attr', 'href')
			//cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist');
			cy.readFile(the.relativePathDownloadFile).should('exist')
		})
	})
	it('9629 | TC2: Validar uploaded from PC File Explorer.', () => {
		//cy.get('#uploadFile').selectFile('cypress/fixtures/images/upexlogo.png');
		//cy.get('#uploadedFilePath').should("contain", "upexlogo");

		//Modificado con POM y Feature(Data para los relative Path):
		cy.fixture('data/downloadUpload').then((the) => {
			elements.clickUploaded()
			elements.selectUploadedFile(the.relativePathUploadFile)
			elements.get.generatedFilePath().should('contain', 'Business-Analyst')
		})
	})
})
Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return
	}
	return origLog(opts, ...other)
}

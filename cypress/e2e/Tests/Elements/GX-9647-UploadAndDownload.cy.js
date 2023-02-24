import { uploadAndDownload } from '@pages/UploadAndDownload.Page.js'

describe('✅ToolsQA | Elements | Upload and Download', () => {
	beforeEach('Precondition: be located in page upload and download', () => {
		cy.visit('https://demoqa.com/upload-download')
		cy.url().should('contain', 'upload-download')
	})

	it('9648 | TC1: Validate download into download pc folder', () => {
		cy.fixture('data/relativePathUpload').then((the) => {
			uploadAndDownload.clickDownload()
			cy.readFile(the.relativePathDownload).should('exist')
		})
	})

	it('9648 | TC2: Validate upload from the PC file explorer', () => {
		cy.fixture('data/relativePathUpload').then((the) => {
			uploadAndDownload.clickUpload()
			uploadAndDownload.selectUploadFile(the.relativePathUpload)
			uploadAndDownload.get.uploadedLabel().should('exist')
		})
	})
})

//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
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

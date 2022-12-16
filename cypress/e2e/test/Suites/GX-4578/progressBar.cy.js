describe('GX-4578 ✅ToolsQA | Widgets | Progress Bar', () => {
	const the = require('../../../../fixtures/DOM/toolsqa/Widgets/progressBar.Page.json')
	beforeEach(() => {
		cy.viewport(1900, 1080)
		cy.visit('/progress-bar')
		cy.url().should('contain', 'progress')
	})
	it('4579 | TC1:  Validar la correcta finalización de la barra de progreso.', () => {
        cy.get(the.progressBar).children().should('contain', '0%')
		cy.get(the.startStopButton).click()
		cy.get(the.resetButton, {timeout: 10000}).should('exist')
        cy.get(the.progressBar).children().should('contain', '100%')
	})
	it('4579 | TC2:  Validar el funcionamiento del botón “Start/Stop”.', () => {
        cy.get(the.progressBar).children().should('contain', '0%')
		cy.get(the.startStopButton).click()
        cy.get(the.progressBar).children().should('contain', '30%',{timeout: 10000})
        cy.get(the.startStopButton).click().should('have.text', "Start")
        cy.get(the.startStopButton).click().should('have.text', "Stop")
        cy.get(the.progressBar).children().should('contain', '70%',{timeout: 10000})
        cy.get(the.startStopButton).click().should('have.text', "Start")
        cy.get(the.startStopButton).click().should('have.text', "Stop")
		cy.get(the.resetButton, {timeout: 10000}).should('exist')
        cy.get(the.progressBar).children().should('contain', '100%')
    })
})

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

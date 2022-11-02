const random = Math.floor(Math.random() * 5000) + 1000

describe('ToolsQA|Widgets|ProgressBar', () => {
	beforeEach('Precondición: Ir a la página de check-box', () => {
		cy.visit('https://demoqa.com/progress-bar')
		cy.url().should('contain', 'progress-bar')
	})

	xit('2365 | TC01: Validate if the progress bar is working correctly', function () {
		cy.get('#startStopButton').click()
		cy.wait(random)
		cy.get('#startStopButton').click()
		cy.get('[aria-valuenow]').invoke('attr', 'aria-valuenow').as('targetValue')
		cy.get('#progressBar').then($textValue => {
			const textValue = $textValue.text()
			cy.log(textValue)
			cy.get('@targetValue').should('match', textValue)	
			//expect('targetValue').to.be.attr(textValue)
		})
	})
	it('2365 | TC02: Validate if the progress bar is working correctly 2', function () {
		cy.get('#startStopButton').click()
		cy.wait(random)
		cy.get('#startStopButton').click()
		cy.get('[aria-valuenow]').invoke('attr', 'aria-valuenow').then(
			targetValue => cy.log(targetValue)
		)
		cy.get('#progressBar').invoke('text').then(
			textValue => cy.log(textValue)
		)
		//cy.get(targetValue).contains(textValue)
	})
})

//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	//returning false here prevents Cypress from
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

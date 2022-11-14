describe('ToolsQA|Widgets|ProgressBar', () => {
	beforeEach('Precondition: Go to progress-bar page', () => {
		cy.visit('https://demoqa.com/progress-bar')
		cy.url().should('contain', 'progress-bar')
	})

	it('2365 | TC01: Validate if the progress bar is working correctly 2', function () {
		const random = Math.floor(Math.random() * 5000) + 1000 //randoms seconds
		cy.get('#startStopButton').click()
		cy.wait(random)
		cy.get('#startStopButton').click()
		cy.get('[aria-valuenow]').invoke('attr', 'aria-valuenow').then((targetValue) => 
			cy.get('#progressBar').invoke('text').then((textValue) =>
				expect(targetValue).eq(textValue.replace("%", ""))
			)
		)
		cy.get('#startStopButton').click()
		cy.wait(7000)
		cy.get('#resetButton').should('exist')
		cy.get('#startStopButton').should('not.exist')

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

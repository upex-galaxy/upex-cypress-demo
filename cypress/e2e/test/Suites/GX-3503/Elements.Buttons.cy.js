describe('GX-3503 ToolsQA | Elements | Buttons', () => {
	beforeEach(() => {
		cy.gotoButtonsPage()
	})

	it('3504 | TC1: Validar Double-Click', () => {
		cy.get('#doubleClickBtn').dblclick()
		cy.get('#doubleClickMessage').invoke('text').should('eq', 'You have done a double click')
	})

	it('3504 | TC2: Validar Right-Click', () => {
		cy.get('#rightClickBtn').rightclick()
		cy.get('#rightClickMessage').invoke('text').should('eq', 'You have done a right click')
	})

	it('3504 | TC3: Dynamic-Click', () => {
		cy.get("button:not([id*='Click'])").last().click()
		cy.get('#dynamicClickMessage').invoke('text').should('eq', 'You have done a dynamic click')
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
})

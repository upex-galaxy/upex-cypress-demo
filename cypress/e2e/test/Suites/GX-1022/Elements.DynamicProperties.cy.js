describe('ToolsQA|Elements|Dynamic Properties', () => {
	beforeEach('Precondición: Ir a la página de Dynamic Properties', () => {
		cy.visit('https://demoqa.com/dynamic-properties')
		cy.get('.main-header').should('have.text', 'Dynamic Properties')
	})

	it('GX-1022 | TS 1023 | TC01:  Validate the element Dynamic ID “This text has random id“ exist in DOM', () => {
		cy.get('.col-12.mt-4.col-md-6>*>*').eq(1).should('exist')
	})

	it('GX-1022 | TS 1023 | TC02:  Validate the element “Will enable 5 seconds“ is enable afñnter 5 sec', () => {
		cy.get('#enableAfter').should('be.disabled')
		cy.wait(1000)
		cy.get('#enableAfter').should('not.be.disabled')
	})

	it('GX-1022 | TS 1023 | TC03:  Validate the element “Visible After 5 Seconds“ is visible after 5 sec', () => {
		cy.get('#visibleAfter').should('not.exist')
		cy.wait(3000)
		cy.get('#visibleAfter').should('exist') //.should("be.exist")
	})
	it('GX-1022 | TS 1023 | TC04:  Validate the element “Color Change“ is changed', () => {
		cy.get('.mt-4.text-danger.btn.btn-primary').should('not.exist')
		cy.wait(3000)
		cy.get('.mt-4.text-danger.btn.btn-primary').should('exist')
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

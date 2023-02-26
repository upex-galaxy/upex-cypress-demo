const {baseUrl} = Cypress.env();

describe('US # : GX-3591', () =>
{
    beforeEach('Precondition: a user is currently in home page', () =>
    {
        cy.visit(`${baseUrl}/buttons`)
    })

    it('US #3591 | 3592 | TC1:  Validate double click is clicked.', () =>
    {
        cy.get('#doubleClickBtn').dblclick()
        cy.get("#doubleClickMessage").should('have.text','You have done a double click')
    })

    it('US #3591 | 3592 | TC2:  Validate right click is clicked.', () =>
    {
        cy.get('#rightClickBtn').rightclick()
        cy.get("#rightClickMessage").should('be.visible').and('have.text',"You have done a right click")
    })

    it('US #3591 | 3592 | TC3:  Validate button is clicked.', () =>
    {
        cy.get(".btn.btn-primary").eq(2).click()
        cy.get("#dynamicClickMessage").should('be.visible').and('have.text',"You have done a dynamic click")
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
	if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return
	}
	return origLog(opts, ...other)
}

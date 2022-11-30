describe('ToolsQA | Interactions | Selectable', () => {
    beforeEach('Debe estar situado en selectable', () => {
        cy.visit('https://demoqa.com/selectable')
        cy.url().should('include', 'selectable')
    })

	it('3314 | TC1: Validate that the Selectable list is displaying and working as expected', () => {
		cy.get('#demo-tab-list').should('have.text', 'List').and('have.attr', 'aria-selected', 'true').and('have.class', 'active')
		cy.get('#demo-tab-grid').should('have.text', 'Grid').and('have.attr', 'aria-selected', 'false').and('not.have.class', 'active')
        
		cy.get('#demo-tabpane-list')
        .children()
        .children()
        .should('be.visible')
        .and('have.length', '4')
        
        cy.get('li[class*="list-group-item"]').eq(0).click()
        .should('have.class', 'active')
        .and('have.css', 'background-color', 'rgb(0, 123, 255)')
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

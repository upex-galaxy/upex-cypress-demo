describe('ToolsQA | Elements | Buttons', () =>{
    beforeEach(()=>{
        cy.visit('https://demoqa.com/buttons')
        cy.url().should("contain", "buttons")
    })


    it('8020 | TC 01: Validar “You have done a double click“', () => {
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible')
        cy.get('#doubleClickMessage').should('have.text', 'You have done a double click')
    })

    it('8020 | TC 02 - Validar “You have done a right click”', () =>{
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('be.visible')
        cy.get('#rightClickMessage').should('have.text', 'You have done a right click')
    })

    it('8020 | TC 03 - Validar “You have done a dynamic click”', () => {
        cy.get('button').last().click()
        cy.get('#dynamicClickMessage').should('be.visible')
        cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click')
    })

    it('8020 | TC 04 - Validar no “Right Click Me“ con Click', () =>{
        cy.get('#rightClickBtn').click()
        cy.get('#rightClickMessage').should('not.exist')
    })
    
    it('8020 | TC 05 - Validar no “Right Click Me“ cuando doble click', () =>{
        cy.get('#rightClickBtn').dblclick()
        cy.get('#rightClickMessage').should('not.exist')
    })

    it('8020 | TC 06: Validar no “You have done a double click“ cuando un Click', () => {
        cy.get('#doubleClickBtn').click()
        cy.get('#doubleClickMessage').should('not.exist')
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
	if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return
	}
	return origLog(opts, ...other)
}
describe ("✅ToolsQA | Elements | Radio Buttons",()=>
{
    beforeEach('Precondition: User must be in RadioButtons page',()=>
        {
            cy.visit('https://demoqa.com/radio-button')
            cy.url().should("contain", "radio-button")
        }) 
    it("US GX-2308 | TS 2309 | TC1:  Validar seleccionar el RD “Yes”",()=>
    {          
        cy.get('#yesRadio').check({force: true})
        .should('be.checked')
        cy.get('.mt-3').contains('You have selected Yes')
    })
    
    it("US GX-2308 | TS 2309 | TC2:  Validar seleccionar el RD “Impressive”",()=>
    {          
        cy.get('#impressiveRadio').check({force: true})
        .should('be.checked')
        cy.get('.mt-3').contains('You have selected Impressive')
    })
    
    it("US GX-2308 | TS 2309 | TC3:  Validar seleccionar el RD “No”",()=>
    {          
        cy.get('#noRadio').should('be.disabled')
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
})
describe ("ToolsQA | Widgets | Tool-Tips", ()=>
{   
    beforeEach("El Usuario debe estar situado en endpoint de Tool Tips", () =>
    {
        cy.visit("https://demoqa.com/tool-tips")        
        cy.url().should("contain","tool-tips")
    })
    it("US-2968 | TS 2969 | TC1:  Validar cuando se pasa el cursor sobre el Button 'hover me to see'  se muestre un tooltip de 'You hovered over the Button'", ()=>
    {
        cy.get("[class='btn btn-success']").realHover()
        cy.get(".tooltip-inner").should("be.visible").should("contain", "You hovered over the Button")
        
    })
    it("US-2968 | TS 2969 | TC2:  Validar cuando se pasa el cursor sobre el Input fields  se muestre un tooltip de 'You hovered over the Contrary'", ()=>
    {
        cy.get("[class=' mr-sm-2 form-control']").realHover()
        cy.get(".tooltip-inner").should("be.visible").should("contain", "You hovered over the text field")
    })
    it("US-2968 | TS 2969 | TC3:  Validar cuando se pasa el cursor sobre el Text link “Contrary” se muestre un tooltip de 'You hovered over the Contrary'", ()=>
    {
        cy.get("[href='javascript:void(0)']").eq(0).realHover()
        cy.get(".tooltip-inner").should("be.visible").should("contain", "You hovered over the Contrary")
    })
    it("US-2968 | TS 2969 | TC4:  Validar cuando se pasa el cursor sobre el Text link “1.10.32” se muestre un tooltip de 'You hovered over the 1.10.32'",()=>
    {
        cy.get("[href='javascript:void(0)']").eq(1).realHover()
        cy.get(".tooltip-inner").should("be.visible").should("contain", "You hovered over the 1.10.32")
    })

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
})
describe("ToolsQA|Elements|Text-Box:Fill-form-and-Submit", () =>
{
    beforeEach("Precondición: Ir a la página de text-box", ()=>
    {
        cy.visit("https://demoqa.com/text-box")
        cy.url().should("contain", "text-box")
    })    
    it("TC01|Validar poder enviar datos con campos válidos", ()=>
    {
        cy.get("#userName")
            .type("Prueba")
        cy.get("#userEmail")
            .type("prueba@gmail.com")
        cy.get("#currentAddress")
            .type("Current Address")
        cy.get("#permanentAddress")
            .type("Permanent address")
        cy.get("#submit")
            .click()
    })
    
    it("TC02|Validar No poder enviar datos con campos null", ()=>
    {
        cy.SubmitTextBoxFormSuccessfull("", "", "", "")

    })

    it("TC03|Validar No poder enviar datos con email inválido", ()=>
    {
        cy.get("#userName")
            .type("Prueba")
        cy.get("#userEmail")
            .type("prueba@gmail")
        cy.get("#currentAddress")
            .type("Current Address")
        cy.get("#permanentAddress")
            .type("Permanent address")
        cy.get("#submit")
            .click()
        cy.get("#userEmail")    
            .should("have.class", "mr-sm-2 field-error form-control")

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
	if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return
	}
	return origLog(opts, ...other)
}
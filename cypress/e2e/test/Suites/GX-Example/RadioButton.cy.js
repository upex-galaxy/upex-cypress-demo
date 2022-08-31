describe("Radio Button", () =>
{
    const US = "US-GX-27"
    const TS = "TS 27"
    beforeEach("Precondición: Ir a la página de Radio Button", () =>
    {
        cy.visit("https://demoqa.com/radio-button")
        cy.url().should("contain","radio-button")
    })
    it(`${US} | ${TS} | TC1: Validar hacer click en el RB “yes”`, () =>
    {
        cy.get("#yesRadio").click({force:true})
            .should("be.checked")
        
        cy.get(".text-success").should("include.text","Yes")
    })

    it(`${US} | ${TS} | TC2: Validar hacer click en el RB “impressive”`, () =>
    {
        cy.get("#impressiveRadio").click({force:true})
            .should("be.checked")
        
        cy.get(".text-success").should("include.text","Impressive")
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
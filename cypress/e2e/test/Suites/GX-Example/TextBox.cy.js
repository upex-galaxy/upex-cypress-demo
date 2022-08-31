describe("Text Box", () =>
{
    beforeEach("Go to the TextBox Page", () =>
    {
        cy.visit("https://demoqa.com/text-box")
    })
    it("TS | TC1: Submit Form correctly", () =>
    {
        cy.fixture("DOM/toolsqa/Elements/TextBox.Page").then((the) =>
        {
            cy.get(the.fullName.input).type(the.fullName.valid)
            cy.get(the.email.input).type(the.email.valid)
            cy.get(the.currentAdr.input).type(the.currentAdr.valid)
            cy.get(the.permanentAdr.input).type(the.permanentAdr.valid)
            cy.get(the.Submit).click()
        })
    })
    it("TS | TC1: Submit Form correctly", () =>
    {
        cy.fixture("DOM/toolsqa/Elements/TextBoxPage").then((the) =>
        {
            cy.get(the.fullName.input).should("be.empty")
            cy.get(the.email.input).should("be.empty")
            cy.get(the.currentAdr.input).should("be.empty")
            cy.get(the.permanentAdr.input).should("be.empty")
            cy.get(the.Submit).click()
        })
    })
    it("TS | TC1: Submit Form correctly", () =>
    {
        cy.fixture("DOM/toolsqa/Elements/TextBoxPage").then((the) =>
        {
            cy.get(the.fullName.input).type(the.fullName.valid)
            cy.get(the.email.input).type(the.email.noName)
            cy.get(the.currentAdr.input).type(the.currentAdr.valid)
            cy.get(the.permanentAdr.input).type(the.permanentAdr.valid)
            cy.get(the.Submit).click()
        })
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
/// <reference types="cypress" />

describe("Tools QA | Elements | Radio Buttons", () =>
{ 
    beforeEach("Precondición: Estar situado en elements/radiobuttons", () =>
    {
        cy.visit("https://demoqa.com/radio-button")
        cy.url().should("contain", "radio-button")
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    it("TC 1: Validar seleccionar el RB cuando la opción esta habilitada (Yes)", () =>
    {
        cy.fixture("DOM/toolsqa/Elements/RadioButtons2.Page").then((the) =>
        {
            cy.get(the.label.yes).should("have.text", "Yes")
            cy.get(the.radio.yes).click({force:true})
            cy.get(the.output).should("have.text", "Yes")
        })
        
    })

    it("TC 2: Validar seleccionar el RB cuando la opción está habilitada (Impressive)", () =>
    {
        cy.fixture("DOM/toolsqa/Elements/RadioButtons2.Page").then((the) => {
            cy.get(the.label.impressive).should("have.text", "Impressive")
            cy.get(the.radio.impressive).click({ force: true })
            cy.get(the.output).should("have.text", "Impressive")
        })
        // cy.get("[for='impressiveRadio']").should("have.text", "Impressive")
        // cy.get("#impressiveRadio").click({force:true})
        // cy.get(".text-success").should("have.text", "Impressive")
    })

    it("TC 3: Validar seleccionar el RB cuando la opción está habilitada (No)", () =>
    {
        cy.fixture("DOM/toolsqa/Elements/RadioButtons2.Page").then((the) => {
            cy.get(the.label.no).should("have.text", "No")
            cy.get(the.radio.no).click({ force: true })
            cy.get(the.output).should("not.exist")
        })
        // cy.get("[for='noRadio']").should("have.text", "No")
        // cy.get("#noRadio").click({force:true})
        // cy.get(".text-success").should("not.exist")
    })
})

// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => 
{
	// returning false here prevents Cypress from
	// failing the test
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) 
{
	if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) 
	{
		return
	}
	return origLog(opts, ...other)
}


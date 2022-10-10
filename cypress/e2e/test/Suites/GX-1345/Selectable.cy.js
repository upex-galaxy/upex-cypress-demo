/// <reference types="cypress" />
require('cypress-xpath')

describe("Tools QA | Interactions | Selectable", () => {
    beforeEach("Precondición: Estar situado en Interactions/selectable", () => {
        cy.visit("https://demoqa.com/selectable")
        cy.url().should("contain", "selectable")
        cy.clearCookies()
        cy.clearLocalStorage()
    })

    it("TC 1: Validar Las pestañas List y Grid deben mostrarse por defecto.'", () => { 
        cy.get("#demo-tab-list").should("be.visible").should("have.text", "List")
        cy.get("#demo-tab-grid").should("be.visible").should("have.text", "Grid")
    })

    it("TC 2: La pestaña 'List' debe abrirse por defecto mostrando la lista de elementos contenida.", () => { 
        cy.get("#demo-tab-list").should("be.visible").should("have.text", "List").click({force:true})
        cy.get('#verticalListContainer > :nth-child(1)').contains("Cras justo odio")
        cy.get('#verticalListContainer > :nth-child(2)').contains("Dapibus ac facilisis in")
        cy.get('#verticalListContainer > :nth-child(3)').contains("Morbi leo risus")
        cy.get('#verticalListContainer > :nth-child(4)').contains("Porta ac consectetur ac")
    })

    it("TC 3: Validar seleccionar y quitar selección de los elementos de la lista.", () => {
        cy.get('#verticalListContainer > :nth-child(1)').click({ force: true })
        cy.wait(1000)
        cy.get('#verticalListContainer > :nth-child(2)').click({ force: true })
        cy.wait(1000)
        cy.get('#verticalListContainer > :nth-child(3)').click({ force: true })
        cy.wait(1000)
        cy.get('#verticalListContainer > :nth-child(4)').click({ force: true })
        cy.wait(1000)
        cy.get('#verticalListContainer > :nth-child(1)').click({ force: true })
        cy.wait(1000)
        cy.get('#verticalListContainer > :nth-child(2)').click({ force: true })
        cy.wait(1000)
        cy.get('#verticalListContainer > :nth-child(3)').click({ force: true })
        cy.wait(1000)
        cy.get('#verticalListContainer > :nth-child(4)').click({ force: true })
    })

    it("TC 4: Validar la pestaña “Grid” debe abrirse y mostrar los elementos contenidos.", () => { 
        cy.get("#demo-tab-grid").should("be.visible").click({force:true})
    })

    it("TC 5: Validar seleccionar y quitar selección de los elementos de la grilla.", () => { 
        cy.xpath("//LI[@class='list-group-item list-group-item-action'][text()='One']").should("have.text", "One").click({force:true})
        cy.xpath("//LI[@class='list-group-item list-group-item-action'][text()='Two']").should("have.text", "Two").click({ force: true })
        cy.xpath("//LI[@class='list-group-item list-group-item-action'][text()='Three']").should("have.text", "Three").click({ force: true })
        cy.xpath("//LI[@class='list-group-item list-group-item-action'][text()='Four']").should("have.text", "Four").click({ force: true })
        cy.xpath("//LI[@class='list-group-item list-group-item-action'][text()='Five']").should("have.text", "Five").click({ force: true })
        cy.xpath("//LI[@class='list-group-item list-group-item-action'][text()='Six']").should("have.text", "Six").click({ force: true })
        cy.xpath("//LI[@class='list-group-item list-group-item-action'][text()='Seven']").should("have.text", "Seven").click({ force: true })
        cy.xpath("//LI[@class='list-group-item list-group-item-action'][text()='Eight']").should("have.text", "Eight").click({ force: true })
        cy.xpath("//LI[@class='list-group-item list-group-item-action'][text()='Nine']").should("have.text", "Nine").click({ force: true })
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
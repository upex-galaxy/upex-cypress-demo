describe("CheckBox", () =>
{
    beforeEach("Go to the CheckBox Page", () =>
    {
        cy.visit("https://demoqa.com/checkbox")
    })
    it.skip("TS | TC1: Validar toggle abrir y cerrar", () =>
    {
        cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the) =>
        {
            // Abrir Toggles:
            cy.get(the.toggle).eq(0).click()
            cy.get(the.toggle).eq(1).click()
            cy.get(the.toggle).eq(2).click()
            cy.get(the.toggle).eq(3).click()
            cy.get(the.toggle).eq(4).click()
            cy.get(the.toggle).eq(5).click()
            //Cerrar Toggles:
            cy.get(the.toggle).eq(3).click()
            cy.get(the.toggle).eq(4).click()
            cy.get(the.toggle).eq(5).click()
            cy.get(the.toggle).eq(2).click()
            cy.get(the.toggle).eq(1).click()
            cy.get(the.toggle).eq(0).click()
        })
    })
    it("TS | TC2: Validar hacer check en cada Label", () =>
    {
        cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the) =>
        {
            // Abrir Toggles:
            cy.get(the.toggle).eq(0).click()
            cy.get(the.toggle).eq(1).click()
            cy.get(the.toggle).eq(2).click()
            cy.get(the.toggle).eq(3).click()
            cy.get(the.toggle).eq(4).click()
            cy.get(the.toggle).eq(5).click()
            //Hacer CHECK:
            for (i = 16; i > -1; i--) {
                if (i != 14 & i != 9 & i != 4 & i != 0)
                    cy.get(the.label.boxName).eq(i).click()
                    cy.get(the.outputMsg).should("be.visible")
            };  
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
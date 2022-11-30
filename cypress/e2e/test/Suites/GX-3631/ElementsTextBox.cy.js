describe("GX-3631 | ToolsQA | Elements | Text Box: Fill form and Submit",() => {

    beforeEach("Enter textbox form", () => {
		cy.visit("https://demoqa.com/text-box")
        cy.url().should("contain","text-box")
        cy.fixture("DOM/toolsqa/TextBox/textBox.page").then((the) => {
            cy.get(the.fullName.input).should("be.visible")
	    })
    })
    it("TC01 | Enter textbox form | Valid |", () =>{
        cy.fixture("DOM/toolsqa/TextBox/textBox.page").then((the) => {
            cy.get(the.fullName.input)
                .type(the.fullName.data.valid)
            cy.get(the.email.input)
                .type(the.email.data.valid)
            cy.get(the.dirActual.input)
                .type(the.dirActual.data.valid)
            cy.get(the.dirPermanente.input)
                .type(the.dirPermanente.data.valid)
            cy.get(the.submitButton).click()
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

    // ** COPIA Y PEGA EN CADA SUITE QUE SE REALICE CON UN SUT DE MUCHO FETCH Y XHR O PROBLEMAS DE EXCEPCIÓN 

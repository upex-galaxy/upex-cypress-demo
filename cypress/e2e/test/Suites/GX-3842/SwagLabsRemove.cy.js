describe("GX-3842 | SwagLabs | PLP PDP | Remover productos del SCP desde el PLP y PDP",() => {

    beforeEach("Visit Saucedemo| Login success in SwagLabsSite | Add to shoppingCart shopping items ", () => {
		cy.visit("https://www.saucedemo.com/")
        cy.url().should("contain","saucedemo")
        cy.fixture("DOM/SwagLabs/removeProductSC.page").then((the) => {
            cy.get(the.input.username).type(the.data.user)
            cy.get(the.input.password).type(the.data.password)
            cy.get(the.loginButton).click()
            cy.fixture("DOM/SwagLabs/removeProductSC.page").then((the) => {
                cy.get(the.addListItem.sauceLabsBackpack).click()
                cy.get(the.addListItem.bikeLight).click()
                cy.get(the.shoppingCart).click()
                cy.get(the.cartBadge).should("contain","2")
            }) 
	    })
    })
    it("TC01 | Remove to shoppingCart items | Validate deleted items",() => {
        cy.fixture("DOM/SwagLabs/removeProductSC.page").then((the) => {
            cy.get(the.removeListItem.sauceLabsBackpack).click()
            cy.get(the.removeListItem.bikeLight).click()
            cy.get(the.shoppingCart).click()
            cy.get(the.cartBadge).should("not.exist")
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
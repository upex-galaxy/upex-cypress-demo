describe("US GX-3016 | TS:3017 | SwagLabs | Menu | Hacer varias Acciones desde un Burger Menu",()=>
{
    beforeEach("El usuario debe estar logeado y situado en el website",()=>
    {
        cy.visit("https://www.saucedemo.com/", {pageLoadTimeout:90000})
        cy.get("[name='user-name']")
            .type("standard_user")
        cy.get("[name='password']")
            .type("secret_sauce")
        cy.get("[name='login-button']")
            .click()
    })
    
    it("US 3016 | TS 3017 | TC1:  Validar que la acción 'All Items' del burger menu lleve al PLP", ()=>
    {
        cy.get("[class='shopping_cart_link']")
            .click()
            .url().should("contain", "cart")

        cy.get("[id='react-burger-menu-btn']")
            .click()
        cy.get("[id='inventory_sidebar_link']")
            .should("contain","All Items")
            .click()
            .url().should("contain", "inventory")
            
    })
    it("US 3016 | TS 3017 | TC2:  Validar que la acción 'About' del burger menu lleve a la página de About (cambia de dominio)", ()=>
    {
        cy.get("[id='react-burger-menu-btn']")
        .click()    
        cy.get("[id='about_sidebar_link']")
        .click({force:true})
        .url().should("contain","sauce")
    })
    it("US 3016 | TS 3017 | TC3:  Validar que la acción 'Logout' del burger menu haga un Logout", ()=>
    {
        cy.get("[id='react-burger-menu-btn']")
        .click()
        cy.get("[id='logout_sidebar_link']")
        .click()
        cy.contains("Login")
    })
    it("US 3016 | TS 3017 | TC4:  Validar que la acción 'Reset App State' del burger menu Vacie el ShoppingCart", ()=>
    {   
        cy.get("[id='add-to-cart-sauce-labs-backpack']")
            .click()
            cy.get("[class='shopping_cart_badge']")
                .should("be.visible")
        cy.get("[id='react-burger-menu-btn']")
            .click()
        cy.get("[id='reset_sidebar_link']")
            .click()
            cy.get("[class='shopping_cart_link']")
                .should("not.contain","[class='shopping_cart_badge']")

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
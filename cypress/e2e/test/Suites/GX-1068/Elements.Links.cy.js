describe("ToolsQA | Elements | Links", () => {
    beforeEach("Precondición: Visitar la página", () => {
        cy.visit("https://demoqa.com/links")
        cy.viewport(1368, 766)
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
    })
    it("US-GX-1068 | TC#1: Validar que el link 'Home#1' redirecciona a su pagina con el nombre respectivo.", () => {
        cy.get("#simpleLink")
            .click()
        cy.url().should('include','demoqa.com')
    })
    it("US-GX-1068 | TC#2: Validar que el link 'Home#2 redirecciona a su pagina con el nombre respectivo.", () => {
        cy.get("#dynamicLink")
            .click()
        cy.url().should('include','demoqa.com')
    })
    it("US-GX-1068 | TC#3: Validar que al seleccionar el link 'Created', aparezca un texto al final de la lista.",() =>{
        cy.get("#created")
            .should('contain.text','Created')
            .click()
        cy.get("#linkResponse")
            .should('contain.text','Link has responded with staus ','201',' and the status text ','Created')
    })
    it("US-GX-1068 | TC#4: Validar que al seleccionar el link 'No Content', aparezca un texto al final de la lista.", () => {
        cy.get("#no-content")
            .should('contain.text', 'No Content')
            .click()
        cy.get("#linkResponse")
            .should('contain.text','Link has responded with staus ','204',' and the status text ','No Content')
    }) 
    it("US-GX-1068 | TC#5: Validar que al seleccionar el link 'Moved', aparezca un texto al final de la lista.", () => {
        cy.get("#moved")
            .should('contain.text', 'Moved')
            .click()
        cy.get('#linkResponse')
            .should('contain.text','Link has responded with staus ','301',' and status text ','Moved Permanently')
    }) 
    
    it("US-GX-1068 | TC#6: Validar que al seleccionar el link 'Bad Request', aparezca un texto al final de la lista.", () => {
        cy.get("#bad-request")
            .should('contain.text', 'Bad Request')
            .click()
        cy.get('#linkResponse')
            .should('contain.text','Link has responded with staus ','400',' and status text ','Bad Request')
    }) 
    it("US-GX-1068 | TC#7: Validar que al seleccionar el link 'Unauthorized', aparezca un texto al final de la lista.", () => {
        cy.get("#unauthorized")
            .should('contain.text', 'Unauthorized')
            .click()
        cy.get('#linkResponse')
            .should('contain.text','Link has responded with staus ','401',' and status text ','Unauthorized')
    }) 
    it("US-GX-1068 | TC#8: Validar que al seleccionar el link 'Forbidden', aparezca un texto al final de la lista.", () => {
        cy.get("#forbidden")
            .should('contain.text', 'Forbidden')
            .click()
        cy.get('#linkResponse')
            .should('contain.text','Link has responded with staus ','403',' and status text ','Forbidden')
    })     
    it("US-GX-1068 | TC#9: Validar que al seleccionar el link 'Not Found', aparezca un texto al final de la lista.", () => {
        cy.get("#invalid-url")
            .should('contain.text', 'Not Found')
            .click()
        cy.get('#linkResponse')
            .should('contain.text','Link has responded with staus ','404',' and status text ','Not Found')
    })     
})
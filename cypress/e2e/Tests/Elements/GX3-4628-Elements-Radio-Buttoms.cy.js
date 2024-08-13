describe ("GX3-4628 | ToolsQA | Elements | Radio Buttons", () => {
    beforeEach("Preconditions", () => {
        cy.visit("https://demoqa.com/radio-button")
    })
    it("TC1: Validar seleccionar el radio button Yes y visualizar el mensaje You have selected yes", () => {
        cy.get('#yesRadio').click({force:true})
        cy.get('.mt-3').should('have.text', "You have selected Yes")
        cy.get('.custom-control-label').eq(0).should('have.text', "Yes")
    })
    it( "TC2: Validar seleccionar el radio button Impressive y visualizar el mensaje You have selected impressive", () => {
        cy.get('#impressiveRadio').click({force:true})
        cy.get('.mt-3').should('have.text', "You have selected Impressive")
        cy.get('.custom-control-label').eq(1).should('have.text', "Impressive")
    })
    it("TC3: Validar que el radio button No se encuetre deshabilitado", () => {
        cy.get('#noRadio')
    })
    })
    
describe("GX3-4717 | ToolsQA | Elements | Buttons", () => {
    beforeEach("Precondicion", () => {
        cy.visit("https://demoqa.com/buttons")
    })
    it("TC1: Validar poder hacer doble click en el botón Double Click Me", () =>{
        cy.get('#doubleClickBtn').should('exist')
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('have.text', 'You have done a double click')    
    })

    it("TC2: Validar poder hacer click derecho en el botón Right Click Me", () =>{
        cy.get('#rightClickBtn').should('exist')
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('have.text', 'You have done a right click')
    })

    it("TC3: Validar poder hacer click en el botón Click Me", () =>{
        cy.get('[type="button"]').should('exist')
        cy.get('[type="button"]').eq(3).click()
        cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click')

    })
})
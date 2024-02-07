describe('GX3-2068:ToolsQA | Elements | Buttons', () => {
    it('GX3-2063 | TC1: Validar que el botón [Doble Click] funcione correctamente y arroje el Trigger correcto', () => {
        cy.visit('https://demoqa.com/buttons')
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible').should(`have.text`, `You have done a double click`)
   
    })
    it('GX3-2063 | TC2: Validar que el botón [Doble Click]  NO funcione al hacer un solo click', () => {
        cy.visit('https://demoqa.com/buttons')
        cy.get('#doubleClickBtn').click()
        cy.get('#doubleClickMessage').should('not.exist')
    })
    it('GX3-2063 | TC3: Validar que el botón [Right Click] funcione correctamente y arroje el Trigger correcto', () => {
        cy.visit('https://demoqa.com/buttons')
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('be.visible').should('have.text', 'You have done a right click')
    })
    it('GX3-2063 | TC4: Validar que el botón [RightClick]  NO funcione al hacer un solo click izquierdo', () => {
        cy.visit('https://demoqa.com/buttons')
        cy.get('#rightClickBtn').click()
        cy.get('#rightClickMessage').should('not.exist')
    })
    it('GX3-2063 | TC5: Validar que el botón [Click] funcione correctamente  y arroje el Trigger correcto', () => {
        cy.visit('https://demoqa.com/buttons')
        cy.get('.btn.btn-primary').eq(2).click()
        cy.get('#dynamicClickMessage').should('be.visible').should('have.text', 'You have done a dynamic click')

    })
    it('GX3-2063 | TC6: Validar que el botón [Click]  NO funcione al hacer un solo click derecho', () => {
        cy.visit('https://demoqa.com/buttons')
        cy.get('.btn.btn-primary').eq(2).rightclick();
		cy.get('#dynamicClickMessage').should('not.exist');
        // cy.get('#dynamicClickMessage').should('not.exist')
        //cy.get('#dynamicClickMessage').should('not.be.visible')
    })
    
    it('GX3-2063 | TC7: Validar que el botón [RightClick]  NO funcione al hacer doble click ', () => {
        cy.visit('https://demoqa.com/buttons')
        cy.get('#rightClickBtn').dblclick()
        cy.get('#rightClickMessage').should('not.exist')
    })
    it('GX3-2063 | TC8: Validar que el botón [DobleClick] NO funcione correctamente y arroje el Trigger correcto', () => {
        cy.visit('https://demoqa.com/buttons')
        cy.get('#doubleClickBtn').rightclick()
        cy.get('#doubleClickMessage').should('not.exist')
   
    })
})
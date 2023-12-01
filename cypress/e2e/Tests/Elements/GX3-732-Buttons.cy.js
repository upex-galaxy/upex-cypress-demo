
import { removeLogs } from "@helper/RemoveLogs";
removeLogs()

describe(' GX3-732 [Automation] ToolsQA | Elements | Buttons', ()=> {
    beforeEach('Usuario debe estar en la página demoqa', ()=> {
        cy.visit('https://demoqa.com/buttons')
        cy.url().should('contain', 'buttons')
    })

    it('GX3-732 | TC1: Validar la funcionalidad del botón al hacer Double Click y que se muestre el siguiente mensaje : “You have done a double click”', () => {
        cy.get('#doubleClickBtn')
        .should('be.visible')
        .dblclick()
        cy.get('#doubleClickMessage').should('have.text', 'You have done a double click')
    });

    it('GX3-732 | TC2: Validar la funcionalidad del botón al hacer Right Click  y que se muestre el siguiente mensaje : “You have done a right click”', () => {
        cy.get('#rightClickBtn')
        .should('be.visible')
        .rightclick()
        cy.get('#rightClickMessage').should('have.text', 'You have done a right click')
    });

    it('GX3-732 | TC3: Validar la funcionalidad del botón al hacer Click y que se muestre el siguiente mensaje: “You have done a dynamic click”', () => {
        cy.get('[type="button"]').last()
        .should('be.visible')
        .click()
        cy.get('#dynamicClickMessage').should('have.text','You have done a dynamic click')
    });
})
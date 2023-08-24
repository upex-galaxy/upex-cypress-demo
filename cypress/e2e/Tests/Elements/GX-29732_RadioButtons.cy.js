import { removeLogs } from "@helper/RemoveLogs";



describe("TS GX-29757: ToolsQA | Elements | Radio Buttons", () => {

    beforeEach("Precondition: Usuario debe estar situado en el website de ToolsQA y en el endpoint de radio buttons", () =>
    {
        cy.visit("https://demoqa.com/radio-button")
        cy.url().should("contain", "radio-button")
    })

    it('29732 | TC1: Validar poder seleccionar radio buttons “yes” mostrando elemento con el mensaje correspondiente.', () =>
    {
        cy.get('[name = "like"]').eq(0).check({ force: true })
        cy.get('.mt-3').should("be.visible")
            .should("contain.text", "You have selected ")
        cy.get('.text-success').should("be.visible")
            .should("contain.text", "Yes")
    });

    it('29732 | TC2: Validar poder seleccionar radio buttons “impressive” mostrando elemento con el mensaje correspondiente.', () =>
    {
        cy.get('[name = "like"]').eq(1).check({ force: true })
        cy.get('.mt-3').should("be.visible")
            .should("contain.text", "You have selected ")
        cy.get('.text-success').should("be.visible")
            .should("contain.text", "Impressive")
            
    });

    it('29732 | TC3: Validar radio buttons “No” se encuentre deshabilitado y no se pueda seleccionar .', () =>
    {
        cy.get('[name = "like"]').eq(2).should('be.disabled')
        cy.get('.text-success').should("not.exist")
        
    
           
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
		// returning false here prevents Cypress from
		// failing the test
		return false;
	});
});

removeLogs();

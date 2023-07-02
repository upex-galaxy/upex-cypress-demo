import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('US GX-22811 | ToolsQA | Elements | Dynamic Properties', () => {
    beforeEach('PRC: Usuario debe ubicarse en la Dynamic Properties Page', ()=> {
        cy.visit('https://demoqa.com/dynamic-properties');
        cy.url().should('contain', 'dynamic-properties');
    });
    
    it('22812 | TC01: Validar poder obtener elemento “This text has random Id“', ()=> {
        cy.get('p').should('contain', 'This text has random Id');
    });
    
    it('22812 | TC02: Validar cambiar estado de elementos al pasar cinco segundos', ()=> {
        cy.clock().tick(4999);
        cy.get('button#enableAfter').should('be.disabled');
        cy.get('button#colorChange').should('not.have.css', 'color', 'rgb(220, 53, 69)');
        cy.get('button#visibleAfter').should('not.exist');

        cy.tick(5000);
        cy.get('button#enableAfter').should('be.enabled');
        cy.get('button#colorChange').should('have.css', 'color', 'rgb(220, 53, 69)');
        cy.get('button#visibleAfter').should('be.visible');
    });
});
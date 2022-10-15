export class SelectablePage {
    inspectionpage() {
        cy.get('#demo-tab-grid').click().should('be.visible');
        cy.get('#demo-tab-list').should('be.visible');
        cy.get('#demo-tab-list').click().should('be.visible');
        cy.get('#demo-tab-grid').should('be.visible');
    };
    visitPage() {
        cy.visit('');
        cy.contains('Interactions').click();
        cy.contains('Selectable').click();
    }
};
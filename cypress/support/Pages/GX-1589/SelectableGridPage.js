export class SelectableGridPage {
    numbersClicks() {
        cy.get('#demo-tab-grid').click();
        cy.get('#row1 > :nth-child(1)').should('have.text', 'One').click({ force: true });
        cy.get('#row1 > :nth-child(2)').should('have.text', 'Two').click({ force: true });
        cy.get('#row1 > :nth-child(3)').should('have.text', 'Three').click({ force: true });
        cy.get('#row2 > :nth-child(1)').should('have.text', 'Four').click({ force: true });
        cy.get('#row2 > :nth-child(2)').should('have.text', 'Five').click({ force: true });
        cy.get('#row2 > :nth-child(3)').should('have.text', 'Six').click({ force: true });
        cy.get('#row3 > :nth-child(1)').should('have.text', 'Seven').click({ force: true });
        cy.get('#row3 > :nth-child(2)').should('have.text', 'Eight').click({ force: true });
        cy.get('#row3 > :nth-child(3)').should('have.text', 'Nine').click({ force: true });
        cy.get('#row1 > :nth-child(3)').should('have.text', 'Three').click({ force: true });
        cy.get('#row1 > :nth-child(2)').should('have.text', 'Two').click({ force: true });
        cy.get('#row1 > :nth-child(1)').should('have.text', 'One').click({ force: true });
        cy.get('#row2 > :nth-child(3)').should('have.text', 'Six').click({ force: true });
        cy.get('#row2 > :nth-child(2)').should('have.text', 'Five').click({ force: true });
        cy.get('#row2 > :nth-child(1)').should('have.text', 'Four').click({ force: true });
        cy.get('#row3 > :nth-child(3)').should('have.text', 'Nine').click({ force: true });
        cy.get('#row3 > :nth-child(2)').should('have.text', 'Eight').click({ force: true });
        cy.get('#row3 > :nth-child(1)').should('have.text', 'Seven').click({ force: true });
    };
};
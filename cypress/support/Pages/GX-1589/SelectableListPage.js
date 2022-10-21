export class SelectableListPage{
    listClicks(){
        cy.get('#verticalListContainer > :nth-child(4)').should('have.text', 'Porta ac consectetur ac')
        .click({ force: true });
        cy.get('#verticalListContainer > :nth-child(1)').should('have.text', 'Cras justo odio')
        .click({ force: true });
        cy.get('#verticalListContainer > :nth-child(3)').should('have.text', 'Morbi leo risus')
        .click({ force: true });
        cy.get('#verticalListContainer > :nth-child(2)').should('have.text', 'Dapibus ac facilisis in')
        .click({ force: true });
        cy.get('#verticalListContainer > :nth-child(4)').should('have.text', 'Porta ac consectetur ac')
        .click({ force: true });
        cy.get('#verticalListContainer > :nth-child(3)').should('have.text', 'Morbi leo risus')
        .click({ force: true });
        cy.get('#verticalListContainer > :nth-child(1)').should('have.text', 'Cras justo odio')
        .click({ force: true });
        cy.get('#verticalListContainer > :nth-child(2)').should('have.text', 'Dapibus ac facilisis in')
        .click({ force: true });
    };
};
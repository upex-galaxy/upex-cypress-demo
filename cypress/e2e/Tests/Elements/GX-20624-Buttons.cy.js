describe('GX-6424 | TC1: Validate that button “double click me', () => {
	beforeEach('Precondition: Having access to the SUT ', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.viewport(1920, 1980);
    });
    it('GX-6424 | TC1: Validate that button “double click me” displays message.', () =>
    {
        cy.get('[href="/commands/querying"]')
            .click('#doubleClickBtn'); // double click??   
        .should('have.attr', 'type') // ddd
	})
})

describe('GX3-6217-radiobutton', () => {
	beforeEach('PRC:User need to be on radio button page', () => {
		cy.visit('https://demoqa.com/radio-button');
		cy.url().should('include', 'radio-button');
	});
	it('TC1:Validar YES', () => {
		cy.get('[for="yesRadio"]').click();
		cy.get('.text-success').should('have.text', 'Yes');
	});

	it('TC2:Validar IMPRESSIVE', () => {
		cy.get('[for="impressiveRadio"]').click();
		cy.get('.text-success').should('have.text', 'Impressive');
	});
	it('TC3:Validar NO', () => {
		cy.get('#noRadio').should('be.disabled');
	});
});

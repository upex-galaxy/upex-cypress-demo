describe('test', () => {
	beforeEach('precondiciones', () => {
		cy.visit('/dynamic-properties');
		cy.url().should('contain', 'dynamic-properties');
	});
	it('test probando git', () => {
		cy.get('#enableAfter').should('be.disabled');
		cy.wait(5000);
		cy.get('#enableAfter').should('be.enabled');
	});
});

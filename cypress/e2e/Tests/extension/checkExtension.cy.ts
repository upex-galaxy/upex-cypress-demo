// TEST SUITE:
describe('UX-345 | Check Extension', () => {
	// TEST CASE:
	it('UX-6785 | TC1: Validar que la extension adBlock haga bien', () => {
		cy.visit('https://demoqa.com/radio-button'); // baseUrl
		cy.get('input[id="yesRadio"]').check({ force: true });
		cy.get('.text-success').should('have.text', 'Yes');
		cy.reload();
		cy.get('input[id="yesRadio"]').check({ force: true });
		cy.get('.text-success').should('have.text', 'Yes');
	});
});

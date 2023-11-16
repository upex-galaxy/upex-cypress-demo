describe('Buttons', () => {
	before('', () => {
		cy.visit('https://demoqa.com/buttons');
	});
	it('double click button', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('exist').contains('You have done a double click');
	});
	it('Right click on button', () => {
		cy.get('.row').find('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('contain', 'You have done a right click');
	});
	it.only('single click on button', () => {
		cy.get('button[class="btn btn-primary"]').click({ multiple: true });
	});
});

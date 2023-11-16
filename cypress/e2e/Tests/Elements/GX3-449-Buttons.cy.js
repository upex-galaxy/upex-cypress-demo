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
	it('single click on button', () => {
		cy.get('button[class="btn btn-primary"]').eq(2).contains('Click Me').click();
		cy.get('#dynamicClickMessage').contains('You have done a dynamic click');
	});
});

describe('Buttons', () => {
	beforeEach('', () => {
		cy.visit('https://demoqa.com/buttons');
	});
	it('451 | TC1: Validate functionality of Double Click Me button', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('exist').contains('You have done a double click');
	});
	it('451 | TC2 : Validate functionality of Right Click Me button', () => {
		cy.get('.row').find('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('contain', 'You have done a right click');
	});
	it('451 | TC3: Validate functionality of Click me button', () => {
		cy.get('button[class="btn btn-primary"]').eq(2).contains('Click Me').click();
		cy.get('#dynamicClickMessage').contains('You have done a dynamic click');
	});
});

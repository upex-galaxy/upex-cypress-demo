describe('GX3-116 - ToolsQA | Elements | Buttons', () => {
	beforeEach(() => {
		cy.visit('/buttons');
	});

	it('TC1 should be triggered when using Double click', () => {
		const expectedMessage = 'You have done a double click';
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text', expectedMessage);
	});

	it('TC2 should be triggered when using Right click', () => {
		const expectedMessage = 'You have done a right click';
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', expectedMessage);
	});

	it('TC3 should be triggered when using Dynamic click', () => {
		const expectedMessage = 'You have done a dynamic click';
		cy.get('button.btn').eq(2).click();
		cy.get('#dynamicClickMessage').should('have.text', expectedMessage);
	});
});

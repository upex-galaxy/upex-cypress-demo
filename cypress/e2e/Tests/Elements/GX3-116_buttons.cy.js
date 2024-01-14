describe('GX3-116 - ToolsQA | Elements | Buttons', () => {
	beforeEach(() => {
		cy.visit('/buttons');
	});

	it('TC1: Should be triggered when using Double Click', () => {
		const expectedMessage = 'You have done a double click';
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text', expectedMessage);
	});

	it('TC2: Should be triggered when using Right Click', () => {
		const expectedMessage = 'You have done a right click';
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', expectedMessage);
	});

	it('TC3: Should be triggered when using simple Click', () => {
		const expectedMessage = 'You have done a dynamic click';
		cy.get('button.btn').eq(2).click();
		cy.get('#dynamicClickMessage').should('have.text', expectedMessage);
	});
});

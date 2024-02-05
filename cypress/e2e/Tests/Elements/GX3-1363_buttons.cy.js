describe('GX3-1363 - ToolsQA | Elements | Buttons', () => {
	beforeEach(() => {
		cy.visit('/buttons');
	});

	it('TC1: Button should be triggered when using Double Click', () => {
		const clickMessage = 'You have done a double click';
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text', clickMessage);
	});

	it('TC2: Button Should be triggered when using Right Click', () => {
		const rightClickMessage = 'You have done a right click';
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', rightClickMessage);
	});

	it('TC3: Button Should be triggered when using simple Click', () => {
		const dynamicClickMessage = 'You have done a dynamic click';
		cy.get('button.btn').eq(2).click();
		cy.get('#dynamicClickMessage').should('have.text', dynamicClickMessage);
	});
});

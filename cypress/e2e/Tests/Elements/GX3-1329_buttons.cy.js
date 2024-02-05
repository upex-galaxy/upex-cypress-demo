describe('GX3-1329: ToolsQA | Elements | Buttons', () => {
	beforeEach('precondition: Visit https://demoqa.com/buttons', () => {
		cy.visit('/buttons');
	});

	it('TC1: Should be triggered when using Double Click', () => {
		const MessageButton = 'You have done a double click';
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text', MessageButton);
	});

	it('TC2: Should be triggered when using Right Click', () => {
		const MessageButton = 'You have done a right click';
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', MessageButton);
	});

	it('TC3: Should be triggered when using Click', () => {
		const MessageButton = 'You have done a dynamic click';
		cy.get('button.btn').eq(2).click();
		cy.get('#dynamicClickMessage').should('have.text', MessageButton);
	});
});

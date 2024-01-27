describe('GX3-1024: ToolsQA | Elements | Buttons', () => {
	beforeEach(() => {
		cy.visit('/buttons');
	});

	it('TC1: Should be triggered the following message -You have done a double click- after clicking on the Double Click Me button', () => {
		const messageDisplayed = 'You have done a double click';
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text', messageDisplayed);
	});

	it('TC2: Should be triggered the following message -You have done a right click- after clicking on the Right Click Me button', () => {
		const messageDisplayed = 'You have done a right click';
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', messageDisplayed);
	});

	it('TC3: Should be triggered the following message -You have done a dynamic click- after clicking on the Click Me button', () => {
		const messageDisplayed = 'You have done a dynamic click';
		cy.get('button.btn').eq(2).click();
		cy.get('#dynamicClickMessage').should('have.text', messageDisplayed);
	});
});

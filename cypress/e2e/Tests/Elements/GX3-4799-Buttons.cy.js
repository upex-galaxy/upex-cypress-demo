describe('GX3-4799 | ToolsQA | Elements | Buttons', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/buttons');
	});

	it('4800 | TC01:  Validate the activation of the "Double Click Me" button and display a message to confirm', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
	});

	it('4800 | TC02:  Validate the activation of the "Right Click Me" button and display a message to confirm', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
	});
	it('4800 | TC03:  Validate the activation of the "Click Me" button and display a message to confirm', () => {
		cy.get('div.mt-4:nth-child(4) > button').click();
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
	});
});

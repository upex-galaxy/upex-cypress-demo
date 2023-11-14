describe('TS-397 : ToolsQA | Elements | Buttons', () => {
	beforeEach('Precondition: User must be situated on demoQA web page - end point button', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});
	it('TC1: Verify ‘DoubleClick’ button can be clicked', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('exist');
		cy.get('#doubleClickMessage').should('contain.text', 'You have done a double click');
	});
	//	it('TC2: Verify ‘RightClick’ button can be clicked', () => {});
	//	it('TC3: Verify ‘Click’ button can be clicked', () => {});
});

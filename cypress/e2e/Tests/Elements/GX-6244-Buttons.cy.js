describe('GX3-6244-Buttons', () => {
	beforeEach('PRC:User need to be on Buttons page', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('include', 'buttons');
	});
	it('GX3-6246 | TC1: Validate double-click button and triggers correct message', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
	});
	it('GX3-6246 | TC2: Validate right-click button and triggers correct message ', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
	});
	it('GX3-6246 | TC3: Validate single-click button and triggers correct message', () => {
		cy.get('button.btn-primary').eq(2).click();
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
	});
});

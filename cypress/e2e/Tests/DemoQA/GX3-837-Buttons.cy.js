describe('US GX3-837 | ToolsQA | Elements | Buttons', () => {
	beforeEach('PRC: User must be at button section page', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');

		Cypress.on('uncaught:exception', () => {
			// returning false here prevents Cypress from
			// failing the test
			return false;
		});
	});
	it('US GX3-837 | TC1: Validate Double Click button functionality', () => {
		cy.get('#doubleClickBtn').dblclick();
	});
	it('US GX3-837 | TC2: Validate Double Click button functionality when clicked just one time', () => {
		cy.get('#doubleClickBtn').click();
	});
	it('US GX3-837 | TC3: Validate Right Click button functionality ', () => {
		cy.get('#rightClickBtn').click();
	});
	it('US GX3-837 | TC4: Validate Click Me button functionality ', () => {
		cy.get('.btn.btn-primary').eq(2).click();
	});
});

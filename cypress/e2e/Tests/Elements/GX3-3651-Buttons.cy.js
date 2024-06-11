describe('GX3-3651|ToolsQA | Elements | Buttons', () => {
	beforeEach('PRC: Estar situado en la pagina de Demo QA buttons', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('include', 'buttons');
	});

	it('3652 | TC1: Validar hacer click en el button “Double click”', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('p#doubleClickMessage').should('have.text', 'You have done a double click');
	});
	
});

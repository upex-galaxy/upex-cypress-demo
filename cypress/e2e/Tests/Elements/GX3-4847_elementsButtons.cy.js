describe('GX3-4847 ToolsQA | Elements | Buttons', () => {
	beforeEach('PRC:El usuario debe estar situado en la pagina de Demo QA', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('include', 'buttons');
		cy.get('h1.text-center').should('have.text', 'Buttons');
	});
	it('TC1:Validar hacer doble click en Button Double click Me ', () => {
		cy.get('#doubleClickBtn').dblclick();
		//cy.get('span.text-success').should('have.text', 'Yes');
	});
});
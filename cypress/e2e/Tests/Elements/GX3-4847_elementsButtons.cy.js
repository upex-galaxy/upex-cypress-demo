describe('GX3-4847 ToolsQA | Elements | Buttons', () => {
	beforeEach('PRC:El usuario debe estar situado en la pagina de Demo QA', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('include', 'buttons');
		cy.get('h1.text-center').should('have.text', 'Buttons');
	});
	it('TC1:Validar hacer doble click en Button Double Click Me ', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
	});
	it('TC2:Validar hacer click derecho en Button Right Click Me ', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
	});
	it('TC3:Validar hacer click en Button Click Me ', () => {
		cy.get('.btn.btn-primary').eq(2).click();
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
	});
});
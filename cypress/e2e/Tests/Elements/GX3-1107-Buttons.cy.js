describe('US GX3-1107 | ToolsQA | Elements | Buttons', () => {
	beforeEach('PRC: User must be at button section page', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});
	it('GX3-1108 | TC1: Validar funcionalidad del botón “Doble Click me”', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
	});
	it('GX3-1108  | TC2:  Validar funcionalidad del botón “Doble Click me” si solo se le da un “Click””', () => {
		cy.get('#doubleClickBtn').click();
		cy.get('#doubleClickMessage').should('not.exist');
	});
	it('GX3-1108  | TC3: Validar funcionalidad del botón “Right Click me”  ', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
	});
	it('GX3-1108  | TC4:  Validar funcionalidad del botón “Right Click me” si solo se le da un “Click” ', () => {
		cy.get('#rightClickBtn').click();
		cy.get('#rightClickMessage').should('not.exist');
	});
	it('GX3-1108  | TC5: Validar Funcionalidad del botón “Click me”', () => {
		cy.get('.btn.btn-primary').eq(2).click();
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
	});
});

describe('US GX3-1983 | ToolsQA | Elements | Buttons', () => {
	beforeEach('PCR: El usuario debe estar situado en la pagina en la seccion BUTTONS ', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});
	it('1983 | TC1: Validar hacer doble click en el botón “DOUBLE CLICK ME“.', function () {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click').and('be.visible');
	});
	it('1983 | TC2: Validar hacer click derecho en botón “RIGHT CLICK ME“.', function () {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click').and('be.visible');
	});
	it('1983 | TC3: Validar hacer click en el botón “CLICK ME“.', () => {
		cy.get('.btn.btn-primary').eq(2).click();
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click').and('be.visible');
	});
	it('1983 | TC4: Validar al hacer click izquierdo en botón derecho que NO realice ninguna acción.', () => {
		cy.get('#rightClickBtn').click();
		cy.get('#rightClickMessage').should('not.exist');
	});
	it('1983 | TC5: Validar al hacer click una vez en doble click y que NO realice ninguna acción.', () => {
		cy.get('#doubleClickBtn').click();
		cy.get('#doubleClickMessage').should('not.exist');
	});
});

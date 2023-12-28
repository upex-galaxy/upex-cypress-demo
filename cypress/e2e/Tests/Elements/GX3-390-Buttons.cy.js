describe('ToolsQA | Elements | Buttons', () => {
	beforeEach('El usuario debe estar situado en el endpoint buttons', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});
	it('392 | TC1: Validar hacer doble click en el botón de doble click', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('be.visible');
	});
	it('392 | TC2: Validar hacer click derecho en el botón de click derecho', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('be.visible');
	});
	it('392 | TC3: Validar hacer click en el botón de click', () => {
		cy.get('.mt-4:nth-child(3) > button').click();
		cy.get('#dynamicClickMessage').should('be.visible');
	});
});

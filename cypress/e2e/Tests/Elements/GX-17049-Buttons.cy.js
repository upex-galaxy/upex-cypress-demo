describe('✅ToolsQA | Elements | Buttons', () => {
	beforeEach('Precondición: Usuario debe estar situado Buttons Page', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});
	it('TC01 - Validar mensaje “You have done a double click“ al hacer dos click en “Double Click Me“ button', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.contains('You have done a double click').should('be.visible');
	});
	it('TC02 - Validar mensaje “You have done a right click“ al hacer click derecho en “Right Click Me“ button', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.contains('You have done a right click').should('be.visible');
	});
	it('TC03 - Validar mensaje “You have done a dynamic click“ al hacer click en “Click Me“ button', () => {
		cy.get('[type="button"]').eq(3).click();
		cy.contains('You have done a dynamic click').should('be.visible');
	});
});

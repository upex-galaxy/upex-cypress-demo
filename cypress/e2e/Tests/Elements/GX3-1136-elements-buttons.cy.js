describe('ToolsQA | Elements | Buttons', () => {
	beforeEach('Precondición: usuario debe situarse en button page', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});
	it('GX3-1136 | TC1: Validar mostrar mensaje al hacer doble clic en el botón "Double Click Me"', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('be.visible');
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
	});
	it('GX3-1136 | TC2: Validar mostrar mensaje al hacer clic derecho en el botón "Right Click Me"', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('be.visible');
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
	});
	it('GX3-1136 | TC3: Validar mostrar mensaje al hacer clic en el botón "Click Me"', () => {
		cy.get('.btn.btn-primary').eq(2).click();
		cy.get('.btn.btn-primary').eq(2).should('contain', 'Click Me');
		cy.get('#dynamicClickMessage').should('be.visible');
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
	});
	it('GX3-1136 | TC4: Validar NO mostrar mensaje al hacer clic en el botón "Double Click Me"', () => {
		cy.get('#doubleClickBtn').click();
		cy.get('#doubleClickMessage').should('not.exist');
	});
	it('GX3-1136 | TC5: Validar NO mostrar mensaje al hacer clic en el botón "Right Click Me"', () => {
		cy.get('#rightClickBtn').click();
		cy.get('#rightClickMessage').should('not.exist');
	});
	it('GX3-1136 | TC6: TC6: Validar NO mostrar mensaje al hacer clic derecho en el botón "Click Me"', () => {
		cy.get('.btn.btn-primary').eq(2).rightclick();
		cy.get('#dynamicClickMessage').should('not.exist');
	});
});

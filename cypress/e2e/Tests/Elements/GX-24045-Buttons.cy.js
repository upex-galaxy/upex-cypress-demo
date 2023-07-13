describe('✅HerramientasQA | Elementos | Botones', () => {
	beforeEach('precondición', () => {
		cy.visit('https://demoqa.com/buttons');
	});

	it('24046 | TC1: Validar funcionamiento botón doble click', () => {
		cy.get('[id="doubleClickBtn"]').dblclick();
		cy.get('[id="doubleClickMessage"]').should('contain', 'You have done a double click');
	});

	it('24046 | TC2: Validar funcionamiento botón click derecho', () => {
		cy.get('[id="rightClickBtn"]').rightclick();
		cy.get('[id="rightClickMessage"]').should('contain', 'You have done a right click');
	});

	it('24046 | TC3: Validar funcionamiento botón click', () => {
		cy.get('[id="q6as7"]').click();
		cy.get('[id="dynamicClickMessage"]').should('contain', 'You have done a dynamic click');
	});
});

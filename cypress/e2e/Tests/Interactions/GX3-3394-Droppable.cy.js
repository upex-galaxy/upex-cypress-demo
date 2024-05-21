describe('2318 | Interactions | Dragabble', () => {
	// eslint-disable-next-line chai-friendly/no-unused-expressions
	beforeEach(() => {
		cy.visit('https://demoqa.com/droppable');
		cy.url().should('include', 'droppable');
	}),
	it('3395 | TC01:Validar movimiento exitoso de "Arrástrame" dentro de "Soltar aquí" ', () => {
		cy.get('#draggable').click();

	});
} );
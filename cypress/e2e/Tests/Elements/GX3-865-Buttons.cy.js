describe('865 | demoQA | Buttons', () => {
	beforeEach('visit page buttons', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});

	it('866 | TC1: Validar boton doble click', () => {
		cy.get('#doubleClickBtn').should('be.visible').dblclick();
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
	});

	it('866 | TC2: Validar boton click derecho', () => {
		cy.get('#rightClickBtn').should('be.visible').rightclick();
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
		
	});

	it('866 | TC3: Validar boton click izquierdo', () => {
		cy.get('#86yAK').should('be.visible').click();
		cy.get('#rightClickMessage').should('have.text', 'You have done a dynamic click');
	});
});

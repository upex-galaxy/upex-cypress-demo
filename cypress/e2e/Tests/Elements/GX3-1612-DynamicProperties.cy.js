describe('GX3-1612 | ToolsQA | Elements | Dynamic Properties', () => {
	beforeEach(() => {
		cy.visit('/dynamic-properties');
	});

	it('GX3-1612 | TC1: Validate get element “This text has random Id“ ', () => {
		const expectedMessage = 'This text has random Id';
		cy.get('div p').should('contain', expectedMessage);
	});

	it('GX3-1612 | TC2: Validate enabled element after 5 seconds', () => {
		cy.get('#enableAfter').should('be.disabled');
		cy.wait(5000);
		cy.get('#enableAfter').should('be.enabled');
	});

	it('GX3-1612 | TC3: Validate text "Color Change"', () => {
		cy.get('#colorChange').should('have.class', 'btn-primary');
		cy.wait(5000);
		cy.get('#colorChange').should('have.class', 'text-danger');
	});
	it('GX3-1612 | TC4: Validate element visibility after 5 seconds"', () => {
		cy.get('#visibleAfter').should('not.exist');
		cy.wait(5000);
		cy.get('#visibleAfter').should('be.visible');
	});
});

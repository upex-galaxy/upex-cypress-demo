describe('GX3-2738 | TS: ToolsQA | Elements | CheckBox', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contains', 'checkbox');
	});

	it.only('GX3-2738 | TC1: Validar expandir todas las casillas de verificación ',() => {
		cy.get('svg.rct-icon-expand-all').as('expandAllIcon');		
		cy.get('@expandAllIcon').click();
		cy.get('ol').should('have.length', 7);
	});

	it('GX3-2738 | TC2: Validar contraer todas las casillas de verificación ',() => {
		cy.get('svg.rct-icon-expand-all').as('expandAllIcon');
		cy.get('@expandAllIcon').click();
		cy.get('svg.rct-icon-collapse-all').as('collapseAllIcon');	
		cy.get('@collapseAllIcon').click();
		cy.get('ol').should('have.length', 1);
	});
})
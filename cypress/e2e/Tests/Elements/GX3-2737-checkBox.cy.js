describe('GX3-2738 | TS: ToolsQA | Elements | CheckBox', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contains', 'checkbox');
	});

	it('GX3-2738 | TC1: Validar expandir todas las casillas de verificación desde el botón "Expand all"',() => {
		cy.get('svg.rct-icon-expand-all').as('expandAllIcon');		
		cy.get('@expandAllIcon').click();
		cy.get('ol').should('have.length', 7);
	});

	it('GX3-2738 | TC2: Validar contraer todas las casillas de verificación desde el botón "Collapse all" ',() => {
		cy.get('svg.rct-icon-expand-all').as('expandAllIcon');
		cy.get('@expandAllIcon').click();
		cy.get('svg.rct-icon-collapse-all').as('collapseAllIcon');	
		cy.get('@collapseAllIcon').click();
		cy.get('ol').should('have.length', 1);
	});

	it.only('GX3-2738 | TC3: Validar poder desplegar cada toggle (Home, Desktop, Documents, WorkSpace, Offie, Downloads)',() => {
		cy.get('.rct-collapse-btn').as('btnCollapse');		
		cy.get('@btnCollapse').eq(0).click();
		cy.get('@btnCollapse').eq(1).click();
		cy.get('@btnCollapse').eq(2).click();
		cy.get('@btnCollapse').eq(3).click();		
		cy.get('@btnCollapse').eq(4).click();		
		cy.get('@btnCollapse').eq(5).click();
	});
})
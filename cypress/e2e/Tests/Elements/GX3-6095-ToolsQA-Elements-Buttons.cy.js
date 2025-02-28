describe('GX3-6095 | ToolsQA | Elements | Buttons', () => {
	beforeEach('PRC: The user should be on the URL https://demoqa.com/buttons', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.contains('Buttons').should('be.visible');
		cy.url().should('include', '/buttons');
		cy.location('protocol').should('eq', 'https:');
		cy.location('hostname').should('eq', 'demoqa.com');
		cy.request('https://demoqa.com/buttons').its('status').should('eq', 200);
	});

	it('GX3-6095 | TC1: Validate “Click Me” Button is working successfully. (HP)', () => {
		cy.get('.btn.btn-primary:not(#doubleClickBtn):not(#rightClickBtn)').click();
		cy.get('#dynamicClickMessage').should('be.visible').and('not.have.id', 'doubleClickMessage').and('not.have.id', 'rightClickMessage').and('have.text', 'You have done a dynamic click');
	});

	it('GX3-6095 | TC2: Validate “Double Click Me” Button is working successfully. (HP)', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('be.visible').and('not.have.id', 'rightClickMessage').and('not.have.id', 'dynamicClickMessage').and('have.text', 'You have done a double click');
	});

	it('GX3-6095 | TC3: Validate “Right Click Me” Button is working successfully. (HP)', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('be.visible').and('not.have.id', 'doubleClickMessage').and('not.have.id', 'dynamicClickMessage').and('have.text', 'You have done a right click');
	});

	it('GX3-6095 | TC4: Validate that no results are returned with different actions on the “Click Me” Button', () => {
		cy.get('#doubleClickBtn').should('be.visible').click();
		cy.get('#doubleClickBtn').should('be.visible').rightclick();
		cy.get('#dynamicClickMessage').should('not.exist');
		cy.get('#doubleClickMessage').should('not.exist');
		cy.get('#rightClickMessage').should('not.exist');
	});

	it('GX3-6095 | TC5: Validate that no results are returned with different actions on the “Double Click Me” Button', () => {
		cy.get('.btn.btn-primary:not(#doubleClickBtn):not(#rightClickBtn)').should('be.visible').dblclick();
		cy.get('.btn.btn-primary:not(#doubleClickBtn):not(#rightClickBtn)').should('be.visible').rightclick();
		cy.get('#dynamicClickMessage').should('be.visible').and('have.text', 'You have done a dynamic click');
		cy.get('#doubleClickMessage').should('not.exist');
		cy.get('#rightClickMessage').should('not.exist');
	});

	it('GX3-6095 | TC6: Validate that no results are returned with different actions on the “Right Click Me” Button', () => {
		cy.get('#rightClickBtn').click();
		cy.get('#rightClickBtn').dblclick();
		cy.get('#dynamicClickMessage').should('not.exist');
		cy.get('#doubleClickMessage').should('not.exist');
		cy.get('#rightClickMessage').should('not.exist');
	});
});

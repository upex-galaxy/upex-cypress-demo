describe('TS GX-29182: ToolsQA | Elements | Buttons', () => {
	beforeEach('Precondition: Usuario debe encontrarse en la web de ToolsQ, en el endpoint de buttons', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});

	it('GX-29181 | TC1:Check it show the corresponding message when double-click on the "Double click me" button', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('contain', 'You have done a double click');
	});

	it('GX-29181 | TC2: Check it doesn’t show message when clicking on the "double click me" button.', () => {
		cy.get('#doubleClickBtn').click();
		cy.get('#doubleClickMessage').should('not.exist');
	});

	it('GX-29181 | TC3: Check it doesn’t show message when right-clicking on the " double click me" button.', () => {
		cy.get('#doubleClickBtn').rightclick();
		cy.get('#doubleClickMessage').should('not.exist');
	});

	it('GX-29181 | TC4: Check it show the corresponding message when right-clicking on the "right click me" button', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('contain', 'You have done a right click');
	});

	it('GX-29181 | TC5: Check it doesn’t show message when double-clicking the " right click me" button.', () => {
		cy.get('#rightClickBtn').dblclick();
		cy.get('#rightClickMessage').should('not.exist');
	});

	it('GX-29181 | TC6: Check it show the corresponding message when clicking on the "click me" button.', () => {
		cy.get('.mt-4>button').eq(1).click();
		cy.get('#dynamicClickMessage').should('contain', 'You have done a dynamic click');
	});

	it('GX-29181 | TC7: Check it doesn’t show message when right-clicking the "click me" button.', () => {
		cy.get('.mt-4>button').eq(1).rightclick();
		cy.get('#dynamicClickMessage').should('not.exist');
	});

	Cypress.on('uncaught:exception', (err, runnable) => {
		// returning false here prevents Cypress from
		// failing the test
		return false;
	});
});

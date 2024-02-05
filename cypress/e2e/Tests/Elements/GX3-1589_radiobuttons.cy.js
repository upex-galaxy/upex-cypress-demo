describe('GX3-1589 - ToolsQA | Elements | Radio Buttons', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/radio-button');
	});

	it('GX3-1589 |TC1: Should be select the label yes ', () => {
		cy.get('#yesRadio').check({ force: true });
		cy.get('.mt-3').should('have.text', 'You have selected Yes');
	});

	it('GX3-1589 |TC2: Should be select the label impressive ', () => {
		cy.get('#impressiveRadio').check({ force: true });
		cy.get('.mt-3').should('have.text', 'You have selected Impressive');
	});

	it('GX3-1589 |TC3: Should not be select the label no', () => {
		cy.get('#noRadio').should('be.disabled');
	});
});

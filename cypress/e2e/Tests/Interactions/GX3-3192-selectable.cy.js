const {selectable} '../../../support/pages/GX3-3192-Selectable.Page';

describe('⚡️ToolsQA | Interactions | Selectable', () => {
	
	beforeEach('Precondición:', () =>{
		cy.visit('/selectable');
		cy.url().should("include", "selectable");
	});

	it('TC01',() => {
		expect(1).to.equal(1);
		cy.get('#demo-tab-list');
	});
});
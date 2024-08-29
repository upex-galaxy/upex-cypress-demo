describe('GX3-4941 | ToolsQA | Interactions | Sortable', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/sortable');
		cy.url().should('contain', 'sortable');
	});

	it('4942 | TC01:  Validate if the "List" tab is automatically selected when "Sortable" section is loaded', () => {
		cy.get('#demo-tab-list').should('exist').and('contain.text', 'List');
		cy.get('.tab-content').should('exist');
	});

	it('4942 | TC02:  Validate that the "List" items are sorted in ascending order', () => {
		const expectedTexts = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
		cy.get('.vertical-list-container').children().should('have.length', 6);
		expectedTexts.forEach((text, index) => {
			cy.get('.vertical-list-container').children().eq(index).should('have.text', text);
		});
	});

	it('4942 | TC03:  Validate that a list item dragged to another position keeps the chosen position', () => {
		cy.get('#demo-tabpane-list .list-group-item').eq(1).trigger('mousedown', { which: 1 });
		cy.get('#demo-tabpane-list .list-group-item').eq(5).trigger('mousemove', { which: 1 }).trigger('mouseup');

		cy.get('#demo-tabpane-list .list-group-item').eq(1).should('have.text', 'Three');
		cy.get('#demo-tabpane-list .list-group-item').eq(5).should('have.text', 'Two');
	});

	it('4942 | TC04: Validate "Grid" tab visibility upon click within "Sortable" component.', () => {
		cy.get('#demo-tab-grid').should('exist').and('contain.text', 'Grid').click();
		cy.get('.create-grid').should('exist');
	});

	it('4942 | TC05: Validate that the elements of the "Grid" are ordered in a 3 x 3 grid', () => {
		cy.get('#demo-tab-grid').click();
		cy.get('.grid-container .list-group-item')
			.should('have.length', 9)
			.then(items => {
				expect(items).to.have.length(9);
			});
	});

	it('4942 | TC06: Validate that a "Grid" item stays in its selected position when dragged ', () => {
		cy.get('#demo-tab-grid').click();

		cy.get('.create-grid > :nth-child(1)').trigger('mousedown', { which: 1 });
		cy.get('.create-grid > :nth-child(9)').trigger('mousemove').trigger('mouseup');

		cy.get('.create-grid > :nth-child(1)').should('have.text', 'Two');
		cy.get('.create-grid > :nth-child(9)').should('have.text', 'One');
	});
});

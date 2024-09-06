describe('GX3-4981 | ToolsQA | Interactions | Selectable', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/selectable');
		cy.get('#listContainer > h1').should('exist').and('contain.text', 'Selectable');
	});

	it('4998 | TC01: Validate that the tabs "List" and "Grid" are displayed by default', () => {
		cy.get('#demo-tab-list').should('exist').and('contain.text', 'List');
		cy.get('#demo-tab-grid').should('exist').and('contain.text', 'Grid');
	});

	it('4998 | TC02: Validate that only the items of tab "List" are displayed at once', () => {
		cy.get('#verticalListContainer > li').each(elements => {
			cy.wrap(elements).should('be.visible');
		});
        	cy.get('#gridContainer').should('not.be.visible');
	});

	it('4998 | TC03: Validate the action of selecting and unselecting "List" items', () => {
		cy.get('.list-group-item').then(items => {
			for (let i = 0; i < 4; i++) {
				cy.wrap(items[i]).click().should('have.class', 'active').and('have.css', 'background-color', 'rgb(0, 123, 255)');
			}

			for (let i = 0; i < 4; i++) {
				cy.wrap(items[i]).click().should('not.have.class', 'active').and('have.css', 'color', 'rgb(73, 80, 87)');
			}
		});
	});

	it('4942 | TC04: Validate that the items of tab "Grid" are displayed in a 3 x 3 grid', () => {
		cy.get('#demo-tab-grid').click();
		cy.get('.grid-container .list-group-item')
			.should('have.length', 9)
			.then(items => {
				expect(items).to.have.length(9);
			});
	});

	it('4998 | TC05: Validate the action of selecting and unselecting "Grid" items', () => {
		cy.get('#demo-tab-grid').click();
		cy.get('#gridContainer .list-group-item').then(items => {
			for (let i = 0; i < 9; i++) {
				cy.wrap(items[i]).click().should('have.class', 'active').and('have.css', 'background-color', 'rgb(0, 123, 255)');
			}

			for (let i = 0; i < 9; i++) {
				cy.wrap(items[i]).click().should('not.have.class', 'active').and('have.css', 'color', 'rgb(73, 80, 87)');
			}
		});
	});
});

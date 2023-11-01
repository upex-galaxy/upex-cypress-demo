class Selectable {
	get = {
		endpoint: () => cy.visit('/selectable'),
		list: () => cy.get('#demo-tab-list'),
		grid: () => cy.get('#demo-tab-grid'),
		listContainer: () => cy.get('ul#verticalListContainer li'),
		gridContainer: () => cy.get('#gridContainer li'),
	};

	clickList() {
		this.get.list().click();
	}

	clickGrid() {
		this.get.grid().click();
	}

	colorClickList() {
		this.get.listContainer().each(el => {
			cy.wrap(el).click().should('have.css', 'background-color', 'rgb(0, 123, 255)');
		});
	}

	colorClickGrid() {
		this.get.gridContainer().each(el => {
			cy.wrap(el).click().should('have.css', 'background-color', 'rgb(0, 123, 255)');
		});
	}

	colorNoClickList() {
		this.get.listContainer().each(el => {
			cy.wrap(el).click().should('have.css', 'background-color', 'rgb(255, 255, 255)');
		});
	}

	colorNoClickGrid() {
		this.get.gridContainer().each(el => {
			cy.wrap(el).click().should('have.css', 'background-color', 'rgb(255, 255, 255)');
		});
	}

	defaultColorList() {
		this.get.listContainer().each(el => {
			cy.wrap(el).should('have.css', 'background-color', 'rgb(255, 255, 255)');
		});
	}

	defaultColorGrid() {
		this.get.gridContainer().each(el => {
			cy.wrap(el).should('have.css', 'background-color', 'rgb(255, 255, 255)');
		});
	}
	getElementsByRow() {
		cy.get('#row1 > li, #row2 > li, #row3 > li').should('have.length', 9);
	}
}

export const selectablePage = new Selectable();

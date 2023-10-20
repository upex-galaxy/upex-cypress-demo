class Selectable {
	get = {
		endpoint: () => cy.visit('/selectable'),
		list: () => cy.get('#demo-tab-list'),
		grid: () => cy.get('#demo-tab-grid'),
		listContainer: () => cy.get('ul#verticalListContainer li'),
		gridContainer: () => cy.get('#gridContainer li'),
	};

	listTabClick() {
		this.get.list().click();
	}
	gridTabClick() {
		this.get.grid().click();
	}
	elemListContainer() {
		this.get.listContainer().each(el => {
			cy.wrap(el).click().should('have.css', 'background-color', 'rgb(0, 123, 255)');
		});
	}

	elemGridContainer() {
		this.get.gridContainer().each(el => {
			cy.wrap(el).click().should('have.css', 'background-color', 'rgb(0, 123, 255)');
		});
	}

	elemDefListContainer() {
		this.get.listContainer().each(el => {
			cy.wrap(el).click().should('have.css', 'background-color', 'rgb(255, 255, 255)');
		});
	}

	elemDefGridContainer() {
		this.get.gridContainer().each(el => {
			cy.wrap(el).click().should('have.css', 'background-color', 'rgb(0, 123, 255)');
		});
	}

	defaultElemListContainer() {
		this.get.listContainer().each(el => {
			cy.wrap(el).should('have.css', 'background-color', 'rgb(255, 255, 255)');
		});
	}

	defaultElemGridContainer() {
		this.get.gridContainer().each(el => {
			cy.wrap(el).should('have.css', 'background-color', 'rgb(255, 255, 255)');
		});
	}
}

export const selectable = new Selectable();

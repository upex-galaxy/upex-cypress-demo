import data from '@data/GX2-8536-Selectable.json';
class Selectable {
	get = {
		listContainer: () => cy.get('ul#verticalListContainer li'),
		gridContainer: () => cy.get('#gridContainer li'),
		list: () => cy.get('#demo-tab-list'),
		grid: () => cy.get('#demo-tab-grid'),
	};
	clickList() {
		this.get.list().click();
	}
	clickGrid() {
		this.get.grid().click();
	}
	defaultColorList() {
		this.get.listContainer().each(el => {
			cy.wrap(el).should('have.css', 'background-color', 'rgb(255, 255, 255)');
		});
	}
	clickColorList() {
		this.get.listContainer().each(el => {
			cy.wrap(el).click().should('have.css', 'background-color', 'rgb(0, 123, 255)');
		});
	}
	unClickColorList() {
		this.get.listContainer().each(el => {
			cy.wrap(el).click().should('have.css', 'background-color', 'rgb(255, 255, 255)');
		});
	}
	textList() {
		this.get.listContainer().each(($item, index) => {
			cy.wrap($item).invoke('text').should('eq', data.List[index]);
		});
	}
	defaultColorGrid() {
		this.get.gridContainer().each(el => {
			cy.wrap(el).should('have.css', 'background-color', 'rgb(255, 255, 255)');
		});
	}
	clickColorGrid() {
		this.get.gridContainer().each(el => {
			cy.wrap(el).click().should('have.css', 'background-color', 'rgb(0, 123, 255)');
		});
	}
	textGrid() {
		this.get.gridContainer().each(($item, index) => {
			cy.wrap($item).invoke('text').should('eq', data.Grid[index]);
		});
	}
	unClickColorGrid() {
		this.get.gridContainer().each(el => {
			cy.wrap(el).click().should('have.css', 'background-color', 'rgb(255, 255, 255)');
		});
	}
}

export const selectablePage = new Selectable();

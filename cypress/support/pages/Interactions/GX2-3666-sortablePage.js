/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-extra-semi */
/* eslint-disable indent */

/* eslint-disable @typescript-eslint/no-unused-vars */
class ToolsQASortable {
	get = {
		tabList: () => cy.get('#demo-tab-list'),
		tabGrid: () => cy.get('#demo-tab-grid'),
		listContainer: () => cy.get('[class^="vertical-list-container"]'),
		gridContainer: () => cy.get('#demo-tabpane-grid'),
		grid: () => cy.get('.create-grid'),
	};

	getTabList() {
		return this.get.tabList();
	}

	getListItems() {
		return this.get.listContainer().children();
	}

	//seleciono un numero aleatorio del total de elementos en el tab list y lo guarde en la variable
	//cypress.env
	getRandomItemL() {
		const randomListItem = Math.floor(Math.random() * 6);

		Cypress.env('randomListItem', randomListItem);
		return randomListItem;
	}

	//funcion que llama al numero guardado en cypress.env de los elementos del tab list
	getRandomListItem() {
		return this.get.listContainer().children().eq(Cypress.env('randomListItem'));
	}

	//selecciono numero target y lo inserto en una variable cypress.env
	getRandomTargetL() {
		const randomListTarget = Math.floor(Math.random() * 6);

		Cypress.env('randomListTarget', randomListTarget);
		return randomListTarget;
	}
	//funcion que llama al numero guardado en cypress.env de la selecion del target
	getRandomListTarget() {
		return this.get.listContainer().children().eq(Cypress.env('randomListTarget'));
	}

	//tab grid
	selectGritdTab() {
		return this.get.tabGrid().click();
	}

	getRandomItemG() {
		const randomGridItem = Math.floor(Math.random() * 9);

		Cypress.env('randomGridItem', randomGridItem);
		return randomGridItem;
	}

	getRandomItemGrid() {
		return this.get.grid().children().eq(Cypress.env('randomGridItem'));
	}

	getRandomTargetG() {
		const randomGridTarget = Math.floor(Math.random() * 9);

		Cypress.env('randomGridTarget', randomGridTarget);
		return randomGridTarget;
	}
	getRandomTargetGrid() {
		return this.get.grid().children().eq(Cypress.env('randomGridTarget'));
	}

	getGridItems() {
		return this.get.grid().children();
	}
}
export const toolsqasortable = new ToolsQASortable();

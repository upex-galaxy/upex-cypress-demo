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
	};

	getTabList() {
		return this.get.tabList();
	}

	getListItems() {
		return this.get.listContainer().children();
	}

	// getRandomListItem() {
	// 	return this.get
	// 		.listContainer()
	// 		.children()
	// 		.its('length')
	// 		.then(n => Cypress._.random(0, n - 1))
	// 		.then(randomList => {
	// 			console.log(randomList);
	// 			this.get.listContainer().children().eq(randomList);
	// 			return randomList;
	// 		});
	// 	 .then(randomList => {
	// 	 	Cypress.env('randomList', randomList);
	// 	 });
	// }

	// getRandomListTarget() {
	// 	return this.get
	// 		.listContainer()
	// 		.children()
	// 		.its('length')
	// 		.then(n => Cypress._.random(0, n - 1))
	// 		.then(randomListTarget => {
	// 			console.log(randomListTarget);
	// 			this.get.listContainer().children().eq(randomListTarget);
	// 			return randomListTarget;
	// 		});
	// 	 .then(randomListTarget => {
	// 	 	Cypress.env('randomListTarget', randomListTarget);
	// 	 });
	// }

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
}
export const toolsqasortable = new ToolsQASortable();

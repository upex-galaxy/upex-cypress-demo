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

	getRandomListItem() {
		return this.get
			.listContainer()
			.children()
			.its('length')
			.then(n => Cypress._.random(0, n - 1))
			.then(randomList => {
				console.log(randomList);
				this.get.listContainer().children().eq(randomList);
				//return randomList;
			});
		// .then(randomList => {
		// 	Cypress.env('randomList', randomList);
		// });
	}

	getRandomListTarget() {
		return this.get
			.listContainer()
			.children()
			.its('length')
			.then(n => Cypress._.random(0, n - 1))
			.then(randomListTarget => {
				console.log(randomListTarget);
				this.get.listContainer().children().eq(randomListTarget);
				//return randomListTarget;
			});
		// .then(randomListTarget => {
		// 	Cypress.env('randomListTarget', randomListTarget);
		// });
	}
}
export const toolsqasortable = new ToolsQASortable();

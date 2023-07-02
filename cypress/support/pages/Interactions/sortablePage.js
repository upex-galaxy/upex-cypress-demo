class Sortable {
	get = {
		navTab: () => cy.get('[role="tablist"]'),
		listTab: () => cy.get('#demo-tab-list'),
		gridTab: () => cy.get('#demo-tab-grid'),
		listItems: () => cy.get('#demo-tabpane-list'),
		listContainer: () => cy.get('[class^="vertical-list-container"]'),
		gridContainer: () => cy.get('#demo-tabpane-grid'),
		grid: () => cy.get('.create-grid'),
	};

	getRandomListItem() {
		const randomItem = Math.floor(Math.random() * 6);
		let min = 392; // coordenada top listContainer
		let max = 687; // coordenada bottom listContainer
		const randomCoordinate = Math.floor(Math.random() * (max - min) + min);
		Cypress.env('randomCoordinateList', randomCoordinate);

		return sortable.get
			.listContainer()
			.children()
			.eq(randomItem)
			.then(() => {
				sortable.get
					.listContainer()
					.children()
					.eq(randomItem)
					.then(() => {
						Cypress.env('randomItem', randomItem);
					})
					.trigger('mouseover', { force: true })
					.trigger('mousedown', { which: 1, force: true })
					.trigger('mousemove', { which: 1, pageX: 500.265625, pageY: Cypress.env('randomCoordinateList'), force: true })
					.trigger('mouseup', { force: true });
			});
	}
	getListItems() {
		return this.get.listContainer().children();
	}
	clickGridTab() {
		this.get.gridTab().click();
	}

	getGridItems() {
		return this.get.grid().children();
	}
	getRandomGridItem() {
		const randomGridItem = Math.floor(Math.random() * 9);
		return this.get
			.grid()
			.children()
			.eq(randomGridItem)
			.then(() => {
				Cypress.env('randomGridItem', randomGridItem);
			});
	}
	getRandomGridTarget() {
		const randomGridTarget = Math.floor(Math.random() * 9);
		return this.get
			.grid()
			.children()
			.eq(randomGridTarget)
			.then(() => {
				Cypress.env('randomGridTarget', randomGridTarget);
			});
	}
}

export const sortable = new Sortable();

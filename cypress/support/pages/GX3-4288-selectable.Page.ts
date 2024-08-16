class Selectable {
	get = {
		itemsList: () => cy.get('#verticalListContainer li'),
		itemsGrid:() => cy.get('#gridContainer li'),
		tabGrid:() => cy.get('#demo-tab-grid')
	};

	clickRandomsItemsList() {
		this.get.itemsList().its('length').then(listcount => {
			const randomsIndex = Cypress._.random(listcount)-1;
			this.get.itemsList().eq(randomsIndex).click();
			cy.wrap(randomsIndex).as('indexrandoms');
		});
	};
	desSeleccionarItemsList() {
		this.get.itemsList().its('length').then(listcountD => {
			const randomsIndexD = Cypress._.random(listcountD)-1;
			this.get.itemsList().eq(randomsIndexD).dblclick();
			cy.wrap(randomsIndexD).as('indexrandomsD');
		});
	};
	clickTabGrid() {
		this.get.tabGrid().eq(0).click();
	}
	clickRandomsItemsGrid() {
		this.get.itemsGrid().its('length').then(gridconunt => {
			const randomsIndexGrid=Cypress._.random(gridconunt);
			this.get.itemsGrid().eq(randomsIndexGrid).click();
			cy.wrap(randomsIndexGrid).as('randomsIndexGrid');
		});
	};
	desSeleccionarItemsGrid() {
		this.get.itemsGrid().its('length').then(gridcountD => {
			const randomsGridD=Cypress._.random(gridcountD);
			this.get.itemsGrid().eq(randomsGridD).dblclick();
			cy.wrap(randomsGridD).as('randomsGridD');
		});
	};

};
export const selectablePage = new Selectable();

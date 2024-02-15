class Selectable {
	get = {
		arrayElements: gridList => cy.get(`#demo-tabpane-${gridList} .list-group-item`), //# acá hay un array de objetos
		buttongrid: () => cy.get('#demo-tab-grid'),
	};

	getArrayElementsCount(gridList) {
		return this.get.arrayElements(gridList).its('length');
	}
	clickGrid() {
		this.get.buttongrid().click();
	}
	selectButton(gridList, num) {
		this.get.arrayElements(gridList).eq(num).click();
	}
}

export const selectablePage = new Selectable();

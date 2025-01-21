class Selectable {
	element = {
		list: () => cy.get('#demo-tab-list'),
		buttonsgrid: () => cy.get('#demo-tab-grid'),
		listItems: () => cy.get('#verticalListContainer li'),
		gridItems: () => cy.get('#gridContainer li')
	};

	clickbuttonsgrid() {
		this.element.buttonsgrid().click();
	}
	clicklistItems() {
		this.element.listItems().click();
	}
	clickgridItems() {
		this.element.gridItems().click();
	}
}
export const selectablePage = new Selectable();

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
	clickListItems(num) {
		this.element.listItems().eq(num).click();
	}
	clickgridItems(num) {
		this.element.gridItems().eq(num).click();
	}
}
export const selectablePage = new Selectable();

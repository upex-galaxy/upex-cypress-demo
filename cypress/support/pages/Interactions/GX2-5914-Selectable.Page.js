class Selectable {
	get = {
		endpoint: () => cy.visit('/selectable'),
		tabList: () => cy.get('[id="demo-tab-list"]'),
		tabGrid: () => cy.get('[id="demo-tab-grid"]'),
		listItem: () => cy.get('#verticalListContainer li'),
		gridItem: () => cy.get('#gridContainer li'),
	};
	selectTabList() {
		this.get.tabList().click();
	}
	selectTabGrid() {
		this.get.tabGrid().click();
	}
	selectListItem(num) {
		this.get.listItem().eq(num).click();
	}
	selectGridItem(num) {
		this.get.gridItem().eq(num).click();
	}
}

// SelectAllElementsList(){
// 	this.get.allElementsList().click({ multiple: true });
// }

// deselectAllElementsList(){
// 	this.get.allElementsList().click({ multiple: true });
// }

// SelectAllElementsGrid(){
// 	this.get.allElementsGrid().click({ multiple: true });
// }

export const selectable = new Selectable();

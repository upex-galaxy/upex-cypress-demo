class Selectable {
	get = {
		endpoint: () => cy.visit('/selectable'),
		tabList: () => cy.get('[id="demo-tab-list"]'),
		tabGrid: () => cy.get('[id="demo-tab-grid"]'),
		listItem: () => cy.get('#verticalListContainer li'),
		gridContainer: () => cy.get('#gridContainer'),
		gridItem: () => cy.get('#gridContainer li'),
	};
	selectTabList() {
		this.get.tabList().click();
	}
	selectTabGrid() {
		this.get.tabGrid().click();
	}
}

export const selectable = new Selectable();

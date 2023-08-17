class Selectable {
	get = {
		endpoint: () => cy.visit('/selectable'),
		tabList: () => cy.get('[id="demo-tab-list"]'),
		tabGrid: () => cy.get('[id="demo-tab-grid"]'),
		ulList: () => cy.get('[id="verticalListContainer"]'),
		gridContainer: () => cy.get('[id="gridContainer"]'),
	};
	//functions/methods

	selectListTab() {
		return this.get.tabList().click();
	}
	selectGridTab() {
		return this.get.buttonGrid().click();
	}
	selectList(num) {
		return this.get.listContainer().eq(num).click();
	}
	selectGrid(num) {
		return this.get.gridContainer().eq(num).click();
	}
}

export const selectable = new Selectable();

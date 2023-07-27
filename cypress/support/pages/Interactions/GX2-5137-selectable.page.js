class Selectable {
	//selectors
	get = {
		endpoint: () => cy.visit('/selectable'),
		tabList: () => cy.get('[id="demo-tab-list"]'),
		listContainer: () => cy.get('#verticalListContainer li'),
		buttonGrid: () => cy.get('[id="demo-tab-grid"]'),
		gridContainer: () => cy.get('#gridContainer li'),
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

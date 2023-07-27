class Selectable {
	//selectors
	get = {
		endpoint: () => cy.visit('/selectable'),
		buttonList: () => cy.get('[id="demo-tab-list"]'),
		listContainer: () => cy.get('#verticalListContainer li'),
		buttonGrid: () => cy.get('[id="demo-tab-grid"]'),
		gridContainer: () => cy.get('#gridContainer li'),
	};
	//functions/methods

	clickButtonList() {
		return this.get.buttonList().click();
	}
	clickButtonGrid() {
		return this.get.buttonGrid().click();
	}
	selectList(num) {
		return this.get.listContainer().eq(num).click();
	}
	selectList2(num) {
		return this.get.gridContainer().eq(num).click();
	}
}

export const selectable = new Selectable();

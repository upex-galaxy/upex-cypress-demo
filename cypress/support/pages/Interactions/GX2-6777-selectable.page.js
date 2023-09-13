class selectable {
	get = {
		list: () => cy.get('#demo-tab-list'),
		grid: () => cy.get('#demo-tab-grid'),
		itemList: () => cy.get('#verticalListContainer'),
		itemGrid: () => cy.get('#gridContainer'),
		// itemGridTwo: () => cy.get('#row2>.list-group-item'),
		// itemGridThree: () => cy.get('#row3>.list-group-item'),
	};

	ItemList() {
		return this.get.itemList().children();
	}

	ItemGrid() {
		return this.get.itemGrid().children();
	}
	// 	clickItemGridTwo() {
	// 		this.get.itemGridTwo().click();
	// 	}
	// 	clickItemGridThree() {
	// 		this.get.itemGridThree().click();
	// 	}
	// }
}
export const accSelect = new selectable();

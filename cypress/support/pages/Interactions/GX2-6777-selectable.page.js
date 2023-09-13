class selectable {
	get = {
		list: () => cy.get('#demo-tab-list'),
		grid: () => cy.get('#demo-tab-grid'),
		itemList: () => cy.get('#verticalListContainer'),
		itemGrid: () => cy.get("div[id^='row'] li"),
	};

	ItemList() {
		return this.get.itemList().children();
	}
	clickItemGrid() {
		this.get.grid().click();
	}
	showItemGrid() {
		this.get.itemGrid().each(item => {
			cy.wrap(item).should('be.visible').click();
		});
	}
}

export const accSelect = new selectable();

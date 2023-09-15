class selectable {
	get = {
		list: () => cy.get('#demo-tab-list'),
		grid: () => cy.get('#demo-tab-grid'),
		itemList: () => cy.get("ul[id^='verticalListContainer'] li"),
		itemGrid: () => cy.get("div[id^='row'] li"),
	};

	clickList() {
		this.get.list().click();
	}
	showItemList() {
		this.get.itemList().each(item => {
			cy.wrap(item).should('be.visible').click();
		});
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

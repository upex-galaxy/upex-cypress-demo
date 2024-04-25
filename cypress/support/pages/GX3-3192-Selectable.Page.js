class SelectablePage {
	get={
		tabList: () => cy.get('#demo-tab-list'),
		tabGrid: () => cy.get('#demo-tab-grid'),
		verticalListContainer: () => cy.get('#verticalListContainer li'),
		ListedItemSelected: () => cy.get('.mt-2.list-group-item.active.list-group-item-action')
	};

	clickOnListTab() {
		this.get.tabList().click();
	}
	clickOnListedItems(value) {
		this.get.verticalListContainer().eq(value).click();
	}
	clickOnGridTab() {
		this.get.tabGrid().click();
	}
	clickOnGridItems(value) {
		this.get.verticalListContainer().eq(value).click();
	}
}

export const selectablePage = new SelectablePage();
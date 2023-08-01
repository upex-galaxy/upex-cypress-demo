class sortable {
	get = {
		tabList: () => cy.get('#demo-tab-list'),
		itemList: () => cy.get('[class="vertical-list-container mt-4"]'),
	};

	ItemList() {
		return this.get.itemList().children();
	}
}

export const Sortable = new sortable();

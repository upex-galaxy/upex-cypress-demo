class sortable {
	get = {
		tabList: () => cy.get('#demo-tab-list'),
		itemList: () => cy.get('[class="vertical-list-container mt-4"]'),
	};

	ItemList() {
		return this.get.itemList().children();
	}

	selectItemRandomList() {
		this.ItemList().then(length => {
			var RandomItem = Cypress._.random(0, length.length - 1);
			cy.log(RandomItem);
			this.ItemList()
				.eq(RandomItem)
				.then(() => {
					Cypress.env('RandomItemList', RandomItem);
				})
				.trigger('mousedown', { which: 1 });
		});
	}

	moveSelectItemList() {
		this.ItemList().then(length => {
			var RandomItem = Cypress._.random(0, length.length - 1);
			cy.log(RandomItem);
			this.ItemList()
				.eq(RandomItem)
				.then(() => {
					Cypress.env('moveItemList', RandomItem);
				})
				.trigger('mousemove')
				.click({ force: true });
		});
	}
}

export const Sortable = new sortable();

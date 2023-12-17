class selectable {
	get = {
		ListTab: () => cy.get('#demo-tab-list'),
		GridTab: () => cy.get('#demo-tab-grid'),
		ListItems: () => cy.get('.vertical-list-container.mt-4.list-group li').children().eq(2),
		ListItem: () => cy.get('class="mt-2.list-group-item.list-group-item-action"'),
		GridItems: () => cy.get('#gridContainer li'),
	};
	clickList() {
		this.get.ListTab().click();
	}
	clickGrid() {
		this.get.ListTab().click();
	}
	selectListItem() {
		this.get.ListItems(2).click();
	}
	selectGridItem() {
		this.get.GridItems().click();
	}
}

export const selectable = new Selectable();

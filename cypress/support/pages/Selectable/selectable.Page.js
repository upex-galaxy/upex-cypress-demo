class selectable {
	get = {
		ListTab: () => cy.get('#demo-tab-list'),
		GridTab: () => cy.get('#demo-tab-grid'),
		ListItems: () => cy.get('#verticalListContainer li'),
		GridItems: () => cy.get('.list-group-item.list-group-item-action'),
	};
	clickList() {
		this.get.ListTab().click();
	}
	selectListItem() {
		this.get.ListItems().eq(2).click();
	}
	UnselectListItem() {
		this.get.ListItems().eq(2).click();
	}
	selectMultipleListItems() {
		this.get.ListItems().eq(1).click();
		this.get.ListItems().eq(0).click();
		this.get.ListItems().eq(3).click();
	}
	unselectMultipleListItems() {
		this.get.ListItems().eq(1).click();
		this.get.ListItems().eq(0).click();
	}
	clickGrid() {
		this.get.GridTab().click();
	}
	selectGridItem() {
		this.get.GridItems().eq(10).click();
	}
	UnselectGridItem() {
		this.get.GridItems().eq(10).click();
	}
	selectMultipleGridItems() {
		this.get.GridItems().eq(7).click();
		this.get.GridItems().eq(5).click();
		this.get.GridItems().eq(12).click();
	}
	unselectMultipleGridItems() {
		this.get.GridItems().eq(7).click();
		this.get.GridItems().eq(12).click();
	}
}

export const selectablePage = new selectable();

class selectable {
	get = {
		ListTab: () => cy.get('#demo-tab-list'),
		GridTab: () => cy.get('#demo-tab-grid'),
		ListItems: () => cy.get('.vertical-list-container.mt-4.list-group li').children().eq(2),
		ListItem: () => cy.get('#verticalListContainer li'),
		GridItems: () => cy.get('#gridContainer li'),
	};
	clickList() {
		this.get.ListTab().click();
	}
	clickGrid() {
		this.get.ListTab().click();
	}
	selectListItem() {
		this.get.ListItem().eq(2).click();
		this.get.ListItem().should('have.class', 'active');
	}
	UnselectListItem() {
		this.get.ListItem().eq(2).click();
	}
	selectGridItem() {
		this.get.GridItems().click();
	}
}

export const selectablePage = new selectable();

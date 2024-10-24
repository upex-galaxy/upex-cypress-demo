class Selectable {
	get = {
		listItems: () => cy.get('#verticalListContainer li'),
		gridButton: () => cy.get('#demo-tab-grid'),
		gridItems: () => cy.get('#demo-tabpane-grid li'),
		listButton: () => cy.get('#demo-tab-list')
	};

	selectRandomListItem() {
		return this.get.listItems().then($items => {
			const randomIndex = Math.floor(Math.random() * $items.length);
			return cy.wrap($items).eq(randomIndex).click();
		});
	}

	deselectListItem() {
		return this.get.listItems().then($items => {
			const selectedItem = $items.filter('.active');
			return cy.wrap(selectedItem).click();
		});
	}

	selectRandomGridItem() {
		return this.get.gridItems().then($items => {
			const randomIndex = Math.floor(Math.random() * $items.length);
			return cy.wrap($items).eq(randomIndex).click();
		});
	}

	deselectGridItem() {
		return this.get.gridItems().then($items => {
			const selectedGridItem = $items.filter('.active');
			return cy.wrap(selectedGridItem).click();
		});
	}

	openListTab() {
		return this.get.listButton().click();
	}

	openGridTab() {
		return this.get.gridButton().click();
	}
}

export const selectablePage = new Selectable();

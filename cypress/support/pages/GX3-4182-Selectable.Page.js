class Selectable {
	get = {
		listItems: () => cy.get('#verticalListContainer li'),//wrapper
		gridButton: () => cy.get('#demo-tab-grid'), //Grid button
		gridItems:() => cy.get('#demo-tabpane-grid li')
	};
	//Methods or  functions
	selectRandomListItem() {
		return this.get.listItems().then($items => { //here I'm using .then to use the result of the first (chained) command
   	 		const randomIndex = Math.floor(Math.random() * $items.length); //One item is randomly selected
			return cy.wrap($items).eq(randomIndex).click();
		});
	}

	deselectListItem() {
		return this.get.listItems().then($items => {
			const selectedItem = $items.filter('.active'); // '.active' is the class for selected items
			return cy.wrap(selectedItem).click();
		});
	}
	selectGridButton() {
		return this.get.gridButton().click();
	}
	selectRandomGridItem() {
		return this.get.gridItems().then($items => {
   	 		const randomIndex = Math.floor(Math.random() * $items.length); //One grid item is randomly selected
			return cy.wrap($items).eq(randomIndex).click();
		});
	}
	deselectGridItem() {
		return this.get.gridItems().then($items => {
			const selectedGridItem = $items.filter('.active');// '.active' is the class for selected item
			return cy.wrap(selectedGridItem).click();
		});
	}
};
export const selectablePage = new Selectable;
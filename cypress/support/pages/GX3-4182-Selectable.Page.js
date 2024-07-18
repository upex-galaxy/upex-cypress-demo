class Selectable
{
	get = {
		listItems: () => cy.get('#verticalListContainer li'),//wrapper
		gridTab: () => cy.get('#demo-tab-grid'), //Grid btn
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
		});
	}
	selectGridTab() {
		return this.get.gridTab().click();
	}
	selectRandomGridItem() {
		return this.get.gridItems().then($items => {
   	 const randomIndex = Math.floor(Math.random() * $items.length); //One grid item is randomly selected
			return cy.wrap($items).eq(randomIndex).click({ force: true });
		});
	}
	deselectGridItem() {
		return this.get.gridItems().then($items => {
			const selectedGridItem = $items.filter('.active'); // '.active' is the class for selected items
		});
	}

};
export const selectablePage = new Selectable;
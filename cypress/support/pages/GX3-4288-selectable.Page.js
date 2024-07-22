class Selectable {
	get itemsList() {
		cy.get('#verticalListContainer li');
	}
	get countItemsList(){
		this.itemsList.then($listItems => $listItems.length))
	};
};
export const SelectablePage = new Selectable()

class Selectable {
	get = {
		listTab: () => cy.get('#demo-tab-list'),
		gridTab: () => cy.get('#demo-tab-grid'),
		listContainer: () => cy.get('#verticalListContainer li'),
	};
	clickListTab(){
		this.get.listTab().click();
	}
	clickGridTab(){
		this.get.gridTab().click();
	}
	
}

export const selectablePage = new Selectable();
class Selectable {
	get = {
		linkTab: () => cy.get('#demo-tab-list'),
		gridTab: () => cy.get('#demo-tab-grid')
	};
	clickListTab(){
		this.get.linkTab().click();
	}
	clickGridTab(){
		this.get.gridTab().click();
	}
}

export const selectablePage = new Selectable();
class Selectable {
	get = {
		bttnList: () => cy.get('#demo-tab-list'),
		bttnGrid: () => cy.get('#demo-tab-grid'),
		listContainer: () => cy.get('#verticalListContainer li'),
		gridContainer: () => cy.get('#gridContainer li'),
		allElementsList: () => cy.get('#verticalListContainer li'),
		allElementsGrid: () => cy.get('#gridContainer li')
		
	};
	clickBttnGrid() {
		this.get.bttnGrid().click();
	}
	clickBttnList() {
		this.get.bttnList().click();
	}
	clickElementList(num) {
		this.get.listContainer().eq(num).click();
	}
	clickElementGrid(num) {
		this.get.gridContainer().eq(num).click();
	}
	SelectAllElementsList() {
		this.get.allElementsList().click({ multiple: true });
	}
	
	deselectAllElementsList() {
		this.get.allElementsList().click({ multiple: true });
	}

	SelectAllElementsGrid() {
		this.get.allElementsGrid().click({ multiple: true });
	
	}



}
export const selectable = new Selectable();


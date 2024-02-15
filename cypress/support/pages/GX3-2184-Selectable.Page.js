class Selectable {
	get = { 
		endpoint: () => cy.visit("https://demoqa.com/selectable/"),
		buttonlist: () => cy.get("#demo-tab-list"),
		listOne: () => cy.get("#verticalListContainer li"),
		
		buttongrid: () => cy.get("#demo-tab-grid"),
		gridOne: () => cy.get("#gridContainer li"),
	
		

		
	}

	
	clickList(){
		this.get.buttonlist().click();
	}
	selectAllList(){
		this.get.listOne().click({ multiple: true })
	}
	clickGrid(){
		this.get.buttongrid().click();
	}
	selectAllGrid(){
		this.get.gridOne().click({ multiple: true });
	}
	
}

export const selectablePage = new Selectable;
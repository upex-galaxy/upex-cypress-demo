class Selectable {
	get = { 
		endpoint: () => cy.visit("https://demoqa.com/selectable/"),
		buttonlist: () => cy.get("#demo-tab-list"),
		listOne: () => cy.get("#verticalListContainer"),
		listTwo: () => cy.get("#verticalListContainer"),
		listThree: () => cy.get("#verticalListContainer"),
		listFour: () => cy.get("#verticalListContainer"),
		buttongrid: () => cy.get("#demo-tab-grid"),
		gridOne: () => cy.get("#gridContainer li"),
		gridTwo: () => cy.get("#gridContainer li"),
		gridThree: () => cy.get("#gridContainer li"),
		gridFour: () => cy.get("#gridContainer li"),
		gridFive: () => cy.get("#gridContainer li"),
		gridSix: () => cy.get("#gridContainer li"),
		gridSeven: () => cy.get("#gridContainer li"),
		gridHeight: () => cy.get("#gridContainer li"),
		gridNine: () => cy.get("#gridContainer li"),
		

		
	}

	
	clickList(){
		this.get.buttonlist().click()
	}
	
	clickGrid(){
		this.get.buttongrid().click()
	}
	selectGridOne(){
		this.get.gridOne().eq(0).click()
	}
	selectGridTwo(){
		this.get.gridTwo().eq(1).click()
	}
	selectGridthree(){
		this.get.gridThree().eq(2).click()
	}
	selectGridFour(){
		this.get.gridFour().eq(3).click()
	}
	selectGridFive(){
		this.get.gridFive().eq(4).click()
	}
	selectGridSix(){
		this.get.gridSix().eq(5).click()
	}
	selectGridSeven(){
		this.get.gridSeven().eq(6).click()
	}
	selectGridHeight(){
		this.get.gridHeight().eq(7).click()
	}
	selectGridNine(){
		this.get.gridNine().eq(8).click()
	}
}

export const selectable = new Selectable;
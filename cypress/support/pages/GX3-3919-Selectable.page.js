class ListElement {
	get = {
		listTab: ()=> cy.get('#demo-tab-list'),
		buttonCras: ()=> cy.contains('Cras justo odio'),
		buttonDapibus: ()=> cy.contains('Dapibus ac facilisis in'),
		buttonMorbi: ()=> cy.contains('Morbi leo risus'),
		buttonPorta: ()=> cy.contains('Porta ac consectetur ac')

		
	}
	clickListButton(){
		this.get.buttonCras().click()
		this.get.buttonDapibus().click()
		this.get.buttonMorbi().click()
		this.get.buttonPorta().click()
	}
}

export const selectablePage = new ListElement();
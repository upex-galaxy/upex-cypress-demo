class ListElement {
	get = {
		listTab: ()=> cy.get('#demo-tab-list'),
		buttonCras: ()=> cy.contains('Cras justo odio'),
		buttonDapibus: ()=> cy.contains('Dapibus ac facilisis in'),
		buttonMorbi: ()=> cy.contains('Morbi leo risus'),
		buttonPorta: ()=> cy.contains('Porta ac consectetur ac'),

        gridButton:()=>cy.get('#demo-tab-grid'),
		oneButton:()=> cy.contains('One'),
		twoButton: ()=> cy.contains ('Two'),
		threeButton: ()=> cy.contains('Three'),
		fourButton: ()=> cy.contains('Four'),
		fiveButton: ()=> cy.contains('Five'),
		sixButton: ()=> cy.contains('Six'),
		sevenButton: ()=> cy.contains('Seven'),
		eightButton: ()=> cy.contains('Eight'),
		nineButton: ()=> cy.contains('Nine')


		
	}
	clickListButton(){
		this.get.buttonCras().click()
		this.get.buttonDapibus().click()
		this.get.buttonMorbi().click()
		this.get.buttonPorta().click()
          }
	clickGridButton(){
		this.get.gridButton().click()
		this.get.oneButton().click()
		this.get.twoButton().click()
		this.get.threeButton().click()
		this.get.fourButton().click()
		this.get.fiveButton().click()
		this.get.sixButton().click()
		this.get.sevenButton().click()
		this.get.eightButton().click()
		this.get.nineButton().click()
		}
	
}

export const selectablePage = new ListElement();
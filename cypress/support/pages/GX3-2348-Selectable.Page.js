class Selectable {
	get={
		endpoint:()=> cy.get('https://demoqa.com/selectable'),
		listBtn:() => cy.get('#demo-tab-list'),
		listLi :() => cy.get('#verticalListContainer li'),

		gridBtn :() => cy.get('#demo-tab-grid'),
		gridLi: ()=> cy.get ('#gridContainer li')
	}

	clickListBtn(){
		this.get.listBtn().click();
	}
	
	clickListLi(){
		this.get.listLi().click({ multiple: true });
	}

	clickGridBtn(){
		this.get.gridBtn().click();
	}

	clickGridLi(){
		this.get.gridLi().click({ multiple: true });
	}
}

export const selectablePage = new Selectable
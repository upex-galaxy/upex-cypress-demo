class selectable {
	get = {
		bttnList: () => cy.get('#demo-tab-list'),
		bttnOne: () => cy.get('#verticalListContainer li').first(),
		bttnTwo: () => cy.get('#verticalListContainer li').eq(1),
		bttnThree: () => cy.get('#verticalListContainer li').eq(2),
		bttnFour: () => cy.get('#verticalListContainer li').last(),
		bttnGrid: () => cy.get('#demo-tab-grid'),
		bttnUno: () => cy.get('#gridContainer li').first(),
		bttnDos: () => cy.get('#gridContainer li').eq(1),
		bttnTres: () => cy.get('#gridContainer li').eq(2),
		bttnCuatro: () => cy.get('#gridContainer li').eq(3),
		bttnCinco: () => cy.get('#gridContainer li').eq(4),
		bttnSeis: () => cy.get('#gridContainer li').eq(5),
		bttnSiete: () => cy.get('#gridContainer li').eq(6),
		bttnOcho: () => cy.get('#gridContainer li').eq(7),
		bttnNueve: () => cy.get('#gridContainer li').eq(8),
	};
	clickOne() {
		this.get.bttnOne().click();
	}
	clickTwo() {
		this.get.bttnTwo().click();
	}
	clickThree() {
		this.get.bttnThree().click();
	}
	clickFour() {
		this.get.bttnFour().click();
	}
	clickAll() {
		this.get.bttnOne().click();
		this.get.bttnTwo().click();
		this.get.bttnThree().click();
		this.get.bttnFour().click();
	}
	clickGrid() {
		this.get.bttnGrid().click();
	}
	clickTodo() {
		this.get.bttnUno().click();
		this.get.bttnDos().click();
		this.get.bttnTres().click();
		this.get.bttnCuatro().click();
		this.get.bttnCinco().click();
		this.get.bttnSeis().click();
		this.get.bttnSiete().click();
		this.get.bttnOcho().click();
		this.get.bttnNueve().click();
	}
}
export const Selectable = new selectable();

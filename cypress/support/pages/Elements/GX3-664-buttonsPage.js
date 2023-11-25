class Buttons {
	get = {
		doubleClickBtn: () => cy.get('#doubleClickBtn'),
		rightClickBtn: () => cy.get('#rightClickBtn'),
		clickBtn: () => cy.get('[type="button"]').last(),
		assertion1: () => cy.get('#doubleClickMessage'),
		assertion2: () => cy.get('#rightClickMessage'),
		assertion3: () => cy.get('#dynamicClickMessage'),
	};

	doubleClick() {
		this.get.doubleClickBtn().dblclick();
	}

	rightClick() {
		this.get.rightClickBtn().rightclick();
	}

	clickButton() {
		this.get.clickBtn().click();
	}
}

export const buttons = new Buttons();

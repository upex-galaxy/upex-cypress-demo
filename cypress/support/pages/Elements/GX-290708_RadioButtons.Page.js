class RadioButton {
	get = {
		buttonYes: () => cy.get('div label'),
		buttonImpressive: () => cy.get('div label'),
		buttonNo: () => cy.get('div label'),
	};

	clickButtonYes() {
		this.get.buttonYes().first().click();
	}

	clickButtonImpressive() {
		this.get.buttonImpressive().eq(1).click();
	}

	clickButtonNo() {
		this.get.buttonNo().last().click();
	}
}

export const radioButton = new RadioButton();

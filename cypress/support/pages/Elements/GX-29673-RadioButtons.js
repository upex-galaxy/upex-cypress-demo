class RadioBtn {
	get = {
		YesRadio: () => cy.get('label[for="yesRadio"]'),
		impressiveRadio: () => cy.get('label[for="impressiveRadio"]'),
		noRadio: () => cy.get('label[for="noRadio"]'),
		message: () => cy.contains('You have selected ').children(),
	};
	clickYes() {
		this.get.YesRadio().click({ force: true });
	}
	clickImpressive() {
		this.get.impressiveRadio().click({ force: true });
	}
}

export const radioBtn = new RadioBtn();

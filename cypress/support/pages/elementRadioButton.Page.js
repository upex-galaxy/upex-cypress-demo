class elmRadioButton {
	get = {
		yesRadioButton: () => cy.get('#yesRadio'),
		impressiveRadioButton: () => cy.get('#impressiveRadio'),
		noRadioButton: () => cy.get('#noRadio'),
		msgText: () => cy.get('.mt-3'),
	};

	checkYes() {
		this.get.yesRadioButton().check({ force: true });
	}

	checkImp() {
		return this.get.impressiveRadioButton().check({ force: true });
	}

	checkNo() {
		return this.get.noRadioButton();
	}

	viewMsgTxt() {
		return this.get.msgText();
	}
}

export const rBTN = new elmRadioButton();

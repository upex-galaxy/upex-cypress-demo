class TextBox {
	//Elementos de la page
	elements = {
		fullNameInput: () => cy.get('#userName'),
		emailInput: () => cy.get('#userEmail'),
		currentAddressInput: () => cy.get('#currentAddress'),
		permanentAddressInput: () => cy.get('#permanentAddress'),
		submitBtn: () => cy.get('#submit'),
		fullNameMessage: () => cy.get('#name'),
		emailMessage: () => cy.get('#email'),
		currentAddressMessage: () => cy.get('#currentAddress.mb-1'),
		permanentAddressMessage: () => cy.get('#permanentAddress.mb-1'),
	};

	//Limpia los inputs
	clearFullNameInput() {
		this.elements.fullNameInput().clear();
	}

	clearEmailInput() {
		this.elements.emailInput().clear();
	}

	clearCurrentAddressInput() {
		this.elements.currentAddressInput().clear();
	}

	clearPermanentAddressInput() {
		this.elements.permanentAddressInput().clear();
	}

	clearAllInput() {
		this.clearFullNameInput();
		this.clearEmailInput();
		this.clearCurrentAddressInput();
		this.clearPermanentAddressInput();
	}

	//hacer click en el botón submit
	clickSubmitBtn() {
		this.elements.submitBtn().click();
	}

	//Ingresar datos en los input
	typeFullNameInput(dataNameFaker) {
		this.elements.fullNameInput().type(dataNameFaker);
	}

	typeEmailInput(dataEmailFaker) {
		this.elements.emailInput().type(dataEmailFaker);
	}

	typeCurrentAddressInput(dataCurrentAddressFaker) {
		this.elements.currentAddressInput().type(dataCurrentAddressFaker);
	}

	typePermanentAddressInput(dataPermanentAddressFaker) {
		this.elements.permanentAddressInput().type(dataPermanentAddressFaker);
	}

}

export const textBox = new TextBox();

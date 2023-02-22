class TextBox {
	//Elementos de la Page
	elements = {
		fullNameInput: () => cy.get('#userName'),
		emailInput: () => cy.get('#userEmail'),
		currentAddressInput: () => cy.get('#currentAddress'),
		permanentAddressInput: () => cy.get('#permanentAddress'),
		submitBtn: () => cy.get('#submit'),
		messageFullName: () => cy.get('#name'),
		messageEmail: () => cy.get('#email'),
		messageCurrentAddress: () => cy.get('#currentAddress'),
		messagePermanentAddress: () => cy.get('#permanentAddress'),
	}

	//Limpia los inputs
	clearFullNameInput() {
		this.elements.fullNameInput().clear()
	}

	clearEmailInput() {
		this.elements.emailInput().clear()
	}

	clearCurrentAddressInput() {
		this.elements.currentAddressInput().clear()
	}

	clearPermanentaddressInput() {
		this.elements.permanentAddressInput().clear()
	}

	clearAllInput() {
		this.clearFullNameInput()
		this.clearEmailInput()
		this.clearCurrentAddressInput()
		this.clearPermanentaddressInput()
	}

	//hacer click en el boton submit
	clickSubmitBtn() {
		this.elements.submitBtn().click()
	}
}

export const textBox = new TextBox()

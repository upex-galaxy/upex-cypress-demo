class TextBox {
	elements = {
		fullNameInput: () => cy.get('#userName'),
		emailInput: () => cy.get('#userEmail'),
		currentAddressInput: () => cy.get('#currentAddress'),
		permanentAddressInput: () => cy.get('#permanentAddress'),
		submitBtn: () => cy.get('#submit'),
		messageRegistered: '',
	}

	clearInput(input) {
		input.clear()
	}

	clickBtn(Btn) {
		Btn.click()
	}

	clearFullNameInput() {
		clearInput(this.elements.fullNameInput())
	}

	clearEmailInput() {
		clearInput(this.elements.emailInput())
	}

	clearCurrentAddressInput() {
		clearInput(this.elements.currentAddressInput())
	}

	clearPermanentaddressInput() {
		clearInput(this.elements.permanentAddressInput())
	}

	clickSubmitBtn() {
		clickBtn(this.elements.submitBtn())
	}
}

export const textBox = new TextBox()

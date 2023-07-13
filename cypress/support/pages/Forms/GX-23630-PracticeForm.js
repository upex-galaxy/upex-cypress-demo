class Usuario {
	datos = {
		LastName: () => cy.get('#firstName'),
		FirstName: () => cy.get('#lastName'),
		Email: () => cy.get('#userEmail'),
		Mobile: () => cy.get('#userNumber'),
		dateOfBirth: () => cy.get('#dateOfBirthInput'),
		subjectsContainer: () => cy.get('#subjectsContainer'),
		hobby: () => cy.get('.custom-control-label').parent(),
		uploadPicture: () => cy.get('#uploadPicture'),
		currentAddress: () => cy.get('#currentAddress'),
		state: () => cy.get('#state'),
		city: () => cy.get('#city'),
		submit: () => cy.get('#submit'),
		gender: () => cy.get('.custom-control-label').parent(),
	};

	submit() {
		this.datos.submit().click();
	}
	FillForm(lastname, firstname, email, mobile, date, address) {
		this.datos.FirstName().type(firstname);
		this.datos.LastName().type(lastname);
		this.datos.Email().type(email);
		this.datos.Mobile().type(mobile);
		this.datos.dateOfBirth(date).click();
		this.datos.currentAddress(address);
	}
	getRandomNumber(min, max) {
		return Cypress._.random(min, max);
	}
	obtenerMailAleatorio(textos) {
		const indiceAleatorio = Math.floor(Math.random() * textos.length);
		return textos[indiceAleatorio];
	}

	VerifySuccess() {
		this.datos.registroExitosoMensaje().should('contain', '¡Registro exitoso!');
	}
}
export const usuario = new Usuario();

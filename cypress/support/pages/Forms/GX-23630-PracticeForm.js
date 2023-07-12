class Usuario {
	datos = {
		LastName: () => cy.get('#firstName'),
		FirstName: () => cy.get('#lastName'),
		Email: () => cy.get('#userEmail'),
		Mobile: () => cy.get('#userNumber-wrapper'),
		genderFemale: () => cy.get('#gender-radio-2'),
		genderMale: () => cy.get('#gender-radio-1'),
		genderOther: () => cy.get('#gender-radio-3'),
		dateOfBirth: () => cy.get('#dateOfBirthInput'),
		subjectsContainer: () => cy.get('#subjectsContainer'),
		hobbySport: () => cy.get('#hobbies-checkbox-1'),
		hobbyReading: () => cy.get('#hobbies-checkbox-2'),
		hobbyMusic: () => cy.get('#hobbies-checkbox-3'),
		uploadPicture: () => cy.get('#uploadPicture'),
		currentAddress: () => cy.get('#currentAddress'),
		state: () => cy.get('#state'),
		city: () => cy.get('#city'),
		submit: () => cy.get('#submit'),
		Female: () => cy.get('.custom-control-label').eq(1),
		Male: () => cy.get('.custom-control-label').eq(0),
		Other: () => cy.get('.custom-control-label').eq(2),
	};

	submit() {
		this.datos.submit().click();
	}
	FillForm(lastname, firstname, email, mobile, date) {
		this.datos.FirstName().type(firstname);
		this.datos.LastName().type(lastname);
		this.datos.Email().type(email);
		this.datos.Mobile().type(mobile);
		this.datos.dateOfBirth(date).click();
		this.datos.submit().click();
	}
	VerifySuccess() {
		this.datos.registroExitosoMensaje().should('contain', '¡Registro exitoso!');
	}
}
export const usuario = new Usuario();

class Usuario {
	datos = {
		LastName: () => cy.get('#firstName'),
		FirstName: () => cy.get('#lastName'),
		Email: () => cy.get('#userEmail'),
		Mobile: () => cy.get('#userNumber'),
		dateOfBirth: () => cy.get('#dateOfBirthInput'),
		subjectsContainer: () => cy.get('.css-1hwfws3').eq(0),
		hobby: () => cy.get('.custom-control-label').parent(),
		uploadPicture: () => cy.get('#uploadPicture'),
		currentAddress: () => cy.get('#currentAddress'),
		selectCity: () => cy.get('.css-1hwfws3').eq(2),
		submit: () => cy.get('#submit'),
		gender: () => cy.get('.custom-control-label').parent(),
		day: () => cy.get('div.react-datepicker__day'),
		week: () => cy.get('div.react-datepicker__week'),
		year: () => cy.get('.react-datepicker__year-select'),
		month: () => cy.get('.react-datepicker__month-select'),
		selectState: () => cy.get('.css-1hwfws3').eq(1),
		selectState2: () => cy.get('.css-1gibzzn').children(),
	};

	submit() {
		this.datos.submit().click();
	}
	FillForm(lastname, firstname, email, mobile, date, address, subject) {
		this.datos.FirstName().type(firstname);
		this.datos.LastName().type(lastname);
		this.datos.Email().type(email);
		this.datos.Mobile().type(mobile);
		this.datos.dateOfBirth(date).click();
		this.datos.currentAddress(address);
		this.datos.subjectsContainer(subject);
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

class Usuario {
	datos = {
		LastName: () => cy.get('#firstName'),
		FirstName: () => cy.get('#lastName'),
		Email: () => cy.get('#userEmail'),
		Mobile: () => cy.get('#userNumber'),
		dateOfBirth: () => cy.get('#dateOfBirthInput'),
		hobby: () => cy.get('.custom-control-label').parent(),
		uploadPicture: () => cy.get('#uploadPicture'),
		currentAddress: () => cy.get('.form-control').eq(5),
		selectSubj: () => cy.get('.css-1hwfws3').eq(0),
		selectCity: () => cy.get('.css-1hwfws3').eq(2),
		selectCity2: () => cy.get('.css-1n7v3ny-option'),
		submit: () => cy.get('#submit'),
		gender: () => cy.get('.custom-control-label').parent(),
		day: () => cy.get('div.react-datepicker__day'),
		week: () => cy.get('div.react-datepicker__week'),
		year: () => cy.get('.react-datepicker__year-select'),
		month: () => cy.get('.react-datepicker__month-select'),
		selectState: () => cy.get('.css-1hwfws3').eq(1),
		selectState2: () => cy.get('.css-1gibzzn').children(),
		formularioFinal: () => cy.get('.modal-content'),
		contenidoFormulario: () => cy.get('.modal-body'),
		seleccionarSub: () => cy.get('#react-select-2-option-0'),
	};

	submit() {
		this.datos.submit().click();
	}
	FillForm(lastname, firstname, email, mobile, address) {
		this.datos.FirstName().type(firstname);
		this.datos.LastName().type(lastname);
		this.datos.Email().type(email);
		this.datos.Mobile().type(mobile);
		this.datos.currentAddress(address);
	}
	getRandomNumber(min, max) {
		return Cypress._.random(min, max);
	}
	obtenerAleatorio(textos) {
		const indiceAleatorio = Math.floor(Math.random() * textos.length);
		return textos[indiceAleatorio];
	}
}
export const usuario = new Usuario();

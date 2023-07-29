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
		selectCity2: () => cy.get('[id^="react-select"]'),
		submit: () => cy.get('#submit'),
		gender: () => cy.get('.custom-control-label').parent(),
		day: () => cy.get('[class^="react-datepicker__day react-datepicker__day"]:not([class$="outside-month"])'),
		week: () => cy.get('.react-datepicker__week'),
		year: () => cy.get('.react-datepicker__year-select'),
		month: () => cy.get('.react-datepicker__month-select'),
		selectState: () => cy.get('.css-1hwfws3').eq(1),
		selectState2: () => cy.get('.css-1gibzzn').children(),
		formularioFinal: () => cy.get('.modal-content'),
		contenidoFormulario: () => cy.get('.modal-body'),
		seleccionarSub: () => cy.get('#react-select-2-option-0'),
		stateE: () => cy.get('.css-1uccc91-singleValue'),
		subjectContainer: () => cy.get('#subjectsContainer'),
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
	obtenerNombreMesEnIngles(numeroMes) {
		const mesesEnIngles = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		return mesesEnIngles[numeroMes - 1];
	}

	formatearFecha(fecha) {
		const dia = fecha.getDate();
		const mes = this.obtenerNombreMesEnIngles(fecha.getMonth() + 1);
		const anio = fecha.getFullYear();
		return `${dia} ${mes}, ${anio}`;
	}
}
export const usuario = new Usuario();

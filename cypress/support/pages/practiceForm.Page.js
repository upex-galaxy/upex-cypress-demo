class formulario {
	get = {
		firstNameZero: () => cy.get('#firstName'),
		firstNameVació: () => cy.get('#firstName'),
		lastNameZero: () => cy.get('#lastName'),
		emailZero: () => cy.get('#userEmail'),
		emailVació: () => cy.get('#userEmail'),
		emailUno: () => cy.get('#userEmail'),
		emailDos: () => cy.get('#userEmail'),
		genderMale: () => cy.get('.custom-control-label').eq(0),
		genderFemale: () => cy.get('.custom-control-label').eq(1),
		genderOther: () => cy.get('.custom-control-label').eq(2),
		mobileZero: () => cy.get('#userNumber'),
		dateOfBirth: () => cy.get('#dateOfBirth'),
		mes: () => cy.get('.react-datepicker__month.react-datepicker__month-select'),
		dia: () => cy.get('.react-datepicker__day react-datepicker__day--022'),
		año: () => cy.get('.react-datepicker__year-select'),
	};
	typeLogin(firstName, lastName) {
		this.get.firstNameZero().type(firstName);
		this.get.lastNameZero().type(lastName).type('{enter}');
	}
	TypeMes() {
		this.get.mes().click().select('3').click();
	}
	TypeDia() {
		this.get.dia().click().select('12').click();
	}
	typeLoginVació() {
		this.get.firstNameVació().type('{enter}');
	}

	typeEmailVació() {
		this.get.emailVació().type('{enter}');
	}

	typeEmailUno(firstEmail) {
		this.get.emailUno().type(firstEmail).type('{enter}');
	}

	typeEmailSegundo(segundoEmail) {
		this.get.emailDos().type(segundoEmail).type('{enter}');
	}
	typeGeneroMale() {
		this.get.genderMale().click();
	}
	typeGeneroFemale() {
		this.get.genderFemale().click();
	}
	typeGeneroOther() {
		this.get.genderOther().click();
	}
	typeMobileZero(celularZero) {
		this.get.mobileZero().type(celularZero).type('{enter}');
	}
	typeMobileUno(celularUno) {
		this.get.mobileZero().type(celularUno).type('{enter}');
	}
	typeMobileDos() {
		this.get.mobileZero().type('{enter}');
	}
	typeBirthDay() {
		this.get.dateOfBirth().click();
	}
}
export const Formulario = new formulario();

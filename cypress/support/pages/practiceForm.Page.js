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
		clickCalendario: () => cy.get('#dateOfBirthInput'),
		calendario: () => cy.get('div[class="react-datepicker"]'),
		selectYear: () => cy.get('[class$="year-select"]'),
		selectMes: () => cy.get('select[class$="month-select"]'),
		selectDay: () => cy.get('div[class="react-datepicker__month"] [class*="day"]:not([class*="outside-month"])'),
		subjectTable: () => cy.get('.css-2b097c-container'),
		subjectType: () => cy.get('[style="display: inline-block;"]'),
		subjectRemove: () => cy.get('.css-xb97g8.subjects-auto-complete__multi-value__remove'),
		hobbiesSports: () => cy.get('.custom-control-label'),
		upFile: () => cy.get('.form-file-label'),
		currentAddress: () => cy.get('.form-control'),
		state: () => cy.get('.css-1wa3eu0-placeholder'),
		selectCity: () => cy.get('.css-1wa3eu0-placeholder'),
		btnSubmit: () => cy.get('#submit'),
	};
	clickBtnSubmit() {
		this.get.btnSubmit();
	}
	clickStateZero() {
		this.get.selectCity().eq(1).dblclick();
	}
	clickState() {
		this.get.state().eq(1).dblclick();
	}
	clickCurrentAddressZero(addressZero) {
		this.get.currentAddress().eq(5).type(addressZero).type('{enter}');
	}
	clickCurrentAddressOne(addressOne) {
		this.get.currentAddress().eq(5).type(addressOne).type('{enter}');
	}
	clickCurrentAddressTwo(addressTwo) {
		this.get.currentAddress().eq(5).type(addressTwo).type('{enter}');
	}
	clickUpFile() {
		this.get.upFile().eq(0).selectFile('cypress/fixtures/images/upexlogo.png');
	}
	clickHobbiesSports() {
		this.get.hobbiesSports().eq(3).click();
	}
	clickCalendario() {
		this.get.clickCalendario().click();
	}
	clickSubjectRemove() {
		this.get.subjectRemove().eq(0).click();
	}
	clickSubject(typeZero, typeOne) {
		this.get.subjectTable();
		this.get.subjectType().eq(0).type(typeZero).type('{enter}');
		this.get.subjectType().eq(0).type(typeOne).type('{enter}');
	}
	selectRandomYear() {
		this.get.calendario().within(() => {
			this.get.selectYear().then(year => {
				const allYearList = year.children().length;
				const Año = Math.floor(Math.random() * allYearList);
				cy.log(allYearList);
				cy.wrap(year).select(Año);
			});
		});
	}

	selectRandomMes() {
		this.get.calendario().within(() => {
			this.get.selectMes().then(mes => {
				const allMesList = mes.children().length;
				const Mes = Math.floor(Math.random() * allMesList);
				cy.log(allMesList);
				cy.wrap(mes).select(Mes);
			});
		});
	}

	selectRandomDay() {
		this.get.calendario().within(() => {
			this.get.selectDay().then(Day => {
				const allDayList = Day.length;
				const dia = Math.floor(Math.random() * allDayList);
				cy.log(allDayList);
				cy.wrap(Day).eq(dia).click();
			});
		});
	}

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

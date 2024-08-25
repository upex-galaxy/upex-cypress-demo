class FormPractice {
	get = {
		inputFirstName: () => cy.get('#firstName'),
		inputLastName: () => cy.get('#lastName'),
		inputEmail: () => cy.get('#userEmail'),
		optionsGenders: () => cy.get('[for*="gender-radio"]'),
		inputMobile: () => cy.get('#userNumber'),
		selectBirth: () => cy.get('#dateOfBirthInput'),
		selectYear: () => cy.get('.react-datepicker__year-select'),
		selectMoth: () => cy.get('.react-datepicker__month-select'),
		selectDay: () => cy.get('[class*="react-datepicker__day react-datepicker__day--"]:not([class$="outside-month"])'),
		inputSubjects: () => cy.get('#subjectsInput'),
		optionsSubjects: () => cy.get('[id*="react-select-2"]'),
		optionSubjectsText: () => cy.get('[class*="multi-value__label"]'),
		optionsHobbies: () => cy.get('[for*="hobbies-checkbox"]'),
		selectUpload: () => cy.get('#uploadPicture'),
		inputCurrentAddress: () => cy.get('#currentAddress'),
		selectState: () => cy.get('#state'),
		selectStateText: () => cy.get('.css-1uccc91-singleValue'),
		selectCity: () => cy.get('#city'),
		selectStateAndCityOptions: () => cy.get('[id*="option"]'),
		buttonSubmit: () => cy.get('#submit'),

		//result
		resultFirstName: () => cy.get('tbody tr td').eq(1),
		resultEmail: () => cy.get('tbody tr td').eq(3),
		resultGenders: () => cy.get('tbody tr td').eq(5),
		resultMobile: () => cy.get('tbody tr td').eq(7),
		resultBirth: () => cy.get('tbody tr td').eq(9),
		resultSubjects: () => cy.get('tbody tr td').eq(11),
		resultHobbies: () => cy.get('tbody tr td').eq(13),
		resultPicture: () => cy.get('tbody tr td').eq(15),
		resultAddress: () => cy.get('tbody tr td').eq(17),
		resultStateCity: () => cy.get('tbody tr td').eq(19)
	};
	typeFirthName(firstName: string) {
		this.get
			.inputFirstName()
			.type(firstName)
			.then(firstName1 => {
				Cypress.env('firstName', firstName1.val());
				//variables de ambiente de cypress
			});
	}
	typeLastName(lastName: string) {
		this.get.inputLastName().type(lastName);
	}
	typeEmail(email: string) {
		return formPage.get.inputEmail().type(email).invoke('val');
		//return
	}
	typeMobile(mobileIn: string) {
		formPage.get
			.inputMobile()
			.type(mobileIn)
			.then(mobile => {
				cy.wrap(mobile.val()).as('mobile1');
				//alias
			});
	}
	typeCurrentAddress(currentAddress: string) {
		return formPage.get.inputCurrentAddress().type(currentAddress).invoke('val');
	}

	selectRandomsGender() {
		const randomsGe = Cypress._.random(0, 2);
		this.get
			.optionsGenders()
			.eq(randomsGe)
			.click()
			.then(genero => {
				const dato = genero.text();
				Cypress.env('genders', dato);
			});
	}
	selectRandomHobbies() {
		const randomsHo = Cypress._.random(0, 2);
		this.get
			.optionsHobbies()
			.eq(randomsHo)
			.click()
			.then(hobbies1 => {
				const textHob = hobbies1.text();
				Cypress.env('hobbies', textHob);
			});
	}

	clickPicture() {
		this.get.selectUpload().selectFile('cypress/fixtures/images/upexlogo.png');
	}
	selectState() {
		this.get.selectState().click();
	}
	selectRandomState() {
		this.selectState();
		return this.get
			.selectStateAndCityOptions()
			.its('length')
			.then(cantElem => {
				const randomsSt = Cypress._.random(0, cantElem - 1);
				this.get.selectStateAndCityOptions().eq(randomsSt).click();
				return this.get.selectStateText().invoke('text');
			});
	}

	selectCity() {
		this.get.selectCity().click();
	}
	selectRandomCity() {
		this.selectCity();
		this.get
			.selectStateAndCityOptions()
			.its('length')
			.then(cantElem => {
				const randomsSt = Cypress._.random(0, cantElem - 1);
				this.get.selectStateAndCityOptions().eq(randomsSt).click();
			});
	}

	typeRandomsSubjects(letraRandom: string) {
		this.get.inputSubjects().type(letraRandom);
		this.get
			.optionsSubjects()
			.its('length')
			.then(cant => {
				const randomsSt1 = Cypress._.random(0, cant - 1);
				this.get.optionsSubjects().eq(randomsSt1).click();
				this.get
					.optionSubjectsText()
					.invoke('text')
					.then(subjects1 => {
						Cypress.env('subjects', subjects1);
					});
			});
	}
	clickDateBirth() {
		this.get.selectBirth().click();
	}

	selectRandomMonthBirth() {
		const randomM = Cypress._.random(0, 11);
		this.get.selectMoth().select(randomM);
	}

	selectRandomYearBirth() {
		this.get
			.selectYear()
			.find('option')
			.its('length')
			.then(cant => {
				const randomY = Cypress._.random(0, cant - 1);
				this.get.selectYear().select(randomY);
			});
	}

	selectRandomDayBirth() {
		this.get
			.selectDay()
			.its('length')
			.then(cant => {
				const randomD = Cypress._.random(0, cant - 1);
				this.get.selectDay().eq(randomD).click();
			});
	}

	clickSubmitButtons() {
		this.get.buttonSubmit().click();
	}
}
export const formPage = new FormPractice();

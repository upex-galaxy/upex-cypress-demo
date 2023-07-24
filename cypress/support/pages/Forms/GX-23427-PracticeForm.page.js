class Form {
	//getters
	get = {
		firstname: () => cy.get('#firstName'),
		lastname: () => cy.get('#lastName'),
		email: () => cy.get('#userEmail'),
		gender: () => cy.get('[class*="custom-radio"]'),
		genderRadio: () => this.get.gender().find('[id*="gender-radio"]'), //arreglo de tres posiciones -> male - female - other
		genderTag: () => this.get.gender().find('.custom-control-label'),
		mobilenumber: () => cy.get('#userNumber'),
		datepicker: () => cy.get('#dateOfBirthInput'),
		subjectsInput: () => cy.get('#subjectsInput'),
		subjectOptions: () => cy.get('[id^="react-select-2-option"]'),
		hobbieCheckbox: () => cy.get('[class*="custom-checkbox"]'), //arreglo de tres posiciones -> sports - reading - music
		checkboxButton: () => this.get.hobbieCheckbox().find('[type="checkbox"]'),
		checkboxTagnames: () => this.get.hobbieCheckbox().find('.custom-control-label'),
		pictureButton: () => cy.get('[type="file"]'),
		address: () => cy.get('#currentAddress'),
		stateButton: () => cy.get('#state .css-tlfecz-indicatorContainer'),
		cityButton: () => cy.get('#city .css-tlfecz-indicatorContainer'),
		statesAndCities: () => cy.get('[class$=-option]'),
		submitButton: () => cy.get('#submit'),
	};

	//actions - methods
	typeFirstname(randomFirst) {
		this.get.firstname().type(randomFirst);
	}

	typeLastname(randomLast) {
		this.get.lastname().type(randomLast);
	}

	typeEmail(randomEmail) {
		this.get.email().type(randomEmail);
	}

	//selecciona un género de manera aleatoria
	selectGender(randomGender) {
		this.get.gender().eq(randomGender).click();
	}

	typeMobileNumber(number) {
		this.get.mobilenumber().type(number);
	}

	//Nos da una fecha aleatoria del date picker
	currentDateSelector() {
		return this.get.datepicker().invoke('val');
	}

	//seleccionar un elemento de un dropdown list dinámico
	subjectsSelector(matching) {
		this.get.subjectsInput().type(matching);
		this.get.subjectOptions().then(i => {
			const r = Cypress._.random(0, i.length - 1);
			cy.wrap(i).eq(r).click();
		});
	}

	hobbieChecker(randomCheck) {
		this.get.hobbieCheckbox().eq(randomCheck).click();
	}

	uploadFile(file) {
		this.get.pictureButton().selectFile(file);
	}

	typeAddress(text) {
		this.get.address().type(text);
	}

	//DropDown Estático:: Selecciona un estado y luego una ciudad
	stateSelector(randomLocationByState) {
		this.get.stateButton().click();
		this.get.statesAndCities().eq(randomLocationByState).click({ force: true });
	}

	citySelector() {
		this.get.cityButton().click();
		this.get.statesAndCities().then(cityList => {
			const position = Cypress._.random(0, cityList.length - 1);
			cy.wrap(cityList).eq(position).click({ force: true });
		});
	}

	submitForm() {
		this.get.submitButton().click();
	}
}

export const form = new Form();

class Form {
	//getters
	get = {
		firstname: () => cy.get('#firstName'),
		lastname: () => cy.get('#lastName'),
		email: () => cy.get('#userEmail'),
		gender: () => cy.get('.custom-control.custom-radio.custom-control-inline'),
		genderRadio: () => this.get.gender().find('[id*="gender-radio"]'), //arreglo de tres posiciones -> male - female - other
		mobilenumber: () => cy.get('#userNumber'),
		datepicker: () => cy.get('#dateOfBirthInput'),
		subjectsInput: () => cy.get('#subjectsInput'),
		subjectOptions: () => cy.get('[id^="react-select-2-option"]'),
		hobbieCheckbox: () => cy.get('.custom-control.custom-checkbox.custom-control-inline'), //arreglo de tres posiciones -> sports - reading - music
		checkboxButton: () => this.get.hobbieCheckbox().find('[type="checkbox"]'),
		checkboxTagnames: () => this.get.hobbieCheckbox().find('[for^="hobbies-checkbox"]'),
		pictureButton: () => cy.get('[type="file"]'),
		address: () => cy.get('#currentAddress'),
		stateButton: () => cy.get('#state .css-tlfecz-indicatorContainer'),
		cityButton: () => cy.get('#city .css-tlfecz-indicatorContainer'),
		statesAndCities: () => cy.get('[class$=-option]'),
		submitButton: () => cy.get('#submit'),
		database: '', //-> variable que almacena datos temporales
	};

	//actions - methods
	typeFirstname(name) {
		this.get.firstname().type(name);
	}

	typeLastname(name) {
		this.get.lastname().type(name);
	}

	typeEmail(email) {
		this.get.email().type(email);
	}

	//selecciona un género de manera aleatoria
	selectGender() {
		this.get.genderRadio().then(genderArray => {
			const position = Cypress._.random(0, genderArray.length - 1);
			cy.wrap(genderArray).eq(position).click({ force: true });
			this.get.database = position;
		});
	}

	typeMobileNumber(number) {
		this.get.mobilenumber().type(number);
	}

	//Nos da una fecha aleatoria del date picker
	currentDateSelector() {
		return this.get.datepicker().invoke('val');
	}

	//seleccionar un elemento de un dropdown list dinámico
	subjectsSelector(wordMatching) {
		this.get.subjectsInput().type(wordMatching);
		this.get.subjectOptions().then(i => {
			const r = Cypress._.random(0, i.length - 1);
			cy.wrap(i).eq(r).click();
		});
	}

	//marca cualquier casilla de hobbies
	hobbieChecker() {
		this.get.checkboxButton().then(box => {
			const position = Cypress._.random(0, box.length - 1);
			cy.wrap(box).eq(position).check({ force: true }); //marca la casilla
			//guarda valor en la var database
			this.get.database = position;
			cy.log(this.get.database);
		});
	}

	uploadFile(file) {
		this.get.pictureButton().selectFile(file);
	}

	typeAddress(text) {
		this.get.address().type(text);
	}

	//DropDown Estático:: Selecciona un estado y luego una ciudad
	statecitySelector() {
		this.get.stateButton().click();
		this.get.statesAndCities().then(statesList => {
			const position = Cypress._.random(0, statesList.length - 1);
			cy.wrap(statesList).eq(position).click({ force: true });
		});

		//ahora selecciona una ciudad de un DDE
		this.get
			.cityButton()
			.click()
			.then(() => {
				this.get.statesAndCities().then(cityList => {
					const position = Cypress._.random(0, cityList.length - 1);
					cy.wrap(cityList).eq(position).click({ force: true });
				});
			});
	}

	submitForm() {
		this.get.submitButton().click();
	}
}

export const form = new Form();

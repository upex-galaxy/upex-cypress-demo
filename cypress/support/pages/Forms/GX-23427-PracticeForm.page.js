class Form {
	//getters
	get = {
		firstnameInput: () => cy.get('#firstName'),
		lastnameInput: () => cy.get('#lastName'),
		emailInput: () => cy.get('#userEmail'),
		genderButton: () => cy.get('[id*="gender-radio"]'), //arreglo de tres posiciones -> male - female - other
		mobilenumberInput: () => cy.get('#userNumber'),
		birthdatePicker: () => cy.get('#dateOfBirthInput'),
		subjectsInput: () => cy.get('#subjectsInput'),
		hobbieCheckbox: () => cy.get('#hobbiesWrapper [type="checkbox"]'), //arreglo de tres posiciones -> sports - reading - music
		pictureButton: () => cy.get('#uploadPicture'),
		addressInput: () => cy.get('#currentAddress'),
		stateInput: () => cy.get('#state'),
		cityInput: () => cy.get('#city'),
		submitButton: () => cy.get('#submit'),
	};

	//actions - methods
	typeFirstname(name) {
		this.get.firstnameInput().type(name);
	}

	typeLastname(name) {
		this.get.lastnameInput().type(name);
	}

	typeEmail(email) {
		this.get.emailInput().type(email);
	}

	//selecciona un género de manera aleatoria
	selectGender() {
		this.get.genderButton().then(genderElements => {
			const maxIndex = genderElements.length - 1;
			const position = Math.floor(Math.random() * maxIndex);
			cy.wrap(genderElements).eq(position).click({ force: true });
		});
	}

	typeMobileNumber(number) {
		this.get.mobilenumberInput().type(number);
	}

	//Nos da la fecha predeterminada del date picker
	getDefaultDate() {
		this.get
			.birthdatePicker()
			.invoke('val')
			.then(date => date.split(' ').join('-'));
	}

	typeSubjects(text) {
		this.get.subjectsInput().type(text);
	}

	//marca cualquier casilla de hobbie
	checkTheHobbie() {
		this.get.hobbieCheckbox().then($box => {
			const maxIndex = $box.length - 1;
			const position = () => Math.floor(Math.random * maxIndex);
			cy.wrap($box).eq(position).check({ force: true });
		});
	}

	clickPictureButton() {
		this.get.pictureButton().click();
	}

	typeAddress(text) {
		this.get.addressInput().type(text);
	}

	typeCity(text) {
		this.get.cityInput().type(text);
	}

	typeState(text) {
		this.get.stateInput().type(text);
	}

	submitForm() {
		this.get.submitButton().click();
	}
}

export const form = new Form();

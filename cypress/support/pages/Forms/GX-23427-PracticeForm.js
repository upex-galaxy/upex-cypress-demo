class Form {
	//getters
	get = {
		firstnameInput: () => cy.get('#firstName'),
		lastnameInput: () => cy.get('[#lastName'),
		emailInput: () => cy.get('#userEmail'),
		genderButton: () => cy.get('[name*="gender"]'), //arreglo de tres posiciones -> male - female - other
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
	typeFirstname(randomFirstname) {
		this.get.firstnameInput.type(randomFirstname);
	}

	typeLastname(randomLastname) {
		this.get.lastnameInput.type(randomLastname);
	}

	typeEmail(randomEmail) {
		this.get.emailInput.type(randomEmail);
	}

	selectGender() {
		this.get.genderButton.then($genderElements => {
			const maxIndex = $genderElements.length - 1;
			const position = () => Math.floor(Math.random * maxIndex);
			cy.wrap($genderElements).eq(position).click();
		});
	}

	typeMobileNumber(number) {
		this.get.mobilenumberInput.type(number);
	}

	selectBirthdatePicker() {
		this.get.birthdatePicker;
	}

	typeSubjects(text) {
		this.get.subjectsInput.type(text);
	}

	typeAddress(text) {
		this.get.addressInput.type(text);
	}

	typeCity(text) {
		this.get.cityInput.type(text);
	}

	typeState(text) {
		this.get.stateInput.type(text);
	}

	//En progreso de construcción
	checkTheHobbie() {
		this.get.hobbieCheckbox.then($box => {
			const maxIndex = $box.length - 1;
			const position = () => Math.floor(Math.random * maxIndex);
			cy.wrap($box).eq(position).check();
		});
	}

	clickPictureButton() {
		this.get.pictureButton.click();
	}

	submitForm() {
		this.get.submitButton.click();
	}
}

export const form = new Form();

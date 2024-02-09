class Form {
	get = {
		firstName : () => cy.get('#firstName'),
		lastName : () => cy.get('#lastName'),
		email : () => cy.get('#userEmail'),
		mobile : () => cy.get('#userNumber'),
		subjects : () => cy.get('#subjectsInput'),
		currentAddress : () => cy.get('#currentAddress'),
		gender : () => cy.get('.custom-radio'),
		hobbies : () => cy.get('.custom-checkbox'),
		uploadFile : () => cy.get('#uploadPicture'),
		state : () => cy.get('#state'),
		city : () => cy.get('#city'),
		stateAndCityOptions : () => cy.get('[class$=option]'),
		submitButton : () => cy.get('#submit'),
	};

	completeInputs(firstName, lastName, email, mobile, subjects, address) {
		this.get.firstName().clear().type(firstName);
		this.get.lastName().clear().type(lastName);
		this.get.email().clear().type(email);
		this.get.mobile().clear().type(mobile);
		this.get.subjects().type(subjects);
		this.get.currentAddress().clear().type(address);
	}
	selectGender() {
		return this.get.gender().its('length').then(optionsCount => {
			const randomOption = Math.floor(Math.random() * optionsCount);
			return this.get.gender().eq(randomOption).click();
		});
	}
	selectOneHobbie() {
		return this.get.hobbies().its('length').then(optionsCount => {
			const randomOption = Math.floor(Math.random() * optionsCount);
			return this.get.hobbies().eq(randomOption).click();
		});
	}
	selectAllHobbies() {
		return this.get.hobbies().then($options => {
			$options.each((index,hobbie) => {
				cy.wrap(hobbie).click();
			});
		});
	}
	selectFile() {
		this.get.uploadFile().selectFile('cypress/fixtures/images/upexlogo.png');
	}
	selectState() {
		this.get.state().click();
		this.get.stateAndCityOptions().its('length').then(optionsCount => {
			const randomOption = Math.floor(Math.random() * optionsCount);
			return this.get.stateAndCityOptions().eq(randomOption).click({force:true});
		});
	}
	selectCity() {
		this.get.city().click();
		this.get.stateAndCityOptions().its('length').then(optionsCount => {
			const randomOption = Math.floor(Math.random() * optionsCount);
			return this.get.stateAndCityOptions().eq(randomOption).click({force:true});
		});
	}
	submitForm() {
		this.get.submitButton().click({force:true});
	}


}
export const formPage = new Form();
import { faker } from '@faker-js/faker';


class ToolsForms {
	elements = {
		firstNameInput: () => cy.get('#firstName'),
		lastNameInput: () => cy.get('#lastName'),
		emailInput: () => cy.get('#userEmail'),
		
		radioButton1: () => cy.get('#gender-radio-1'),
		radioButton2: () => cy.get('#gender-radio-2'),
		radioButton3: () => cy.get('#gender-radio-3'),

		phoneNumberInput: () => cy.get('#userNumber'),
		dataPicker: () => cy.get('#dateOfBirthInput'),
		yearPicker: () => cy.get('.react-datepicker__year-select'),
		monthPicker: () => cy.get('.react-datepicker__month-select'),
		dayPicker: () => cy.get('.react-datepicker__day-name'),
		subjectsInput: () => cy.get('#subjectsContainer'),
		
		hobbiesCheck1: () => cy.get('#hobbies-checkbox-1'),
		hobbiesCheck2: () => cy.get('#hobbies-checkbox-2'),
		hobbiesCheck3: () => cy.get('#hobbies-checkbox-3'),
		uploadButton: () => cy.get('#uploadPicture'),
		addressInput: () => cy.get('#currentAddress'),
		stateSelect: () => cy.get('#state'),
		citySelect: () => cy.get('#city'),
		submitButton: () => cy.get('#submit'),
		closeButton: () => cy.get('#closeLargeModal'),
	};

	randomData() {
		const firstName = faker.name.firstName();
		const lastName = faker.name.lastName();
		const email = faker.internet.email();
		//const gender = faker.helpers.arrayGender([ radioButton1, radioButton2, radioButton3 ]);
		const phoneNumber = faker.phone.number().replace(/\D/g, '');
		
		//const dateOfBirth = faker.date.between('1950-01-01', '2002-12-31').toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

		const subjects = faker.lorem.paragraph();
		// const hobbiesCheck = faker.helpers.arrayHobbies([ hobbiesCheck1, hobbiesCheck2, hobbiesCheck3 ]);
		const addressInput = faker.address.city();

		
		this.elements.firstNameInput().type(firstName);
		this.elements.lastNameInput().type(lastName);
		this.elements.emailInput().type(email);
		
		// if (gender === radioButton1) {
		// 	this.elements.radioButton1().check();
		// } else if (gender === radioButton2) {
		// 	this.elements.radioButton2().check();
		// } else {
		// 	this.elements.radioButton3().check();
		// }
		
		this.elements.phoneNumberInput().type(phoneNumber);

		//this.elements.dataPicker().type(dateOfBirth); //funciona a medias,escribe la fecha pero despues de la que tiene por defecto
		//this.elements.dataPicker().clear().type(dateOfBirth);
		// const datePicker = this.elements.datePicker();
		// datePicker.clear();
		// datePicker.as('datePickerInput');
		// cy.get('@datePickerInput').type(dateOfBirth);


		//this.elements.dataPicker().clear().type(dateOfBirth);
		this.elements.subjectsInput().type(subjects);
		this.elements.addressInput().type(addressInput);
	}

	selectGender() {
		this.elements.radioButton1().check({ force: true });
	}

	selectHobbie() {
		this.elements.hobbiesCheck2().check({ force: true });
	}

	selectUploadPicture(picture) {
		this.elements.uploadButton().click();
		this.elements.uploadButton().selectFile(picture);
	}

	selectState(){
		this.elements.stateSelect().click();
		cy.get('#react-select-3-option-0').click();
	}

	selectCity(){
		this.elements.citySelect().click();
		cy.get('#react-select-4-option-0').click();
	}

	submitCreate(){
		this.elements.submitButton().click({ force: true });
	}	

	closeClick(){
		this.elements.closeButton().click();
	}	

}

export const toolsForms = new ToolsForms();
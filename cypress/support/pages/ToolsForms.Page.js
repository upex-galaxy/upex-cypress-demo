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
		datePicker: () => cy.get('#dateOfBirthInput'),
		calendar: () => cy.get('div[ class= "react-datepicker__month-container" ]'),
		yearPicker: () => cy.get('.react-datepicker__year-select'),
		monthPicker: () => cy.get('.react-datepicker__month-select'),
		dayPicker: () => cy.get('.react-datepicker__day-name'),
		//subjectsInput: () => cy.get('#subjectsContainer'),
		subjectsInput: () => cy.get('#subjectsInput'),
		
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
		const phoneNumber = faker.phone.number().replace(/\D/g, '');
		//const subjects = faker.helpers.arrayElement(['a', 'b', 'c']);
		const addressInput = faker.address.city();
	
		this.elements.firstNameInput().type(firstName);
		this.elements.lastNameInput().type(lastName);
		this.elements.emailInput().type(email);
		this.elements.phoneNumberInput().type(phoneNumber);
		this.elements.subjectsInput().type('a');
		cy.get('.subjects-auto-complete__menu-list').contains('Arts').click();
		this.elements.addressInput().type(addressInput);
		
	}
	selectBirth() {
		this.elements.datePicker().click();
		this.elements.calendar().within(() => {
			const year = faker.random.number({ min: 1950, max: 2002 });
			const month = faker.date.monthName().substring(0, 3);
			const day = faker.random.number({ min: 1, max: 28 });
			// selecciono los elementos
			this.elements.yearPicker().then($year => {
				cy.wrap(year).select(`${year}`);
			});
			this.elements.monthPicker().then($month => {
				cy.wrap(month).select(`${month}`);
			});
			this.elements.dayPicker().then($day => {
				cy.wrap(day).type(`${day}`);
			});

		});
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
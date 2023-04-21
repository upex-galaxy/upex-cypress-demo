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
		dayPicker: () => cy.get('.react-datepicker__day'),
		monthOutside: () => cy.get('.react-datepicker__day--outside-month'),
		selectYear: () => cy.get('select[class*="year-select"]'),
		selectMonth: () => cy.get('select[class*="month-select"]'),

		subjectsInput: () => cy.get('#subjectsInput'),
		subjectList: () => cy.get('.subjects-auto-complete__menu-list'),
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
		const addressInput = faker.address.city();
	
		this.elements.firstNameInput().type(firstName);
		this.elements.lastNameInput().type(lastName);
		this.elements.emailInput().type(email);
		this.elements.phoneNumberInput().type(phoneNumber);
		this.elements.subjectsInput().type('a');
		this.elements.subjectList().contains('Arts').click();
		this.elements.addressInput().type(addressInput);
		
	}
	selectBirth() {
		//Option 1: use faker
		this.elements.datePicker().click();
		this.elements.calendar().within(() => {
			// Generate random 
			const year = faker.datatype.number({ min: 1900, max: 2022 });
			const month = faker.date.month();
			const day = faker.datatype.number({ min: 1, max: 28 });
			// Select year month and day
			this.elements.yearPicker().select(year.toString());
			this.elements.monthPicker().select(month);
			cy.get(`div.react-datepicker__day:not(.react-datepicker__day--disabled)[aria-label*="${day}"]:not(.react-datepicker__day--outside-month)`)
				.first()
				.wait(2000)
				.click();
		});
		//Option 2: use cypress random
		// this.elements.datePicker().click();
		// this.elements.selectYear().children().its('length')
		// 	.then(years => Cypress._.random(0, years - 1))
		// 	.then(randomYear => {
		// 		this.elements.selectYear().select(randomYear);
		// 	});
		// this.elements.selectMonth().then($month => {
		// 	const months = $month.children().its('length');
		// 	const randomMonth = Cypress._.random(0, months - 1);
		// 	cy.wrap($month).select(randomMonth);

		// 	this.elements.calendar().within(() => {
		// 		const day = Cypress._.random(1, 28);
		// 		cy.get(`div.react-datepicker__day:not(.react-datepicker__day--disabled)[aria-label*="${day}"]:not(.react-datepicker__day--outside-month)`)
		// 			.first()
		// 			.should('be.visible')
		// 			.wait(2000)
		// 			.click({ force: true });
		// 	});
		// });

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
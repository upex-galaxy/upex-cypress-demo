
class Form {
	get = {
		firstNameInput: () => cy.get('#firstName'),
		lastNameInput: () => cy.get('#lastName'),
		emailInput: () => cy.get('#userEmail'),
		genderContain: () => cy.get('.custom-control.custom-radio.custom-control-inline'),
		movilNumber: () => cy.get('#userNumber'),
		calendar: () => cy.get('#dateOfBirthInput'),
		year: () => cy.get('.react-datepicker__year-select'),
		month: () => cy.get('.react-datepicker__month-select'),
		day: () => cy.get('.react-datepicker__week'),
		subjectsInput: () => cy.get('#subjectsInput'),
		hobbies: () => cy.get('.custom-control.custom-checkbox.custom-control-inline'),
		picture: () => cy.get('.form-control-file'),
		addressInput: () => cy.get('#currentAddress')
	};
	firstNameField(name) {
		this.get.firstNameInput().type(name);
	}
	lastNameField(name) {
		this.get.lastNameInput().type(name);
	}
	emailField(email) {
		this.get.emailInput().type(email);
	}
	selectGenderOption() {
		const randomIndex = Math.floor(Math.random() * 3);
		this.get.genderContain().eq(randomIndex).click();
	}
	RandomPhoneNumber() {
		const minPhoneNumber = 1000000000;
		const maxPhoneNumber = 9999999999;
		const randomNumber = Math.floor(Math.random() * (maxPhoneNumber - minPhoneNumber + 1)) + minPhoneNumber;
		return randomNumber.toString();
	}
	numberField(number) {
		this.get.movilNumber().type(number);
	}
	dateOfBirth() {
		this.get.calendar().click();
	}
	selectYear() {
		cy.get('.react-datepicker__year-select', { timeout: 15000 })
			.should('exist')
			.then($select => {
				const $options = $select.find('option');
				const randomIndex = Math.floor(Math.random() * $options.length);
				const selectedValue = $options[ randomIndex ].value;
				cy.wrap($select).select(selectedValue);
			});
	}
	selectMonth() {
		cy.get('.react-datepicker__month-select', { timeout: 15000 })
			.should('exist')
			.then($select => {
				const $options = $select.find('option');
				const randomIndex = Math.floor(Math.random() * $options.length);
				const selectedValue = $options[ randomIndex ].value;
				cy.wrap($select).select(selectedValue);
			});
	}
	selectDay() {
		cy.get('.react-datepicker__day[tabindex]', { timeout: 15000 })
			.should('be.visible')
			.then($days => {
				const randomIndex = Math.floor(Math.random() * $days.length);
				const $randomDay = $days.eq(randomIndex);
				$randomDay.click();
			});
	}
	writeSubjects() {
		const subjectsText = 'Math, literature and science.';
		this.get.subjectsInput().type(subjectsText);
	}
	selectHobbies() {
		const randomIndex = Math.floor(Math.random() * 3);
		this.get.hobbies().eq(randomIndex).click();
	}
	selectFile() {
		this.get.picture().click();
		cy.get('.form-control-file').selectFile('cypress/fixtures/images/upexlogo.png', { force: true });
	}
	CurrentAddress(address) {
		this.get.addressInput().type(address);

	}
}
export const form = new Form();
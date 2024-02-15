class PracticeForm {
	constructor() {
		this.nameInput = () => cy.get('input#firstName');
		this.lastnameInput = () => cy.get('input#lastName');
		this.emailInput = () => cy.get('input#userEmail');
		this.genderSelection = () => cy.get('input[type="radio"]');
		this.mobileInput = () => cy.get('input#userNumber'); // 10 digits without - . or x
		this.subjectInput = () => cy.get('div.subjects-auto-complete__value-container');
		this.datePicker = () => cy.get('input#dateOfBirthInput');
		this.dateMonth = () => cy.get('.react-datepicker__month-select');
		this.dateYear = () => cy.get('.react-datepicker__year-select');
		this.selectorYear = () => cy.get('.react-datepicker__current-month');
		this.dateDay = () => cy.get('.react-datepicker__day');
		this.inputSubject = () => cy.get('#subjectsInput');
		this.hobbiesCheckBox = () => cy.get('#hobbiesWrapper input[type="checkbox"]');
		this.pictureSelector = () => cy.get('input#uploadPicture');
		this.btnSubmit = () => cy.get('button#submit');
		this.address = () => cy.get('textarea#currentAddress');
		this.state = () => cy.get('#state');
		this.city = () => cy.get('#city');
		this.menuWrapper = () => cy.get('.css-26l3qy-menu'); //wrapper class

		this.tableTd = () => cy.get('tbody tr td');
	}
	insertName(name) {
		this.nameInput().type(name);
	}
	insertLastname(lastname) {
		this.lastnameInput().type(lastname);
	}
	insertEmail(email) {
		this.emailInput().type(email);
	}

	selectGender(randomNumber) {
		this.genderSelection().eq(randomNumber).check({ force: true });
	}

	insertMobile(number) {
		// number = number
		// 	.replace(/[-()\.]/g, '')
		// 	.trim();
		this.mobileInput().type(number);
	}

	clickDatepicker() {
		this.datePicker().click();
	}
	selectMonth(month) {
		this.dateMonth().select(month);
	}
	selectYear(year) {
		this.dateYear().select(year);
	}

	selectDay(day) {
		this.dateDay().contains(day).click();
	}

	selectDate(month, year, day) {
		this.clickDatepicker();
		this.selectMonth(month);
		this.selectYear(year);
		this.selectDay(day);
	}

	insertSubject(value) {
		cy.wrap(value).each(subject => {
			this.inputSubject().type(subject);
			this.menuWrapper().within(() => {
				cy.contains(subject).click(); // Click subject
			});
		});
	}

	selectHobby(randomNumber) {
		this.hobbiesCheckBox().eq(randomNumber).check({ force: true });
	}

	unploadPicture() {
		this.pictureSelector().selectFile('cypress/fixtures/images/upexlogo.png');
	}

	insertAdress(location) {
		this.address().type(location);
	}

	selectState() {
		this.state().click();

		// the injected options wrapper
		this.menuWrapper().within(() => {
			cy.contains('Uttar Pradesh').click(); // select an specific state option
		});
	}

	selectCity() {
		this.city().click();

		this.menuWrapper().within(() => {
			cy.contains('Lucknow').click(); // select an specific city option
		});
	}

	clickBtnSubmit() {
		this.btnSubmit().click({ force: true });
	}
}

export const practiceForm = new PracticeForm();

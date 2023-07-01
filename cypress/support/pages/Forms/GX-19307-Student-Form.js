import the from '../../../fixtures/data/GX-19307-Student-Form.json';

class StudentForm {
	get = {
		FirstName: () => cy.get('#firstName'),
		LastName: () => cy.get('#lastName'),
		Email: () => cy.get('#userEmail'),
		AllGender: () => cy.get('input[type="radio"]'),
		Gender: () => cy.get('div[class^="custom-control"]'),
		Mobile: () => cy.get('#userNumber'),
		DateOfBirth: () => cy.get('#dateOfBirthInput'),
		Day: () => cy.get('[role="listbox"] [class*="datepicker__day"]:not([class$="outside-month"])'),
		Month: () => cy.get('.react-datepicker__month-select'),
		Year: () => cy.get('.react-datepicker__year-select'),
		Subjects: () => cy.get('#subjectsContainer'),
		AllHobbies: () => cy.get('input[type="checkbox"]'),
		Hobby: () => cy.get('div[class^="custom-control"]'),
		Picture: () => cy.get('input[type="file"]'),
		CurrentAddress: () => cy.get('#currentAddress'),
		State: () => cy.get('#state'),
		StateOpt1: () => cy.get('#react-select-3-option-0'),
		City: () => cy.get('#city'),
		CityOpt1: () => cy.get('#react-select-4-option-0'),
		Submit: () => cy.get('#submit'),
		SubmitTable: () => cy.get('.table-responsive table tbody tr td'),
		TableStudentName: () => this.get.SubmitTable().eq(the.assertions.StudentName.TableData),
		TableStudentEmail: () => this.get.SubmitTable().eq(the.assertions.StudentEmail.TableData),
		TableGender: () => this.get.SubmitTable().eq(the.assertions.Gender.TableData),
		TableMobile: () => this.get.SubmitTable().eq(the.assertions.Mobile.TableData),
		TableDateOfBirth: () => this.get.SubmitTable().eq(the.assertions.Date.TableData),
		TableSubjects: () => this.get.SubmitTable().eq(the.assertions.Subjects.TableData),
		TableHobbies: () => this.get.SubmitTable().eq(the.assertions.Hobbies.TableData),
		TablePicture: () => this.get.SubmitTable().eq(the.assertions.Picture.TableData),
		TableAddress: () => this.get.SubmitTable().eq(the.assertions.Address.TableData),
		TableStateAndCity: () => this.get.SubmitTable().eq(the.assertions.StateAndCity.TableData),
	};

	typeRandomFirstName(randomFirstName) {
		this.get.FirstName().type(randomFirstName);
	}

	typeRandomLastName(randomLastName) {
		this.get.LastName().type(randomLastName);
	}

	typeRandomEmail(randomEmail) {
		this.get.Email().type(randomEmail);
	}

	clickGender(randomGender) {
		this.get.Gender().eq(randomGender).click();
	}

	typeRandomMobile(randomMobile) {
		this.get.Mobile().type(randomMobile);
	}

	typeMobileWithLetters() {
		this.get.Mobile().type(the.data.Mobile.MobileWithLetters);
	}

	selectDay(randomDay) {
		this.get.DateOfBirth().click();
		this.get.Day().contains(randomDay).click();
	}

	selectMonth(randomMonth) {
		this.get.DateOfBirth().click();
		this.get
			.Month()
			.contains(randomMonth)
			.then($option => {
				const value = $option.val();
				this.get.Month().select(value);
			});
	}

	selectYear(stringYear) {
		this.get.DateOfBirth().click();
		this.get.Year().select(stringYear);
	}

	typeSubjects() {
		this.get.Subjects().type('Maths');
		cy.get('#react-select-2-option-0').click();
	}

	clickHobby(randomHobby) {
		this.get.Hobby().eq(randomHobby).click();
	}

	selectPicture() {
		this.get.Picture().click();
		this.get.Picture().selectFile('cypress/fixtures/images/upexlogo.png');
	}

	typeRandomCurrentAddress(randomCurrentAddress) {
		this.get.CurrentAddress().type(randomCurrentAddress);
	}

	selectState() {
		this.get.State().click();
		this.get.StateOpt1().click();
	}

	selectCity() {
		this.get.City().click();
		this.get.CityOpt1().click();
	}

	submitButton() {
		this.get.Submit().click();
	}
}
export const studentForm = new StudentForm();

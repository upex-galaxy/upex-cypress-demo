import { faker } from '@faker-js/faker';
import the from '../../../fixtures/data/GX-19307-Student-Form.json';
const Days = [];
for (let i = 1; i <= 28; i++) {
	Days.push(i.toString());
}
const Years = [];
for (let i = 1940; i <= 2023; i++) {
	Years.push(i.toString());
}

class StudentForm {
	get = {
		SubmitTable: () => cy.get('.table-responsive table tbody tr td'),
		FirstName: () => cy.get('#firstName'),
		LastName: () => cy.get('#lastName'),
		Email: () => cy.get('#userEmail'),
		AllGender: () => cy.get('#genterWrapper'),
		Gender: () => cy.get('div[class^="custom-control"]'),
		Mobile: () => cy.get('#userNumber'),
		DateOfBirth: () => cy.get('#dateOfBirthInput'),
		Day: () => cy.get('[role="listbox"] [class*="datepicker__day"]:not([class$="outside-month"])'),
		Month: () => cy.get('.react-datepicker__month-select'),
		Year: () => cy.get('.react-datepicker__year-select'),
		Subjects: () => cy.get('#subjectsContainer'),
		AllHobbies: () => cy.get('#hobbiesWrapper'),
		Hobby: () => cy.get('div[class^="custom-control"]'),
		Picture: () => cy.get('#uploadPicture'),
		CurrentAddress: () => cy.get('#currentAddress'),
		State: () => cy.get('#state'),
		StateOptions: () => cy.get('.css-11unzgr'),
		StateOpt1: () => cy.get('#react-select-3-option-0'),
		City: () => cy.get('#city'),
		CityOpt1: () => cy.get('#react-select-4-option-0'),
		CityOpt2: () => cy.get('#react-select-4-option-1'),
		CityOpt3: () => cy.get('#react-select-4-option-2'),
		Submit: () => cy.get('#submit'),
	};

	typeRandomFirstName() {
		const randomFirstName = faker.name.firstName();
		this.get.FirstName().type(randomFirstName);
		return randomFirstName;
	}

	typeRandomLastName() {
		const randomLastName = faker.name.lastName();
		this.get.LastName().type(randomLastName);
		return randomLastName;
	}

	typeRandomEmail() {
		const randomEmail = faker.internet.email();
		this.get.Email().type(randomEmail);
		return randomEmail;
	}

	clickGender() {
		const genderElement = this.get.Gender();
		const indiceAleatorio = Math.floor(Math.random() * the.array.Genders.length);
		const genderAleatorio = the.array.Genders[indiceAleatorio];
		genderElement.eq(genderAleatorio).click();
		return genderAleatorio;
	}

	typeRandomMobile() {
		const randomMobile = faker.phone.number('341#######');
		this.get.Mobile().type(randomMobile);
		return randomMobile;
	}

	typeMobileWithLetters() {
		this.get.Mobile().type(the.data.Mobile.MobileWithLetters);
	}

	selectDay() {
		this.get.DateOfBirth().click();
		const indiceAleatorio = Math.floor(Math.random() * Days.length);
		const dayAleatorio = Days[indiceAleatorio];
		this.get.Day().contains(dayAleatorio).click();
		return dayAleatorio;
	}

	selectMonth() {
		this.get.DateOfBirth().click();
		const indiceAleatorio = Math.floor(Math.random() * the.array.Months.length);
		const mesAleatorio = the.array.Months[indiceAleatorio];
		this.get.Month().select(mesAleatorio);
		return mesAleatorio;
	}

	selectYear() {
		this.get.DateOfBirth().click();
		const indiceAleatorio = Math.floor(Math.random() * Years.length);
		const añoAleatorio = Years[indiceAleatorio];
		this.get.Year().select(añoAleatorio);
		return añoAleatorio;
	}

	typeSubjects() {
		this.get.Subjects().type('Math');
		cy.get('#react-select-2-option-0').click();
	}

	clickHobby() {
		const hobbyElement = this.get.Hobby();
		const indiceAleatorio = Math.floor(Math.random() * the.array.Hobbies.length);
		const hobbiesAleatorio = the.array.Hobbies[indiceAleatorio];
		hobbyElement.eq(hobbiesAleatorio).click();
		return hobbiesAleatorio;
	}

	selectPicture() {
		this.get.Picture().click();
		this.get.Picture().selectFile('cypress/fixtures/images/upexlogo.png');
	}

	typeRandomCurrentAddress() {
		const randomCurrentAddress = faker.address.streetAddress();
		this.get.CurrentAddress().type(randomCurrentAddress);
		return randomCurrentAddress;
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

	assertionFirstName() {
		return this.get.SubmitTable().eq(the.assertions.StudentName.TableData);
	}

	assertionLastName() {
		return this.get.SubmitTable().eq(the.assertions.StudentName.TableData);
	}

	assertionEmail() {
		return this.get.SubmitTable().eq(the.assertions.StudentEmail.TableData);
	}

	assertionGender() {
		return this.get.SubmitTable().eq(the.assertions.Gender.TableData);
	}

	assertionMobile() {
		return this.get.SubmitTable().eq(the.assertions.Mobile.TableData);
	}

	assertionMonth() {
		return this.get.SubmitTable().eq(the.assertions.Date.TableData);
	}

	assertionYear() {
		return this.get.SubmitTable().eq(the.assertions.Date.TableData);
	}

	assertionDay() {
		return this.get.SubmitTable().eq(the.assertions.Date.TableData);
	}

	assertionSubjects() {
		return this.get.SubmitTable().eq(the.assertions.Subjects.TableData);
	}

	assertionHobbies() {
		return this.get.SubmitTable().eq(the.assertions.Hobbies.TableData);
	}

	assertionPicture() {
		return this.get.SubmitTable().eq(the.assertions.Picture.TableData);
	}

	assertionAddress() {
		return this.get.SubmitTable().eq(the.assertions.Address.TableData);
	}

	assertionState() {
		return this.get.SubmitTable().eq(the.assertions.StateAndCity.TableData);
	}

	assertionCity() {
		return this.get.SubmitTable().eq(the.assertions.StateAndCity.TableData);
	}
}
export const studentForm = new StudentForm();

import { faker } from '@faker-js/faker';
const Days = [];
for (let i = 1; i <= 31; i++) {
	Days.push(i.toString());
}
const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const Years = [];
for (let i = 1940; i <= 2023; i++) {
	Years.push(i.toString());
}
class StudentForm {
	visit = {
		endpoint: () => cy.visit('https://demoqa.com/automation-practice-form'),
	};

	get = {
		FirstName: () => cy.get('#firstName'),
		LastName: () => cy.get('#lastName'),
		Email: () => cy.get('#userEmail'),
		GenderMale: () => cy.get('#gender-radio-1'),
		GenderFemale: () => cy.get('#gender-radio-2'),
		GenderOther: () => cy.get('#gender-radio-3'),
		Mobile: () => cy.get('#userNumber'),
		DateOfBirth: () => cy.get('#dateOfBirthInput'),
		Day: () => cy.get('.react-datepicker-popper'),
		Month: () => cy.get('.react-datepicker__month-select'),
		Year: () => cy.get('.react-datepicker__year-select'),
		Subjects: () => cy.get('#subjectsContainer'),
		HobbySport: () => cy.get('#hobbies-checkbox-1'),
		HobbyReading: () => cy.get('#hobbies-checkbox-2'),
		HobbyMusic: () => cy.get('#hobbies-checkbox-3'),
		Picture: () => cy.get('#uploadPicture'),
		CurrentAddress: () => cy.get('#currentAddress'),
		State: () => cy.get('.css-19bqh2r').eq(0),
		StateOpt1: () => cy.get('#react-select-3-option-0'),
		StateOpt2: () => cy.get('#react-select-3-option-1'),
		StateOpt3: () => cy.get('#react-select-3-option-2'),
		StateOpt4: () => cy.get('#react-select-3-option-3'),
		City: () => cy.get('.css-19bqh2r').eq(1),
		CityOpt1: () => cy.get('#react-select-4-option-0'),
		CityOpt2: () => cy.get('#react-select-4-option-1'),
		CityOpt3: () => cy.get('#react-select-4-option-2'),
		Submit: () => cy.get('#submit'),
	};
	enterPage() {
		this.visit.endpoint();
	}
	typeRandomFirstName() {
		this.get.FirstName().type(faker.name.firstName());
	}

	typeRandomLastName() {
		this.get.LastName().type(faker.name.lastName());
	}

	typeRandomEmail() {
		this.get.Email().type(faker.internet.email());
	}

	clickGenderMale() {
		this.get.GenderMale().click();
	}

	clickGenderFemale() {
		this.get.GenderFemale().click();
	}

	clickGenderOther() {
		this.get.GenderOther().click();
	}

	typeRandomMobile() {
		this.get.Mobile().type(faker.phone.number());
	}

	selectDay() {
		this.get
			.DateOfBirth()
			.click()
			.then(() => {
				const indiceAleatorio = Math.floor(Math.random() * Days.length);
				const dayAleatorio = Days[indiceAleatorio];
				this.get.Day().contains(dayAleatorio).click({ force: true });
			});
	}

	selectMonth() {
		this.get
			.DateOfBirth()
			.click()
			.then(() => {
				const indiceAleatorio = Math.floor(Math.random() * Months.length);
				const mesAleatorio = Months[indiceAleatorio];
				this.get.Month().contains(mesAleatorio).click({ force: true });
			});
	}

	selectYear() {
		this.get
			.DateOfBirth()
			.click()
			.then(() => {
				const indiceAleatorio = Math.floor(Math.random() * Years.length);
				const añoAleatorio = Years[indiceAleatorio];
				this.get.Year().contains(añoAleatorio).click({ force: true });
			});
	}

	typeRandomSubjects() {
		this.get.Subjects().type(faker.lorem.sentences(2));
	}

	clickHobbySport() {
		this.get.HobbySport().click();
	}

	clickHobbyReading() {
		this.get.HobbyReading().click();
	}

	clickHobbyMusic() {
		this.get.HobbyMusic().click();
	}

	selectPicture() {
		this.get.Picture().click().and.selectFile('cypress/fixtures/images/upexlogo.png');
	}

	typeRandomCurrentAddress() {
		this.get.CurrentAddress().type(faker.address.streetAddress());
	}

	submitButton() {
		this.get.Submit().click();
	}
}
export const studentForm = new StudentForm();

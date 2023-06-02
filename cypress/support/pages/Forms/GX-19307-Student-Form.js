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
const States = ['NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan'];

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
		Day: () => cy.get('.react-datepicker__month'),
		Month: () => cy.get('.react-datepicker__month-select'),
		Year: () => cy.get('.react-datepicker__year-select'),
		Subjects: () => cy.get('#subjectsContainer'),
		HobbySport: () => cy.get('#hobbies-checkbox-1'),
		HobbyReading: () => cy.get('#hobbies-checkbox-2'),
		HobbyMusic: () => cy.get('#hobbies-checkbox-3'),
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

	enterPage() {
		this.visit.endpoint();
	}
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

	clickGenderMale() {
		this.get.GenderMale().click({ force: true });
	}

	clickGenderFemale() {
		this.get.GenderFemale().click({ force: true });
	}

	clickGenderOther() {
		this.get.GenderOther().click({ force: true });
	}

	typeRandomMobile() {
		const randomMobile = faker.phone.number('341#######');
		this.get.Mobile().type(randomMobile);
		return randomMobile;
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
		const indiceAleatorio = Math.floor(Math.random() * Months.length);
		const mesAleatorio = Months[indiceAleatorio];
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

	clickHobbySport() {
		this.get.HobbySport().click({ force: true });
	}

	clickHobbyReading() {
		this.get.HobbyReading().click({ force: true });
	}

	clickHobbyMusic() {
		this.get.HobbyMusic().click({ force: true });
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

	//selectState() {
	//	this.get.State().click();
	//	const indiceAleatorio = Math.floor(Math.random() * States.length);
	//	const stateAleatorio = States[indiceAleatorio];
	//	this.get.StateOptions().contains(stateAleatorio).click({ force: true });
	//	return stateAleatorio;
	//}

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

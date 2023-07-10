import { faker } from '@faker-js/faker';

class Slecetores {
	get = {
		FirstName: () => cy.get('#firstName'), //se debe usar .type() para ingresar info
		LastName: () => cy.get('#lastName'), //se debe usar .type() para ingresar info
		Email: () => cy.get('#userEmail'), //se debe usar .type() para ingresar info
		Gender: () => cy.get('div[class*="custom-radio"]'), //se debe manejar el rango 0 a 2 (para seleccionar genero)
		Mobile: () => cy.get('#userNumber'), //debe contener exactamente 10 dígitos para ser válido
		DateOfBirth: () => cy.get('#dateOfBirthInput'), //usar .click() para abrir el dropdown
		Month: () => cy.get('[class$="month-select"]'), // usar .select() rango 0 a 11 (para elegir el mes)
		Year: () => cy.get('[class$="year-select"]'), // usar .select() rango 1900 a 2100 (para elegir año)
		Day: () => cy.get('[class^="react-datepicker__day react-datepicker__day"]:not([class$="outside-month"])'), //usar .contains().click() para poder seleccionar el día
		Subjects: () => cy.get('#subjectsContainer'), // se debe usar .type() para ingresar un carácter, así se despliega un dropdown
		OptionSubjects: () => cy.get('[id^="react-select-2-option"]'), // para elegir una opción luego que se genera el dropdown al escribir
		Hobbies: () => cy.get('div[class*="custom-checkbox"]'), // se debe manejar el rango de 3 a 5 (para seleccionar hobbies)
		UploadFile: () => cy.get('#uploadPicture'), //usar .attachFile() para subir el archivo
		CurrentAddress: () => cy.get('#currentAddress'), // usar .type() para ingresar información
		State: () => cy.get('#state'), // se debe usar .click() para abrir el dropdown
		City: () => cy.get('#city'), // se debe usar .click() para abrir el dropdown
		OptionStateAndCity: () => cy.get('[class$="-option"]'), // se debe usar eq().click() para seleccionar la opción
		ButtonSubmit: () => cy.get('#submit'), // se debe usar .click() para activar el botón
		FormSubmitted: () => cy.get('.table-responsive table tbody tr td'),
	};

	EnterName() {
		const randomName = faker.name.firstName();
		this.get.FirstName().type(randomName);
		return randomName;
	}

	EnterLastName() {
		const randomLastName = faker.name.lastName();
		this.get.LastName().type(randomLastName);
		return randomLastName;
	}

	EnterEmail() {
		const randomEmail = faker.internet.email();
		this.get.Email().type(randomEmail);
		return randomEmail;
	}

	SelectGender() {
		const randomGender = faker.datatype.number({ min: 0, max: 2 });
		var Gender = {
			0: 'Male',
			1: 'Female',
			2: 'Other',
		};
		Cypress.env('genderSelect', Gender[randomGender]);
		this.get.Gender().eq(randomGender).click();
	}

	EnterMobile() {
		const randomMobile = faker.phone.number('##########');
		this.get.Mobile().type(randomMobile);
		return randomMobile;
	}

	SelectRandomDate() {
		const randomDate = faker.date.birthdate({ min: 1900, max: 2100 }).toString();
		const separarFecha = randomDate.split(' ', '4');
		const Month = separarFecha[1];
		const optionMonth = {
			Jan: 0,
			Feb: 1,
			Mar: 2,
			Apr: 3,
			May: 4,
			Jun: 5,
			Jul: 6,
			Aug: 7,
			Sep: 8,
			Oct: 9,
			Nov: 10,
			Dec: 11,
		};
		const selectMonth = optionMonth[Month];
		const Day = separarFecha[2];
		const selectDay = Number(Day);
		const Year = separarFecha[3];
		this.get.DateOfBirth().click();
		this.get.Month().select(selectMonth);
		this.get.Year().select(Year);
		this.get.Day().contains(selectDay).click();
		return Day + ' ' + Month + ' ' + Year;
	}

	EnterSubjects() {
		const randomSubjects = faker.random.alpha({ bannedChars: ['z', 'q', 'w', 'x', 'f', 'j', 'k', 'ñ'] });
		this.get.Subjects().type(randomSubjects);
		return randomSubjects;
	}

	SelectOptionSubjects() {
		let randomSubjects;
		return this.get.OptionSubjects().then(length => {
			randomSubjects = Cypress._.random(0, length.length - 1);
			this.get.OptionSubjects().eq(randomSubjects).click();
		});
	}

	SelectHobbies() {
		const randomHobbies = faker.datatype.number({ min: 0, max: 2 });
		const Hobbies = {
			0: 'Sports',
			1: 'Reading',
			2: 'Music',
		};
		Cypress.env('selectedHobbies', Hobbies[randomHobbies]);
		this.get.Hobbies().eq(randomHobbies).click();
	}

	ChooseFile(File) {
		this.get.UploadFile().attachFile(File);
	}

	EnterCurrentAddress() {
		const CurrentAddress = faker.address.streetAddress(true);
		this.get.CurrentAddress().type(CurrentAddress);
		return CurrentAddress;
	}

	SelectState() {
		let randomState;
		this.get.State().click();
		return this.get.OptionStateAndCity().then(length => {
			randomState = Cypress._.random(0, length.length - 1);
			this.get.OptionStateAndCity().eq(randomState).click({ force: true });
		});
	}

	SelectCity() {
		let randomCity;
		this.get.City().click();
		return this.get.OptionStateAndCity().then(length => {
			randomCity = Cypress._.random(0, length.length - 1);
			this.get.OptionStateAndCity().eq(randomCity).click({ force: true });
		});
	}

	clickSubmit() {
		this.get.ButtonSubmit().click();
	}
}

export const FillForm = new Slecetores();

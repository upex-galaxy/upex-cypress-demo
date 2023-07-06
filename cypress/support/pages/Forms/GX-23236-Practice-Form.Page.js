class Slecetores {
	get = {
		FirstName: () => cy.get('#firstName'), //se debe usar .type() para ingresar info
		LastName: () => cy.get('#lastName'), //se debe usar .type() para ingresar info
		Email: () => cy.get('#userEmail'), //se debe usar .type() para ingresar info
		Gender: () => cy.get('div[class^="custom-control"]'), //se debe manejar el rango 0 a 2 (para seleccionar genero)
		Mobile: () => cy.get('#userNumber'), //debe contener exactamente 10 dígitos para ser válido
		DateOfBirth: () => cy.get('#dateOfBirthInput'), //usar .click() para abrir el dropdown
		Month: () => cy.get('[class$="month-select"]'), // usar .select() rango 0 a 11 (para elegir el mes)
		Year: () => cy.get('[class$="year-select"]'), // usar .select() rango 1900 a 2100 (para elegir año)
		Day: () => cy.get('[class^="react-datepicker__day react-datepicker__day"]:not([class$="outside-month"])'), //usar .contains().click() para poder seleccionar el día
		Subjects: () => cy.get('#subjectsContainer'), // se debe usar .type() para ingresar un carácter, así se despliega un dropdown
		OptionSubjects: () => cy.get('[id="react-select-2-option-0"]'), // para elegir una opción luego que se genera el dropdown al escribir
		Hobbies: () => cy.get('div[class^="custom-control"]'), // se debe manejar el rango de 3 a 5 (para seleccionar hobbies)
		UploadFile: () => cy.get('#uploadPicture'), //usar .attachFile() para subir el archivo
		CurrentAddress: () => cy.get('#currentAddress'), // usar .type() para ingresar información
		State: () => cy.get('#state'), // se debe usar .click() para abrir el dropdown
		City: () => cy.get('#city'), // se debe usar .click() para abrir el dropdown
		OptionStateAndCity: () => cy.get('[class$="-option"]'), // se debe usar eq().click() para seleccionar la opción
		ButtonSubmit: () => cy.get('#submit'), // se debe usar .click() para activar el botón
	};

	EnterName(randomName) {
		this.get.FirstName().type(randomName);
	}

	EnterLastName(randomLastName) {
		this.get.LastName().type(randomLastName);
	}

	EnterEmail(randomEmail) {
		this.get.Email().type(randomEmail);
	}

	SelectGender(randomGender) {
		this.get.Gender().eq(randomGender).click();
	}

	EnterMobile(randomMobile) {
		this.get.Mobile().type(randomMobile);
	}

	EnterSubjects(randomSubjects) {
		this.get.Subjects().type(randomSubjects);
	}

	SelectOptionSubjects(randomOption) {
		this.get.SelectOptionSubjects().eq(randomOption).click();
	}

	SelectHobbies(randomHobbies) {
		this.get.Hobbies().eq(randomHobbies).click();
	}

	ChooseFile(File) {
		this.get.UploadFile().attachFile(File);
	}

	EnterCurrentAddress(Info) {
		this.get.CurrentAddress().type(Info);
	}

	SelectState(randomState) {
		this.get.State().click();
		this.get.OptionStateAndCity().eq(randomState).click({ force: true });
	}

	SelectCity(randomCity) {
		this.get.City().click();
		this.get.OptionStateAndCity().eq(randomCity).click({ force: true });
	}

	clickSubmit() {
		this.get.ButtonSubmit().click();
	}
}

export const FillForm = new Slecetores();

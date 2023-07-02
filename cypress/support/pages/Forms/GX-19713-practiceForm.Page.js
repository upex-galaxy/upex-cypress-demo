class Formulario {
	get = {
		inputName: () => cy.get('[id="firstName"]'),
		inputLastName: () => cy.get('[id="lastName"]'),
		inputMail: () => cy.get('[id="userEmail"]'),
		buttonDate: () => cy.get('[id="dateOfBirthInput"]'),
		inputNumber: () => cy.get('[id="userNumber"]'),
		buttonGenero: () => cy.get('div[class*="custom-control-inline"]'),
		inputSubject: () => cy.get('[id="subjectsContainer"]'),
		buttonHobbie: () => cy.get('div[class*="custom-control-inline"]'),
		buttonUpload: () => cy.get('input[id="uploadPicture"]'),
		inputAddress: () => cy.get('[id="currentAddress"]'),
		inputState: () => cy.get('[class=" css-1hwfws3"]').first(),
		inputCity: () => cy.get('[class=" css-1hwfws3"]').eq(1),
		buttonSubmit: () => cy.get('[id="submit"]'),
	};

	typeName(randomName) {
		randomName && this.get.inputName().type(randomName);
	}
	typeLastName(randomLastName) {
		randomLastName && this.get.inputLastName().type(randomLastName);
	}
	typeEmail(randomEmail) {
		randomEmail && this.get.inputMail().type(randomEmail);
	}
	typeNumber(randomNumber) {
		randomNumber && this.get.inputNumber().type(randomNumber);
	}
	clickGenero(num) {
		this.get.buttonGenero().eq(num).click();
	}
	typeSubject(randomSubject) {
		randomSubject && this.get.inputSubject().type(randomSubject + '{enter}');
	}
	clickHobbie(num) {
		this.get.buttonHobbie().eq(num).click();
	}
	clickUpload() {
		this.get.buttonUpload().selectFile('cypress/fixtures/images/upexlogo.png');
	}
	typeAddress(randomAddress) {
		randomAddress && this.get.inputAddress().type(randomAddress);
	}
	typeState(state) {
		this.get.inputState().type(state + '{enter}');
	}
	typeCity(city) {
		this.get.inputCity().type(city + '{enter}');
	}
	clickSubmit() {
		this.get.buttonSubmit().click();
	}
	clickDate() {
		this.get.buttonDate().click();
		cy.get('[class="react-datepicker"]').within(() => {
			cy.get('[role="option"]').then($elements => {
				const randomIndex = Cypress._.random(0, $elements.length - 41);
				cy.wrap($elements.eq(randomIndex)).click();
			});
		});
	}
}
export const form = new Formulario();

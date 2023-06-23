describe('20690 | ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Precondition: visit Demo QA page in text box seccion', () => {
		cy.visit('https://demoqa.com/text-box'), cy.url().should('contains', 'text-box');
	});
});

it('TC1: Validate that if all fields are filled correctly the submit is succefully', () => {
	cy.fixture('data/datatests20690').then(the => {
		cy.get(the.fullName.input).type(the.fullName.validName);
		cy.get(the.email.input).type(the.email.validEmail);
		cy.get(the.currentAdress.input).type(the.currentAdress.validCurrentAdress);
		cy.get(the.permanentAdress.input).type(the.permanentAdress.validPermanentAdress);

		cy.get(the.submitButton).click();
		cy.contains(the.nameText).should('be.visible');
		cy.contains(the.emailText).should('be.visible');
		cy.contains(the.currentAdressText).should('be.visible');
		cy.contains(the.permanentAdressText).should('be.visible');
	});
});

it('TC2: Validate that if all fields are empty when user clicks "submit", no message is shown', () => {
	cy.get;
});

it('TC3: Validate that Email field is invalid when does not contains “@” character', () => {
	cy.get;
});

it('TC4: Validate that Email field is invalid when does not contains min 1 alphanumeric character before “@“', () => {
	cy.get;
});

it('TC5: Validate that Email field is invalid when does not contains min 1 alphanumeric character after “@“', () => {
	cy.get;
});

it('TC6: Validate that Email field is invalid when does not contains “.“ after 1 alphanumeric character after “@“', () => {
	cy.get;
});

it('TC7: Validate that Email field is invalid when does not contains (minimum) 2 alphanumeric characters after “.”', () => {
	cy.get;
});

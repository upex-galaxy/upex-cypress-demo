//const { data } = require('cypress/types/jquery');
//const the = require('../../../fixtures/data/datatests20690.json');

describe('20690 | ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Precondition: visit Demo QA page in text box seccion', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});

	it('TC1: Validate that if all fields are filled correctly the submit is succefully', () => {
		cy.fixture('data/datatests20690').then(the => {
			cy.get(the.fullName.input).should('be.empty');
			cy.get(the.fullName.input).type(the.fullName.validName);
			cy.get(the.fullName.input).should('have.value', the.fullName.validName);
			cy.get(the.email.input).should('have.attr', 'placeholder', 'name@example.com');
			cy.get(the.email.input).type(the.email.validEmail);
			cy.get(the.email.input).should('have.value', the.email.validEmail);
			cy.get(the.currentAdress.input).should('be.empty');
			cy.get(the.currentAdress.input).type(the.currentAdress.validCurrentAdress);
			cy.get(the.currentAdress.input).should('have.value', the.currentAdress.validCurrentAdress);
			cy.get(the.permanentAdress.input).should('be.empty');
			cy.get(the.permanentAdress.input).type(the.permanentAdress.validPermanentAdress);
			cy.get(the.permanentAdress.input).should('have.value', the.permanentAdress.validPermanentAdress);

			cy.get(the.submitButton).click();
			cy.get(the.nameText).should('contain', the.fullName.validName);
			cy.get(the.emailText).should('contain', the.email.validEmail);
			cy.get(the.currentAdressText).should('contain', the.currentAdress.validCurrentAdress);
			cy.get(the.permanentAdressText).should('contain', the.permanentAdress.validPermanentAdress);
		});
	});

	it('TC2: Validate that if all fields are empty when user clicks "submit", no message is shown', () => {
		cy.fixture('data/datatests20690').then(the => {
			cy.get(the.fullName.input).should('be.empty');
			cy.get(the.email.input).should('be.empty');
			cy.get(the.currentAdress.input).should('be.empty');
			cy.get(the.permanentAdress.input).should('be.empty');

			cy.get(the.submitButton).click();
			cy.get(the.nameText).should('not.exist');
			cy.get(the.emailText).should('not.exist');
			cy.get(the.currentAdressText).should('not.exist');
			cy.get(the.permanentAdressText).should('not.exist');
		});
	});

	it('TC3: Validate that Email field is invalid when does not contains “@” character', () => {
		cy.fixture('data/datatests20690').then(the => {
			cy.get(the.email.input).should('be.empty');
			cy.get(the.email.input).type(the.email.invalidEmail1);
			cy.get(the.email.input).should('have.value', the.email.invalidEmail1);

			cy.get(the.submitButton).click();
			cy.get(the.email.input).should('have.css', '255');
		});
	});

	it('TC4: Validate that Email field is invalid when does not contains min 1 alphanumeric character before “@“', () => {
		cy.fixture('data/datatests20690').then(the => {
			cy.get(the.email.input).should('be.empty');
			cy.get(the.email.input).type(the.email.invalidEmail2);
			cy.get(the.email.input).should('have.value', the.email.invalidEmail2);

			cy.get(the.submitButton).click();
			cy.get(the.email.input).should('have.css', '255');
		});
	});

	it('TC5: Validate that Email field is invalid when does not contains min 1 alphanumeric character after “@“', () => {
		cy.fixture('data/datatests20690').then(the => {
			cy.get(the.email.input).should('be.empty');
			cy.get(the.email.input).type(the.email.invalidEmail3);
			cy.get(the.email.input).should('have.value', the.email.invalidEmail3);

			cy.get(the.submitButton).click();
			cy.get(the.email.input).should('have.css', '255');
		});
	});

	it('TC6: Validate that Email field is invalid when does not contains “.“ after 1 alphanumeric character after “@“', () => {
		cy.fixture('data/datatests20690').then(the => {
			cy.get(the.email.input).should('be.empty');
			cy.get(the.email.input).type(the.email.invalidEmail4);
			cy.get(the.email.input).should('have.value', the.email.invalidEmail4);

			cy.get(the.submitButton).click();
			cy.get(the.email.input).should('have.css', '255');
		});
	});

	it('TC7: Validate that Email field is invalid when does not contains (minimum) 2 alphanumeric characters after “.”', () => {
		cy.fixture('data/datatests20690').then(the => {
			cy.get(the.email.input).should('be.empty');
			cy.get(the.email.input).type(the.email.invalidEmail5);
			cy.get(the.email.input).should('have.value', the.email.invalidEmail5);

			cy.get(the.submitButton).click();
			cy.get(the.email.input).should('have.css', '255');
		});
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

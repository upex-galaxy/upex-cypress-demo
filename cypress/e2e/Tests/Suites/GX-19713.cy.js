import faker from 'faker';
import { pom } from '@pages/Pages2/POM';
import { removeLogs } from '@helper/RemoveLogs';

describe('GX-19713 | Happy Path', () => {

	before(() => {
		cy.clearLocalStorage();
		cy.clearCookies();
	});

	beforeEach(() => {
		
		cy.visit('https://demoqa.com/automation-practice-form?');
		cy.url().should('contain', '/automation-practice-form');
			
	});

	it('TC01: Happy Path Test Tools', () => {

		const randomName = faker.name.findName();
		const randomLastName = faker.name.findName();
		const randomEmail = faker.internet.email();
		const randomNumber = faker.phone.phoneNumber('##########');
		const randomGender = faker.random.number({ min: 0, max: 2 });

		pom.typeName(randomName);
		pom.get.inputName().should('have.value', randomName);

		pom.typeLastName(randomLastName);
		pom.get.inputLastName().should('have.value', randomLastName);

		pom.typeEmail(randomEmail);
		pom.get.inputMail().should('have.value', randomEmail);

		pom.clickGenero(randomGender);

		pom.typeNumber(randomNumber);
		pom.get.inputNumber().should('have.value', randomNumber);

	});
});
removeLogs();
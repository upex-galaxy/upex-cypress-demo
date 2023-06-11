import { faker } from '@faker-js/faker';
import { pom } from '@pages/Pages2/GX-19713-practiceForm.Page';
import { removeLogs } from '@helper/RemoveLogs';

describe('GX-19713 | Happy Path', () => {
	before(() => {
		cy.clearLocalStorage();
		cy.clearCookies();
	});

	beforeEach(() => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', '/automation-practice-form');
	});

	it('TC01: Happy Path Test Tools', () => {
		const randomName = faker.internet.userName();
		const randomLastName = faker.internet.userName();
		const randomEmail = faker.internet.email();
		const randomNumber = faker.phone.number('##########');
		const randomGender = faker.datatype.number({ min: 0, max: 2 });
		const randomSubject = faker.random.alpha({ bannedChars: ['x', 'y', 'q', 'j', 'f', 'w', 'z'] });
		const randomHobbie = faker.datatype.number({ min: 3, max: 5 });
		const randomAddress = faker.address.city();
		const state = 'NCR';
		const city = 'Delhi';

		pom.typeName(randomName);
		pom.get.inputName().should('have.value', randomName);

		pom.typeLastName(randomLastName);
		pom.get.inputLastName().should('have.value', randomLastName);

		pom.typeEmail(randomEmail);
		pom.get.inputMail().should('have.value', randomEmail);

		pom.clickDate();

		pom.clickGenero(randomGender);

		pom.typeNumber(randomNumber);
		pom.get.inputNumber().should('have.value', randomNumber);

		pom.typeSubject(randomSubject);

		pom.clickHobbie(randomHobbie);

		pom.clickUpload();

		pom.typeAddress(randomAddress);
		pom.get.inputAddress().should('have.value', randomAddress);

		pom.typeState(state);

		pom.typeCity(city);

		pom.clickSubmit();
	});
});
removeLogs();

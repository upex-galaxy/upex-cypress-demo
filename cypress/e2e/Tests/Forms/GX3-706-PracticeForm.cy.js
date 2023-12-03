import { faker } from '@faker-js/faker';
import { formPage } from '@pages/Forms/GX-706-PracticeForm.Page';

describe('GX3-706 ToolsQA | Forms | Practice Form', () => {
	beforeEach('PCR: Usuario debe situarse en el web de Demo QA', () => {
		cy.visit('/automation-practice-form');
		cy.url().should('contain', 'automation-practice-form');
	});

	it('707 | TC1: Validar poder crear el registro de estudiante con valores válidos', () => {
		const randomFirstName = faker.name.firstName();
		const randomLastName = faker.name.lastName();
		const ramdomEmail = faker.internet.email();
		const randomGender = Cypress._.random(0, 2);
		const randomMobile = faker.datatype.number({ min: 1000000000, max: 9999999999 });
		const randomDate = faker.date.past().toLocaleDateString('en-GB').split('/').join('');
		const randomSubject = faker.random.alpha({ count: 1, casing: 'lower', bannedChars: ['f', 'j', 'k', 'ñ', 'q', 'w', 'x', 'z'] });
		const randomHobbies = faker.datatype.number({ min: 3, max: 5 });
		const randomAdress = faker.address.streetAddress();
		const randomState = Cypress._.random(0, 3);
		const randomCity = Cypress._.random();

		formPage.typeFirstName(randomFirstName);
		formPage.typeLastName(randomLastName);
		formPage.typeEmail(ramdomEmail);
		formPage.selectGender(randomGender);
		formPage.typeMobile(randomMobile);
		formPage.selectBirthDay(randomDate);
		formPage.get
			.selectDate()
			.click()
			.then(t => {
				cy.wrap(t).get('.react-datepicker').should('be.visible');
				cy.wrap(t).get('.react-datepicker').click();
			});
		formPage.typeSubjects(randomSubject);
		formPage.selectRandomHobbie(randomHobbies);
		formPage.selectPicture();
		formPage.typeAdress(randomAdress);
		formPage.selectRandomState(randomState);
		formPage.selectRandomCity(randomCity);
		formPage.selectSubmit();

		formPage.get.completeForm().should('be.visible');
		const expectedMessage = 'Thanks for submitting the form';
		formPage.get.completeFormMessage().should('have.text', expectedMessage);
	});
});

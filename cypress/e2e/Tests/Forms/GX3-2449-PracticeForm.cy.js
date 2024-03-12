import { faker } from '@faker-js/faker';
import { formPage } from '@pages/GX3-2449-PracticeForm.Page.js';

describe('GX3-2449 ToolsQA | Forms | Practice Form', () => {
	beforeEach('PCR: Usuario debe situarse en el web de Demo QA', () => {
		cy.visit('/automation-practice-form');
		cy.url().should('contain', 'automation-practice-form');
	});

	it('2449 | TC1: Validar poder crear el registro de estudiante con valores válidos', () => {
		const randomFirstName = faker.person.firstName();
		const randomLastName = faker.person.lastName();
		const ramdomEmail = faker.internet.email();
		const randomGender = Cypress._.random(0, 2);
		const randomMobile = faker.number.int({ min: 1000000000, max: 9999999999 });
		const randomSubject = faker.random.alpha({ count: 1, casing: 'lower', bannedChars: ['f', 'j', 'k', 'ñ', 'q', 'w', 'x', 'z'] });
		const randomHobbies = faker.number.int({ min: 3, max: 5 });
		const randomDate = formPage.get.selectDate();
		const randomAddress = faker.location.streetAddress();
		const randomState = Cypress._.random(0, 3);
		const randomCity = Cypress._.random();

		formPage.typeFirstName(randomFirstName);
		formPage.typeLastName(randomLastName);
		formPage.typeEmail(ramdomEmail);
		formPage.selectGender(randomGender);
		formPage.typeMobile(randomMobile);
		formPage.selectBirthDay();
		formPage.typeSubjects(randomSubject);
		formPage.selectRandomHobbie(randomHobbies);
		formPage.selectPicture();
		formPage.typeAdress(randomAddress);
		formPage.selectRandomState(randomState);
		formPage.selectRandomCity(randomCity);
		formPage.selectSubmit();

		formPage.get.completeForm().should('be.visible');
		const expectedMessage = 'Thanks for submitting the form';
		formPage.get.completeFormMessage().should('have.text', expectedMessage);
		formPage.get.completeForm().should('be.visible');
		formPage.get.firstNameFormResult().should('contain', randomFirstName);
		formPage.get.lastNameFormResult().should('contain', randomLastName);
		formPage.get.mailFormResult().should('contain', ramdomEmail);
		const genderOptions = ['Male', 'Female', 'Other'];
		const selectedGender = genderOptions[randomGender];
		formPage.get.genderFormResult().invoke('text').should('include', `Gender${selectedGender}`);
		formPage.get.mobileFormResult().should('contain', randomMobile);

		const dateOfBirthText = formPage.get.birthDayFormResult().invoke('text');
		const expectedFormat = /[0-9]{2} [a-zA-Z]+, [0-9]{4}/;
		const isFormatCorrect = expectedFormat.test(dateOfBirthText);
		if (isFormatCorrect) {
			formPage.get.birthDayFormResult().invoke('text').should('include', `Date of Birth${randomDate.toString()}`);
			formPage.get.selectDate().should('contain', randomDate);
		}

		formPage.get.subjectFormResult().then(subjectText => {
			const actualText = subjectText.text();
			const reget = new RegExp(randomSubject, 'i');
			expect(actualText).to.match(reget);
		});
		const hobbiesOptions = ['Sports', 'Reading', 'Music'];
		expect(randomHobbies).to.be.within(3, 5);
		const selectedHobbies = hobbiesOptions[randomHobbies - 3];
		formPage.get.hobbiesFormResult().invoke('text').should('include', `Hobbies${selectedHobbies}`);
		formPage.get.imageFormResult().should('contain', 'upexlogo.png');
		formPage.get.addressFormResult().should('contain', randomAddress);
		formPage.get.stateAndCityFormResult().invoke('text').then(resultTest => {
			formPage.getStateAndCityText().then(stateCity => {
				expect(resultTest).equal(stateCity);
			});
		});
	});
});

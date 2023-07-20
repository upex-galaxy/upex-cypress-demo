import { forms } from '@pages/Forms/GX-23558-Forms';
import { faker } from '@faker-js/faker';
describe('US GX-23558 ✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('Precondition: Having access to SUT.', () => {
		cy.visit('/automation-practice-form');
		forms.get.mainTitle().should('have.text', 'Practice Form');
	});

	it('23559 | TC1: Validate the pop up that appears is shown after submitting all the correct data on fields.', () => {
		forms.firstName(randomName);
		forms.get.firstName().should('have.value', randomName);
		forms.lastName(randomLastName);
		forms.get.lastName().should('have.value', randomLastName);
		forms.userEmail(randomEmail);
		forms.get.userEmail().should('have.value', randomEmail);
		forms.selectRandomGender().then(randomGenderSelected => {
			cy.wrap(randomGenderSelected).as('randomGender');
		});

		forms.userNumber(randomNumber);
		forms.get.userNumber().should('have.value', randomNumber);
		const fecha = new Date();
		const day = fecha.getDate().toString().padStart(2, '0');
		const month = fecha.toLocaleDateString('en-EN', { month: 'short' });
		const year = fecha.getFullYear();
		const currentDate = `${day} ${month} ${year}`;
		forms.get.userDateOfBirth().should('have.value', currentDate);
		forms.userSubjects(randomSubject);
		forms.userSubjectChoice();
		forms.get.userSubjects().should('exist');
		forms.userHobbies().then(randomHobbiesSelected => {
			cy.wrap(randomHobbiesSelected).as('randomHobbies');
		});

		forms.uploadPictureButton();
		forms.get.uploadPictureButton().should('contain.value', 'upexlogo.png');
		forms.userAddress(randomAddress);
		forms.get.userAddress().should('have.value', randomAddress);
		forms.selectRandomState().then(randomSelectedState => {
			cy.wrap(randomSelectedState).as('randomSelectState');
		});
		cy.get('@randomSelectState').then(randomSelectedState => {
			forms.get.dropdownStateText().should('have.text', randomSelectedState);
		});
		forms.selectRandomCity().then(randomSelectedCity => {
			cy.wrap(randomSelectedCity).as('randomSelectCity');
		});
		cy.get('@randomSelectCity').then(randomSelectedCity => {
			forms.get.dropdownCityText().should('have.text', randomSelectedCity);
		});
		forms.get.submitButton().click();

		//todo: from here asserts for gender and hobbies
		cy.get('@randomGender').then(randomGenderSelected => {
			forms.get.userGender().eq(randomGenderSelected).should('be.checked');
		});
		cy.get('@randomHobbies').then(randomHobbiesSelected => {
			forms.get.userHobbies().eq(randomHobbiesSelected).should('be.checked');
		});
		forms.get.popUpMsg().should('have.text', 'Thanks for submitting the form');
	});
});

const randomName = faker.name.firstName();
const randomLastName = faker.name.lastName();
const randomEmail = faker.internet.email();
const randomNumber = faker.phone.number('##########');
const randomSubject = faker.random.alpha({ count: 1, casing: 'lower', bannedChars: ['f', 'j', 'k', 'ñ', 'q', 'w', 'x', 'z'] });
const randomAddress = faker.address.streetAddress();

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

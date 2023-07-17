import { forms } from '@pages/Forms/GX-23558-Forms';
import { faker } from '@faker-js/faker';
describe('US GX-23558 ✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('Precondition: Having access to SUT.', () => {
		cy.visit('/automation-practice-form');
		forms.get.mainTitle().should('have.text', 'Practice Form');
	});

	it('23559 | TC1: Validate a pop up is shown after submitting all the correct data on fields.', () => {
		forms.firstName(randomName);
		forms.get.firstName().should('have.value', randomName); //done

		forms.lastName(randomLastName);
		forms.get.lastName().should('have.value', randomLastName); // done

		forms.userEmail(randomEmail);
		forms.get.userEmail().should('have.value', randomEmail); //done

		forms.selectRandomGender().then(randomGenderSelected => {
			cy.wrap(randomGenderSelected).as('randomGender'); //done
		});

		forms.userNumber(randomNumber);
		forms.get.userNumber().should('have.value', randomNumber); //done

		const fecha = new Date();
		const day = fecha.getDate().toString().padStart(2, '0');
		const month = fecha.toLocaleDateString('en-EN', { month: 'short' });
		const year = fecha.getFullYear();
		const currentDate = `${day} ${month} ${year}`;
		forms.get.userDateOfBirth().should('have.value', currentDate); //done

		forms.userSubjects(randomSubject);
		forms.userSubjectChoice();
		forms.get.userSubjects().should('exist'); //done

		forms.userHobbies().then(randomHobbiesSelected => {
			cy.wrap(randomHobbiesSelected).as('randomHobbies'); //done
		});

		forms.uploadPictureButton();
		forms.get.uploadPictureButton().should('contain.value', 'upexlogo.png'); // done

		forms.userAddress(randomAddress);
		forms.get.userAddress().should('have.value', randomAddress); //done

		forms.selectRandomState().then(randomSelectedState => {
			cy.wrap(randomSelectedState).as('randomSelectState');
		});

		cy.get('@randomSelectState').then(randomSelectedState => {
			forms.get.dropdownStateText().should('have.text', randomSelectedState); //assert
		});

		forms.selectRandomCity().then(randomSelectedCity => {
			cy.wrap(randomSelectedCity).as('randomSelectCity');
		});

		cy.get('@randomSelectCity').then(randomSelectedCity => {
			forms.get.dropdownCityText().should('have.text', randomSelectedCity); //assert
		});

		forms.get.submitButton().click(); //the test finishes here

		// some asserts from here
		cy.get('@randomGender').then(randomGenderSelected => {
			forms.get.userGender().eq(randomGenderSelected).should('be.checked');
		});

		cy.get('@randomHobbies').then(randomHobbiesSelected => {
			forms.get.userHobbies().eq(randomHobbiesSelected).should('be.checked');
		});
	});

	it('3559|TC2: Validate student leaves fields “First Name” and “Last Name” empty, and text box border turns red after clicking  “submit” button.', () => {
		forms.firstName();

		forms.lastName();

		forms.get.submitButton().click();

		forms.get.firstName().should('have.css', 'border-color', 'rgb(220, 53, 69)'); //assert from first name
		forms.get.lastName().should('have.css', 'border-color', 'rgb(220, 53, 69)'); //assert from last name
	});

	it('23559 | TC3: Validate that student enters invalid data in fields “email” and “Mobile” and border turns red. ', () => {
		forms.invalidEmail();

		forms.invalidMobile(randomInvalidMobile);

		forms.get.submitButton().click();

		forms.get.userEmail().should('have.css', 'border-color', 'rgb(220, 53, 69)'); //assert from email
		forms.get.userNumber().should('have.css', 'border-color', 'rgb(220, 53, 69)'); //assert from mobile
	});

	it('23559 | TC4: Validate that no message is displayed after student leaves fields “email”, “subjects” and “current address” with empty data.', () => {
		forms.userEmail();

		forms.userSubjects();

		forms.userAddress();

		forms.get.submitButton().click();

		forms.get.userEmail().should('have.value', '');
		forms.get.userSubjects().should('not.have.value');
		forms.get.userAddress().should('not.have.value');
	});
});

const randomName = faker.name.firstName();
const randomLastName = faker.name.lastName();
const randomEmail = faker.internet.email();
const randomNumber = faker.phone.number('##########');
const randomSubject = faker.random.alpha({ count: 1, casing: 'lower', bannedChars: ['f', 'j', 'k', 'ñ', 'q', 'w', 'x', 'z'] });
const randomAddress = faker.address.streetAddress();
const randomInvalidMobile = faker.random.words(1);

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

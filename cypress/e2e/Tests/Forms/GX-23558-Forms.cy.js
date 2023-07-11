import { forms } from '@pages/Forms/GX-23558-Forms';
import { faker } from '@faker-js/faker';
describe('US GX-23558 ✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('Precondition: Having access to SUT.', () => {
		cy.visit('/automation-practice-form');
		forms.get.mainTitle().should('have.text', 'Practice Form');
	});

	it('23559 | TC1: Validate a pop up is shown after submitting all the correct data on fields.', () => {
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

		//forms.get.submitButton().click();

		//cy.get('@randomGender').then(randomGenderSelected => {
		//	forms.get.userGender().eq(randomGenderSelected).should('be.checked');

		//forms.get.firstName().should('have.css', 'border-color', 'rgb(40, 167, 69)');
	});
});

//it('23559 | TC2: Validate field “First Name” is empty and text box border turns red.', () => {});
//});

//cy.get('#checkbox').eq(elementoRandom).check(); o click() .should havecss 40,167,69
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

const randomName = faker.name.firstName();
const randomLastName = faker.name.lastName();
const randomEmail = faker.internet.email();
const randomNumber = faker.phone.number('##########');

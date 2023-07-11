import { forms } from '@pages/Elements/GX-23558-Forms';
import { faker } from '@faker-js/faker';
describe('US GX-23558 ✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('Precondition: Having access to SUT.', () => {
		cy.visit('/automation-practice-form');
		forms.get.mainTitle().should('have.text', 'Practice Form');
	});

	it('23559 | TC1: Validate a pop up is shown after submitting all the correct data on fields.', () => {
		forms.get.firstName().type(randomName);
		forms.get.submitButton().click();
		forms.get.firstName().should('have.css', 'border-color', 'rgb(40, 167, 69)');
		forms.selectRandomGender().then(randomGenderSelected => {
			cy.wrap(randomGenderSelected).as('randomGender');
		});
		cy.get('@randomGender').then(randomGenderSelected => {
			forms.get.genderChecked().eq(randomGenderSelected).should('be.checked');
		});
	});
});

//cy.get('#checkbox').eq(elementoRandom).check(); o click() .should havecss 40,167,69
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

const randomName = faker.name.firstName();

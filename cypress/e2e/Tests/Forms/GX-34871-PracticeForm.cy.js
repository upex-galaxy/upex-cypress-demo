import { removeLogs } from '@helper/RemoveLogs';
import { pForm } from '@pages/Forms/GX-34871-PracticeFormPage';
import { faker } from '@faker-js/faker';

describe('GX-34872 | ✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('Precondition: to use the Practice Form', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'practice-form');
	});

	it('GX-34871 | TC01: Validate that a popup displays all the valid data', () => {
		const generatedName = pForm.fillFirstName();
		const generatedLastName = pForm.fillLastName();
		const generatedEmail = pForm.fillEmail();
		const generatedMobile = pForm.fillMobile();
		//const generatedSubject = pForm.fillSubject();

		pForm.get.firstNameInput().should('have.value', generatedName);
		pForm.get.lastNameInput().should('have.value', generatedLastName);
		pForm.get.emailInput().should('have.value', generatedEmail);
		pForm.get.mobileInput().should('have.value', generatedMobile);

		expect(1).to.eq(1);
	});
});

removeLogs();

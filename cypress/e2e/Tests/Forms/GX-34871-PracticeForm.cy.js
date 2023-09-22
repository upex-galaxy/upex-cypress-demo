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
		pForm.get.firstNameInput().should('have.value', generatedName);

		const generatedLastName = pForm.fillLastName();
		pForm.get.lastNameInput().should('have.value', generatedLastName);
	});
});

removeLogs();

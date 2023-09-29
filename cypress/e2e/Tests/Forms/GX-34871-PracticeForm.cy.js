import { removeLogs } from '@helper/RemoveLogs';
import { pForm } from '@pages/Forms/GX-34871-PracticeFormPage';
import { faker } from '@faker-js/faker';

describe('GX-34872 | ✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('Precondition: to use the Practice Form', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'practice-form');
	});

	it.only('GX-34871 | TC01: Validate that a popup displays all the valid data', () => {
		const formData = pForm.fillAndGetInputData();
		const inputDataSubject = pForm.fillSubjects();

		pForm.get.firstNameInput().should('have.value', formData.firstName);
		pForm.get.lastNameInput().should('have.value', formData.lastName);
		pForm.get.emailInput().should('have.value', formData.email);
		pForm.get.mobileInput().should('have.value', formData.mobile);
		pForm.get.currentAddressInput().should('have.value', formData.address);

		pForm
			.selectOptionSubjects()
			.invoke('text')
			.then(Option => {
				pForm.get.subjectsContainer().should('contain.text', Option);
			});
	});
});

removeLogs();

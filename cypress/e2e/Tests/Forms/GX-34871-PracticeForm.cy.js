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
		const check = [
			{ data: 'firstNameInput', value: formData.firstName },
			{ data: 'lastNameInput', value: formData.lastName },
			{ data: 'emailInput', value: formData.email },
			{ data: 'mobileInput', value: formData.mobile },
			{ data: 'currentAddressInput', value: formData.address },
		];
		check.forEach(({ data, value }) => {
			pForm.get[data]().should('have.value', value);
		});

		pForm
			.fillAndSelectSubject()
			.invoke('text')
			.then(subjectName => {
				cy.log(subjectName);
				pForm.get.subjectsContainer().should('contain.text', subjectName);
			});
	});
});

removeLogs();

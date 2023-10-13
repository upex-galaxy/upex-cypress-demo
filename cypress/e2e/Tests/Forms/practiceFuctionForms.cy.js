import { removeLogs } from '@helper/RemoveLogs';
import { formPage } from '@pages/Examples/practiceForms.Page';
removeLogs();

describe('PRACTICE Practice Form', () => {
	beforeEach(() => {
		cy.intercept({ resourceType: /^(xhr|fetch)$/ }, { statusCode: 200, body: { data: 'fake data' } });
		cy.visit('https://demoqa.com/automation-practice-form');
	});

	it('test', () => {
		const givenInputs = formPage.getFormInputTextList('text');
		cy.log(givenInputs);
		cy.get('*').then(() => {
			for (const inputName of givenInputs) {
				const textInputs = ['Name', 'Email', 'Mobile(10 Digits)'];
				const textArea = ['Current Address'];
				if (textInputs.includes(inputName)) {
					formPage.typeInputTextField(inputName);
				}
				if (textArea.includes(inputName)) {
					formPage.typeInputTextArea(inputName);
				}
			}
		});
	});
});

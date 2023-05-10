import { practiceForm } from '@pages/FormsPage';

describe('GX-16374 | ✅ToolsQA | Forms', () => {
	beforeEach('the user must be located on the web page ', () => {
		cy.visit('https://demoqa.com/automation-practice-form ');
	});
	it('16735 | Fill out the form', () => {
		practiceForm.getFirstNameRandom().invoke('val').should('not.be.empty');
		practiceForm.getLastNameRandom().invoke('val').should('not.be.empty');
		practiceForm.getGenderRandom().should('be.checked');
		practiceForm.getPhoneNumRandom()
		practiceForm.getBirthDay();
		practiceForm.getSubject();
		practiceForm.checkHobbie();
		// practiceForm.getUploadPicture()
		practiceForm.getCurrentAddress();
		// practiceForm.getSelectState();
		practiceForm.getSubmitBtn();
	});
});

Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});


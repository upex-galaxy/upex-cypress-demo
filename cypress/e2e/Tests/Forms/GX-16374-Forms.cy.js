import { practiceForm } from '@pages/FormsPage';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('GX-16374 | ✅ToolsQA | Forms', () => {
	beforeEach('the user must be located on the web page ', () => {
		cy.visit('https://demoqa.com/automation-practice-form ');
	});
	it('16735 |TC1: Fill out the form with valid data.', () => {
		practiceForm.getFirstNameRandom().invoke('val').should('not.be.empty');
		practiceForm.getLastNameRandom().invoke('val').should('not.be.empty');
		practiceForm.getGenderRandom().should('be.checked');
		practiceForm.getPhoneNumRandom().invoke('val').should('not.be.empty');
		practiceForm.getBirthDay();
		practiceForm.getSubject();
		practiceForm.checkHobbie();
		// practiceForm.getUploadPicture('/cypress/fixtures/images/Business-Analyst.png')
		practiceForm.getCurrentAddress();
		practiceForm.getSelectState();
		practiceForm.getSelectCity();
		practiceForm.getSubmitBtn();
		practiceForm.getPopUpMessage().should('exist');
		practiceForm.getCloseBtn();
	});
	it('16735 | TC2: Validate no message is displayed after submitting and the field turns red', () => {
		practiceForm.getSubmitBtn();
		practiceForm.get.firstNameInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
		practiceForm.get.lastNameInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
		practiceForm.get.phoneNumberInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
	});
});

import { practiceForm } from '@pages/FormsPage';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('GX-16374 | ✅ToolsQA | Forms', () => {
	beforeEach('the user must be located on the web page ', () => {
		cy.visit('https://demoqa.com/automation-practice-form ');
	});
	it('16735 |TC1: Fill out the form with valid data.', () => {
		practiceForm.fillFirstNameRandom().invoke('val').should('not.be.empty');
		practiceForm.fillLastNameRandom().invoke('val').should('not.be.empty');
		practiceForm.fillEmailRandom();
		practiceForm.selectGenderRandom().should('be.checked');
		practiceForm.fillPhoneNumRandom().invoke('val').should('not.be.empty');
		practiceForm.selectBirthDay();
		practiceForm.fillSubject();
		practiceForm.checkHobbie();
		practiceForm.uploadPicture('images/Business-Analyst.png');
		practiceForm.fillCurrentAddress();
		practiceForm.selectState();
		practiceForm.selectCity();
		practiceForm.submitBtn();
		practiceForm.popUpMessage().should('exist');
		practiceForm.closeBtn();
	});
	it('16735 | TC2: Validate no message is displayed after submitting and the field turns red', () => {
		practiceForm.submitBtn();
		practiceForm.get.firstNameInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
		practiceForm.get.lastNameInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
		practiceForm.get.phoneNumberInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
	});
});

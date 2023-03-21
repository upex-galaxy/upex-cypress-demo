import { form } from '@pages/Form.Page';
import { removeLogs } from '@helper/RemoveLogs';
describe('✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('the user must be positioned in page demoQa form', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('include', 'form');
	});
	it('Submit form filling all fields with valid format', () => {
		form.get.inputFirstName().type('David');

		form.get.inputLastName().type('Smith');

		form.get.inputEmail().type('smith@gmail.com');

		form.get.radioBtnGender().then($gender => {
			cy.wrap($gender).eq(1).check({ force: true });
		});

		form.get.inputUserNumber().type('3512448567');

		form.get.inputDatepicker().click();
		form.get.selectMonth().select(2);
		form.get.selectYear().select(2);
		form.get.selectDay().eq(5).click();

		form.get.inputSubjects().type('e');
		form.get.dropdownSubjectsChildren().then($subjects => {
			cy.wrap($subjects).eq(0).click();
		});

		form.get.checkboxHobbies().then($hobbies => {
			cy.wrap($hobbies).eq(1).check({ force: true });
		});

		form.get.inputSelectPicture().click();
		form.get.inputSelectPicture().selectFile('cypress/fixtures/images/upexlogo.png');

		form.get.textarea().type('Av. William Guido 345');

		form.get.dropdownSelectState().type('ha', { force: true });
		form.get.dropdownSelectStateChildren().then($states => {
			cy.wrap($states).eq(0).click();
		});

		form.get.dropdownSelectCity().click({ force: true });
		form.get.dropdownSelectCityChildren().then($cities => {
			cy.wrap($cities).eq(0).click();
		});

		form.get.btnSubmit().click({ force: true });
	});
});

removeLogs();

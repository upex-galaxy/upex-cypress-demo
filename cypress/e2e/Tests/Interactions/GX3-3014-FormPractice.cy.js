import { formPage } from '../../../support/pages/GX3-3014-FormsPractice.Page';

describe('' , () => {

	beforeEach('' , () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'practice');
	});

	it('3015 | TC1 | Validar ingreso de sesion correctamente', () => {
		formPage.enterData();
		formPage.selectInputGender();

		//formPage.newInputDate();
		// formPage.get.inputSubject().type('Formulario');
		// formPage.selectInputHobbies();
		// formPage.get.upText().type('asdasdasdasd');
		// formPage.get.state().click();
		// formPage.get.selectState().click();
		// formPage.get.city().click();
		// formPage.get.selectCity().click();
		// formPage.get.submit().click();
		// formPage.get.document().should('contain', 'Thanks for submitting the form');
	});

});
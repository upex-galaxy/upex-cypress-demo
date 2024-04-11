import { formPage } from '../../../support/pages/GX3-3014-FormsPractice.Page';

describe('GX3-3014 | ToolsQA | Forms | Practice Form' , () => {

	beforeEach('PRC | Usuario debe situarse en la URL de Demo QA' , () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'practice');
	});

	it('3015 | TC1 | Validar poder completar el formulario para el estudiante con valores validos', () => {
		formPage.enterData();
		// formPage.get.document().should('contain', 'Thanks for submitting the form');
	});

});
import { studentForm } from '../../../support/pages/Forms/GX-19307-Student-Form';
import the from '../../../fixtures/data/GX-19307-Student-Form.json';

describe('✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('Precondición: Usuario debe estar en pagina de Student Registration Form', () => {
		studentForm.enterPage();
		cy.url().should('contain', the.assertions.url);
	});
	it('19308 | TC01 - Validar usuario completa formulario correctamente', () => {
		//studentForm.typeRandomFirstName();
		const randomFirstName = studentForm.typeRandomFirstName();
		//studentForm.typeRandomLastName();
		const randomLastName = studentForm.typeRandomLastName();
		//studentForm.typeRandomEmail();
		const randomEmail = studentForm.typeRandomEmail();
		studentForm.clickGenderMale();
		//studentForm.typeRandomMobile();
		const randomMobile = studentForm.typeRandomMobile();
		//studentForm.selectMonth();
		const monthAleatorio = studentForm.selectMonth();
		//studentForm.selectYear();
		const yearAleatorio = studentForm.selectYear();
		//studentForm.selectDay();
		const dayAleatorio = studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobbySport();
		studentForm.selectPicture();
		//studentForm.typeRandomCurrentAddress();
		const randomCurrentAddress = studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		//const randomState = studentForm.selectState();
		studentForm.selectCity();
		//const randomCity = studentForm.selectCity();
		studentForm.submitButton();
		cy.get(the.assertions.SubmitTable).should('contain', randomFirstName);
		cy.get(the.assertions.SubmitTable).should('contain', randomLastName);
		cy.get(the.assertions.SubmitTable).should('contain', randomEmail);
		cy.get(the.assertions.SubmitTable).should('contain', the.assertions.Gender.Male);
		cy.get(the.assertions.SubmitTable).should('contain', randomMobile);
		cy.get(the.assertions.SubmitTable).should('contain', monthAleatorio);
		cy.get(the.assertions.SubmitTable).should('contain', yearAleatorio);
		cy.get(the.assertions.SubmitTable).should('contain', dayAleatorio);
		cy.get(the.assertions.SubmitTable).should('contain', the.assertions.Subjects);
		cy.get(the.assertions.SubmitTable).should('contain', the.assertions.Hobbies.Sports);
		cy.get(the.assertions.SubmitTable).should('contain', the.assertions.Picture);
		cy.get(the.assertions.SubmitTable).should('contain', randomCurrentAddress);
		cy.get(the.assertions.SubmitTable).should('contain', the.assertions.State);
		cy.get(the.assertions.SubmitTable).should('contain', the.assertions.City);
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

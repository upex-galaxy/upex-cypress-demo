import { studentForm } from '../../../support/pages/Forms/GX-19307-Student-Form';
import the from '../../../fixtures/data/GX-19307-Student-Form.json';

describe('✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('Precondición: Usuario debe estar en pagina de Student Registration Form', () => {
		cy.visit(the.url);
		cy.url().should('contain', the.assertions.Url);
	});
	it('19308 | TC01 - Validar usuario completa formulario correctamente', () => {
		const randomFirstName = studentForm.typeRandomFirstName();
		const randomLastName = studentForm.typeRandomLastName();
		const randomEmail = studentForm.typeRandomEmail();
		const randomGender = studentForm.clickGender();
		const randomMobile = studentForm.typeRandomMobile();
		const monthAleatorio = studentForm.selectMonth();
		const yearAleatorio = studentForm.selectYear();
		const dayAleatorio = studentForm.selectDay();
		studentForm.typeSubjects();
		const randomHobby = studentForm.clickHobby();
		studentForm.selectPicture();
		const randomCurrentAddress = studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.assertionFirstName().should('contain', randomFirstName);
		studentForm.assertionLastName().should('contain', randomLastName);
		studentForm.assertionEmail().should('contain', randomEmail);
		studentForm.assertionGender().should('contain', randomGender);
		studentForm.assertionMobile().should('contain', randomMobile);
		studentForm.assertionMonth().should('contain', monthAleatorio);
		studentForm.assertionYear().should('contain', yearAleatorio);
		studentForm.assertionDay().should('contain', dayAleatorio);
		studentForm.assertionSubjects().should('contain', the.assertions.Subjects.Subjects);
		studentForm.assertionHobbies().should('contain', randomHobby);
		studentForm.assertionPicture().should('contain', the.assertions.Picture.Picture);
		studentForm.assertionAddress().should('contain', randomCurrentAddress);
		studentForm.assertionState().should('contain', the.assertions.StateAndCity.State);
		studentForm.assertionState().should('contain', the.assertions.StateAndCity.City);
	});

	it('19308 | TC02 - Validar usuario no ingresa “First Name” en el formulario', () => {
		studentForm.typeRandomLastName();
		studentForm.typeRandomEmail();
		studentForm.clickGender();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobby();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.get.FirstName().should('be.empty');
		studentForm.get.SubmitTable().should('not.exist');
	});

	it('19308 | TC03 - Validar usuario no ingresa “Last Name” en el formulario', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomEmail();
		studentForm.clickGender();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobby();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.get.LastName().should('be.empty');
		studentForm.get.SubmitTable().should('not.exist');
	});

	it('19308 | TC04 - Validar usuario no ingresa “Gender” en el formulario', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.typeRandomEmail();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobby();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.get.AllGender().should('not.be.selected');
		studentForm.get.SubmitTable().should('not.exist');
	});

	it('19308 | TC05 - Validar usuario no ingresa “Mobile Number” en el formulario', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.typeRandomEmail();
		studentForm.clickGender();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobby();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.get.Mobile().should('be.empty');
		studentForm.get.SubmitTable().should('not.exist');
	});

	it('19308 | TC06 - Validar usuario ingresa “Mobile Number” en el formulario con letras', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.typeRandomEmail();
		studentForm.typeMobileWithLetters();
		studentForm.clickGender();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobby();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.get.Mobile().should('not.contain', the.assertions.Mobile.NoNumbers);
		studentForm.get.SubmitTable().should('not.exist');
	});

	it('19308 | TC07 - Validar usuario no ingresa “Date of Birth” en el formulario', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.typeRandomEmail();
		studentForm.clickGender();
		studentForm.typeRandomMobile();
		studentForm.typeSubjects();
		studentForm.clickHobby();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.assertionMonth().should('contain', the.assertions.Date.DateBase);
	});

	it('19308 | TC08 - Validar usuario no ingresa “Subjects” en el formulario', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.typeRandomEmail();
		studentForm.clickGender();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.clickHobby();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.assertionSubjects().should('be.empty');
	});

	it('19308 | TC09 - Validar usuario no ingresa “Hobbies” en el formulario', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.typeRandomEmail();
		studentForm.clickGender();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.get.AllHobbies().should('not.be.selected');
	});

	it('19308 | TC10 - Validar usuario no ingresa “Picture” en el formulario', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.typeRandomEmail();
		studentForm.clickGender();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobby();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.assertionPicture().should('be.empty');
	});

	it('19308 | TC11 - Validar usuario no ingresa “Current Address” en el formulario', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.typeRandomEmail();
		studentForm.clickGender();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobby();
		studentForm.selectPicture();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.assertionAddress().should('be.empty');
	});

	it('19308 | TC12 - Validar usuario no ingresa “State and City” en el formulario', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.typeRandomEmail();
		studentForm.clickGender();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobby();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.submitButton();

		studentForm.assertionState().should('be.empty');
		studentForm.assertionCity().should('be.empty');
	});

	it('19308 | TC13 - Validar usuario no ingresa “Email” en el formulario', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.clickGender();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobby();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.assertionEmail().should('be.empty');
	});

	it('19308 | TC14 - Validar usuario ingresa “Email” en el formulario sin @', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.get.Email().type(the.data.StudentEmail.WrongStudentEmail1);
		studentForm.clickGender();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobby();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.get.Email().should('not.contain', the.assertions.StudentEmail.WrongStudentEmail1);
		studentForm.get.SubmitTable().should('not.exist');
	});

	it('19308 | TC15 - Validar usuario ingresa “Email” en el formulario sin un carácter alfanumérico antes del @', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.get.Email().type(the.data.StudentEmail.WrongStudentEmail2);
		studentForm.clickGender();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobby();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.get.Email().should('not.contain', the.assertions.StudentEmail.WrongStudentEmail2);
		studentForm.get.SubmitTable().should('not.exist');
	});

	it('19308 | TC16 - Validar usuario ingresa “Email” en el formulario sin un carácter alfanumérico después del @', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.get.Email().type(the.data.StudentEmail.WrongStudentEmail3);
		studentForm.clickGender();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobby();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.get.Email().should('not.contain', the.assertions.StudentEmail.WrongStudentEmail3);
		studentForm.get.SubmitTable().should('not.exist');
	});

	it('19308 | TC17 - Validar usuario ingresa “Email” en el formulario sin contener . después del @', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.get.Email().type(the.data.StudentEmail.WrongStudentEmail4);
		studentForm.clickGender();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobby();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.get.Email().should('not.contain', the.assertions.StudentEmail.WrongStudentEmail4);
		studentForm.get.SubmitTable().should('not.exist');
	});

	it('19308 | TC18 - Validar usuario ingresa “Email” en el formulario sin 2 caracteres alfanuméricos después del .', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.get.Email().type(the.data.StudentEmail.WrongStudentEmail5);
		studentForm.clickGender();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobby();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.get.Email().should('not.contain', the.assertions.StudentEmail.WrongStudentEmail5);
		studentForm.get.SubmitTable().should('not.exist');
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

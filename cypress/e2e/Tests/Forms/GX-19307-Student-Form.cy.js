import { studentForm } from '../../../support/pages/Forms/GX-19307-Student-Form';
import the from '../../../fixtures/data/GX-19307-Student-Form.json';

describe('✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('Precondición: Usuario debe estar en pagina de Student Registration Form', () => {
		studentForm.enterPage();
		cy.url().should('contain', the.assertions.Url);
	});
	it('19308 | TC01 - Validar usuario completa formulario correctamente', () => {
		const randomFirstName = studentForm.typeRandomFirstName();
		const randomLastName = studentForm.typeRandomLastName();
		const randomEmail = studentForm.typeRandomEmail();
		studentForm.clickGenderMale();
		const randomMobile = studentForm.typeRandomMobile();
		const monthAleatorio = studentForm.selectMonth();
		const yearAleatorio = studentForm.selectYear();
		const dayAleatorio = studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobbySport();
		studentForm.selectPicture();
		const randomCurrentAddress = studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		cy.get(the.assertions.SubmitTable).eq(the.assertions.StudentName.TableData).should('contain', randomFirstName);
		cy.get(the.assertions.SubmitTable).eq(the.assertions.StudentName.TableData).should('contain', randomLastName);
		cy.get(the.assertions.SubmitTable).eq(the.assertions.StudentEmail.TableData).should('contain', randomEmail);
		cy.get(the.assertions.SubmitTable).eq(the.assertions.Gender.TableData).should('contain', the.assertions.Gender.Male);
		cy.get(the.assertions.SubmitTable).eq(the.assertions.Mobile.TableData).should('contain', randomMobile);
		cy.get(the.assertions.SubmitTable).eq(the.assertions.Date.TableData).should('contain', monthAleatorio);
		cy.get(the.assertions.SubmitTable).eq(the.assertions.Date.TableData).should('contain', yearAleatorio);
		cy.get(the.assertions.SubmitTable).eq(the.assertions.Date.TableData).should('contain', dayAleatorio);
		cy.get(the.assertions.SubmitTable).eq(the.assertions.Subjects.TableData).should('contain', the.assertions.Subjects.Subjects);
		cy.get(the.assertions.SubmitTable).eq(the.assertions.Hobbies.TableData).should('contain', the.assertions.Hobbies.Sports);
		cy.get(the.assertions.SubmitTable).eq(the.assertions.Picture.TableData).should('contain', the.assertions.Picture.Picture);
		cy.get(the.assertions.SubmitTable).eq(the.assertions.Address.TableData).should('contain', randomCurrentAddress);
		cy.get(the.assertions.SubmitTable).eq(the.assertions.StateAndCity.TableData).should('contain', the.assertions.StateAndCity.State);
		cy.get(the.assertions.SubmitTable).eq(the.assertions.StateAndCity.TableData).should('contain', the.assertions.StateAndCity.City);
	});

	it('19308 | TC02 - Validar usuario no ingresa “First Name” en el formulario', () => {
		studentForm.typeRandomLastName();
		studentForm.typeRandomEmail();
		studentForm.clickGenderMale();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobbySport();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.get.FirstName().should('be.empty');
		cy.get(the.assertions.SubmitTable).should('not.exist');
	});

	it('19308 | TC03 - Validar usuario no ingresa “Last Name” en el formulario', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomEmail();
		studentForm.clickGenderMale();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobbySport();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.get.LastName().should('be.empty');
		cy.get(the.assertions.SubmitTable).should('not.exist');
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
		studentForm.clickHobbySport();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		cy.get(the.assertions.Gender.Empty).should('not.be', 'clicked');
		cy.get(the.assertions.SubmitTable).should('not.exist');
	});

	it('19308 | TC05 - Validar usuario no ingresa “Mobile Number” en el formulario', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.typeRandomEmail();
		studentForm.clickGenderMale();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobbySport();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.get.Mobile().should('be.empty');
		cy.get(the.assertions.SubmitTable).should('not.exist');
	});

	it('19308 | TC06 - Validar usuario ingresa “Mobile Number” en el formulario con letras', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.typeRandomEmail();
		studentForm.get.Mobile().type(the.data.Mobile.MobileWithLetters);
		studentForm.clickGenderMale();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobbySport();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.get.Mobile().should('not.contain', the.assertions.Mobile.NoNumbers);
		cy.get(the.assertions.SubmitTable).should('not.exist');
	});

	it('19308 | TC07 - Validar usuario no ingresa “Date of Birth” en el formulario', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.typeRandomEmail();
		studentForm.clickGenderMale();
		studentForm.typeRandomMobile();
		studentForm.typeSubjects();
		studentForm.clickHobbySport();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		cy.get(the.assertions.SubmitTable).eq(the.assertions.Date.TableData).should('contain', the.assertions.Date.DateBase);
	});

	it('19308 | TC08 - Validar usuario no ingresa “Subjects” en el formulario', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.typeRandomEmail();
		studentForm.clickGenderMale();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.clickHobbySport();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		cy.get(the.assertions.SubmitTable).eq(the.assertions.Subjects.TableData).should('be.empty');
	});

	it('19308 | TC09 - Validar usuario no ingresa “Hobbies” en el formulario', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.typeRandomEmail();
		studentForm.clickGenderMale();
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

		cy.get(the.assertions.Hobbies.Empty).should('not.be', 'clicked');
	});

	it('19308 | TC10 - Validar usuario no ingresa “Picture” en el formulario', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.typeRandomEmail();
		studentForm.clickGenderMale();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobbySport();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		cy.get(the.assertions.SubmitTable).eq(the.assertions.Picture.TableData).should('be.empty');
	});

	it('19308 | TC11 - Validar usuario no ingresa “Current Address” en el formulario', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.typeRandomEmail();
		studentForm.clickGenderMale();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobbySport();
		studentForm.selectPicture();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		cy.get(the.assertions.SubmitTable).eq(the.assertions.Address.TableData).should('be.empty');
	});

	it('19308 | TC12 - Validar usuario no ingresa “State and City” en el formulario', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.typeRandomEmail();
		studentForm.clickGenderMale();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobbySport();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.submitButton();

		cy.get(the.assertions.SubmitTable).eq(the.assertions.StateAndCity.TableData).should('be.empty');
	});

	it('19308 | TC13 - Validar usuario no ingresa “Email” en el formulario', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.clickGenderMale();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobbySport();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		cy.get(the.assertions.SubmitTable).eq(the.assertions.StudentEmail.TableData).should('be.empty');
	});

	it('19308 | TC14 - Validar usuario ingresa “Email” en el formulario sin @', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.get.Email().type(the.data.StudentEmail.WrongStudentEmail1);
		studentForm.clickGenderMale();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobbySport();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.get.Email().should('not.contain', the.assertions.StudentEmail.WrongStudentEmail1);
		cy.get(the.assertions.SubmitTable).should('not.exist');
	});

	it('19308 | TC15 - Validar usuario ingresa “Email” en el formulario sin un carácter alfanumérico antes del @', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.get.Email().type(the.data.StudentEmail.WrongStudentEmail2);
		studentForm.clickGenderMale();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobbySport();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.get.Email().should('not.contain', the.assertions.StudentEmail.WrongStudentEmail2);
		cy.get(the.assertions.SubmitTable).should('not.exist');
	});

	it('19308 | TC16 - Validar usuario ingresa “Email” en el formulario sin un carácter alfanumérico después del @', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.get.Email().type(the.data.StudentEmail.WrongStudentEmail3);
		studentForm.clickGenderMale();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobbySport();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.get.Email().should('not.contain', the.assertions.StudentEmail.WrongStudentEmail3);
		cy.get(the.assertions.SubmitTable).should('not.exist');
	});

	it('19308 | TC17 - Validar usuario ingresa “Email” en el formulario sin contener . después del @', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.get.Email().type(the.data.StudentEmail.WrongStudentEmail4);
		studentForm.clickGenderMale();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobbySport();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.get.Email().should('not.contain', the.assertions.StudentEmail.WrongStudentEmail4);
		cy.get(the.assertions.SubmitTable).should('not.exist');
	});

	it('19308 | TC18 - Validar usuario ingresa “Email” en el formulario sin 2 caracteres alfanuméricos después del .', () => {
		studentForm.typeRandomFirstName();
		studentForm.typeRandomLastName();
		studentForm.get.Email().type(the.data.StudentEmail.WrongStudentEmail5);
		studentForm.clickGenderMale();
		studentForm.typeRandomMobile();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeSubjects();
		studentForm.clickHobbySport();
		studentForm.selectPicture();
		studentForm.typeRandomCurrentAddress();
		studentForm.selectState();
		studentForm.selectCity();
		studentForm.submitButton();

		studentForm.get.Email().should('not.contain', the.assertions.StudentEmail.WrongStudentEmail5);
		cy.get(the.assertions.SubmitTable).should('not.exist');
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

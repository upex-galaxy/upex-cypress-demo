import { Formulario } from '@pages/practiceForm.Page';
import data from '../../../../fixtures/DOM/formulario.json';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
describe('✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('Precondición: El usuario se debe encontrase en la pagina', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'automation-practice-form');
	});

	it('TC 01 Validar campo "nombre y apellido"', () => {
		Formulario.typeLogin(data.firstName, data.lastName);
		Formulario.get.firstNameZero().should('have.value', data.firstName);
		Formulario.get.lastNameZero().should('have.value', data.lastName);
	});

	it('TC 02 Validar campo en rojo de "Nombre y apellidó" por campo vació ', () => {
		Formulario.typeLoginVació(data.firstNameVació);
		Formulario.get.firstNameVació();
	});

	it('TC 03 Validar campo vació de email', () => {
		Formulario.typeEmailVació(data.emailVació);
		Formulario.get.emailVació();
	});

	it('TC 04 Validar campo de email', () => {
		Formulario.typeEmailUno(data.firstEmail);
		Formulario.get.emailUno().should('have.value', data.firstEmail);
	});

	it('TC 05 Validar negativamente en el campo de email', () => {
		Formulario.typeEmailSegundo(data.segundoEmail);
		Formulario.get.emailDos().should('have.value', data.segundoEmail);
	});

	it('TC 06 Validar genero "Male"', () => {
		Formulario.typeGeneroMale();
		Formulario.get.genderMale();
	});

	it('TC 07 Validar genero "Female"', () => {
		Formulario.typeGeneroFemale();
		Formulario.get.genderMale();
	});

	it('TC 08 Validar genero "Other"', () => {
		Formulario.typeGeneroOther();
		Formulario.get.genderOther();
	});

	it('TC 09 Validar campo rojo en genero al no ser seleccionado', () => {
		Formulario.typeEmailVació(data.emailVació);
		Formulario.get.emailVació();
	});

	it('TC 10 Validar campo "Mobile"', () => {
		Formulario.typeMobileZero(data.celularZero);
		Formulario.get.mobileZero().should('have.value', data.celularZero);
	});

	it('TC 11 Validar campo "mobile" menos de 10 números', () => {
		Formulario.typeMobileUno(data.celularUno);
		Formulario.get.mobileZero().should('have.value', data.celularUno);
	});

	it('TC 12 Validar campo rojo en "mobile" al estar vació', () => {
		Formulario.typeMobileDos();
		Formulario.get.mobileZero();
	});

	it('TC 13 Validar calendario', () => {
		Formulario.clickCalendario();
		Formulario.selectRandomYear();
		Formulario.selectRandomMes();
		Formulario.selectRandomDay();
	});

	it('TC 14 Validar Campo "Subject"', () => {
		Formulario.clickSubject(data.typeZero, data.typeOne);
		Formulario.get.subjectType().should('be.visible', data.typeZero);
		Formulario.get.subjectType().should('be.visible', data.typeOne);
	});

	it('TC 15 Validar remover etiqueta del campo "subject" ', () => {
		Formulario.clickSubject(data.typeZero, data.typeOne);
		Formulario.get.subjectType().should('be.visible', data.typeZero);
		Formulario.get.subjectType().should('be.visible', data.typeOne);
		Formulario.clickSubjectRemove();
	});

	it('TC 16 Validar Campo "hobbies" seleccionando "Sports"', () => {
		Formulario.clickHobbiesSports();
	});

	it('TC 17 Validar subir un archivo', () => {
		Formulario.clickHobbiesSports();
	});

	it('TC 18 Validar campo "current address" con letras', () => {
		Formulario.clickCurrentAddressZero(data.addressZero);
		Formulario.get.currentAddress().should('be.visible', data.addressZero);
	});

	it('TC 19 Validar campo "current address" con numero', () => {
		Formulario.clickCurrentAddressOne(data.addressOne);
		Formulario.get.currentAddress().should('be.visible', data.addressOne);
	});

	it('TC 20 Validar campo "current address" con símbolos', () => {
		Formulario.clickCurrentAddressTwo(data.addressTwo);
		Formulario.get.currentAddress().should('be.visible', data.addressTwo);
	});

	it('TC 21 Validar campo "state and address"', () => {
		Formulario.clickState();
		Formulario.get.state();
		Formulario.clickStateZero();
		Formulario.get.selectCity();
	});

	it('TC 22 Validar botón "submit"', () => {
		Formulario.clickBtnSubmit();
		Formulario.get.btnSubmit().should('contain', 'Submit');
	});
});

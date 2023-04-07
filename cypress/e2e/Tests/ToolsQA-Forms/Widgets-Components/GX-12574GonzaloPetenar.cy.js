import { Formulario } from '@pages/practiceForm.Page';
import data from '../../../../fixtures/DOM/GX-12574practiceForm.json';
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
});

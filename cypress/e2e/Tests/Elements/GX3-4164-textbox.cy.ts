import Data from '@data/Elements/GX3-4164-TextBox.json';
import { data } from 'cypress/types/jquery';

describe('GX3 4164 ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	//vistar la pagina demo QA
	beforeEach('PRD: El usuario debe visitar la Pagina Demo QA', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain','text-box');
	});

	it('4165 | TC1: Validar el registro exitoso cuando se ingresa un emails valido.', () => {
		cy.get('#userName').type(Data.FullName.Data.NameValid);
		cy.get('#userEmail').type(Data.Email.Data.EmailValid);
		cy.get('#currentAddress').type(Data.CurrentsAddress.Data.CurrentsAddresT1);
		cy.get('#permanentAddress').type(Data.PermanetAddress.Data.PermanetAdrressTC1);
		cy.get('#submit').click

	});	
	it('4165|TC2: Validar el registró exitoso cuando se 'ingresa' un email valido y los demás campos están vacíos.',() => {	});
	it('4165|TC3: Validar que el envió es fallido cuando el campo email no contiene @',() => {	});
	it('4165|TC4: Validar que el envió es fallido cuando el campo email no contiene 1 carácter alfanumérico como mínimo  antes de "@"',() => {	});
	it('4165|TC5: Validar que el envió es fallido cuando el campo email no contiene 1 carácter alfanumérico como mínimo después de "@"',() => {	});
	it('4165|TC6: Validar que el envió es fallido cuando el campo email No contiene 1  "." después: 1 carácter alfanumérico después de "@".',() => {	});
	it('4165|TC7: Validar que el envió es fallido cuando el campo email No contiene 2 carácter alfanumérico como mínimo después de "."',() => {	});
});
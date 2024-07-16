import Data from '@data/Elements/GX3-4164-TextBox.json';

describe('GX3 4164 ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	//vistar la pagina demo QA
	beforeEach('PRD: El usuario debe visitar la Pagina Demo QA', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain','text-box');
	});

	it('4165 | TC1: Validar el registro exitoso cuando se ingresa un emails valido.', () => {
		cy.get('#userName').type(Data.FullName.Data.NameValid);
		cy.get('#userEmail').type(Data.Email.Data.EmailValid);
		cy.get('textarea[id=currentAddress]').type(Data.CurrentsAddress.Data.CurrentsAddresT1);
		cy.get('textarea[id=permanentAddress]').type(Data.PermanetAddress.Data.PermanetAdrressTC1);
		cy.get('#submit').click();
		cy.get('#name').should('contain.text',Data.FullName.Data.NameValid);
		cy.get('#email').should('contain.text',Data.Email.Data.EmailValid);
		cy.get('p[id=currentAddress]').should('contain.text',Data.CurrentsAddress.Data.CurrentsAddresT1);
		cy.get('p[id=permanentAddress]').should('contain.text',Data.PermanetAddress.Data.PermanetAdrressTC1);
	});
	it('4165|TC2: Validar el registró exitoso cuando se ingresa un email valido y los demás campos están vacíos.', () => {
		cy.get('#userEmail').type(Data.Email.Data.EmailTC2);
		cy.get('#submit').click();
		cy.get('#name').should('not.exist');
		cy.get('#email').should('contain.text',Data.Email.Data.EmailTC2);
		cy.get('p[id=currentAddress]').should('not.exist');
		cy.get('p[id=permanentAddress]').should('not.exist');
	});
	it('4165|TC3: Validar que el envió es fallido cuando el campo email no contiene @',() => {
		cy.get('#userName').type(Data.FullName.Data.NameTC3);
		cy.get('#userEmail').type(Data.Email.Data.EmailTC3);
		cy.get('textarea[id=currentAddress]').type(Data.CurrentsAddress.Data.CurrentsAddresT3);
		cy.get('textarea[id=permanentAddress]').type(Data.PermanetAddress.Data.PermanetAdrressTC3);
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class','field-error');
	});
	it('4165|TC4: Validar que el envió es fallido cuando el campo email no contiene 1 carácter alfanumérico como mínimo  antes de "@"',() => {
		cy.get('#userName').type(Data.FullName.Data.NameTC4);
		cy.get('#userEmail').type(Data.Email.Data.EmailTC4);
		cy.get('textarea[id=currentAddress]').type(Data.CurrentsAddress.Data.CurrentsAddresT4);
		cy.get('textarea[id=permanentAddress]').type(Data.PermanetAddress.Data.PermanetAdrressTC4);
		cy.get('#submit').click();
		cy.get('#email').should('not.exist');
	});
	it('4165|TC5: Validar que el envió es fallido cuando el campo email no contiene 1 carácter alfanumérico como mínimo después de "@"',() => {
		cy.get('#userName').type(Data.FullName.Data.NameTC5);
		cy.get('#userEmail').type(Data.Email.Data.EmailTC5);
		cy.get('textarea[id=currentAddress]').type(Data.CurrentsAddress.Data.CurrentsAddresT5);
		cy.get('textarea[id=permanentAddress]').type(Data.PermanetAddress.Data.PermanetAdrressTC5);
		cy.get('#submit').click();
		cy.get('#email').should('not.exist');
		cy.get('#userEmail').should('have.class','field-error');
	});
	it('4165|TC6: Validar que el envió es fallido cuando el campo email No contiene 1  "." después: 1 carácter alfanumérico después de "@".',() => {
		cy.get('#userName').type(Data.FullName.Data.NameTC6);
		cy.get('#userEmail').type(Data.Email.Data.EmailTC6);
		cy.get('textarea[id=currentAddress]').type(Data.CurrentsAddress.Data.CurrentsAddresT6);
		cy.get('textarea[id=permanentAddress]').type(Data.PermanetAddress.Data.PermanetAdrressTC6);
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class','field-error');
	});
	it('4165|TC7: Validar que el envió es fallido cuando el campo email No contiene 2 carácter alfanumérico como mínimo después de "."',() => {
		cy.get('#userName').type(Data.FullName.Data.NameTC7);
		cy.get('#userEmail').type(Data.Email.Data.EmailTC7);
		cy.get('textarea[id=currentAddress]').type(Data.CurrentsAddress.Data.CurrentsAddresT7);
		cy.get('textarea[id=permanentAddress]').type(Data.PermanetAddress.Data.PermanetAdrressTC7);
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class','field-error');
	});
});
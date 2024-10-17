import dataForm from '@data/Elements/GX3-5346-Text_Box.json';

describe('GX3-5346 | ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('PRC: Usuario debe estar situado en la web DemoQA', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
		cy.get('h1').should('have.text', 'Text Box');
	});
	it('5351 | TC1: Validar submit el formulario exitosamente ', () => {
		cy.get('#userName').type(dataForm.FullName.Data.validData1);
		cy.get('#userEmail').type(dataForm.Email.Data.validData1);
		cy.get('#currentAddress').type(dataForm.CurrentAddress.Data.validData1);
		cy.get('#permanentAddress').type(dataForm.PermanentAddress.Data.validData1);
		cy.get('#submit').click();
		cy.get('#name').should('contain.text', dataForm.FullName.Data.validData1);
		cy.get('#email').should('contain.text', dataForm.Email.Data.validData1);
		cy.get('p#currentAddress.mb-1').should('contain.text', dataForm.CurrentAddress.Data.validData1);
		cy.get('p#permanentAddress.mb-1').should('contain.text', dataForm.PermanentAddress.Data.validData1);
	});
	it('5351| TC2: Validar poder submit el formulario con email valido y todos los demas campos vacios', () => {
		cy.get('#userEmail').type(dataForm.Email.Data.validData2);
		cy.get('#submit').click();
		cy.get('#name').should('not.exist');
		cy.get('#email').should('contain.text', dataForm.Email.Data.validData2);
		cy.get('#currentAddress>*mb-1').should('not.exist');
		cy.get('#permanentAddress>*mb-1').should('not.exist');
	});
	it('5351 | TC3: Validar no submit el formulario con email sin username', () => {
		cy.get('#userName').type(dataForm.FullName.Data.validData2);
		cy.get('#userEmail').type(dataForm.Email.Data.invalidData3);
		cy.get('#currentAddress').type(dataForm.CurrentAddress.Data.validData2);
		cy.get('#permanentAddress').type(dataForm.PermanentAddress.Data.validData2);
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class', 'field-error');
	});
	it('5351 | TC4: Validar no submit el formulario con email sin "@"', () => {
		cy.get('#userName').type(dataForm.FullName.Data.validData3);
		cy.get('#userEmail').type(dataForm.Email.Data.invalidData4);
		cy.get('#currentAddress').type(dataForm.CurrentAddress.Data.validData3);
		cy.get('#permanentAddress').type(dataForm.PermanentAddress.Data.validData3);
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class', 'field-error');
	});
	it('5351 | TC5: Validar no submit el formulario con email sin domain', () => {
		cy.get('#userName').type(dataForm.FullName.Data.validData4);
		cy.get('#userEmail').type(dataForm.Email.Data.invalidData5);
		cy.get('#currentAddress').type(dataForm.CurrentAddress.Data.validData4);
		cy.get('#permanentAddress').type(dataForm.PermanentAddress.Data.validData4);
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class', 'field-error');
	});
	it('5351 | TC6: Validar no submit el formulario con email sin "."', () => {
		cy.get('#userName').type(dataForm.FullName.Data.validData5);
		cy.get('#userEmail').type(dataForm.Email.Data.invalidData6);
		cy.get('#currentAddress').type(dataForm.CurrentAddress.Data.validData5);
		cy.get('#permanentAddress').type(dataForm.PermanentAddress.Data.validData5);
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class', 'field-error');
	});
	it('5351 | TC7: Validar no submit el formulario con email sin extension', () => {
		cy.get('#userName').type(dataForm.FullName.Data.validData5);
		cy.get('#userEmail').type(dataForm.Email.Data.invalidData7);
		cy.get('#currentAddress').type(dataForm.CurrentAddress.Data.validData6);
		cy.get('#permanentAddress').type(dataForm.PermanentAddress.Data.validData6);
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class', 'field-error');
	});
});

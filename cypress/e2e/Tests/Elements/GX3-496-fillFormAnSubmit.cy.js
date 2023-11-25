import data from '@data/Elements/GX-496-fillFormAndSubmit.json';
describe('Text Box: Fill Form and Submit', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/text-box');
	});
	it('497 | TC1: Validar formulario', () => {
		cy.get('#userName').type(data.fullName.validName);
		cy.get('#userName').should('have.value', data.fullName.validName);
		cy.get('#userEmail').type(data.userEmail.data.validEmail);
		cy.get('#userEmail').should('have.value', data.userEmail.data.validEmail);
		cy.get('#currentAddress-wrapper').type(data.currentAddress.dataCurrentAddress.validAddress);
		cy.get('#permanentAddress').type(data.permanentAddress.permanentAddressData);
		cy.get('#submit').click();
		cy.get('#output');
		cy.get('#output').should('contain', data.fullName.validName, data.userEmail.validEmail, data.currentAddress.validAddress);
	});
	it('497 | TC2: Validar formato de correo incorrecto', () => {
		cy.get('#userEmail').type(data.userEmail.data.invalidEmail.domainOnly);
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class', 'field-error');
	});
	it('497 | TC3: Validar formato de correo incorrecto cuando hay un error de típeado', () => {
		cy.get('#userEmail').type(data.userEmail.data.invalidEmail.typoError);
		cy.get('#submit').click();
		cy.get('#userEmail').should('not.have.class', 'field-error');
	});
	it('497 | TC4: Validar formato de correo incorrecto sin dominio', () => {
		cy.get('#userEmail').type(data.userEmail.data.invalidEmail.missingDomain);
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class', 'field-error');
	});
	it('497 | TC5: Validar formato de correo incorrecto sin arroba', () => {
		cy.get('#userEmail').type(data.userEmail.data.invalidEmail.missingAtSign);
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class', 'field-error');
	});
	it('497 | TC6:Validar formato de correo incorrecto dominio incompleto', () => {
		cy.get('#userEmail').type(data.userEmail.data.invalidEmail.domainIncomplete);
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class', 'field-error');
	});
	it('497 | TC6: Validar despliegue de mensaje de confirmación', () => {
		cy.get('#userName').type(data.fullName.validName);
		cy.get('#userEmail').type(data.userEmail.data.validEmail);
		cy.get('#currentAddress-wrapper').type(data.currentAddress.dataCurrentAddress.validAddress);
		cy.get('#permanentAddress').type(data.permanentAddress.permanentAddressData);
		cy.get('#submit').click();
		cy.get('#output');
		cy.get('#output').should('contain', data.fullName.validName, data.userEmail.data.validEmail);
		cy.get('#output').should('contain', data.userEmail.data.validEmail);
		cy.get('#output').should('contain', data.currentAddress.dataCurrentAddress.validAddress);
		cy.get('#output').should('contain', data.permanentAddress.permanentAddressData);
	});
});

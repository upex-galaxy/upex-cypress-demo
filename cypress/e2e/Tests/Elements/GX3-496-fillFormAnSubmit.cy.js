import data from '@data/Elements/GX-496-fillFormAndSubmit.json';
describe('Text Box: Fill Form and Submit', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/text-box');
	});
	function validarCorreo(domainFallido) {
		cy.get('#userEmail').type(domainFallido);
		cy.get('#submit').click();
		cy.get('#userEmail').should('have.class', 'field-error');
	}
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
		let domainOnly = data.userEmail.data.invalidEmail.domainOnly;
		validarCorreo(domainOnly);
	});
	it('497 | TC3: Validar formato de correo incorrecto cuando hay un error de típeado', () => {
		cy.get('#userEmail').type(data.userEmail.data.invalidEmail.typoError);
		cy.get('#submit').click();
		cy.get('#userEmail').should('not.have.class', 'field-error');
	});
	it('497 | TC4: Validar formato de correo incorrecto sin dominio', () => {
		let missingDomain = data.userEmail.data.invalidEmail.missingDomain;
		validarCorreo(missingDomain);
	});
	it('497 | TC5: Validar formato de correo incorrecto sin arroba', () => {
		let missingAtSign = data.userEmail.data.invalidEmail.missingAtSign;
		validarCorreo(missingAtSign);
	});
	it('497 | TC6:Validar formato de correo incorrecto dominio incompleto', () => {
		let domainFallido = data.userEmail.data.invalidEmail.domainIncomplete;
		validarCorreo(domainFallido);

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
});

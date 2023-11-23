import data from '@data/Elements/GX-496-fillFormAndSubmit.json';
describe('Text Box: Fill Form and Submit', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/text-box');
	});
	it.only('497 | TC1: Validar formulario', () => {
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
});

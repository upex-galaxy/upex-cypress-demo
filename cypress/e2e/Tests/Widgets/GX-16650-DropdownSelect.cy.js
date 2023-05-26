const { removeLogs } = require('@helper/RemoveLogs');

describe('This is your test project title', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/select-menu');
	});

	it('Validar seleccionar una opción group 1', () => {
		cy.get('.css-tlfecz-indicatorContainer').eq(0).click();
		cy.get('#react-select-2-group-0-heading').click(); //.should('contain', 'Group 1, option 1');
		cy.should('contain', 'Group');
		//.should()
	});
	it('Validar seleccionar una opción select one', () => {
		cy.get('.css-tlfecz-indicatorContainer').eq(1).click();
		cy.get('#react-select-3-option-0-1').click(); //.should('contain', 'Group 1, option 1');
		cy.get('.css-1uccc91-singleValue').contains('Mr.').should('be.visible');
		//cy.contains('Mrs').should('be.visible');
		// Write your test case two here
	});
	it('Validar seleccionar una opción del Old Style Select Menu', () => {
		cy.get('#oldSelectMenu').select('8').should('have.value', '8');
		cy.get('select option[value="8"]').should('be.selected').should('be.visible'); //cy.contains('Indigo').should('be.visible');
		// Write your test case two here
	});
	it('Validar seleccionar varias opciones del drop down', () => {
		cy.get('.css-tlfecz-indicatorContainer').eq(2).click();
		// Write your test case two here
	});
	it('Validar seleccionar varias opciones del option button select.', () => {
		// Write your test case two herValidar seleccionar varias opciones del option button select. two title', () => {
		// Write your test case two here
	});
});
removeLogs();

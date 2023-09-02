import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
describe('GX-31663|🪶ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('Visitar la pagina Tools QA', () => {
		cy.visit('https://demoqa.com/radio-button');
	});
	it('31666 | TC1: Validar al seleccionar el radio button “Yes“, el siguiente mensaje : “You have selected Yes“.', () => {
		cy.get('#yesRadio').click({ force : true });
		cy.contains('You have selected ').children().should('have.text', 'Yes');
	});
	it('31666 | TC2: Validar al seleccionar el radio button “impressive“, el siguiente mensaje : “You have selected Impressive“.', () => {
		cy.get('#impressiveRadio').click({ force : true });
		cy.contains('You have selected ').children().should('have.text', 'Impressive');
	});
	it('31666 | TC3: Validar el radio button “NO“ esté deshabilitado y no se pueda seleccionar.', () => {
		cy.get('#noRadio').should('be.disabled');
		cy.contains('You have selected ').should('not.exist');
	});
});
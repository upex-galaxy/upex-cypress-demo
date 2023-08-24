import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

// test set:
describe('Elements | ToolsQA | RadioButtons', () => {
	//precondiciones:
	beforeEach('PRC: User must be logged in radioButton endpoint', () => {
		const endpoint = '/radio-button';
		cy.visit('https://demoqa.com/radio-button');
	});
	//test case
	it.only('TC1: Validate visualize log message "you have selected yes" when select "yes"', () => {
		cy.get('#yesRadio').click({ force: true });
		cy.contains('you have selected Yes').should('have.text', 'Yes');
	});
});

//test case
//it('TC2: VALIDAR visualizar log message (you have selected impressive) al seleccionar (impressive)', () => {
//	cy.get('#yesRadio').click();
//	cy.contains('you have selected').should('have.text', 'yes');
//});
///test case
//it('TC3: VALIDAR que el botón "no" esté deshabilitado ...', () => {
//	cy.get('#noRadio').should('be.disabled');
//	cy.contains('you have selected').should('not.exist');
//});

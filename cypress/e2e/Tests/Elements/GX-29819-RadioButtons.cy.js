import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

//* Test Set:
describe('🪶ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('Estar ubicado en Radio Button Page', () => {
		cy.visit('https://demoqa.com/radio-button');
		cy.url().should('contain', 'radio-button');
	});

	it('GX-29820 | TC01: Validar visualizar el mensaje “You have selected Yes ”, al seleccionar el radio-button “Yes”', () => {
		cy.get('#yesRadio').click({ force: true });
		cy.get('.mt-3').should('contain', 'You have selected Yes');
	});

	it('GX-29820 | TC02: Validar visualizar el mensaje “You have selected Impressive”, al seleccionar el radio-button “Impressive”', () => {
		cy.get('#impressiveRadio').click({ force: true });
		cy.get('.mt-3').should('contain', 'You have selected Impressive');
	});

	it('GX-29820 | TC03: Validar NO seleccionar el radio-button “No“ con el cursor del mouse', () => {
		cy.get('#noRadio').check({ force: true }).should('be.disabled');
	});
});

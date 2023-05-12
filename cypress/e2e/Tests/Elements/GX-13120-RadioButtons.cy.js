import { removeLogs } from '@helper/RemoveLogs';

removeLogs();

describe('GX-13120 ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('Precondición: Usuario debe estar situado en el endpoint Radio Buttons de Tools QA', () => {
		cy.visit('https://demoqa.com/radio-button');
	}),
		it('13121 | TC1: Validar que se visualice  “You have selected ” + buttonName" cuando se presiona el RB Yes', () => {
			cy.get('#yesRadio').click({ force: true });
			cy.get('.mt-3').should('contain.text', 'You have selected Yes');
		});

	it('13121 | TC2: Validar que se visualice  “You have selected ” + buttonName" cuando se presiona el RB Impressive.', () => {
		cy.get('#impressiveRadio').click({ force: true });
		cy.get('.mt-3').should('contain.text', 'You have selected Impressive');
	});

	it('13121 | TC3: Validar que no sea posible seleccionar el RB No cuando se hace click.', () => {
		cy.get('#noRadio').should('be.disabled');
	});
});

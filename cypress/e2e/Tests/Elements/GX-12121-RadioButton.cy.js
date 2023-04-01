describe('✅ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('PRC: Usuario debe estar en la pagina de DEMOQA', () => {
		cy.visit('https://demoqa.com/radio-button');
		cy.url().should('contain', 'demoqa');
	});
	it('12122 | TC1: Validar que al seleccionar el RB “YES” aparezca el mensaje “You have selected YES”', () => {
		cy.get('#yesRadio').click({ force: true });
		cy.get("[class='mt-3']").should('contain', 'You have selected Yes').and('be.visible');
	});
	it('12122 | TC2: Validar que al seleccionar el RB “IMPRESSIVE” aparezca el mensaje “You have selected IMPRESSIVE”', () => {
		cy.get('#impressiveRadio').click({ force: true });
		cy.get("[class='mt-3']").should('contain', 'You have selected Impressive').and('be.visible');
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

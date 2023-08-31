describe('GX-32427 tools-qa-elements-radio-buttons', () => {
	beforeEach('Precondicion: Usuario debe estar en la pagina Radio-Button', () => {
		cy.visit('https://demoqa.com/radio-button');
		cy.url().should('contain', 'button');
	});
	it('32628 | TC1: Validar hacer click en boton Yes', () => {
		cy.get("[for='yesRadio']").click();
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

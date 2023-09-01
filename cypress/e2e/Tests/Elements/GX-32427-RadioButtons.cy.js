describe('GX-32427 tools-qa-elements-radio-buttons', () => {
	beforeEach('Precondicion: Usuario debe estar en la pagina Radio-Button', () => {
		cy.visit('https://demoqa.com/radio-button');
		cy.url().should('contain', 'button');
	});
	it('32628 | TC1: Validar hacer click en boton Yes', () => {
		cy.get("[for='yesRadio']").click();
	});
	it('32628 | TC2: Validar hacer click en boton Impressive ', () => {
		cy.get("[for='impressiveRadio']").click();
	});
	it('32628 | TC3: Validar existencia en boton NO ', () => {
		cy.contains('No').should('be.visible');
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

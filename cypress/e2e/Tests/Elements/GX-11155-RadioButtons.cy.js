describe('✅ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('Precondicion: Usuario debe estar situado en ✅ToolsQA', () => {
		cy.visit('https://demoqa.com/radio-button');
		cy.url().should('contain', 'button');
	});
	it('US 11156 | TC1: Validar que al seleccionar la RB YES aparezca la leyenda correspondiente.', () => {
		cy.get('#yesRadio').click({ force: true }).should('have.attr', 'type', 'radio');
		cy.contains('You have selected').children().should('have.text', 'Yes');
	});
	it('11156 | TC2: Validar que al seleccionar la RB IMPREVISSE aparezca la leyenda correspondiente.', () => {
		cy.get('#impressiveRadio').click({ force: true }).should('have.attr', 'type', 'radio');
		cy.contains('You have selected ').children().should('have.text', 'Impressive');
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

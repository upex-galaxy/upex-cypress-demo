describe ('GX3-3432 | TS: ToolsQA | Elements | Radio Buttons', () =>
{
	beforeEach('Usuario debe estar situado en la página de Radio Button', () =>
	{
		cy.visit('https://demoqa.com/radio-button');
	});
	it('GX3-3432 | TC1: Validar poder seleccionar radio button Yes', () =>
	{
		cy.get('input#yesRadio').click({ force: true }).should('be.checked');//El click debió ser forzado debido a la obstrucción de otro elemnento
		cy.get('label[for=\'yesRadio\']').should('contain', 'Yes');
	});
	it('GX3-3432 | TC2: Validar poder seleccionar radio button Impressive',() =>
	{
		cy.get('input#impressiveRadio').click({ force: true }).should('be.checked');//El click debió ser forzado debido a la obstrucción de otro elemnento
		cy.get('label[for=\'impressiveRadio\']').should('contain', 'Impressive');
	});
	it('GX3-3432 |  TC3: Validar que esté deshabilitado radio button No', () =>
	{
		cy.get('input#noRadio').should('be.disabled');
		cy.get('label[for=\'noRadio\']').should('contain', 'No');
	});
});
//Se importa la funcion
import { removeLogs } from '@helper/RemoveLogs';
//Se ejecuta la funcion para evitar los errores
removeLogs();
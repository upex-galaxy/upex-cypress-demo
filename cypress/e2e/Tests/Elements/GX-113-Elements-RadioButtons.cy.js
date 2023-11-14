/* eslint-disable indent */
describe('TS 406: Test ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('', () => {
		cy.visit('https://demoqa.com/radio-button');
	});
	it('US 113 | TC1: Validar que el Radio Button "Yes" puede ser seleccionado', () => {
		cy.get('input[type="radio"][value="Yes"]').check();
	});

	it('US 113 | TC2: Validar que el Radio Button "Impressive" puede ser seleccionado', () => {
		cy.get('input[type="radio"][value="Impressive"]').check();
	});

	it('US 113 | TC3: Validar que el Radio Button "No" está deshabilitado', () => {
		cy.get('input[type="radio"][value="No"]').should('be.disabled');
	});
});

//Se importa la función
import { removeLogs } from '@helper/RemoveLogs';

//Se ejecuta la función para evitar los errores (puedes hacerlo al final de tu codigo)
removeLogs();

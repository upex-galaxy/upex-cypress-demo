/* eslint-disable indent */
describe('TS 406: Test ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('Precondición: Usuario debe estar situado en la web de DemoQA, sección de Radio Buttons', () => {
		cy.viewport(700, 500);
		cy.visit('https://demoqa.com/radio-button');
	});
	it('US 113 | TC1: Validar que el Radio Button "Yes" puede ser seleccionado', () => {
		cy.get('#yesRadio').check({ force: true }); // Se obtiene el input Radio Button "Yes" y se verifica si puede ser checkeado
	});

	it('US 113 | TC2: Validar que el Radio Button "Impressive" puede ser seleccionado', () => {
		cy.get('#impressiveRadio').check({ force: true }); // Se obtiene el input Radio Button "Impressive" y se verifica si puede ser checkeado
	});

	it('US 113 | TC3: Validar que el Radio Button "No" está deshabilitado', () => {
		cy.get('#noRadio').should('be.disabled'); // Se obtiene el input Radio Button "No" y se verifica que esté deshabilitado
	});
});

//Se importa la función
import { removeLogs } from '@helper/RemoveLogs';

//Se ejecuta la función para evitar los errores (puedes hacerlo al final de tu codigo)
removeLogs();

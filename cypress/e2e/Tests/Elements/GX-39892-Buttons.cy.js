//Se importa la funcion
import { removeLogs } from '@helper/RemoveLogs';

describe('US GX-39892 | TS: 🪶ToolsQA | Elements | Buttons', () => {
	beforeEach('', () => {
		//todo: ingresar a la pagina
		cy.visit('/buttons');
		cy.url().should('contain', 'buttons');
	});
	it('39893 | TC1: Validar hacer click en button click me', () => {
		//todo: hacer en el boton
		cy.get('[type="button"]').eq(3).click();
		//todo: validar mensaje
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
	});
});

//Se ejecuta la funcion para evitar los errores (puedes hacerlo al final de tu codigo)
removeLogs();

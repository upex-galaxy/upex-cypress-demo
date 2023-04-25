import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

import { URL, TC, select } from '../Elements/DynamicId.Pages.js';

//vars
describe('✅ US GX-14236 | TS: ✅ToolsQA | Elements | Dynamic Properties', () => {
	beforeEach(() => {
		cy.visit(URL);
	});
	it('14237 | TC1: Validar existencia de elemento con texto “this text has..” a través de <texto>, al cargar la página', () => {
		cy.xpath('//p["This text has random Id"]').should('be.visible');
	});

	it('14237 | TC2: Validar existencia de elemento con texto “Will enabled 5 seconds” y que se encuentre DESHABILITADO', () => {
		cy.get('#enableAfter').should('be.disabled');
	});

	it('14237 | TC3: Validar que elemento con texto  “Will enabled 5 seconds” se encuentre HABILITADO después de 5 segundos transcurridos desde carga de la pagina', () => {
		cy.wait(5000);
		cy.get('#enableAfter').should('be.enabled');
	});

	it('14237 | TC4: Validar cambio de color del elemento con texto  “Change color” después de los 5 segundos transcurridos desde carga de la página', () => {
		cy.get('[class="mt-4 btn btn-primary"]').contains('Color Change');
		cy.wait(5000);
		cy.get('[class="mt-4 text-danger btn btn-primary"]').contains('Color Change');
	});

	it('14237 | TC5: Validar existencia de nuevo elemento con texto “visible after 5 seconds” después de los 5 segundos transcurridos desde de carga de la página', () => {
		cy.wait(5000);
		cy.get('#visibleAfter').should('be.visible');
	});
});

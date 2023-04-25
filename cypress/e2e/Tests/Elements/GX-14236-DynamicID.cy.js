import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

import { e } from '@pages/ElementDynamicId.Page.js';

const timeValue = 5000;

const URL = 'https://demoqa.com/dynamic-properties';

describe('✅ US GX-14236 | TS: ✅ToolsQA | Elements | Dynamic Properties', () => {
	beforeEach(() => {
		cy.visit(URL);
	});
	it('14237 | TC1: Validar existencia de elemento con texto “this text has..” a través de <texto>, al cargar la página', () => {
		e.readText();
	});

	it('14237 | TC2: Validar existencia de elemento con texto “Will enabled 5 seconds” y que se encuentre DESHABILITADO', () => {
		e.disabled();
	});

	it('14237 | TC3: Validar que elemento con texto  “Will enabled 5 seconds” se encuentre HABILITADO después de 5 segundos transcurridos desde carga de la pagina', () => {
		e.wait(timeValue);
		e.enabled();
	});

	it('14237 | TC4: Validar cambio de color del elemento con texto  “Change color” después de los 5 segundos transcurridos desde carga de la página', () => {
		e.whiteClass();
		e.wait(timeValue);
		e.dangerClass();
	});

	it('14237 | TC5: Validar existencia de nuevo elemento con texto “visible after 5 seconds” después de los 5 segundos transcurridos desde de carga de la página', () => {
		e.wait(timeValue);
		e.visibleAfter();
	});
});

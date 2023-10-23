describe('GX-40395 | TS: ✅ToolsQA | Widgets | Auto-Complete', () => {
	beforeEach('Visitar la pagina de DemoQA', () => {
		cy.visit('/auto-complete');
		cy.wait(3000);
	});
	it('39414| TC2: Validar que se pueda seleccionar 2 o mas colores en el input “Type Multiple color name”', () => {
		cy.get('#autoCompleteMultiple').type('B');
		cy.contains('Black').click();
		cy.get('#autoCompleteMultiple').eq(0).type('R');
		cy.contains('Red').click();
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

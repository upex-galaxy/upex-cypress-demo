import { drop } from '@pages/Elements/GX-23033-dropdown.Page';

describe('US GX-23033 | TS: ✅ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('Precondition: Having access to SUT', () => {
		cy.visit('/select-menu');
		drop.get.mainTitle().should('have.text', 'Select Menu');
	});

	it('GX-23033 | TC1: Validate that dropdown “select value” works correctly.', () => {
		drop.get.selectMenuOne();
	});
});
//Se importa la funcion
import { removeLogs } from '@helper/RemoveLogs';

//Se ejecuta la funcion para evitar los errores (puedes hacerlo al final de tu codigo)
removeLogs();

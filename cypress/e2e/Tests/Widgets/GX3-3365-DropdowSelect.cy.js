import { dropdown } from '../../../support/pages/GX3-3365-DropdowSelect.Page';
import data from'../../../fixtures/data/Widgets/GX3-431-DropdowSelect.json';

describe('GX3-431 ToolsQA | Widgets | Dropdown - Select Menu',() => {
	beforeEach('Precondicion:Visitar la Url Select-Menu', () => {
		cy.visit('/select-menu');
		cy.url().should('contain','select-menu');
	});
	it('431-TC01 Seleccionar Valor aleatorio del Select Value Menú satisfatoriamente', () => {
		//const randomValue = Cypress._.random(0.5);
		dropdown.clickValueMenu();
		dropdown.
	});
}
);
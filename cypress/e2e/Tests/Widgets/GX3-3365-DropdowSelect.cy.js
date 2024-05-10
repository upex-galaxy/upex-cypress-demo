import { dropdown } from '../../../support/pages/GX3-3365-DropdowSelect.Page';
//import data from'../../../fixtures/data/Widgets/GX3-3365-DropdowSelect.json';

describe('GX3-3365 ToolsQA | Widgets | Dropdown - Select Menu',() => {
	beforeEach('Precondicion:Visitar la Url Select-Menu', () => {
		cy.visit('/select-menu');
		cy.url().should('contain','select-menu');[];
	});
	it('3365-TC01 Seleccionar Valor aleatorio del Select Value Menú satisfatoriamente', () => {
		//const randomValue = Cypress._.random(0.5);
		dropdown.clickValueMenu();
		cy.get('#withOptGroup [class*="menu"]');
		 //css-yk16xz-control
		 //dropdown.get.valueMultiselectMenu();
		 //dropdown.clickMultiselectMenu();
	});
}
);
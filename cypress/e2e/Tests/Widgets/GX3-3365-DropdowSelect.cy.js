import { dropdownPage } from '../../../support/pages/GX3-3365-DropdowSelect.Page';
//import data from'../../../fixtures/data/Widgets/GX3-3365-DropdowSelect.json';

describe('GX3-3365 ToolsQA | Widgets | Dropdown - Select Menu',() => {
	beforeEach('Precondicion:Visitar la Url Select-Menu', () => {
		cy.visit('/select-menu');
		cy.url().should('contain','select-menu');
	});
	it('3365-TC01 Seleccionar Valor aleatorio del Select Value Menú satisfatoriamente', () => {
		//const randomValue = Cypress._.random(0.5);
		//const randomValue = Math.floor(0,5);
		dropdownPage.clickValueMenu();
		dropdownPage.clickValueMenuOpen();
		// cy.get('[id*="react-select-2-option-"]').then(arrayElements => {
		// 	const randomElement = Cypress._.random(0, arrayElements.lehgth -1);
		// 	cy.wrap(arrayElements).eq(randomElement).then(selectedElement => {
		// 		cy.wrap(selectedElement).invoke('text').then(text => {
		// 			cy.wrap(text).click();
		// 		});
		// 	});
		//});
	});
	//dropdownPage.

	//cy.get('#withOptGroup [class*="menu"]'); Para averiguar el id de los elementos del desplegable al abrirse.
		 //css-yk16xz-control
		 //dropdownPage.get.valueMultiselectMenu();
		 //dropdownPage.clickMultiselectMenu();
});

const { SelectMenu, getRandomInt } = require('../../../support/pages/Widgets/GX3-699-dropdown-select-menu');
import data from '@data/Widgets/GX3-699-dropdown-select-menu';

describe('ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('Encontrarse en el endpoint /select-menu', () => {
		cy.visit('https://demoqa.com/select-menu');
		cy.url().should('contain', 'menu');
	});

	it('669 | TC1: Validar poder seleccionar un elemento del menu "Select Value" exitosamente', () => {
		const option = getRandomInt(5);
		const expectedOption = data.menuA[option.toString()];
		SelectMenu.SelectMenuA();
		SelectMenu.SelectOptions(option).then(name => {
			expect(name).to.equal(expectedOption);
		});
	});

	it('669 | TC2: Validar poder seleccionar un elemento del menu "Select One" exitosamente', () => {
		const option = getRandomInt(5);
		const expectedOption = data.MenuB[option.toString()];
		SelectMenu.SelectMenuB();
		SelectMenu.SelectOptions(option).then(name => {
			expect(name).to.equal(expectedOption);
		});
	});

	it.only('669 | TC3 Validar poder seleccionar un elemento del menu "Old Style Select Menu" exitosamente', () => {
		SelectMenu.SelectMenuC();
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

// Todos los metodos que tengan que ver con String, Numeros y Arrays.

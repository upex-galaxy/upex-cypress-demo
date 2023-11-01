import { selectablePage } from '@pages/Interactions/GX2-8536-Selectable.page';
import data from '@data/GX-41928-IniciarSesión.page.json';

describe('SwagLabs | Account | Iniciar sesión y BR de Accesos', () => {
	beforeEach('visitar la página de Swag Labs', () => {
		cy.visit('https://www.saucedemo.com/');
	});

	it('41929 | TC1: Validar poder INICIAR SESIÓN cuando los datos son válidos.', () => {
		selectablePage.get.list().should('have.attr', data.attribute, data.valueTrue);
		selectablePage.defaultColorList();
		selectablePage.get.grid().should('have.attr', data.attribute, data.valueFalse);
	});
	it('41929 | TC2: Validar NO poder INICIAR SESIÓN cuando el USERNAME esta BLOQUEADO.', () => {
		selectablePage.clickList();
		selectablePage.defaultColorList();
		selectablePage.clickColorList();
		selectablePage.textList();
		selectablePage.unClickColorList();
	});
	it.only('41929 | TC3: Validar NO poder INICIAR SESIÓN cuando los datos son Inválidos.', () => {
		selectablePage.clickGrid();
		selectablePage.defaultColorGrid();
		selectablePage.clickColorGrid();
		selectablePage.textGrid();
		selectablePage.unClickColorGrid();
	});

	it.only('41929 | TC4: Validar NO poder INICIAR SESIÓN cuando el USERNAME esta VACÍO.', () => {
		selectablePage.clickGrid();
		selectablePage.defaultColorGrid();
		selectablePage.clickColorGrid();
		selectablePage.textGrid();
		selectablePage.unClickColorGrid();
	});

	it.only('41929 | TC5: Validar NO poder INICIAR SESIÓN cuando el PASSWORD esta VACÍO.', () => {
		selectablePage.clickGrid();
		selectablePage.defaultColorGrid();
		selectablePage.clickColorGrid();
		selectablePage.textGrid();
		selectablePage.unClickColorGrid();
	});

	it.only('41929 | TC6: Validar NO poder INICIAR SESIÓN cuando USERNAME y PASSWORD están VACÍOS.', () => {
		selectablePage.clickGrid();
		selectablePage.defaultColorGrid();
		selectablePage.clickColorGrid();
		selectablePage.textGrid();
		selectablePage.unClickColorGrid();
	});
});

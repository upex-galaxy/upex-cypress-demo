import { DropDown } from '@pages/Widgets/GX3-1005-DropdownMenu.page';
describe('US GX3-1005 | ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('el usuario se encuentra en el endpoint /select-menu', () => {
		cy.visit('https://demoqa.com/select-menu');
	});

	it('1008|TC1:Validar que el usuario selecciona un elemento del menu "Select Value"', () => {
		DropDown.ClickSelectorValue().should('exist');
		DropDown.ClickSelectorValue1().should('contain', 'Group 1, option 1');
	});
	it('1008|TC2:Validar que el usuario selecciona un elemento del menu "Select One"', () => {
		DropDown.ValidarSelectorList().should('exist');
		DropDown.SelectOneOption().should('contain', 'Dr.');
	});
	it('1008|TC3:Validar que el usuario selecciona un elemento del menu "Old Style Select Menu"', () => {
		DropDown.SelectOldMenu().should('have.value', '2');
	});
	it('1008|TC4:Validar que el usuario selecciona uno o más elementos del "Multiselect drop down"', () => {
		DropDown.IndicadorMultiMenu().should('be.visible');
		DropDown.SelectMultiMenu().should('contain', 'Blue').and('contain', 'Black');
	});
	it('1008|TC5:Validar que el usuario selecciona varios elementos del menú "Standard multi select"', () => {
		DropDown.SelectMenuStandard().should('have.css', 'background-color', 'rgb(255, 255, 255)');
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

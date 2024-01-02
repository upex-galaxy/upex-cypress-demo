import { DropDownPage } from '@pages/Widgets/GX3-1005-DropdownMenu.page';
describe('US GX3-1005 | ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('el usuario se encuentra en el endpoint /select-menu', () => {
		cy.visit('https://demoqa.com/select-menu');
	});
	it.skip('1008|TC1:Validar que el usuario selecciona un elemento del menu "Select Value"', () => {
		const randomvalue = Cypress._.random(0, 6);
		DropDownPage.ClickSelectorValueDropDown();
		DropDownPage.get.selectorValueList().should('have.length', 6).and('exist');
		DropDownPage.SelectValueListRandom(randomvalue);
		DropDownPage.get
			.selectorValue()
			.invoke('text')
			.then(values => {
				DropDownPage.get.selectorValue().should('have.text', values);
			});
	});
	it.skip('1008|TC2:Validar que el usuario selecciona un elemento del menu "Select One"', () => {
		const random = Math.floor(Math.random() * 6);
		DropDownPage.ClickSelectOne();
		DropDownPage.get.selectorOneList().should('have.length', 6).and('exist');
		DropDownPage.SelectOneOptionRandom(random);
		DropDownPage.get
			.selectorOne()
			.invoke('text')
			.then(values => {
				DropDownPage.get.selectorOne().should('have.text', values);
			});
	});
	it.skip('1008|TC3:Validar que el usuario selecciona un elemento del menu "Old Style Select Menu"', () => {
		DropDownPage.SelectOldMenu().should('have.value', '2');
	});
	it('1008|TC4:Validar que el usuario selecciona uno o más elementos del "Multiselect drop down"', () => {
		const RANDOM = Cypress._.random(0, 4);
		DropDownPage.IndicadorMultiMenu().should('have.length', 4).and('exist');
		DropDownPage.SelectMultiMenu(RANDOM);
		DropDownPage.get
			.indicadorMultiMenu()
			.invoke('text')
			.then(values => {
				DropDownPage.get.indicadorMultiMenu().should('have.text', values);
			});
	});
	it.skip('1008|TC5:Validar que el usuario selecciona varios elementos del menú "Standard multi select"', () => {
		DropDownPage.SelectMenuStandard().should('have.css', 'background-color', 'rgb(255, 255, 255)');
	});
});

import { removeLogs } from '@helper/RemoveLogs';

removeLogs();

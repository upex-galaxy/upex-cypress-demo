import { selectMenuPage } from '@pages/GX3-4358-SelectMenu.Page';
describe ('GX3 - 4358 | ToolsQA | Widgets | Dropdown - Select Menu',( ) => {
	beforeEach('PRC: El Usuario deberia ubicarse en la pagina Demo QA /select-menu', () => {
		cy.visit('https://demoqa.com/select-menu');
		cy.url().should('contain','select-menu');
	});

	it('4359 |TC1: Validar que se pueda seleccionar un elemento del menu "Select Value"',() => {
		selectMenuPage.clickSelectValue();
	});
	//it('4359 |TC2: Validar que se pueda seleccionar un elemento del menu "Select One"',() => {});
	it.only('4359 |TC3: Validar que se pueda seleccionar un elemento del menu "Old Style Select Menu"',() => {
		selectMenuPage.selectOldStyleSelect();

	});
	//it('4359 |TC4: Validar que se pueda seleccionar un elemento del menu "Multiselect drop dow"',() => {});
});
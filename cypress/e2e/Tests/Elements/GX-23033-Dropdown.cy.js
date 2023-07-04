import { dropPage } from '@pages/Elements/GX-23033-dropdown.Page';

describe('US GX-23033 | TS: ✅ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('Precondition: Having access to SUT', () => {
		cy.visit('/select-menu');
		dropPage.get.mainTitle().should('have.text', 'Select Menu');
	});

	it('GX-23033 | TC1: Validate that dropdown “select value” works correctly.', () => {
		dropPage.clickOptionValue1();
		dropPage.get.optionValue1Picked().should('have.text', 'Group 2');
		dropPage.clickOptionValue2();
		dropPage.get.optionValue2Picked().should('have.text', 'Group 2, option 1');
	});

	it('GX-23033 | TC2: Validate dropdown “select one” works correctly.', () => {
		dropPage.selectOptionOne();
		dropPage.get.optionOnePicked().should('have.text', 'Pick one title');
		dropPage.clickOptionOne();
		dropPage.get.optionValue2Picked().should('have.text', 'Other'); //same class as dropdown from tc1
	});

	it('GX-23033 | TC3: Validate dropdown “old style select menu“ works correctly.', () => {
		dropPage.clickOldMenu();
		dropPage.get.clickOldMenu().children().first().should('have.value', 'red');
	});

	it('GX-23033 | TC4: Validate dropdown “multiselect dropdown” works successfully.', () => {
		dropPage.multiSelectOption();
		dropPage.get.clickMultiSelect().should('have.text', 'Green');
	});

	it('GX-23033 | TC5: Validate dropdown “standard multiselect” works successfully.', () => {
		dropPage.standardSelectOption();
		dropPage.get.standardSelectOption().children().first().should('have.text', 'Volvo');
	});
});
//Se importa la funcion
import { removeLogs } from '@helper/RemoveLogs';
//Se ejecuta la funcion para evitar los errores (puedes hacerlo al final de tu codigo)
removeLogs();

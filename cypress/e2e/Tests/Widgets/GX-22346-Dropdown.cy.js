import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

import { dropDownSelector } from '@pages/Widgets/GX-22346-Dropdown.Page';

describe('✅ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('user is located in the Sut', () => {
		cy.visit('/select-menu');
	});
	it('22347 | TC01: Validar la selección de Una opción Aleatoria en Select Value', () => {
		dropDownSelector
			.SelectValueDropDownOptions()
			.invoke('text')
			.then(values => {
				cy.log(values);
				dropDownSelector.get.selectOption().should('have.text', values);
			});
	});
	it('22347 | TC02: Validar que al escribir Una parte de la opción valida en el Dropdown Select Value se visualice la opción escrita', () => {
		cy.fixture('data/GX-22346-Dropdown').then(the => {
			dropDownSelector.SelectValueDropDownInput(the.SelectValue.data.valid);
			dropDownSelector.get.dropdownMenu().should('contain.text', the.SelectValue.data.valid);
		});
	});
	it('22347 | TC03: Validar que al escribir Una opción NO valida en el Dropdown Select Value NO se visualice dicha opción escrita', () => {
		cy.fixture('data/GX-22346-Dropdown').then(the => {
			dropDownSelector.SelectValueDropDownInput(the.SelectValue.data.invalid);
			dropDownSelector.get.dropdownMenu().should('contain.text', the.Incorrect);
		});
	});
	it('22347 | TC04: Validar la selección de Una opción Aleatoria del Dropdown Select One', () => {
		dropDownSelector
			.SelectOneDropDownOptions()
			.invoke('text')
			.then(values => {
				cy.log(values);
				dropDownSelector.get.selectOption().should('have.text', values);
			});
	});
	it('22347 | TC05: Validar que al escribir Una parte de la opción valida en el Dropdown Select One se visualice la opción escrita', () => {
		cy.fixture('data/GX-22346-Dropdown').then(the => {
			dropDownSelector.SelectOneDropDownInput(the.SelectOne.data.valid);
			dropDownSelector.get.dropdownMenu().should('contain.text', the.SelectOne.data.valid);
		});
	});
	it('22347 | TC06: Validar que al escribir Una opción NO valida en el Dropdown Select One NO se visualice dicha opción escrita', () => {
		cy.fixture('data/GX-22346-Dropdown').then(the => {
			dropDownSelector.SelectOneDropDownInput(the.SelectOne.data.invalid);
			dropDownSelector.get.dropdownMenu().should('contain.text', the.Incorrect);
		});
	});
	it.only('22347 | TC07: Validar la selección de Una opción Aleatoria del Dropdown Old Style Select Menu', () => {
		dropDownSelector.OldSelectMenuDropDownOptions();
		dropDownSelector.get.OldSelectMenuDropDown().then(the => {
			expect(the.text()).to.contain(Cypress.env('colorSelect'));
		});
	});
});

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
		});
	});
});

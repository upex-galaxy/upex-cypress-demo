import { DropDownPage } from '../../../support/pages/Widgets/GX3-991-dropdown.Page';

describe('GX3-991 | ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('PRC: User must be at the Select-Menu section on the web page', () => {
		cy.visit('https://demoqa.com/select-menu');
		cy.url().should('contain', 'select-menu');
	});
	it('GX3-992 | TC1: Validate select one option from the “Select Value” menu', () => {
		DropDownPage.clickValue();
		DropDownPage.selectValueOption();
		//DropDownPage.get.valueOptions().should('have.id', 'react-select-2-option');
	});
});

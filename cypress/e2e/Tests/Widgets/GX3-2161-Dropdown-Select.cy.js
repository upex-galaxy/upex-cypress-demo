import { dropdownPage } from '../../../support/pages/GX3-2161-Dropdown.Page';
describe('ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach(()=>{
		cy.visit('/select-menu');
	});
	it('2162 | TC1: Check that the user can select one element from the “Select Value” dropdown.', () => {
		dropdownPage.getAnySelectValue().invoke('text').then(option => {
			dropdownPage.get.inputSelectValue().invoke('text').should('eq', option);
		});

	});
});
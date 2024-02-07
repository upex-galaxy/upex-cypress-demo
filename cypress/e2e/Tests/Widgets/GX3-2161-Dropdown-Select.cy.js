import { dropdownPage } from '../../../support/pages/GX3-2161-Dropdown.Page';
describe('ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach(()=>{
		cy.visit('/select-menu');
	});
	it('2162 | TC1: Check that the user can select one element from the “Select Value” dropdown.', () => {
		dropdownPage.getSelectValue().invoke('text').then(option => {
			dropdownPage.get.inputSelectValue().invoke('text').should('eq', option);
		});
	});
	it('2162 | TC2: Check that the user can select one element from the “Select One” dropdown.', () => {
		dropdownPage.getSelectOne().invoke('text').then(option => {
			dropdownPage.get.inputSelectValue().invoke('text').should('eq', option);
		});
	});
	it('2162 | TC3: Check that the user can select one element from the “Old Style Select Menu” dropdown.', () => {
		dropdownPage.getOldStyle().then(randomOption => {
			dropdownPage.get.selectOldStyleDropdown().invoke('val').should('equal', randomOption);
		});
	});
	it.only('2162 | TC4: Check that the user can select one element from the “Multiselect” dropdown.', () => {
		dropdownPage.getOneMultiSelect().invoke('text').then(option => {
			dropdownPage.get.inputMultiselect().invoke('text').should('eq', option);
		});
	});
});
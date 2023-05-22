import { Dropdowns } from '@pages/Dropdown-SelectMenu.page';

describe('✅ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('PRC - User must be in widget / Select Menu option', () => {
		cy.visit('/select-menu');
		cy.contains('Select Menu');
	});

	// -- Start: Cypress Tests --
	it.only('16727 | TC1: Validate User can select an option from either Group 1 or Group 2 in the Select Value Dropdown', () => {
		Dropdowns.SelectValue();
	});
	it('16727 | TC2: Validate User can select any option from the Select One Dropdown', () => {
		Dropdowns.SelectOne();
	});
	it('16727 | TC3: Validate User can select any option from the Old Style Select Menu Dropdown', () => {
		Dropdowns.SelectColor();
	});
	it('16727 | TC4: Validate User can select multiple options from the multi select Dropdown', () => {
		Dropdowns.MultiSelect4colors();
	});
	it('16727 | TC5: Validate User can select more than 1 option from the Standard multi select', () => {
		Dropdowns.StandardMultiSelect();
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

import { dropdownPage } from '../../../support/pages/GX3-2161-Dropdown.Page';
describe('ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach(()=>{
		cy.visit('/select-menu');
	});
	it('2162 | TC1: Check that the user can select one element from the “Select Value” dropdown.', () => {
		dropdownPage.getSelectValue().then(option => {
			dropdownPage.get.inputSelectValue().invoke('text').should('eq', option);
		});
	});
	it('2162 | TC2: Check that the user can select one element from the “Select One” dropdown.', () => {
		dropdownPage.getSelectOne().then(option => {
			dropdownPage.get.inputSelectValue().invoke('text').should('eq', option);
		});
	});
	it('2162 | TC3: Check that the user can select one element from the “Old Style Select Menu” dropdown.', () => {
		dropdownPage.getRandomSelect(dropdownPage.get.selectOldStyleDropdown).then(option => {
			dropdownPage.get.selectOldStyleDropdown().invoke('val').should('equal', option);
		});
	});
	it('2162 | TC4: Check that the user can select one element from the “Multiselect” dropdown.', () => {
		dropdownPage.getOneMultiSelect().then(option => {
			dropdownPage.get.inputMultiselect().invoke('text').should('eq', option);
			dropdownPage.get.inputMultiselect().should('not.exist');
		});
	});
	it('2162 | TC5: Check that the user can select all elements from the “Multiselect” dropdown.', () => {
		dropdownPage.getAllMultiSelect().then(option => {
			dropdownPage.get.inputMultiselect().each((elem, index) => {
				cy.wrap(elem).invoke('text').should('eq', option[index]);
			});
		});
	});
	it('2162 | TC6: Check that the user can select one element from the “Standard multi select” dropdown.', () => {
		dropdownPage.getRandomSelect(dropdownPage.get.standartMultiSelect).then(() => {
			dropdownPage.get.standartMultiSelect().find('option:selected').should('have.length', 1);
		});
	});
	it('2162 | TC7: Check that the user can select multiple elements from the “Standard multi select” dropdown.', () => {
		dropdownPage.getAllStandardSelect().then($select => {
			$select.find('option').each((index, option)=> {
				cy.wrap(option).should('have.property', 'selected');
			});
		});
	});
});
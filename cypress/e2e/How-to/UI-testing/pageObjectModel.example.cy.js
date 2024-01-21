import { dropdownMenu } from '@pages/Examples/pageObjectModel.Page';
context('This is your test suite title', () => {
	beforeEach(() => {
		// runs before every it() test block
		cy.visit('https://demoqa.com/select-menu');
	});
	// -- Start: Cypress Tests --
	it('Checking Return Variables with promises', () => {
		dropdownMenu.selectMenuGroupDropdownOption(2).then(() => {
			dropdownMenu.get.menuGroupDropdownValue().then(actualValue => {
				expect(actualValue.text()).equal(dropdownMenu.get.selectedValue);
			});
		});
		dropdownMenu.selectMenuPickDropdownOption(2).then(() => {
			dropdownMenu.get.menuPickDropdownValue().then(actualValue => {
				expect(actualValue.text()).equal(dropdownMenu.get.selectedValue);
			});
		});
	});
});

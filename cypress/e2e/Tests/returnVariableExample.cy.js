import { dropdownMenu } from '@pages/dropdownKT.Page';
context('This is your test suite title', () => {
	beforeEach(() => {
		// runs before every it() test block
		cy.visit('https://demoqa.com/select-menu');
	});
	// -- Start: Cypress Tests --
	it('This is your test case one title', () => {
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

		// dropdownMenu.openMenuPickDropdown().then(() => {
		// 	expect(dropdownMenu.get.dropdownMenu()).to.be.visible();
		// });

		// dropdownMenu.openMenuSelectDropdown().then(() => {
		// 	expect(dropdownMenu.get.dropdownMenu()).to.be.visible();
		// });

		// dropdownMenu.openMenuMultiDropdown().then(() => {
		// 	expect(dropdownMenu.get.dropdownMenu()).to.be.visible();
		// });
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

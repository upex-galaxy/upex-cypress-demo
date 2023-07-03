import { DropD } from '@pages/Elements/GX-23033-dropdown.Page';

describe('US GX-23033 | TS: ✅ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('Precondition: Having access to SUT', () => {
		cy.visit('/');
		DropD.get.mainTitle().should('have.text', 'Select Menu');
	});

	//	it('GX-21867| TC1: Validate user adds item from PLP to SC successfully.', () => {});
});

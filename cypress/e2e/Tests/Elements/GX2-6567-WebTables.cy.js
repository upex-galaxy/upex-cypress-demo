import { Faker } from '@faker-js/faker';
import { webTables } from '@pages/Elements/GX2-6567-WebTables.Page';
import { removeLogs } from '@helper/RemoveLogs.js';
removeLogs();

describe('GX2-6567 ✅ToolsQA | Elements | Web Table', () => {
	beforeEach('Precondition: The user should be located in demoqa.com/webtables', () => {
		cy.visit('/webtables');
		cy.url().should('contain', 'webtables');
	});
	it.only('6568 | TC1: Validate add new record', () => {
		webTables.elements.addButtonClick().click();
	});
	it('6568 | TC2: Validate cancel adding record', () => {});
	it('6568 | TC3: Validate records filter', () => {});
	it('6568 | TC4: Validate sort  record by field', () => {});
	it('6568 | TC5: Validate delete record', () => {});
	it('6568 | TC6: Validate page layout', () => {});
	it('6568 | TC7: Validate show specified number of rows by page.', () => {});
});

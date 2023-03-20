import { removeLogs } from '@helper/RemoveLogs';
describe('✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('the user must be positioned in page demoQa form', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('include', 'form');
	});
	it('Submit form filling all fields with valid format', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('include', 'form');
	});
});

removeLogs();

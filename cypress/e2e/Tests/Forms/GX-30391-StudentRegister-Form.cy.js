describe('✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('PRC: Student Registration Form', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
	});

	it('30392 | TC1: Validate Student Registration Form with random data', () => {
		expect(true).to.equal(true);
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

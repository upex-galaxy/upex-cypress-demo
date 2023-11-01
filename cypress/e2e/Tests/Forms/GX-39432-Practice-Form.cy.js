import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('GX-39432 |✅ToolsQA | Forms | Practice Form', () => {
	beforeEach(() => {
		cy.visit('/automation-practice-form');
		cy.url().should('contain', 'form');
	});
});

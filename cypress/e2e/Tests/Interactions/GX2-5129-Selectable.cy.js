import { selectable } from '@pages/Interactions/GX2-5129-Selectable.page';
describe('✅ToolsQA | Interactions | Selectable', () => {
	beforeEach('visitar la página de Demo QA', () => {
		cy.visit('/selectable');
		cy.url().should('contain', 'selectable');
	});
	it('5129| TC1:', () => {
		selectable.clickBttnGrid();
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

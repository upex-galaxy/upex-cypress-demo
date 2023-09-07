import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
describe('GX2-6642 ✅ToolsQA | Interactions | Dragabble', () => {
	beforeEach('Visitar la pagina DemoQA', () => {
		cy.visit('https://demoqa.com/dragabble');
		cy.url().should('contain', 'dragabble');
	});
});
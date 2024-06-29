import { checkBoxPage } from '@pages/GX3-3940-ElementsCheckbox.Page';
describe('GX-3 3941 | ToolsQA | Elements | Checkbox', () => {
	beforeEach('PRC: El usuario debe estar situado en la pagina de Demo QA',() => {
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contain','checkbox');
	});
	it('3941 | TC1: Validar que el "Bulk Action" pueda expandir y colapsar todos los folders"', () => {
		checkBoxPage.clickExpandButton();
		checkBoxPage.get.expandReaction().should('have.class', 'rct-node-expanded');
		checkBoxPage.clickCollapseButton();
		checkBoxPage.get.collapseReaction().should('have.class','rct-node-collapsed');

	});
});
import '@4tw/cypress-drag-drop';
import { droppable } from '@pages/GX2-3105-Droppable/droppablePage';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('GX2-3105 |ToolsQA | Interactions | Droppable', () => {
	beforeEach('User must be situated in the website', () => {
		cy.visit('https://demoqa.com/droppable');
	});
	it('3106 | TC1: Validate Tabs “Simple”, “Accept”, “Prevent Propogation”, “Revert Draggable” must be shown.', () => {
		droppable.get.simpleTab().should('exist').and('be.visible');
		droppable.get.acceptTab().should('exist').and('be.visible');
		droppable.get.preventPropogationTab().should('exist').and('be.visible');
		droppable.get.revertableTab().should('exist').and('be.visible');
	});
	it('3106 | TC2: Validate Tab “Simple” is displayed by default. and only one tab is displayed at once.', () => {
		droppable.get.tabList().within(() => {
			cy.get('[aria-selected="true"]')
			//should('have.class', 'active')
			//   .and('have.id', 'droppableExample-tab-simple').and('have.attr', 'aria-selected', 'true');
		});
	});
});

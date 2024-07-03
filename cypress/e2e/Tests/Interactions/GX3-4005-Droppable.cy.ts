import { droppablePage } from '@pages/GX3-4005-Droppable.Page.ts';
describe('GX3 4006 | ToolsQA | Interactions | Droppable', () => {
	beforeEach('PRC: El usuario debe estar situado en la pagina de Demo QA', () => {
		cy.visit('https://demoqa.com/droppable');
		cy.url().should('contain', 'droppable');
	});
	it('4006 | TC1: Validar que las pestañas "Simple", "Accept", "Prevent Propogation" y "Revert Draggable" sean visibles , donde “Simple” se muestra de forma predeterminada', () => {
		//droppablePage.get.simpleTab().should('have.attr','true');
		droppablePage.get.simpleTab().should('be.visible');
		droppablePage.get.accceptTab().should('be.visible');
		droppablePage.get.preventPropogationTab().should('be.visible');
		droppablePage.get.revertableTab().should('be.visible');
		droppablePage.get.simpleTab().should('have.attr','aria-selected','true');
		droppablePage.get.accceptTab().should('have.attr','aria-selected','false');
		droppablePage.get.preventPropogationTab().should('have.attr','aria-selected','false');
		droppablePage.get.revertableTab().should('have.attr','aria-selected','false');
	});
	
});
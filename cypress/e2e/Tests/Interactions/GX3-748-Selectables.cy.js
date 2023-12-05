import { list } from '@pages/Interactions/GX3-748-selectables.Page';
const element = Cypress._.random(0, 3);
beforeEach('', () => {
	cy.visit('https://demoqa.com/selectable');
});
describe('GX3-748 | TS: ToolsQA | Interactions | Selectable', () => {
	it('749 | TC1: Validar que la lista sea visible y los elementos sean clickables', () => {
		cy.get(list.tabs.listTab).contains('List');
		list.selectListElement(element);
	});
	it('749 | TC3·: Validar que los elementos de la lista se pueden seleccionar', () => {
		cy.get(list.tabs.gridTab).contains('Grid').click();
		list.selectGridElement(element);
	});
});

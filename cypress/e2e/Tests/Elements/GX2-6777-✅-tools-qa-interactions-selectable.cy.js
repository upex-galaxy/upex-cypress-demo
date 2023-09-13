import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import { accSelect } from '@pages/Interactions/GX2-6777-selectable.page';

describe('GX2-6777-✅-tools-qa-interactions-selectable', () => {
	let data;
	beforeEach('Precondicion: Usuario debe estar situado en la pagina demoqa', () => {
		cy.visit('selectable');
		cy.url().should('contain', 'selectable');
		cy.fixture('data/GX2-6777-selectable').then(fixtureData => {
			data = fixtureData;
		});
	});
	it('6778 | TC1: Validar Las pestañas List y Grid deben mostrarse de forma predeterminada.', () => {
		accSelect.get.list().should('exist').and('be.visible');
		accSelect.get.grid().should('be.visible');
	});
	it('6778 | TC2: Validar La pestaña “List” debe estar abierta por defecto mostrando la lista de elementos contenidos.', () => {
		const itemListElements = accSelect.ItemList();
		itemListElements.each(($item, index) => {
			cy.wrap($item).should('contain', data.itemList[index]);
		});
	});
	it('6778 | TC3: Validar La pestaña “Grid” debe estar abierta por defecto mostrando la lista de elementos contenidos.', () => {
		accSelect.clickItemGrid();
		accSelect.get.grid().should('have.class', data.active);
		accSelect.showItemGrid();
		accSelect.get.itemGrid().each(items => {
			cy.wrap(items).should('have.class', data.active);
		});
	});
});

import { selectable } from '@pages/Interactions/GX3-1732-SelectablePage';
import data from '@data/GX3-1732-Selectable.json';

describe('GX3-1732: ToolsQA | Interactions | Selectable', () => {
	const visibleTab = (element, elementType) => {
		selectable.getElement(element, elementType).should('be.visible');
	};

	const statusElement = (element, elementType, status) => {
		selectable.getElement(element, elementType).should('have.attr', 'aria-selected', status);
	};

	beforeEach('User visit web site selectable', () => {
		cy.visit('https://demoqa.com/selectable');
		cy.url().should('contain', 'selectable');
	});

	it('1733 | TC1: Validar visualizar las pestañas “List” and "Gird"', () => {
		visibleTab(data.list.tab, 'TAB');
		visibleTab(data.grid.tab, 'TAB');
	});

	it('1733 | TC2: Validar que la pestaña "List" este seleccionada por defecto', () => {
		statusElement(data.list.tab, 'TAB', data.list.active);
		statusElement(data.grid.tab, 'TAB', data.grid.inactive);
	});
});

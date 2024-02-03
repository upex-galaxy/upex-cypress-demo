import { selectable } from '@pages/Interactions/GX3-1732-SelectablePage';
import data from '@data/GX3-1732-Selectable.json';

describe('GX3-1732: ToolsQA | Interactions | Selectable', () => {
	const visibleTab = (element, elementType) => {
		selectable.getElement(element, elementType).should('be.visible');
	};

	const statusTab = (element, elementType, status) => {
		selectable.getElement(element, elementType).should('have.attr', 'aria-selected', status);
	};

	const statusContentTab = (element, elementType, classAttribute) => {
		selectable.getElement(element, elementType).each($li => {
			cy.wrap($li).should(classAttribute, 'active');
		});
	};

	const checkColorAndFontOneItem = (element, elementType, itemrandom, color, font) => {
		selectable.getElement(element, elementType).contains(itemrandom).should('have.css', 'background-color', color).and('have.css', 'color', font);
	};

	const checkColorAndFontMultipleItem = (element, elementType, color, font) => {
		selectable.getElement(element, elementType).should('have.css', 'background-color', color).and('have.css', 'color', font);
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
		statusTab(data.list.tab, 'TAB', data.true);
		statusTab(data.grid.tab, 'TAB', data.false);
	});

	it('1733 | TC3: Validar que ningún elemento de pestaña "List" este seleccionado', () => {
		statusContentTab(data.list.content, 'CONTENT', 'not.have.class');
	});

	it('1733 | TC4: Validar seleccionar y deseleccionar un elemento de la pestaña "List"', () => {
		const ramdomItem = selectable.getRamdonItem(data.list.items);
		selectable.selectOneItemTab(data.list.content, ramdomItem);
		checkColorAndFontOneItem(data.list.content, 'CONTENT', ramdomItem, data.blue, data.White);
		selectable.selectOneItemTab(data.list.content, ramdomItem);
		checkColorAndFontOneItem(data.list.content, 'CONTENT', ramdomItem, data.White, data.black);
	});

	it('1733 | TC5: Validar seleccionar y deseleccionar varios elementos de la pestaña "List"', () => {
		selectable.selectMultipleItemTab(data.list.content);
		checkColorAndFontMultipleItem(data.list.content, 'CONTENT', data.blue, data.White);
		selectable.selectMultipleItemTab(data.list.content);
		checkColorAndFontMultipleItem(data.list.content, 'CONTENT', data.White, data.black);
	});

	it('1733 | TC6: Validar seleccionar y visualizar la pestana "Gird"', () => {
		selectable.clickTab(data.grid.tab);
		statusTab(data.grid.tab, 'TAB', data.true);
		statusTab(data.list.tab, 'TAB', data.false);
	});

	it('1733 | TC7: Validar que ningún elemento de la pestaña "Gird" este seleccionado', () => {
		selectable.clickTab(data.grid.tab);
		statusContentTab(data.grid.content, 'CONTENT', 'not.have.class');
	});

	it('1733 | TC8: Validar seleccionar y deseleccionar un elemento de la pestaña "Gird"', () => {
		selectable.clickTab(data.grid.tab);
		const ramdomItem = selectable.getRamdonItem(data.grid.items);
		selectable.selectOneItemTab(data.grid.content, ramdomItem);
		checkColorAndFontOneItem(data.grid.content, 'CONTENT', ramdomItem, data.blue, data.White);
		selectable.selectOneItemTab(data.grid.content, ramdomItem);
		checkColorAndFontOneItem(data.grid.content, 'CONTENT', ramdomItem, data.White, data.black);
	});

	it('1733 | TC9: Validar seleccionar y deseleccionar varios elementos de la pestaña "Gird"', () => {
		selectable.clickTab(data.grid.tab);
		selectable.selectMultipleItemTab(data.grid.content);
		checkColorAndFontMultipleItem(data.grid.content, 'CONTENT', data.blue, data.White);
		selectable.selectMultipleItemTab(data.grid.content);
		checkColorAndFontMultipleItem(data.grid.content, 'CONTENT', data.White, data.black);
	});
});

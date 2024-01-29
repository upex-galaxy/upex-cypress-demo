import { selectablePage } from '@pages/Interactions/GX3-1765-Selectable.page';
import data from '@data/GX3-1765-Selectable.json';

describe('ToolsQA | Interactions | Selectable', () => {
	const checkColor = (randomItem, container, color) => {
		selectablePage.get[container]().contains(randomItem).should('have.css', 'background-color', color);
	};
	const checkColorMultipleItems = (container, color) => {
		selectablePage.get[container]().should('have.css', 'background-color', color);
	};
	const tabIsSelected = (tab, boolean) => {
		selectablePage.get[tab]().should('be.visible').and('have.attr', 'aria-selected', boolean);
	};

	beforeEach('Go to Demo QA Web, Selectable section', () => {
		cy.visit('selectable');
		cy.url().should('contain', data.selectableEndpoint);
	});

	it('1766 | TC2: “Check that the "List" tab is opened by default and its content is visible”.', () => {
		tabIsSelected(data.listTab, data.visible);
		tabIsSelected(data.gridTab, data.notVisible);
		selectablePage.get.listContainer().each((li, index) => {
			cy.wrap(li).should('be.visible').and('have.text', data.list[index]);
		});
	});

	it('1766 | TC3: “Check that one item on the "List" tab can be selected and deselected”.', () => {
		const randomIndex = Math.floor(Math.random() * data.list.length);
		const randomItem = data.list[randomIndex];
		selectablePage.selectOneItem(randomItem, data.listContainer);
		checkColor(randomItem, data.listContainer, data.blueColor);
		selectablePage.selectOneItem(randomItem, data.listContainer);
		checkColor(randomItem, data.listContainer, data.whiteColor);
	});

	it('1766 | TC4: “Check that multiple items on "List" tab can be selected and deselected”.', () => {
		selectablePage.selectMultipleItems(data.listContainer);
		checkColorMultipleItems(data.listContainer, data.blueColor);
		selectablePage.selectMultipleItems(data.listContainer);
		checkColorMultipleItems(data.listContainer, data.whiteColor);
	});

	it('1766 | TC5: “Check that one item on the "Grid" tab can be selected and deselected”. ', () => {
		selectablePage.clickGridTab();
		tabIsSelected(data.gridTab, data.visible);
		tabIsSelected(data.listTab, data.notVisible);
		const randomIndex = Math.floor(Math.random() * data.grid.length);
		const randomItem = data.grid[randomIndex];
		selectablePage.selectOneItem(randomItem, data.gridContainer);
		checkColor(randomItem, data.gridContainer, data.blueColor);

		selectablePage.selectOneItem(randomItem, data.gridContainer);
		checkColor(randomItem, data.gridContainer, data.whiteColor);
	});

	it('1766 | TC6: “Check that multiple items on "Grid" tab can be selected and deselected”.', () => {
		selectablePage.clickGridTab();

		selectablePage.selectMultipleItems(data.gridContainer);
		checkColorMultipleItems(data.gridContainer, data.blueColor);

		selectablePage.selectMultipleItems(data.gridContainer);
		checkColorMultipleItems(data.gridContainer, data.whiteColor);
	});
});

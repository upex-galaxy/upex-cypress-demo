import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

import { selectable } from '@pages/Interactions/GX2-5914-Selectable.Page';

describe('US GX2-5914 | TS: ✅✅ToolsQA | Interactions | Selectable', () => {
	beforeEach('user is on Selectable page in DemoQA site', () => {
		selectable.get.endpoint();
	});
	// it('5915 | TC01: Validate tabs “List” and “Grid” must be showing and tab “List” must be opened by default', () => {
	// 	selectable.get.tabList().should('exist').and('be.visible').and('have.attr', 'aria-selected', 'true');
	// 	selectable.get.tabGrid().should('exist').and('be.visible').and('have.attr', 'aria-selected', 'false');
	// });
	it('5915 | TC02: Validate “Selectable List” is displaying and working as expected', () => {
		//POSTCONDICION
		selectable.selectTabList();
		selectable.get.tabList().should('have.attr', 'aria-selected', 'true');
		//TEST
		selectable.get.listItem().should('have.length', 4);
		selectable.get.listItem().eq(0).should('have.text', 'Cras justo odio').and('not.have.class', 'active');
		selectable.get.listItem().eq(1).should('have.text', 'Dapibus ac facilisis in').and('not.have.class', 'active');
		selectable.get.listItem().eq(2).should('have.text', 'Morbi leo risus').and('not.have.class', 'active');
		selectable.get.listItem().eq(3).should('have.text', 'Porta ac consectetur ac').and('not.have.class', 'active');

		function RandomItem(min, max) {
			min = Math.ceil(0);
			max = Math.floor(3);
			return Math.floor(Math.random() * (max - min + 1) + min);
		}

		selectable.get
			.listItem()
			.eq(RandomItem())
			.click()
			.should('have.class', 'active')
			.and('have.css', 'background-color', 'rgb(0, 123, 255)')
			.click()
			.should('not.have.class', 'active')
			.and('have.css', 'background-color', 'rgb(255, 255, 255)');
	});
	it('5915 | TC03: Validate “Selectable Grid” is displaying and working as expected', () => {
		//POSTCONDICION
		selectable.selectTabGrid();
		selectable.get.tabGrid().should('have.attr', 'aria-selected', 'true');
		//TEST
		//selectable.get.gridContainer().should('have.css', 'display', 'grid');
		selectable.get.gridItem().should('have.length', 9);
		selectable.get.gridItem().eq(0).should('have.text', 'One').and('not.have.class', 'active');
		selectable.get.gridItem().eq(1).should('have.text', 'Two').and('not.have.class', 'active');
		selectable.get.gridItem().eq(2).should('have.text', 'Three').and('not.have.class', 'active');
		selectable.get.gridItem().eq(3).should('have.text', 'Four').and('not.have.class', 'active');
		selectable.get.gridItem().eq(4).should('have.text', 'Five').and('not.have.class', 'active');
		selectable.get.gridItem().eq(5).should('have.text', 'Six').and('not.have.class', 'active');
		selectable.get.gridItem().eq(6).should('have.text', 'Seven').and('not.have.class', 'active');
		selectable.get.gridItem().eq(7).should('have.text', 'Eight').and('not.have.class', 'active');
		selectable.get.gridItem().eq(8).should('have.text', 'Nine').and('not.have.class', 'active');

		function RandomItem(min, max) {
			min = Math.ceil(0);
			max = Math.floor(8);
			return Math.floor(Math.random() * (max - min + 1) + min);
		}
		selectable.get
			.gridItem()
			.eq(RandomItem())
			.click()
			.should('have.class', 'active')
			.and('have.css', 'background-color', 'rgb(0, 123, 255)')
			.click()
			.should('not.have.class', 'active')
			.and('have.css', 'background-color', 'rgb(255, 255, 255)');
	});
});

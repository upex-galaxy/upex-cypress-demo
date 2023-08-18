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
		selectable.get.listItem()[0].should('have.text', 'Cras justo odio');

		// selectable.get.listItem()[1].should('have.text', 'Dapibus ac facilisis in');
		// selectable.get.listItem()[2].should('have.text', 'Morbi leo risus');
		// selectable.get.listItem()[3].should('have.text', 'Porta ac consectetur ac');
	});
});

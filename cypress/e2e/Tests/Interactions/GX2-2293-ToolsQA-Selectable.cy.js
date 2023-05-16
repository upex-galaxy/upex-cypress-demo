import { selectable } from '@pages/Selectable';

describe('GX2-2993 | ToolsQA-Selectable', () => {
	beforeEach('Precondition', () => {
		cy.visit('/selectable');
		cy.fixture('/data/fixtureSelectable').then(fixt => {
			fixture = fixt;
		});
	});

	it(' TC1: Validate “list” tab and “grid” tab are displayed when selectable page is lunched', () => {
		selectable.get.tabList();
		selectable.get.tabGrid();

		selectable.get.tabList().should('be.visible');
		selectable.get.tabGrid().should('be.visible');
	});

	it('TC2: Validate tab “List” is opened by default showing the contained list of items', () => {
		selectable.get.tabList();

		selectable.get.tabList().invoke('attr', fixture.tabSelected).should('equal', 'true');
		selectable.get.tabGrid().invoke('attr', fixture.tabSelected).should('equal', 'false');
	});

	it('TC3: Validate default “List” items are displayed and unselected', () => {
		selectable.validateItemList();

		selectable.get.cras().should('be.visible').and('have.class', fixture.classUnselected);
		selectable.get.dapibus().should('be.visible').and('have.class', fixture.classUnselected);
		selectable.get.morbi().should('be.visible').and('have.class', fixture.classUnselected);
		selectable.get.porta().should('be.visible').and('have.class', fixture.classUnselected);
	});

	it('TC4: Validate any “list“ item can be selected when is clicked', () => {
		selectable.get.tabList();
		selectable.selectRandomList();

		cy.readFile('../../fixtures/data/selectable.json').then(the => {
			selectable.get.listContainer().eq(the.varRandom).should('have.css', 'background-color', 'rgb(0, 123, 255)');
			selectable.get.listContainer().eq(the.varRandom).should('have.class', fixture.classSelected);
		});
	});

	it('TC5: Validate any item selected can be deselected when is clicked', () => {
		selectable.get.tabList();
		selectable.selectAndUnselectRandomList();

		cy.readFile('../../fixtures/data/selectable.json').then(the => {
			selectable.get.listContainer().eq(the.varRandom).should('have.class', fixture.classUnselected);
		});
	});

	it('TC6: Validate tab “Grid” opens when it is clicked', () => {
		selectable.selectTabGrid();

		selectable.get.tabGrid().should('have.attr', 'aria-selected', 'true');
	});

	it('TC7: Validate default “Grid” items are displayed and unselected', () => {
		selectable.validateItemGrid();

		cy.readFile('../../fixtures/data/selectable.json').then($the => {
			selectable.get.gridContainer().then($gridItems => {
				$gridItems.each((index, $gridItems) => {
					cy.wrap($gridItems).invoke('text').should('equal', `${$the[index]}`);
					cy.wrap($gridItems).should('have.class', fixture.classGridUnselected);
				});
			});
		});
	});

	it('TC8: Validate default “Grid” items are displayed in 3x3 grid', () => {
		selectable.get.rowsGrid();
		selectable.get.rowsGrid().should('have.lengthOf', 3);
		selectable.get.rowOne();
		selectable.get.rowOne().should('have.lengthOf', 3);
		selectable.get.rowTwo();
		selectable.get.rowTwo().should('have.lengthOf', 3);
		selectable.get.rowThree();
		selectable.get.rowThree().should('have.lengthOf', 3);
	});

	it('TC9: Validate any “Grid“ item can be selected when is clicked', () => {
		selectable.clickTabGrid();
		selectable.selectRandomGrid();

		cy.readFile('../../fixtures/data/selectable.json').then(the => {
			selectable.get.gridContainer().eq(the.varRandom).should('have.css', 'background-color', 'rgb(0, 123, 255)');
			selectable.get.gridContainer().eq(the.varRandom).should('have.class', fixture.classGridSelected);
		});
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

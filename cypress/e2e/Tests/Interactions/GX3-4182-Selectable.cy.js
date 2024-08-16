import { selectablePage } from '../../../support/pages/GX3-4182-Selectable.Page';
describe('GX3-4183 | TS: ToolsQA | Interactions | Selectable', () => {
	beforeEach('User have to be positioned in the DemoQA page', () => {
		cy.visit('https://demoqa.com/selectable');
		cy.url().should('include', 'selectable');
		cy.window().then(win => {
			win.sessionStorage.clear();
			win.localStorage.clear();
		});
		cy.clearCookies();
		cy.clearLocalStorage();
	});
	it('GX3-4183 | TC1: Validate select an element of the tab “List”', () => {
		selectablePage.selectRandomListItem().then($selectedItem => {
			cy.wrap($selectedItem).should('have.class', 'active');
		});
	});
	it('GX3-4183 | TC2: Validate deselect an element of the tab “List"', () => {
		selectablePage.selectRandomListItem();
		selectablePage.deselectListItem().then($selectedItem => {
			cy.wrap($selectedItem).should('not.have.class', 'active');
		});
	});
	it('GX3-4183 | TC3: Validate select an element of the tab “Grid”', () => {
		cy.log('Starting TC3');
		cy.get('#demo-tab-grid').click();
		selectablePage.selectRandomGridItem().then($selectedGridItem => {
			cy.wrap($selectedGridItem).should('have.class', 'active');
		});
	});
	it('GX3-4183 | TC4: Validate deselect an element of the tab “Grid”', () => {
		cy.log('Starting TC4');
		selectablePage.selectGridButton();
		selectablePage.selectRandomGridItem();
		selectablePage.deselectGridItem().then($selectedGridItem => {
			cy.wrap($selectedGridItem).should('not.have.class', 'active');
		});
	});
});

import { selectablePage } from '../../../support/pages/GX3-4182-Selectable.Page';
describe ('GX3-4183 | TS: ToolsQA | Interactions | Selectable',() =>
{
	beforeEach ('User have to be positioned in the DemoQA page', () =>
	{
		cy.visit('https://demoqa.com/selectable');
		cy.url('https://demoqa.com/text-box').should('contain', '/selectable');
	});
	it('TC1: Validate select an element of the tab “List”', () =>
	{
		selectablePage.selectRandomListItem().then($selectedItem => {
			cy.wrap($selectedItem)
				.should('have.css', 'background-color', 'rgb(0, 123, 255)')
				.and('have.class', 'active');
		});
	});
	it('TC2: Validate deselect an element of the tab “List"', () =>
	{
		selectablePage.deselectListItem().then($selectedItem => {
			cy.wrap($selectedItem)
				.should('have.css', 'background-color', 'rgb(255, 255, 255)')
				.and('not.have.class', 'active');
		});
	});
	it('TC3: Validate select an element of the tab “Grid”', () =>
	{
		selectablePage.selectGridTab().then($selectedGridButton => {
			cy.wrap($selectedGridButton)
				.should('have.css', 'background-color', 'rgb(255, 255, 255)');
		});
		selectablePage.selectRandomGridItem().then($selectedGridItem => {
			cy.wrap($selectedGridItem)
				.should('have.css', 'background-color', 'rgb(0, 123, 255)')
				.and('have.class', 'active');
		});
	});
	it('TC4: Validate deselect an element of the tab “Grid”', () =>
	{
		selectablePage.deselectListItem().then($selectedItem => {
			cy.wrap($selectedItem)
				.should('have.css', 'background-color', 'rgb(255, 255, 255)')
				.and('not.have.class', 'active');
		});
	});
});
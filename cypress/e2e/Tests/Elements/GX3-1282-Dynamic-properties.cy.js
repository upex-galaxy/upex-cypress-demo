import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('US GX3-1282| ToolsQA | Elements | Dynamic Properties', () => {
	beforeEach('User visit web dynamic properties', () => {
		cy.visit('https://demoqa.com/dynamic-properties');
		cy.url().should('contain', 'dynamic-properties');
	});

	it('1283 | TC1: Validate being able to get item with Dymanic ID', () => {
		cy.get('p').should('contain', 'This text has random Id');
	});

	it('1283 | TC2: Validate that the item changes state to enabled after 5 seconds', () => {
		cy.get('#enableAfter').should('be.disabled');
		cy.get('#enableAfter', { timeout: 5000 }).should('be.enabled');
	});

	it('1283 | TC3: Validate that the color changes after 5 seconds', () => {
		cy.get('#colorChange', { timeout: 5000 }).should('have.css', 'color', 'rgb(220, 53, 69)');
	});

	it('1283 | TC4: Validate that the button is visible after 5 seconds', () => {
		cy.get('#visibleAfter').should('not.exist');
		cy.get('#visibleAfter', { timeout: 5000 }).should('be.visible');
	});
});

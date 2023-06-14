import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('✅ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('User must navigate to the required endpoint', () => {
		cy.visit('https://demoqa.com/radio-button');
		cy.url().should('contain', 'radio-button');
	});

	it('TC 1: Validate Radio Button "Yes" can be selected', () => {
		cy.get('#yesRadio').click({ force: true });
		cy.get('.mt-3').should('contain', 'Yes');
	});

	it('TC 2: Validate Radio Button "Impressive" can be selected', () => {
		cy.get('#impressiveRadio').click({ force: true });
		cy.get('.mt-3').should('contain', 'Impressive');
	});

	it('TC 3: Validate Radio Button "No" is disabled', () => {
		cy.get('#noRadio').should('be.disabled');
	});
});

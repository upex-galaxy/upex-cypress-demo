import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

// test set:
describe('Elements | ToolsQA | RadioButtons', () => {
	//precondiciones:
	beforeEach('PRC: User must be logged in radioButton endpoint', () => {
		cy.visit('https://demoqa.com/radio-button');
	});
	//test case
	it('TC1: Validate visualize log message "you have selected yes" when select "yes"', () => {
		cy.get('#yesRadio').click({ force: true });
		cy.get('.mt-3').should('have.text', 'You have selected Yes');
	});

	it('TC2: Validate visualize log message "you have selected impressive" when select "impressive"', () => {
		cy.get('#impressiveRadio').click({ force: true });
		cy.get('.mt-3').should('have.text', 'You have selected Impressive');
	});

	it('TC3: Validate Radio Button "no" is disabled', () => {
		cy.get('#noRadio').should('be.disabled');
	});
});

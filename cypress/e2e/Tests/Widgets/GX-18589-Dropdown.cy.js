import { removeLogs } from '@helper/RemoveLogs';

removeLogs();

describe('ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('User must be sited in select-menu endpoint of ToolsQA', () => {
		cy.visit('https://demoqa.com/select-menu');
	});

	it('18590 | TC: 1 Validate select one option when clicking the Select Value dropdown', () => {
		cy.get('#withOptGroup').click();
		cy.get('#react-select-2-option-0-0').click({ force: true });
		cy.contains('Group 1, option 1');
	});

	it('18590 | TC: 2 Validate select one option when clicking the Select One dropdown.', () => {
		cy.get('#react-select-3-input').click({ force: true });
		cy.get('#react-select-3-option-0-0').click();
		cy.contains('Dr.');
	});

	it('18590 | TC: 3 Validate select one option when clicking the Old Style Select Menu dropdown', () => {
		cy.get('#oldSelectMenu').select((value = '1'));
		cy.contains('Blue');
	});

	it('18590 | TC: 4 Validate select the 4 options at the same time when clicking the Multiselect drop down', () => {
		cy.get('#react-select-4-input').click({ force: true });
		cy.get('.css-1hwfws3').should('be.visible');
		cy.get('#react-select-4-option-0').click();
		cy.get('#react-select-4-option-1').click();
		cy.get('#react-select-4-option-2').click();
		cy.get('#react-select-4-option-3').click();
		cy.get('.css-1rhbuit-multiValue').should('have.text', 'GreenBlueBlackRed');
	});

	it('18590 | TC: 5 Validate select the 4 options at the same time when clicking the Standard multi select.', () => {
		cy.get('#cars').select('Volvo');
		cy.get('#cars').select('Saab');
		cy.get('#cars').select('Opel');
		cy.get('#cars').select('Audi');
	});
});

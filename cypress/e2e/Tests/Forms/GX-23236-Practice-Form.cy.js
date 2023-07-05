import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('GX-23236-✅-tools-qa-forms-practice-form', () => {
	beforeEach('user is located in the Sut', () => {
		cy.visit('/automation-practice-form');
	});
	it('prueba de fecha', () => {
		cy.get('#dateOfBirthInput').click();
		cy.get('[class$="month-select"]').select(1);
		cy.get('[class$="year-select"]').select('1990');
		cy.get('[class^="react-datepicker__day react-datepicker__day"]:not([class$="outside-month"])').contains(28).click();
	});
});

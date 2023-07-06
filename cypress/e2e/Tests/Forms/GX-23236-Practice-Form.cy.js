import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

import { FillForm } from '@pages/Forms/GX-23236-Practice-Form.Page';

describe('GX-23236-✅-tools-qa-forms-practice-form', () => {
	beforeEach('user is located in the Sut', () => {
		cy.visit('/automation-practice-form');
	});
	it('Testeo de selectores', () => {
		cy.get('div[class^="custom-control"]').eq(1).click();
		cy.get('#dateOfBirthInput').click();
		cy.get('[class$="month-select"]').select(1);
		cy.get('[class$="year-select"]').select('1990');
		cy.get('[class^="react-datepicker__day react-datepicker__day"]:not([class$="outside-month"])').contains(28).click();
		cy.get('#state').click();
		cy.get('[class$="-option"]').select(3, { force: true });
	});
});

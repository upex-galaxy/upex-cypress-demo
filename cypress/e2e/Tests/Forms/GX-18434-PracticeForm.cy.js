import { practiceForm } from '@pages/Forms/PracticeRegistrationUtils.Page';
const pForm = Cypress.env('endpoint').practiceForm;
describe('GX-18434-ToolsQA | Forms | Practice Form', () => {
	beforeEach('PRC: Be in Registration Form', () => {
		cy.visit(pForm);
		cy.url().should('contain', pForm);
	});
	it('This is your test case two title', () => {
		practiceForm.insideForm(1);
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import { form } from '/L1-cypex-demo/cypress/fixtures/data/GX-23427-PracticeForm.Page.json';
const { practiceForm } = Cypress.env('endpoint');

describe('US GX-23427 | ToolsQA | Forms | Practice Form', () => {
	beforeEach('PRC: Usuario debe ubicarse en Practice Form', () => {
		cy.visit('/');
		cy.url().should('contain', practiceForm);
	});

	it('23428 | TC01: Validar ', () => {
		cy.get();
	});

	it('23428 | TC02: Validar ', () => {
		cy.get();
	});

	it('23428 | TC03: Validar ', () => {
		cy.get();
	});

	it('23428 | TC04: Validar ', () => {
		cy.get();
	});

	it('23428 | TC05: Validar ', () => {
		cy.get();
	});

	it('23428 | TC06: Validar ', () => {
		cy.get();
	});

	it('23428 | TC07: Validar ', () => {
		cy.get();
	});
});

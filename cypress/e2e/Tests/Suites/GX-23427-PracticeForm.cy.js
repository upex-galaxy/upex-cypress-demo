import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('US GX-23427 | ToolsQA | Forms | Practice Form', () => {
	beforeEach('PRC: Usuario debe ubicarse en Practice Form', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain', 'practice-form');
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

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

import { Selected } from '@pages/Elements/GX2-4771-CheckBox.Page';

describe('GX2-4771-✅-tools-qa-elements-check-box', () => {
	beforeEach('precondition', () => {
		cy.visit('/checkbox');
	});
	it('prueba', () => {
		Selected.get.ButtonExpandAll().click();
		//cy.get('[class="rct-collapse rct-collapse-btn"]').eq(0).click();
		//cy.get('').should('have.class', 'rct-node-expanded');
	});
});

import { removeLogs } from '@helper/RemoveLogs';
import { brokenL } from '@pages/Elements/GX-23722-BrokenLinks';
describe('ToolsQA | Elements | Broken Links Images', () => {
	beforeEach('Usuario debe estar en la website', () => {
		cy.visit('/broken');
	});

	it('GX-23722 | TC1: Validar las propiedades de imagen valida', () => {
		brokenL.get.ValidImage().should('to.exist').and('have.prop', 'width', 347).and('have.prop', 'height', 100);
	});
});

removeLogs();

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import data from '@data/GX-30150-RadioButtons.json';
import { ButtonsSelected } from '@pages/Elements/GX-30150-RadioButtons.Page';

//* Test Set
describe('ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('Usuario se encuentra en el site web radio buttons', () => {
		cy.visit(data.endPoint);
		cy.url().should('contain', data.endPoint);
	});
	it('30151 | TC01: Validar que el RB “Yes” pueda ser seleccionado', () => {
		ButtonsSelected.ClickOnYesButtons();
		ButtonsSelected.get
			.Response()
			.should('be.visible')
			.and('contain.text', data.Response + data.Buttons.Yes);
	});
	it('30151 | TC02: Validar que el RB “Impressive” pueda ser seleccionado', () => {
		ButtonsSelected.ClickOnImpressiveButton();
		cy.contains(data.Response).children().should('be.visible').and('contain.text', data.Buttons.Impressive);
	});
	it('30151 | TC03: Validar que el RB “No” no puede ser seleccionado', () => {
		ButtonsSelected.get.NoButton().should('be.disabled');
		ButtonsSelected.get.Response().should('not.exist');
	});
});

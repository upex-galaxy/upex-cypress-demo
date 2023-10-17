describe('GX-38056 | TS: ✅ToolsQA | Elements | Buttons', () => {
	beforeEach('Estar en la pagina DemoQA', () => {
		cy.visit('/buttons', { timeout: 30000 });
	});
	it('38057 | TC1: Validar que salga un mensaje al hacer click en "ClickMe" Buttom', () => {
		ButtonsPage.get.inputClickMe().click();
		ButtonsPage.get.MessageClickMe().should('have.text', 'You have done a dynamic click');
	});
	it(' 38057 | TC2:Validar que salga un mensaje al hacer click en “Right ClickMe” Buttom', () => {
		ButtonsPage.get.inputRightClickMe().rightclick();
		ButtonsPage.get.MessageRightClickMe().should('have.text', 'You have done a right click');
	});
	it('38057 | TC3: Validar que salga un mensaje al hacer click en "Double ClickMe” Buttom', () => {
		ButtonsPage.get.inputDoubleClickMe().dblclick();
		ButtonsPage.get.MessageDoubleClickMe().should('have.text', 'You have done a double click');
	});
});
import { removeLogs } from '@helper/RemoveLogs';
import { ButtonsPage } from '@pages/Elements/GX-38056-Buttons.page';
removeLogs();

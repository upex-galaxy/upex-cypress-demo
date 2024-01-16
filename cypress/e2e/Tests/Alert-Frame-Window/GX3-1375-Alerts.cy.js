import { alertPage } from '@pages/Alert-Frame-Window/GX3-1375-Alerts';
import data from '@data/GX3-1375-Alert.json';
describe('ToolsQA | Alert-Frame-Window | Alerts', () => {
	beforeEach(() => {
		cy.visit('/alerts');
		cy.url().should('include', data.enpoint);
	});
	it('1376 | TC1: Validar mensaje de alerta del primer botton "Click me" cuando es clickeado', () => {
		alertPage.clickFirtsButtonClickMe();
		alertPage.windowAlert({ expectedMsj: data.AlertMsj1 });
	});
});

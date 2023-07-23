import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
Cypress._.random(0, 5);
 

describe('25499 | TS: | Widgets | Dropdown - Select Menu', () => {
	beforeEach('visitar la página de Demo QA', () => {
		cy.visit('https://demoqa.com/select-menu');
	});
	it('25499| TC1: Validar poder seleccionar una opcion del desplegable "Select Value."', () => {
		cy.get('[class$=indicatorContainer]').eq(0).click();
		cy.get('[id^="react-select-2-option"]').eq(Cypress._.random(0, 5)).click();
	});
	it('25499| TC2: Validar poder seleccionar una opcion del desplegable "Select One."', () => {
		cy.get('[class$=indicatorContainer]').eq(1).click();
		cy.get('[id^="react-select-3-option"]').eq(Cypress._.random(0, 5)).click();
	});
	
	
});
